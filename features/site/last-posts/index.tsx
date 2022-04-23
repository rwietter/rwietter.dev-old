import { useQuery } from '@apollo/react-hooks';
import Image from 'next/image';
import Link from 'next/link';
import { LAST_ARTICLES_QUERY } from 'queries/articles/articles';
import {
  LastPostContainer, LastPostContainerDescription, LastPostContainerImage, LastPostContainerLink,
} from './styles';

function LastPosts() {
  const { data } = useQuery(LAST_ARTICLES_QUERY);
  const posts = data?.articles?.data;

  if (!posts) return null;

  return (
    <LastPostContainerLink>
      <LastPostContainerDescription>
        <h2>My Last Posts</h2>
        <p>
          Here I share what I learned on a daily basis
          in software development,check out my latest articles
        </p>
      </LastPostContainerDescription>
      {posts.map((post: any) => {
        const imageUrl = process.env.NODE_ENV !== 'development'
          ? post.attributes.image.data.attributes.url
          : process.env.REACT_APP_BACKEND_URL
              + post.attributes.image.data.attributes.url;
        return (
          <Link
            key={post.slug}
            href={`/blog/article/${post.attributes.slug}`}
            passHref
          >
            <LastPostContainer>
              <LastPostContainerImage>
                <Image
                  src={imageUrl}
                  alt={post.attributes.image.url}
                  layout="fixed"
                  width={90}
                  height={90}
                />
              </LastPostContainerImage>
              <div>
                <p id="category">
                  {post.attributes.category.data.attributes.name}
                </p>
                <p id="title">{post.attributes.title}</p>
              </div>
            </LastPostContainer>
          </Link>
        );
      })}
      <Link href="/blog">Ir ao Blog</Link>
    </LastPostContainerLink>
  );
}

export { LastPosts };
