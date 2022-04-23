import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      data {
        attributes {
          slug
          title
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;


const LAST_ARTICLES_QUERY = gql`
  query Articles {
    articles(pagination: { limit: 4 }, sort: "createdAt") {
      data {
        attributes {
          slug
          title
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export { ARTICLES_QUERY, LAST_ARTICLES_QUERY };