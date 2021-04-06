import Image from "next/image";
import Button from "./button";

const ServicesHomepage = () => {
  return (
    <div
      className='relative bg-white pt-16 pb-32 overflow-hidden'
      id='more-info'>
      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-brand-blue p-2'>
                  {/* Heroicon name: outline/inbox */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='white'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Never worry about downtime again
                </h2>
                <p className='mt-4 text-lg text-gray-500'>
                  Our white-glove managed WordPress service is the perfect home
                  for your website. Never worry about updates, plugins, broken
                  images or links ever again. We provide the best in technology
                  + the best in people. That's a winning combination that let's
                  you focus on what you love, and leave the day-to-day stresses
                  of your website to us.
                </p>
                <div className='mt-6'>
                  <Button text='Learn About CARE' />
                </div>
              </div>
            </div>
            <div className='mt-8 border-t border-gray-200 pt-6'>
              <blockquote>
                <div>
                  <p className='text-base text-gray-500'>
                    "I went through four SEO/web design companies before I found
                    Patrick. He and his company have done a killer job. They are
                    responsive, they listen, they are good at what they do, and
                    they are reasonably priced. This combination is like some
                    kind of a SEO unicorn. Very happy."
                  </p>
                </div>
                <footer className='mt-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-6 w-6 rounded-full'
                        src='/assets/reviews/malvehy.jpg'
                        alt=''
                      />
                    </div>
                    <div className='text-base font-medium text-gray-700'>
                      A. Malvehy, Vein Doctor, California
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src='/assets/care.jpg'
                alt='Inbox user interface'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-brand-blue p-2'>
                  {/* Heroicon name: outline/sparkles */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='white'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </span>
              </div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Grow with SEO
                </h2>
                <p className='mt-4 text-lg text-gray-500'>
                  Our unique SEO process gets you results fast. From hyper-local
                  to global, we help your website establish authority online
                  which provides your business with an asset that can only
                  continue to grow.
                </p>
                <div className='mt-6'>
                  <Button text='Learn About Grow' />
                </div>
              </div>
            </div>
            <div className='mt-8 border-t border-gray-200 pt-6'>
              <blockquote>
                <div>
                  <p className='text-base text-gray-500'>
                    "My wife and I run a few local Mattress Stores and have been
                    using Possible Web for over 9 months now, we have been very
                    impressed with the work the team at Possible Web and the
                    contribution they have made to our growth. They have been an
                    integral part of getting our small, local brand a big brand
                    presence online. Highly recommend! "
                  </p>
                </div>
                <footer className='mt-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-6 w-6 rounded-full'
                        src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                        alt=''
                      />
                    </div>
                    <div className='text-base font-medium text-gray-700'>
                      J. Campbell, Local Business Owner, North Carolina
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src='/assets/grow.jpg'
                alt='Customer profile user interface'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHomepage;