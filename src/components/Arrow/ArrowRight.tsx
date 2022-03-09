import React from "react"

type ArrowRightProps = {
  stroke: string
}

export const ArrowRight = ({ stroke }: ArrowRightProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-narrow-right"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={stroke || "var(--texts)"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>próximo</title>
    <span>ir para o próximo</span>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="15" y1="16" x2="19" y2="12" />
    <line x1="15" y1="8" x2="19" y2="12" />
  </svg>
)
