import Button from "../components/button";

const CallToAction = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>Ready to get started?</span>
          <span className='block bg-brand-blue bg-clip-text text-transparent'>
            Get in touch or create an account.
          </span>
        </h2>
        <div className='mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5'>
          {/* <Button text='Get Started' /> */}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
