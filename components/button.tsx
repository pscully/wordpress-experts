type Props = {
  text: String;
};

const Button = ({ text }: Props) => {
  return (
    <a
      href='#'
      className='inline-flex px-4 py-2 border-l-2 border-b-2 border-brand-pink text-base font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-pink hover:border-l-2 hover:border-b-2 hover:border-brand-blue active:transform active:scale-50'>
      {text}
    </a>
  );
};

export default Button;
