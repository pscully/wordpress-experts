import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import HeroHome from "../components/hero-home";
import ServicesHomepage from "../components/services-homepage";
import CallToAction from "../components/cta-section";
import ServicesExplanation from "../components/services-explanation";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Bona Fide WordPress Experts // {CMS_NAME}</title>
        </Head>
        <HeroHome />
        <ServicesHomepage />
        <ServicesExplanation />
        <CallToAction />
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
