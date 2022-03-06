import Head from 'next/head';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllPostSlugs, getPostData, PostDataType } from '../../lib/posts';

const Post = (props: PostDataType) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1>{props.title}</h1>
        <h3>{props.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
      </article>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
};

interface Query extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { slug } = context.params as Query; // Uhm....
  const postData: PostDataType = await getPostData(slug);

  return {
    props: {
      ...postData,
    },
  };
};
