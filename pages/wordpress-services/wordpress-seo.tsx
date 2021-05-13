import Head from "next/head";
import FAQ from "../../components/faq";
import ServiceDetail from "../../components/service-detail";
import ServiceCallToAction from "../../components/service-cta";
import ServiceLongTextGrow from "../../components/service-longtext-grow";
import { fetchFilteredFAQs } from "../../lib/contentful";
import CallToAction from "../../components/cta-section";
import PricingCare from "../../components/pricing-care";

type Props = {
  faqs: Array<object>;
};

const Care = ({ faqs }: Props) => {
  return (
    <>
      <Head>
        <title>
          WordPress SEO Services + Content Marketing // Possible Web
        </title>
      </Head>
      <ServiceDetail
        service='GROW'
        serviceName='GROW with SEO'
        serviceOneLiner='We will help grow your business through a SEO campaign that involves some advanced technical SEO combined with consistent content creation. We have the experience and proven processes to get you more exposure.'
      />
      <FAQ faqs={faqs} />
      <ServiceCallToAction
        image='managed-wordpress-hosting-support.jpg'
        topText='Attention From Any Audience'
        heading='Unique SEO Approach'
        description='We believe in our process. It has successful ranked thousands of webpages over the years, resulting in millions of in-the-market website visitors. See pricing options below based on your business type and target audience.'
        buttonOneText='Local SEO Pricing'
        buttonTwoText='National SEO Pricing'
      />
      <ServiceLongTextGrow />
      <CallToAction />
    </>
  );
};

export default Care;

export async function getStaticProps() {
  const res = await fetchFilteredFAQs("Care");
  const faqs = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      faqs,
    },
  };
}
