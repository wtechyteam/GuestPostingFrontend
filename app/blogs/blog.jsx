"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <div className="z-[6] mt-[40px] relative flex justify-center">
      <div className="container-xs flex justify-between px-12 md:px-5 w-full">
        {/* Left Section - Blog Image and Content */}
        <div className="w-3/4 md:w-3/4 lg:w-[75%]">
          {" "}
          {/* Adjusted width for larger screens */}
          {/* Blog Image */}
          <div className="mb-8 relative">
            <Image
              src="/images/image 4.png"
              alt="A representation of Artificial Intelligence in a blog post"
              width={1200}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white py-1 px-3 rounded">
              Artificial Intelligence
            </div>
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white py-1 px-3 rounded">
              Oct 19 • 10 min read
            </div>
          </div>
          {/* Blog Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Mastering ChatGPT Blog Creation: Dos and Don’ts For SaaS Marketing
              Managers
            </h1>
            <p className="text-lg text-gray-700">
              Hello there! As a marketing manager in the SaaS industry, you
              might be looking for innovative ways to engage your audience.. I
              bet generative AI has crossed your mind as an option for creating
              content. Well, let me share from my firsthand experience.
            </p>
            <p className="text-lg text-gray-700">
              Google encourages high-quality blogs regardless of whether they
              are written by humans or created using artificial intelligence
              like ChatGPT. Here is what matters: producing original material
              with expertise and trustworthiness based on Google E-E-A-T
              principles.
            </p>

            <p className="text-lg text-gray-700">
              This means focusing more on people-first writing rather than
              primarily employing AI tools to manipulate search rankings. There
              comes a time when many experienced professionals want to
              communicate their insights but get stuck due to limited writing
              skills – that’s where Generative AI can step in.
            </p>
            <p className="text-lg text-gray-700">
              So, together, we’re going explore how this technology could help
              us deliver valuable content without sounding robotic or defaulting
              into mere regurgitations of existing materials (spoiler alert –
              common pitfalls!). Hang tight - it’ll be a fun learning journey
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl mt-4 font-bold text-gray-900">
              Steering Clear of Common AI Writing Pitfalls
            </h3>
            <p className="text-lg text-gray-700">
              Hello there! As a marketing manager in the SaaS industry, you
              might be looking for innovative ways to engage your audience.. I
              bet generative AI has crossed your mind as an option for creating
              content. Well, let me share from my firsthand experience.
            </p>
            <p className="text-lg text-gray-700">
              Google encourages high-quality blogs regardless of whether they
              are written by humans or created using artificial intelligence
              like ChatGPT. Here is what matters: producing original material
              with expertise and trustworthiness based on Google E-E-A-T
              principles.
            </p>

            <p className="text-lg text-gray-700">
              This means focusing more on people-first writing rather than
              primarily employing AI tools to manipulate search rankings. There
              comes a time when many experienced professionals want to
              communicate their insights but get stuck due to limited writing
              skills – that’s where Generative AI can step in.
            </p>
            <p className="text-lg text-gray-700">
              So, together, we’re going explore how this technology could help
              us deliver valuable content without sounding robotic or defaulting
              into mere regurgitations of existing materials (spoiler alert –
              common pitfalls!). Hang tight - it’ll be a fun learning journey
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl mt-4 font-bold text-gray-900">
              Afterword: The AI Behind This Article
            </h3>
            <p className="text-lg text-gray-700">
              Hello there! As a marketing manager in the SaaS industry, you
              might be looking for innovative ways to engage your audience.. I
              bet generative AI has crossed your mind as an option for creating
              content. Well, let me share from my firsthand experience.
            </p>
            <p className="text-lg text-gray-700">
              Google encourages high-quality blogs regardless of whether they
              are written by humans or created using artificial intelligence
              like ChatGPT. Here is what matters: producing original material
              with expertise and trustworthiness based on Google E-E-A-T
              principles.
            </p>

            <p className="text-lg text-gray-700">
              This means focusing more on people-first writing rather than
              primarily employing AI tools to manipulate search rankings. There
              comes a time when many experienced professionals want to
              communicate their insights but get stuck due to limited writing
              skills – that’s where Generative AI can step in.
            </p>
            <p className="text-lg text-gray-700">
              So, together, we’re going explore how this technology could help
              us deliver valuable content without sounding robotic or defaulting
              into mere regurgitations of existing materials (spoiler alert –
              common pitfalls!). Hang tight - it’ll be a fun learning journey
            </p>
          </div>
          <hr className="my-4 mt-10 border-gray-600" />

        </div>

        {/* Right Sidebar - Author Info and Other Sections */}
        <div className="w-1/4 md:w-1/4 lg:w-[25%] md:pl-10  md:mt-0 ml-8">
         
          <div className="bg-blue-500 text-white p-8 rounded-lg shadow-md text-left">
            <Image
              src="/images/authorImage.png"
              alt="Tamás Hám-Szabó"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Tamás Hám-Szabó</h2>
            <p className="text-sm">
              Founder of SAAS First - the Best AI and Data-Driven Customer
              Engagement Tool
            </p>
            <hr className="my-4" />
            <p className="text-xs mt-2">
              With 13 years in SaaS, I have built MillionVerifier and SaaS
              First. Passionate about SaaS, data, and AI. Let us connect if you
              share the same drive for success!
            </p>
          </div>
  
          <div className="mt-8 text-center">

            <div className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-2">
              <span>Share with your community!</span>
     
              <div className="flex justify-center items-center space-x-4 mt-2 h-12">
                
         
                <a href="#" className="bg-blue-500 p-2 rounded-full">
               
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-square"
                    className="w-6 h-6 text-white" 
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h198.6v-152h-60.3V240h60.3v-40.3c0-59.7 36.8-92.3 90.7-92.3 25.8 0 48 1.9 54.3 2.8v63.2h-37.2c-29.1 0-34.7 13.9-34.7 34.2V240h70.7l-9.3 64h-61.4v152H400c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="bg-blue-500 p-2 rounded-full">
            
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    className="w-6 h-6 text-white" 
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7V165h93.28zM53.14 124.41c-29.74 0-53.9-24.25-53.9-54.19C-.76 40.38 23.3 16 53.14 16c29.79 0 53.9 24.29 53.9 54.21 0 29.96-24.11 54.19-53.9 54.19zm394.86 323.59h-93.28V302.96c0-34.56-12.3-58.1-43.43-58.1-23.66 0-37.69 15.9-43.84 31.18-2.26 5.52-2.83 13.16-2.83 20.89v151.1H219V165h89.22v40.91c-10.32-15.84-28.89-38.47-70.42-38.47-51.45 0-90.05 34.1-90.05 96.08v126.47H7V165h93.28z"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="bg-blue-500 p-2 rounded-full">
               
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="w-6 h-6 text-white" 
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.4 151.7c0 2.6 0 5.2-.1 7.8 0 79.5-60.4 171-171 171-33.8 0-65.3-9.8-92-26.8 4.7.6 9.5.8 14.3.8 28.6 0 55-9.7 76.3-25.9-26.7-.5-49.4-18.1-57.3-42.2 3.7.7 7.5 1.1 11.5 1.1 5.6 0 11.1-.7 16.4-2-27.9-5.6-48.8-30-48.8-59.4 0 0 0 0 0 0 8.2 4.6 17.5 7.5 27.4 7.8-16.3-10.8-27.1-29.1-27.1-50.2 0-11.1 3-21.5 8.3-30.4 29.9 36.7 74.6 60.7 124.3 63.2-1-4.5-1.5-9.1-1.5-14 0-33.8 27.5-61.4 61.4-61.4 17.7 0 33.7 7.4 44.8 19.5 14-2.7 27-7.8 38.7-14.8-4.6 14.3-14.3 26.3-27.1 34-12.7 7.5-27.6 12.5-42.7 14.4 12.9 8 28.4 12.7 44.8 12.7 55.8 0 86.3-46.3 86.3-86.3z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              In this article
            </h2>
            <ul className="space-y-4">
              <li>
                <Link href="#" legacyBehavior>
                  <div className="text-blue-500 hover:underline">
                    Exploring Generative AI in Content Creation
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <div className="text-gray-900 hover:underline">
                    Steering Clear of Common AI Writing Pitfalls
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <div className="text-gray-900 hover:underline">
                    Understanding ChatGPT Capabilities - Define Your Style
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <div className="text-gray-900 hover:underline">
                    Understand Your Readers
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <div className="text-gray-900 hover:underline">
                    Creating Quality AI-powered Blogs that Stand Out
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <div className="text-gray-900 hover:underline">
                    Conclusion: Embracing AI in Blog Creation
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <div className="text-gray-900 hover:underline">
                    Afterword: The AI Behind This Article
                  </div>
                </Link>
              </li>

              {/* Other blog post links */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
