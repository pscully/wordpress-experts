type Props = {
  serviceDetailDescription: string;
  serviceDetailName: string;
};

const ServiceDetailBox = ({
  serviceDetailDescription,
  serviceDetailName,
}: Props) => {
  return (
    <div>
      <div>
        <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
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
        <h3 className='text-lg font-medium text-white'>{serviceDetailName}</h3>
        <p className='mt-2 text-base text-purple-200'>
          {serviceDetailDescription}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetailBox;
