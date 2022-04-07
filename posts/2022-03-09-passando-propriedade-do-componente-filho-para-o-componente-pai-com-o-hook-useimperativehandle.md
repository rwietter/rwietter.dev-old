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

Para começar, vamos criar o modal que será o componente filho que irá abrir toda vez que o botão de nível superior for clicado.

```typescript

```