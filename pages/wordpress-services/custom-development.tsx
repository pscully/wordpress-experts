import Head from "next/head";
import FAQ from "../../components/faq";
import ServiceDetail from "../../components/service-detail";
import ServiceCallToAction from "../../components/service-cta";
import ServiceLongTextGrow from "../../components/service-longtext-grow";
import { fetchFAQs } from "../../lib/contentful";
import CallToAction from "../../components/cta-section";

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
        service='WORK'
        serviceName='Put Our Team to WORK With Custom Web Development'
        serviceOneLiner='Our skilled developers are passionate about crafted web applications and site for small businesses that are smartly coded, easy to maintain, fast and modern, and most importantly valuable to your bottom line.'
      />
      <FAQ faqs={faqs} />
      <ServiceCallToAction
        image='managed-wordpress-hosting-support.jpg'
        topText='Award winning support'
        heading='We’re here to help'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.'
        buttonText=' Visit the help center'
      />
      <ServiceLongTextGrow />
      <CallToAction />
    </>
  );
};

export default Care;

export async function getStaticProps() {
  const res = await fetchFAQs("about");
  const faqs = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      faqs,
    },
  };
}
