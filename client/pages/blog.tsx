import Head from 'next/head';
import Link from 'next/link';
import { getAllPostsInfo, PostDataType } from '../lib/posts';

type BlogProps = {
  allPostsData: PostDataType[];
};

const Blog = (props: BlogProps) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div>
        <ul>
          {props.allPostsData.map((post) => (
            <li key={post.slug}>
              <a href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </a>
              <br />
              <small>
                <p>{post.date}</p>
              </small>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPostsData: PostDataType[] = getAllPostsInfo();

  return {
    props: {
      allPostsData,
    },
  };
}
