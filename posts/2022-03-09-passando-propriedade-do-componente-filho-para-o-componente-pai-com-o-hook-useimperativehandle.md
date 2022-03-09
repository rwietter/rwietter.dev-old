---
title: Passando propriedade do componente filho para o componente pai com o hook
  useImperativeHandle
description: Elevando o estado do componente com useImperativeHandle
category: react
background: "#F46819"
date: 2022-03-08 09:36:05
---
`Vamos supor um problema. Você tem um componente Modal com a lógica de abrir e fechar o modal dentro do próprio componente, mas precisa que a função de abrir o modal seja utilizada em um botão em outro componente da aplicação que fica no mesmo nível ou em um nível superior.`

`Para resolver isso há algumas formas, por exemplo, pode-se elevar o estado do Modal para um componente pai do Modal e de outro componente como um Header (Lifting State Up). Outra forma é utilizar a Context API ou outro gerenciador de estado global para compartilhar a função.  Além disso, podemos compartilhar o estado para o componente pai por meio do hook useImperativeHandle e o hook useRef.`