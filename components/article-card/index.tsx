import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ article }: any) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.attributes.image.data.attributes.url
      : process.env.REACT_APP_BACKEND_URL +
        article.attributes.image.data.attributes.url;
  return (
    <Link href={`/article/${article.attributes.slug}`} passHref>
      <div className="uk-card uk-card-muted uk-cursor-pointer">
        <div className="uk-card-media-top">
          <Image src={imageUrl} alt={article.attributes.image.url} layout='responsive' width={100} height={50} />
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
};

export { Card} ;