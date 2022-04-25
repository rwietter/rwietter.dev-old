import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ article }: any) => (
  <Link href={`/blog/article/${article.attributes.slug}`} passHref>
    <div className="uk-card uk-card-muted uk-cursor-pointer">
      <div className="uk-card-media-top">
        <Image
          src={article.attributes.image.data.attributes.url}
          alt={article.attributes.image.url}
          layout="responsive"
          width={100}
          height={50}
          loading="lazy"
        />
      </div>
      <div className="uk-card-body">
        <p id="category" className="uk-text-uppercase">
          {article.attributes.category.data.attributes.name}
        </p>
        <p id="title" className="uk-text-large">
          {article.attributes.title}
        </p>
      </div>
    </div>
  </Link>
);

export { Card };
