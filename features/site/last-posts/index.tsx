import { useQuery } from '@apollo/react-hooks';
import Image from 'next/image';
import Link from 'next/link';
import { LAST_ARTICLES_QUERY } from 'queries/articles/articles';
import {
  LastPostContainer,
  LastPostContainerContent,
  LastPostContainerContentCategory,
  LastPostContainerDescription,
  LastPostContainerImage,
  LastPostContainerLink,
  LastPostToBlog,
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
                  width={80}
                  height={80}
                />
              </LastPostContainerImage>
              <LastPostContainerContent>
                <div>
                  <h4 className="title">
                    {post.attributes.title}
                  </h4>
                  <p className="description">{post.attributes.description}</p>
                </div>
                <div>
                  <LastPostContainerContentCategory
                    category={post.attributes.category.data.attributes.name}
                  >
                    {post.attributes.category.data.attributes.name}
                  </LastPostContainerContentCategory>
                </div>
              </LastPostContainerContent>
            </LastPostContainer>
          </Link>
        );
      })}
      <LastPostToBlog><Link href="/blog">Ir ao Blog</Link></LastPostToBlog>
    </LastPostContainerLink>
  );
}

export { LastPosts };
