import Link from "next/link";
import { useState } from "react";
import CycloneLogo from "../components/cyclone-logo";

type MouseEventHandler = {
  onClick: Function;
};

type MenuItemProps = {
  name: String;
  excerpt: String;
};

const MenuItem = ({ name, excerpt }: MenuItemProps) => {
  return (
    <div className='ml-4'>
      <p className='text-base font-medium text-gray-900'>{name}</p>
      <p className='mt-1 text-sm text-gray-500'>{excerpt}</p>
    </div>
  );
};

const Header = () => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const [flyoutMenuState, setFlyoutMenuState] = useState(false);

  const handleFlyoutMenu = () => {
    !flyoutMenuState ? setFlyoutMenuState(true) : setFlyoutMenuState(false);
  };

  const handleMobileMenu = () => {
    console.log("Click");
    !mobileMenuState ? setMobileMenuState(true) : setMobileMenuState(false);
  };

  return (
    <header>
      <div className='relative bg-white'>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <CycloneLogo version='desktop' />
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              onClick={() => handleMobileMenu()}
              type='button'
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-brand-blue hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
              aria-expanded='false'>
              <span className='sr-only'>Open menu</span>
              <svg
                className='h-8 w-8'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <nav className='hidden md:flex space-x-10'>
            <div className='relative'>
              <button
                type='button'
                className='text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue'
                aria-expanded='false'
                onClick={() => handleFlyoutMenu()}>
                <span>Services</span>
                <svg
                  className='text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>

              <div
                className={
                  flyoutMenuState
                    ? `transition ease-out duration-200 opacity-100 translate-y-0 absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`
                    : `transition ease-in duration-150 opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`
                }>
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                    <Link href='/wordpress-services/managed-hosting/'>
                      <a
                        onClick={() => handleFlyoutMenu()}
                        className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-800 to-brand-blue text-white sm:h-12 sm:w-12'>
                          <svg
                            className='h-6 w-6'
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
                        </div>

                        <MenuItem
                          name='CARE'
                          excerpt='White glove WordPress hosting & support.'
                        />
                      </a>
                    </Link>

                    <Link href='/wordpress-services/wordpress-seo/'>
                      <a
                        onClick={() => handleFlyoutMenu()}
                        className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-800 to-brand-blue text-white sm:h-12 sm:w-12'>
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                            />
                          </svg>
                        </div>

                        <MenuItem
                          name='GROW'
                          excerpt='Fully-loaded content marketing & SEO.'
                        />
                      </a>
                    </Link>
                    <Link href='/wordpress-services/custom-development'>
                      <a
                        onClick={() => handleFlyoutMenu()}
                        className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-800 to-brand-blue text-white sm:h-12 sm:w-12'>
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
                            />
                          </svg>
                        </div>

                        <MenuItem
                          name='WORK'
                          excerpt='Custom web development (sites & biz tools).'
                        />
                      </a>
                    </Link>

                    <Link href='/wordpress-services/small-tasks/'>
                      <a
                        onClick={() => handleFlyoutMenu()}
                        className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-800 to-brand-blue text-white sm:h-12 sm:w-12'>
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        </div>

                        <MenuItem
                          name='TASK'
                          excerpt='One time WordPress tasks done in 48 hours.'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href='/videos'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Videos
              </a>
            </Link>

            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Guides
            </a>
          </nav>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <Link href='https://my.possibleweb.com/'>
              <a className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                Sign in
              </a>
            </Link>
            <a
              href='#'
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-pink hover:from-blue-700 hover:to-blue-700'>
              Sign up
            </a>
          </div>
        </div>
      </div>

      <div
        className={
          mobileMenuState
            ? `absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden duration-200 ease-out opacity-100 scale-100`
            : `absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden duration-100 ease-in opacity-0 scale-95`
        }>
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
          <div className='pt-5 pb-6 px-5'>
            <div className='flex items-center justify-between'>
              <div>
                <CycloneLogo version='mobile' />
              </div>
              <div className='-mr-2'>
                <button
                  onClick={() => handleMobileMenu()}
                  type='button'
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='mt-6'>
              <nav className='grid grid-cols-1 gap-7'>
                <a
                  href='/wordpress-seo/'
                  className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                  <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
                    {/* Heroicon name: outline/inbox */}
                    <svg
                      className='h-6 w-6'
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
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    CARE
                  </div>
                </a>
                <a
                  href='#'
                  className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                  <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
                    {/* Heroicon name: outline/annotation */}
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    GROW
                  </div>
                </a>
                <a
                  href='#'
                  className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                  <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
                    {/* Heroicon name: outline/chat-alt-2 */}
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    WORK
                  </div>
                </a>
                <a
                  href='#'
                  className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                  <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
                    {/* Heroicon name: outline/question-mark-circle */}
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    TASK
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div className='py-6 px-5'>
            <div className='grid grid-cols-2 gap-4'>
              <a
                href='#'
                className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Videos
              </a>
              <a
                href='#'
                className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Guides
              </a>
              <a
                href='#'
                className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Contact
              </a>
              <a
                href='#'
                className='text-base font-medium text-gray-900 hover:text-gray-700'>
                FB Group
              </a>
            </div>
            <div className='mt-6'>
              <a
                href='#'
                className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-pink hover:from-purple-700 hover:to-indigo-700'>
                Sign up
              </a>
              <p className='mt-6 text-center text-base font-medium text-gray-500'>
                Current Client?
                <a
                  href='https://my.possibleweb.com/'
                  className='ml-2 text-gray-900'>
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
