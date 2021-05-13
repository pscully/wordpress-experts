import ServiceDetailBox from "./service-detail-box";
import { CARESERVICEDETAILS, GROWSERVICEDETAILS } from "../lib/serviceDetails";

type Props = {
  serviceName: String;
  serviceOneLiner: String;
  service: string;
};

const ServiceDetail = ({ serviceName, serviceOneLiner, service }: Props) => {
  return (
    <>
      {service === "CARE" ? (
        <div className='bg-gradient-to-r from-brand-blue to-gray-900 h-auto'>
          <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8'>
            <h1 className='text-7xl font-extrabold text-white tracking-tight'>
              {serviceName}
            </h1>
            <p className='mt-4 max-w-3xl text-lg text-purple-200'>
              {serviceOneLiner}
            </p>
            <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
              {CARESERVICEDETAILS.map((detail) => {
                return (
                  <ServiceDetailBox
                    serviceDetailName={detail.serviceDetailName}
                    serviceDetailDescription={detail.serviceDetailDescription}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-gradient-to-r from-brand-blue to-gray-900 h-auto'>
          <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8'>
            <h1 className='text-5xl md:text-7xl font-extrabold text-white tracking-tight'>
              {serviceName}
            </h1>
            <p className='mt-4 max-w-3xl text-lg text-purple-200'>
              {serviceOneLiner}
            </p>
            <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
              {GROWSERVICEDETAILS.map((detail) => {
                return (
                  <ServiceDetailBox
                    serviceDetailName={detail.serviceDetailName}
                    serviceDetailDescription={detail.serviceDetailDescription}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetail;
