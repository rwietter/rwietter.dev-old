---
title: Passando propriedade do componente filho para o componente pai com o hook
  useImperativeHandle
description: Elevando o estado do componente com useImperativeHandle
category: react
background: "#F46819"
date: 2022-03-08 09:36:05
---
Vamos supor um problema. Você tem um componente Modal com a lógica de abrir e fechar o modal dentro do próprio componente, mas precisa que a função de abrir o modal seja utilizada em um botão em outro componente da aplicação que fica no mesmo nível ou em um nível superior.

Para resolver isso há algumas formas, por exemplo, pode-se elevar o estado (Lifting State Up) do Modal para um componente pai do Modal e de outro componente como um Header que terá acesso ao estado. Outra forma é utilizar a Context API ou outro gerenciador de estado global para compartilhar a função.  Além disso, podemos compartilhar o estado para o componente pai por meio do hook `useImperativeHandle` o hook `useRef`.

Conforme a documentação do React diz sobre o hook `useImperativeHandle`:

> `O useImperativeHandle` personaliza o valor da instância que está exposta aos componentes pai ao usar `ref`. Como sempre, na maioria dos casos, seria bom evitar um código imperativo usando refs.



E sobre o hook `useRef`:

> `useRef` retorna um objeto `ref` mutável, no qual a propriedade `.current` é inicializada para o argumento passado (`initialValue`). O objeto retornado persistirá durante todo o ciclo de vida do componente.