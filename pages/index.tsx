import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import HeroHome from "../components/hero-home";
import ServicesHomepage from "../components/services-homepage";
import Button from "../components/button";

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
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <div className='mb-10'>
          <HeroHome />
        </div>
        {/* <H2Heading center={true} /> */}
        <ServicesHomepage />
        <div>
          {/* Stats section */}
          <div className='relative bg-gray-900'>
            <div className='h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full'>
              <div className='h-full w-full xl:grid xl:grid-cols-2'>
                <div className='h-full xl:relative xl:col-start-2'>
                  <img
                    className='h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                    src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                    alt='People working on laptops'
                  />
                  <div
                    aria-hidden='true'
                    className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
                  />
                </div>
              </div>
            </div>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
              <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
                <h2 className='text-sm font-semibold tracking-wide uppercase'>
                  <span className='bg-brand-pink bg-clip-text text-transparent'>
                    A Simpe Effective Approach
                  </span>
                </h2>
                <p className='mt-3 text-3xl font-extrabold text-white'>
                  Our process just makes sense.
                </p>
                <p className='mt-5 text-lg text-gray-300'>
                  SEO companies make it so complicated. Pages and pages of
                  meaningless metrics. Here's what works: find topics your
                  target customer is searching for online, ceate content around
                  those topics. The more content you create, the more authority
                  your site gains. The most authoritative sites win. Let's go.
                </p>
                <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
                  <p>
                    <span className='block text-2xl font-bold text-white'>
                      User Experience
                    </span>
                    <span className='mt-1 block text-base text-gray-300'>
                      Your website needs to get people to stick. If it's missing
                      features or way to complicated your users will bounce.
                      Users don't bounce from authoritative sites. Every website
                      can improve.
                    </span>
                  </p>
                  <p>
                    <span className='block text-2xl font-bold text-white'>
                      Content
                    </span>
                    <span className='mt-1 block text-base text-gray-300'>
                      We grow your website through publishing awesome content
                      including images, custom graphics and widgets that make
                      your blog posts stand out. As your blog grows so does your
                      traffic.
                    </span>
                  </p>
                  <p>
                    <span className='block text-2xl font-bold text-white'>
                      Social Media
                    </span>
                    <span className='mt-1 block text-base text-gray-300'>
                      People are following you for content. We are publishing
                      content to your website. So it's only natural we will
                      share this to your social media. Our team creates weekly
                      posts using your new blog articles as inspiration.
                    </span>
                  </p>
                  <p>
                    <span className='block text-2xl font-bold text-white'>
                      Reporting
                    </span>
                    <span className='mt-1 block text-base text-gray-300'>
                      Closely monitoring the metrics of your website is
                      important. It reveals new opportunities, and allows us to
                      adapt quickly as your traffic grows. GMB, Search Console,
                      Analytics, Data Studio, Optimize are all in our arsenal.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className='bg-white'>
            <div className='max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
              <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                <span className='block'>Ready to get started?</span>
                <span className='block bg-brand-blue bg-clip-text text-transparent'>
                  Get in touch or create an account.
                </span>
              </h2>
              <div className='mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5'>
                <Button text='Get Started' />
              </div>
            </div>
          </div>
        </div>
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
