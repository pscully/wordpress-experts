import Head from "next/head";
import FAQ from "../../components/faq";
import ServiceDetail from "../../components/service-detail";
import ServiceCallToAction from "../../components/service-cta";
import ServiceLongTextCare from "../../components/service-longtext-care";
import { fetchFAQs } from "../../lib/contentful";
import CallToAction from "../../components/cta-section";

type Props = {
  faqs: Array<object>;
};

const Care = ({ faqs }: Props) => {
  return (
    <>
      <Head>
        <title>Managed WordPress Services + Unlimited // Possible Web</title>
      </Head>
      <ServiceDetail
        service='CARE'
        serviceName='White Glove WordPress CARE'
        serviceOneLiner='Your website should not cause you headaches. Let our team shoulder the daily responsibilities of keeping your Wordpress website fast, sercure, and always up to date. Unlimited support tasks included. No one cares like us.'
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
      <ServiceLongTextCare />
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
