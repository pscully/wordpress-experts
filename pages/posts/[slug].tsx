import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className='mb-32'>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property='og:image' content={post.ogImage.url} />
              </Head>
              <div className='relative py-16 bg-white overflow-hidden'>
                <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
                  <div
                    className='relative h-full text-lg max-w-prose mx-auto'
                    aria-hidden='true'>
                    <svg
                      className='absolute top-12 left-full transform translate-x-32'
                      width={404}
                      height={384}
                      fill='none'
                      viewBox='0 0 404 384'>
                      <defs>
                        <pattern
                          id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits='userSpaceOnUse'>
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className='text-gray-200'
                            fill='currentColor'
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
                      />
                    </svg>
                    <svg
                      className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
                      width={404}
                      height={384}
                      fill='none'
                      viewBox='0 0 404 384'>
                      <defs>
                        <pattern
                          id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits='userSpaceOnUse'>
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className='text-gray-200'
                            fill='currentColor'
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
                      />
                    </svg>
                    <svg
                      className='absolute bottom-12 left-full transform translate-x-32'
                      width={404}
                      height={384}
                      fill='none'
                      viewBox='0 0 404 384'>
                      <defs>
                        <pattern
                          id='d3eb07ae-5182-43e6-857d-35c643af9034'
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits='userSpaceOnUse'>
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className='text-gray-200'
                            fill='currentColor'
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
                      />
                    </svg>
                  </div>
                </div>
                <div className='relative px-4 sm:px-6 lg:px-8'>
                  <div className='text-lg max-w-prose mx-auto'>
                    <h1>
                      <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                        <PostHeader
                          title={post.title}
                          coverImage={post.coverImage}
                          date={post.date}
                          author={post.author}
                        />
                      </span>
                    </h1>
                    <p className='mt-8 text-xl text-gray-500 leading-8'>
                      {/* <Excerpt /> */}
                    </p>
                  </div>
                  <div className='mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto'>
                    <PostBody content={post.content} />
                  </div>
                </div>
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
