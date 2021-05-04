import {
  CheckCircleIcon,
  ClipboardCheckIcon,
  ChevronRightIcon,
  MailIcon,
} from "@heroicons/react/solid";

const careFeatures = [
  {
    feature: {
      name: "Initialize SSD Server",
      description: "Intial Setup",
    },
    stage: "Server Setup DONE",
    href: "#",
  },
  {
    feature: {
      name: "Website Onboarding",
      description: "Code Review & Launch",
    },
    stage: "Site Onboarding DONE",
    href: "#",
  },
  {
    feature: {
      name: "Speed Optimization",
      description: "Our FAST Service, free",
    },
    stage: "Speed Optimization DONE",
    href: "#",
  },
  {
    feature: {
      name: "CARE Service Initiated",
      description: "Updates & Reporting Setup",
    },
    stage: "CARE Service STARTING",
    href: "#",
  },
  {
    feature: {
      name: "Support Ticket Recieved",
      description: "Unlimited Support Included",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Ticket #4583272 DONE",
    href: "#",
  },
];

const growFeatures = [
  {
    feature: {
      name: "Competition Analysis",
      description: "Topic Research",
    },
    stage: "Research DONE",
    href: "#",
  },
  {
    feature: {
      name: "Website Technical Diagnosis",
      description: "Code Review & Fix",
    },
    stage: "On Page SEO DONE",
    href: "#",
  },
  {
    feature: {
      name: "User Experience Testing",
      description: "This is the money",
    },
    stage: "Conversion Rate 📈",
    href: "#",
  },
  {
    feature: {
      name: "Content Marketer Assigned",
      description: "Bi-Weekly Blogging",
    },
    stage: "Article #1 PUBLISHED",
    href: "#",
  },
  {
    feature: {
      name: "Brand Expansion",
      description: "Social Media et al",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "IG, FB, TW, GMB SHARED",
    href: "#",
  },
];

type Props = {
  service: string;
};

const ServiceGraphic = ({ service }: Props) => {
  return (
    <div className='mt-12 bg-white shadow overflow-hidden sm:rounded-md'>
      <ul className='divide-y divide-gray-200'>
        {service === "care"
          ? careFeatures.map((feature) => (
              <li key={feature.feature.description}>
                <a href={feature.href} className='block hover:bg-gray-50'>
                  <div className='flex items-center px-4 py-4 sm:px-6'>
                    <div className='min-w-0 flex-1 flex items-center'>
                      <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                        <div>
                          <p className='text-sm font-medium text-brand-blue truncate'>
                            {feature.feature.name}
                          </p>
                          <p className='mt-2 flex items-center text-sm text-gray-500'>
                            <ClipboardCheckIcon
                              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                            <span className='truncate'>
                              {feature.feature.description}
                            </span>
                          </p>
                        </div>
                        <div className='hidden md:block'>
                          <div>
                            <p className='text-sm text-gray-900'>Status...</p>
                            <p className='mt-2 flex items-center text-sm text-gray-500'>
                              <CheckCircleIcon
                                className='flex-shrink-0 mr-1.5 h-5 w-5 text-brand-pink'
                                aria-hidden='true'
                              />
                              {feature.stage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ChevronRightIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                  </div>
                </a>
              </li>
            ))
          : growFeatures.map((feature) => (
              <li key={feature.feature.description}>
                <a href={feature.href} className='block hover:bg-gray-50'>
                  <div className='flex items-center px-4 py-4 sm:px-6'>
                    <div className='min-w-0 flex-1 flex items-center'>
                      <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                        <div>
                          <p className='text-sm font-medium text-brand-blue truncate'>
                            {feature.feature.name}
                          </p>
                          <p className='mt-2 flex items-center text-sm text-gray-500'>
                            <ClipboardCheckIcon
                              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                            <span className='truncate'>
                              {feature.feature.description}
                            </span>
                          </p>
                        </div>
                        <div className='hidden md:block'>
                          <div>
                            <p className='text-sm text-gray-900'>Status...</p>
                            <p className='mt-2 flex items-center text-sm text-gray-500'>
                              <CheckCircleIcon
                                className='flex-shrink-0 mr-1.5 h-5 w-5 text-brand-pink'
                                aria-hidden='true'
                              />
                              {feature.stage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ChevronRightIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </div>
                  </div>
                </a>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ServiceGraphic;
