import Image from "next/image";

const HeroHome = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/2' />
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
          <div className='absolute inset-0'>
            <Image
              layout='fill'
              className='h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
              alt='People working on laptops'
            />
            <div
              className='absolute inset-0 bg-gray-700'
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
            <h1 className='text-center text-5xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
              <span className='block text-white'>No Stress WordPress.</span>
              {/* <span className='block text-blue-200'>WordPress.</span> */}
            </h1>
            <p className='mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl'>
              We CARE for your website like we wish someone would care for ours.
              <br />
              GROW exponentially online with our organic Internet marketing
              service.
            </p>
            <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
              <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                <a
                  href='#'
                  className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-pink bg-white hover:bg-indigo-50 sm:px-8'>
                  Get started
                </a>
                <a
                  href='#more-info'
                  className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-pink bg-opacity-60 hover:bg-opacity-70 sm:px-8'>
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
