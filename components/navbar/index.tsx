import React from "react";
import Query from "../query";

import CATEGORIES_QUERY from "../../queries/category/categories";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }: any) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link href="/">Strapi Blog</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.data.map((category: any) => {
                      return (
                        <li key={category.attributes.slug}>
                          <Link
                            href={`/category/${category.attributes.slug}`}
                            // className="uk-link-reset"
                          >
                            {category.attributes.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Navbar;