import Image from "next/image";
import FAQ from "./faq";

type Props = {
  serviceName: String;
  serviceOneLiner: String;
};

const ServiceDetail = ({ serviceName, serviceOneLiner }: Props) => {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-800 to-brand-blue h-auto'>
        <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-white tracking-tight'>
            {serviceName}
          </h2>
          <p className='mt-4 max-w-3xl text-lg text-purple-200'>
            {serviceOneLiner}
          </p>
          <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
            <div>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  {/* Heroicon name: outline/inbox */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-white'>
                  Unlimited Inboxes
                </h3>
                <p className='mt-2 text-base text-purple-200'>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  {/* Heroicon name: outline/users */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-white'>
                  Manage Team Members
                </h3>
                <p className='mt-2 text-base text-purple-200'>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  {/* Heroicon name: outline/trash */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-white'>Spam Report</h3>
                <p className='mt-2 text-base text-purple-200'>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  {/* Heroicon name: outline/pencil-alt */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-white'>
                  Compose in Markdown
                </h3>
                <p className='mt-2 text-base text-purple-200'>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  {/* Heroicon name: outline/document-report */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-white'>
                  Team Reporting
                </h3>
                <p className='mt-2 text-base text-purple-200'>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  {/* Heroicon name: outline/reply */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-white'>
                  Saved Replies
                </h3>
                <p className='mt-2 text-base text-purple-200'>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  {/* Heroicon name: outline/chat-alt */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-white'>
                  Email Commenting
                </h3>
                <p className='mt-2 text-base text-purple-200'>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                  {/* Heroicon name: outline/heart */}
                  <svg
                    className='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-medium text-white'>
                  Connect with Customers
                </h3>
                <p className='mt-2 text-base text-purple-200'>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <div className='relative bg-gray-800'>
        <div className='h-56 bg-gray-800 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
          <Image
            className='w-full h-full object-cover'
            src='/assets/managed-wordpress-hosting-support.jpg'
            alt=''
            layout='fill'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <h2 className='text-base font-semibold uppercase tracking-wider text-gray-300'>
              Award winning support
            </h2>
            <p className='mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
              We’re here to help
            </p>
            <p className='mt-3 text-lg text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div className='mt-8'>
              <div className='inline-flex rounded-md shadow'>
                <a
                  href='#'
                  className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50'>
                  Visit the help center
                  {/* Heroicon name: solid/external-link */}
                  <svg
                    className='-mr-1 ml-3 h-5 w-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'>
                    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
