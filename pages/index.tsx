import { useState } from "react";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import HeroHome from "../components/hero-home";
import ServicesHomepage from "../components/services-homepage";
import CallToAction from "../components/cta-section";
import ServicesExplanation from "../components/services-explanation";
import VideoLayout from "../components/video-layout";

type Props = {
  allPosts: Post[];
  videoId: string;
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const [pageState, setPageState] = useState(true);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleVideoClick = ({ videoId }: Props) => {
    {
      setCurrentVideo(videoId);
      !pageState ? setPageState(true) : setPageState(false);
      setCurrentVideo("o7TUJs-21qI");
      scroll(0, 0);
    }
  };

  return (
    <>
      <Head>
        <title>Bona Fide WordPress Experts // {CMS_NAME}</title>
      </Head>
      {pageState ? (
        <div>
          <HeroHome />
          <ServicesHomepage buttonClickFunc={handleVideoClick} />
          <ServicesExplanation />
          <CallToAction />
        </div>
      ) : (
        <VideoLayout
          videoId={currentVideo}
          buttonClickFunc={handleVideoClick}
        />
      )}
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
