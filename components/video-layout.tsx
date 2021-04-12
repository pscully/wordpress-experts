import Button from "../components/button";

type Props = {
  videoId: String;
  buttonClickFunc: Function;
};

const VideoLayout = ({ videoId, buttonClickFunc }: Props) => {
  return (
    <div className='bg-gray-300'>
      <div className='flex justify-center px-4 py-5 sm:p-6'>
        <iframe
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
        <div className='p-5'>
          <Button
            clickFunc={buttonClickFunc}
            text={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10'
                fill='none'
                viewBox='0 0 24 24'
                stroke='white'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            }></Button>
        </div>
      </div>
    </div>
  );
};

export default VideoLayout;
