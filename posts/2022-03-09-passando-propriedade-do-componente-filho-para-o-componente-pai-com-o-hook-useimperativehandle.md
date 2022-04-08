---
title: Como expor um função do componente filho para o componente pai sem
  utilizar estados
description: Elevando uma propriedade do componente filho para o componente pai
category: react
background: "#F46819"
date: 2022-04-07 09:36:05
---
Vamos supor um problema. Você tem um componente Modal com a lógica de abrir e fechar o modal dentro do próprio componente, mas precisa que a função de abrir o modal seja utilizada em um botão em outro componente da aplicação que fica no mesmo nível ou em um nível superior.

Para resolver isso há algumas formas, por exemplo, pode-se elevar o estado (Lifting State Up) do Modal para um componente pai do Modal e de outro componente como um Header que terá acesso ao estado. Outra forma é utilizar a Context API ou outro gerenciador de estado global para compartilhar a função.  Além disso, podemos compartilhar uma propriedade para o componente pai por meio do hook `useImperativeHandle` e o hook `useRef` passando a referência da propriedade para outro componente.

Conforme a documentação do React diz sobre o hook `useImperativeHandle`:

> `O useImperativeHandle` personaliza o valor da instância que está exposta aos componentes pai ao usar `ref`. Como sempre, na maioria dos casos, seria bom evitar um código imperativo usando refs.

E sobre o hook `useRef`:

> `useRef` retorna um objeto `ref` mutável, no qual a propriedade `.current` é inicializada para o argumento passado (`initialValue`). O objeto retornado persistirá durante todo o ciclo de vida do componente.

Dessa forma, vamos utilizar uma ref para expor um propriedade do componente para o outro de forma imperativa. É claro que é melhor se puder utilizar o estado do componente, mas nem sempre isso é possível.

Para começar, vamos começar criando um app com o framework Nextjs. Rode no seu terminal o comando abaixo para criar o projeto, entrar no diretório e executá-lo. criar o modal que será o componente filho que irá abrir toda vez que o botão de nível superior for clicado.

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

Agora vamos criar o `Modal` . Crie um diretório **`components`** na raiz do projeto e dentro um diretório **`modal`** e crie um arquivo `index.tsx` dentro desse diretório. Dentro do componente modal adicione uma `label` e um `input` com a lógica de abrir o modal quando o estado for verdadeiro.

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

Vamos importar o `Modal` no componente `Home` e adicionar um botão logo abaixo que vai disparar um evento ao receber um click. Esse evento precisar mudar o estado do modal para `true` para que seja exibido em tela. Dessa forma, precisamos referenciar a função que troca o estado do modal para o componente `Home`. Mas antes, vamos adicionar um estilo para que o Modal fique visivel.

```tsx
import type { NextPage } from 'next'
import Modal from '../components/modal'

const Home: NextPage = () => {
  return (
    <div>
      <Modal />
      <button onClick={() => {}}>Open Modal</button>
    </div>
  )
}

export default Home
```

Crie um arquivo de estilo `styles/modal.css` e vamos adicionar um estilo ao Modal. Esse estilo irá posicionar o modal sobre os outros elemento, centralizar seus componentes e adicionar uma largura e altura.

```css
.modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  max-width: 50rem;
  width: 100%;
  min-height: 10rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```

Agora basta importar esse estilo em `pages/_app.tsx`. Dessa forma o estilo já será aplicado ao nosso Modal.

```tsx
// pages/_app.tsx
import '../styles/modal.css'

// ...
```

Agora precisamos referenciar a fução do estado para componente superior. No modal precisamos receber a referência que será criada no componente superior, essa referência é obtida como segundo parâmetro, dessa forma, precisamos adicionar os types que iremos receber via parâmetro. Na linha 21 vamos exportar o componente como atributo da função `forwardRef`. Essa função torna possível repassar a referência para outros componentes.

```tsx
import { ForwardRefRenderFunction, ReactNode, useState } from "react";

interface ModalProps {
  children?: ReactNode;
}

const Modal: ForwardRefRenderFunction<ModalRef, ModalProps> = (props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen((state) => !state);

  return (
    /* ... */
  )
}

export default forwardRef(Modal);
```

Agora, no componente Home, precisamos criar a `ref` e repassar para o componente modal.  Utilizamos o hook `useRef` para criar uma `ref` e passamos como `generic type` a interface ModalRef que específica a função que iremos referenciar. Exporte essa interface e importe no componente Modal, pois precisamos adicionar o type que recebemos como parâmetro.

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