import Head from "next/head";
import FAQ from "../../components/faq";
import ServiceDetail from "../../components/service-detail";
import ServiceCallToAction from "../../components/service-cta";
import { fetchFAQs } from "../../lib/contentful";

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
        serviceName='CARE: White Glove Managed WordPress Service'
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
