import React from 'react';

const ArrowRight = ({ stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-arrow-narrow-right"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke={stroke || "var(--texts)"}
    fill="none"
    stroke-linecap="round"
    stro
    ke-linejoin="round"
  >
    <title>próximo</title>
    <description>ir para o próximo</description>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="15" y1="16" x2="19" y2="12" />
    <line x1="15" y1="8" x2="19" y2="12" />
  </svg>
)

const ArrowLeft = ({ stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-arrow-narrow-left"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke={stroke || 'var(--texts)'}
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <title>voltar</title>
    <description>voltar para o post anterior</description>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="5" y1="12" x2="9" y2="16" />
    <line x1="5" y1="12" x2="9" y2="8" />
  </svg>
)

export { ArrowRight, ArrowLeft }
