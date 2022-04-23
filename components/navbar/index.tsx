import React from 'react';
import Link from 'next/link';
import Query from '../query';

import CATEGORIES_QUERY from '../../queries/category/categories';

const Navbar = () => (
  <div>
    <Query query={CATEGORIES_QUERY} id={null}>
      {({ data: { categories } }: any) => (
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
                {categories.data.map((category: any) => (
                  <li key={category.attributes.slug}>
                    <Link
                      href={`/blog/category/${category.attributes.slug}`}
                    >
                      {category.attributes.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </Query>
  </div>
);

export default Navbar;
