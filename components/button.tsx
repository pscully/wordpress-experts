interface Button {
  type: String;
  clickFunc: Function;
}

interface SVGButton extends Button {
  text: Element;
}

interface TextButton extends Button {
  text: String;
}

type Props = SVGButton | TextButton;

const Button = ({ text, clickFunc }: Props) => {
  return (
    <button
      onClick={() => clickFunc("o7TUJs-21qI")}
      className='inline-flex px-4 py-2 border-l-2 border-b-2 border-brand-pink text-base font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-pink hover:border-l-2 hover:border-b-2 hover:border-brand-blue active:transform active:scale-50'>
      {text}
    </button>
  );
};

export default Button;
