---
title: Fluxo bidirecional no reactjs com useImperativeHandle
description: como expor uma função de um componente child para o componente owner no reactjs
category: react
background: "#F46819"
date: 2022-04-07 09:36:05
---
Olá 👋

Hoje vamos falar de fluxos unidirecional e bidirecional no React. Por padrão, no React, os dados fluem de uma maneira: do *owner* para o *child*, ou seja, no fluxo unidirecional , mas por vezes precisamos acessar determinada função ou realizar uma mudança de estado em um componente *child* pelo componente *owner*, isto é, de forma bidirecional, expondo um dado do componente inferior para o superior.

![fluxo bidirecional de dados dos componentes react. Componente owner passando uma propriedade ref para o componente child](https://raw.githubusercontent.com/rwietter/rwietter.dev/master/static/bidirecional.png)

Para resolver isso, podemos elevar o estado (*Lifting State Up*) de um componente *child* para um componente *owner* que irá conter a lógica do componente *child*. Outra forma é utilizar a *Context API* ou outro gerenciador de estado global para compartilhamento de estado.  Mas, também podemos expor uma uma função ou estado para o componente *owner* por meio do *hook* `useImperativeHandle` e o *hook* `useRef` passando a referência da propriedade para o componente *owner*. Vamos ver como isso funciona.

Conforme a documentação do React diz sobre o *hook* `useImperativeHandle`:

> O *hook* `useImperativeHandle` personaliza o valor da instância que está exposta aos componentes *owner* ao usar `ref`. Como sempre, na maioria dos casos, seria bom evitar um código imperativo usando refs.

E sobre o *hook* `useRef`:

> `useRef` retorna um objeto `ref` mutável, no qual a propriedade `current` é inicializada para o argumento passado (`initialValue`). O objeto retornado persistirá durante todo o ciclo de vida do componente.

Ou seja, o *hook* `useRef` cria um objeto mutável que recebe um valor inicial no qual podemos mudar durante o ciclo de vida do componente, já o *hook*  `useImperativeHandle` vai nos ajudar a expor nossa propriedade para o componente superior de forma imperativa utilizando essa referência.

Vamos começar criando um *app* com o *framework* *Nextjs*. Rode no seu terminal os comandos abaixo para criar o projeto, em seguida entre no diretório e execute a aplicação.

```shell
# crie o projeto
yarn create next-app --typescript

# entre no diretória criado
cd my-app

# compila e executa o projeto em localhost
yarn dev

# abra no navegador o endereço http://localhost:3000
```

Projeto criado! Agora, vamos até o `index.tsx` em `/pages/index.tsx` e vamos remover o código desnecessário, deixe como no exemplo abaixo.

```tsx
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
 
    </div>
  )
}

export default Home
```

Vamos criar nosso componente `Modal`. Crie um diretório `components` na raiz do projeto e dentro dele um diretório `modal` e crie um arquivo `index.tsx`. Dentro do componente modal adicione uma `label` e um `input` com a lógica de abrir o modal quando o estado for verdadeiro (*Short Circuit Evaluation*).

```tsx
// components/modal/index.tsx
import { useState } from "react";

const Modal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      {isModalOpen && (
        <div>
          <label htmlFor="nome">Qual o seu nome ?</label>
          <input name="nome" />
        </div>
      )}
    </>
  );
};

export default Modal;
```

Vamos importar o `Modal` no componente `Home` e adicionar um botão logo abaixo que vai disparar um evento ao receber um `click`. Esse evento precisa mudar o estado do modal para `true` para que seja exibido em tela. Logo, precisamos referenciar a função que troca o estado do modal para o componente `Home`.

```tsx
import type { NextPage } from 'next'
import Modal from '../components/modal'

const Home: NextPage = () => {
  return (
    <main>
      <Modal />
      <button onClick={() => {}} className="open-modal-button">
        Open Modal
      </button>
    </main>
  )
}

export default Home
```

Antes vamos adicionar um estilo ao modal. Crie um arquivo de estilo `styles/modal.css`, esse estilo irá posicionar o modal sobre os outros elementos, centralizar seus componentes e adicionar uma largura e altura.

```css
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  max-width: 30rem;
  width: 100%;
  max-height: 15rem;
  height: 100%;
  border-radius: 6px;
  animation: zoomIn 500ms both;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #ffffff;
}

.modal input {
  border: none;
  padding: 0.6rem 1rem;
  outline: none;
  margin: 1rem 0;
}

.modal button {
  border: none;
  padding: 0.5rem 3rem;
  background: #ffffff;
  cursor: pointer;
  border-radius: 6px;
  color: #111111;
}

.open-modal-button {
  border: none;
  padding: 1rem 3rem;
  background: #8c4bff;
  cursor: pointer;
  transition: background 0.3s ease;
  border-radius: 6px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
}

.open-modal-button:hover {
  background: #9e68fc;
}
```

Vamos até o estilo `global.css` para adicionar esse código que irá por o conteúdo no centro da página.

```css
/* styles/global.css */

/* ... */
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

Agora basta importar o arquivo `modal.css`em `pages/_app.tsx`. Dessa forma o estilo já será aplicado ao nosso componente `Modal`.

```dart
// pages/_app.tsx
import '../styles/globals.css'
import '../styles/modal.css'

// ...
```

Agora precisamos fazer o fluxo inverso, vamos referenciar a função que vai alterar o estado para que o componente *owner* possa acessar. No modal precisamos receber a referência que será criada no componente *owner*, essa referência é obtida como segundo parâmetro, também vamos "*tipar*" nossos parâmetros com *generic types*.  Também, vamos expor a função `handleOpenModal` com o *hook* `useImperativeHandle`, como primeiro argumento ele recebe a referência criada no *owner*, como segundo argumento uma *callback* que irá retornar um objeto com nossa função que queremos acessar pela referência criada no *owner*. Por fim, vamos exportar o componente como argumento da função `forwardRef`, essa função irá encaminhar a referência ao componente *owner*.

```tsx
import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useImperativeHandle,
  useState,
} from "react";

interface ModalProps {
  children?: ReactNode;
}

const Modal: ForwardRefRenderFunction<ModalRef, ModalProps> = (props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen((state) => !state);
  
  useImperativeHandle(ref, () => ({
    handleOpenModal,
  }));

  return (
    /* ... */
  )
}

export default forwardRef(Modal);
```

Agora, no componente `Home`, precisamos criar a `ref` e repassar para o componente modal.  Utilizamos o *hook* `useRef` para criar uma `ref` e passamos como *generic type* a interface `ModalRef` que específica a função que iremos referenciar. Exporte essa interface e importe no componente Modal, pois precisamos adicionar o *type* que recebemos como atributo do componente. 

```tsx
export interface ModalRef {
  handleOpenModal: () => void;
}

const Home: NextPage = () => {
  const modalRef = useRef<ModalRef>(null);

  return (
    <>
      <Modal ref={modalRef} />
      <button onClick={() => {}}>Open Modal</button>
    </>
  )
}

export default Home
```

Ainda no componente `Home`, só precisamos criar uma função que irá receber a referência da função do `Modal` e repassar para a propriedade `onClick`. Feito isso, já iremos ter o modal funcional. 

```tsx
// ...
const Home: NextPage = () => {
  const modalRef = useRef<ModalRef>(null);
  const handleOpenModal = () => modalRef.current?.handleOpenModal();

  return (
    <>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open Modal</button>
    </>
  )
}

// ...
```

Para finalizar, vamos adicionar um botão de `close` no modal para fechar quando estiver aberto. 

```tsx{6}
// ...
  return (
    <>
      {isModalOpen && (
        <div className="modal">
          {/* ... */}
          <button onClick={handleOpenModal}>Close</button>
        </div>
      )}
    </>
  );
// ...
```

### Conclusão

Essa é uma forma simples de alterar um estado quando não podemos ou não queremos criar a lógica de uma funcionalidade em um componente que não precisa saber dessa funcionalidade ou não queremos utilizar um gerenciador de estado.  Não é muito comum, nem recomendável utilizar código imperativo, mas quando necessário pode ser muito útil :)

Até mais ⚛ 👋

- - -

### Referências

* [Hook useImperativeHandle](https://pt-br.reactjs.org/docs/hooks-reference.html#useimperativehandle)
* [Hook useRef](https://pt-br.reactjs.org/docs/hooks-reference.html#useref)
* [ForwardRef](https://pt-br.reactjs.org/docs/react-api.html#reactforwardref)
* [Repositório do projeto](https://github.com/rwietter/blog-posts/tree/main/my-app)