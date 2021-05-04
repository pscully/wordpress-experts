import { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [emailInput, updateEmailInput] = useState("");

  const handleEmailInput = (inputValue: string) => {
    updateEmailInput(inputValue);
  };

  const handleEmailSubscribeFormSubmit = (e) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };

    e.preventDefault();
    const dataToSend = {
      emailAddress: emailInput,
    };
    axios
      .post("http://127.0.0.1:8000/api/subscriber-new", dataToSend)
      .then((response) => alert(JSON.stringify(response.data)))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='bg-gray-800'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center'>
        <div className='lg:w-0 lg:flex-1'>
          <h2
            className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'
            id='newsletter-headline'>
            Get To Know Us In Your Inbox
          </h2>
          <p className='mt-3 max-w-3xl text-lg leading-6 text-gray-300'>
            Get our week-long master class on everything we do and how it could
            benefit your business. Delivered as 7 emails over the next week, by
            the end you will have a good idea whether or not we are a good fit
            for your business or not.
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:ml-8'>
          <form className='sm:flex' onSubmit={handleEmailSubscribeFormSubmit}>
            <label htmlFor='emailAddress' className='sr-only'>
              Email address
            </label>
            <input
              id='emailAddress'
              name='emailAddress'
              type='email'
              autoComplete='email'
              required
              className='w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md'
              placeholder='Can we have your email?'
              onChange={(e) => handleEmailInput(e.target.value)}
            />
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button
                type='submit'
                className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-pink hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-pink'>
                Fine, Here.
              </button>
            </div>
          </form>
          <p className='mt-3 text-sm text-gray-300'>
            We care about the protection of your data. Read our{" "}
            <a href='#' className='text-white font-medium underline'>
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
