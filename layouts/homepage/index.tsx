import React from "react";
import { Articles } from "../../components/articles";
import Query from "../../components/query";
import ARTICLES_QUERY from "../../queries/articles/articles";

const HomePage = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }: any) => {
              return <Articles articles={articles.data} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
