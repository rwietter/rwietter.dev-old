import React from "react";
import { Container } from "./styles";
import { SOCIAL_LINKS } from "data/social-links";

const AuthorHeader: React.FC = () => {
  return (
    <Container>
      <h1>Maurício</h1>
      <p>24-year-old software developer and student from the Brazil.</p>
      <nav>
        {SOCIAL_LINKS.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{ link.icon }</a>
        ))}
      </nav>
    </Container>
  );
};

export { AuthorHeader } ;
