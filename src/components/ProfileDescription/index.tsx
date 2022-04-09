import React from "react"
import { PeofileDescriptiom } from "./styles"

const ProfileDescription: React.FC = () => {
  return (
    <PeofileDescriptiom>
      <p>
        Dev e estudante de Sistemas de Informação na UFSM.
        <span> Nesse espaço, escrevo conteúdos sobre <strong>dev & tech</strong>.</span>
      </p>
    </PeofileDescriptiom>
  )
}

export { ProfileDescription }
