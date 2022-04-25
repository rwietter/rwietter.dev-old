import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { useQuery } from '@apollo/react-hooks';
import Image from 'next/image';
import ARTICLE_QUERY from '../../../queries/article/article';

const ArticleItem = () => {
  const router = useRouter() as unknown as {
    query: { slug: string[] | string };
  };

  const { data, loading, error } = useQuery(ARTICLE_QUERY, {
    variables: { slug: router.query.slug },
  });

  if (error || loading) return <div>Loading...</div>;

  const [articles] = data.articles.data;

  return (
    <div>
      <div>
        <Image
          src={articles.attributes.image.data.attributes.url}
          layout="responsive"
          width={100}
          height={50}
          alt="url"
          loading="lazy"
        />
        <h1>{articles.attributes.title}</h1>
      </div>

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown>{articles.attributes.content}</ReactMarkdown>
          <p>
            <span data-att="MMM Do YYYY">
              {articles.attributes.published_at}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
