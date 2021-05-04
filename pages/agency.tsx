/* This example requires Tailwind CSS v2.0+ */
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import Newsletter from "../components/newsletter";

const supportLinks = [
  {
    name: "New Clients & Onboarding",
    href: "#",
    description:
      "The first step to becoming a new client is to request a client account. We will review your request and send you login details. From there you can browse services, chat with our team, and register.",
    icon: PhoneIcon,
    text: "Request Access",
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "For current clients, if you have a technical support request please submit that through your client portal or email help@possibleweb.com. Our team will reach out with any questions.",
    icon: SupportIcon,
    text: "Login To Portal",
  },
  {
    name: "Partnerships",
    href: "#",
    description:
      "We get many requests to partner with web and advertising agencies along with freelancers and other digital marketing professionals. We review each request on a case by case basis.",
    icon: NewspaperIcon,
    text: "Get In Touch",
  },
];

const Agency = () => {
  return (
    <div className='bg-white'>
      {/* Header */}
      <div className='relative pb-32 bg-gray-800'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
            alt=''
          />
          <div
            className='absolute inset-0 bg-gray-800'
            style={{ mixBlendMode: "multiply" }}
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
            About Us
          </h1>
          <p className='mt-6 max-w-3xl text-xl text-gray-300'>
            We are a distrubuted team of experts in a few key areas that make us
            invaluable partners for your small business: website care, search
            engine optimization, and web development. Our family of clients are
            incredibly important to us.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className='-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8'
        aria-labelledby='contact-heading'>
        <h2 className='sr-only' id='contact-heading'>
          Contact us
        </h2>
        <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
          {supportLinks.map((link) => (
            <div key={link.name} className='bg-white rounded-2xl shadow-xl'>
              <div className='relative pt-16 px-6 pb-8 md:px-8'>
                <div className='absolute top-0 p-5 inline-block bg-brand-blue rounded-xl shadow-lg transform -translate-y-1/2'>
                  <link.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-xl font-medium text-gray-900'>
                  {link.name}
                </h3>
                <p className='mt-4 text-base text-gray-500'>
                  {link.description}
                </p>
              </div>
              <div className='p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8'>
                <a
                  href={link.href}
                  className='text-base font-medium text-brand-blue hover:text-indigo-600'>
                  {link.text}
                  <span aria-hidden='true'> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default Agency;
