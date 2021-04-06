type Props = {
  center: Boolean;
};
const H2Heading = (props: Props) => {
  const { center } = props;
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className='mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
        Bona Fide WordPress Experts
      </h2>
      <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
        If your business relies on WordPress, then you can rely on us.
      </p>
    </div>
  );
};

export default H2Heading;
