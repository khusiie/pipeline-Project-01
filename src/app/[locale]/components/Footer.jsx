import Image from "next/image";
import footerlogo from "../../../../public/assests/Footer/Footerlogo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white px-2 sm:px-6 md:px-12 pt-4 md:py-12 font-clash">
      <div className="md: max-w-7xl mx-2 py-10 md:mx-autp grid grid-cols-1 md:grid-cols-3 gap-10 md:place-items-centr place-items-left">
        {/* Left Section */}
        <div className="space-y-2  md:max-w-none">
          <h2 className="text-[35px] font-bold uppercase leading-tight">
            Join the movement.<br />
            Shape the winners<br />
            lineup.
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-4 hidden md:flex">
            {[
              {
                label: "Facebook",
                path: "M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z",
              },
              {
                label: "Instagram",
                path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
              },
              {
                label: "YouTube",
                path: "M21.8 8.001s-.2-1.45-.8-2.088c-.763-.837-1.62-.84-2.01-.89C16.5 4.89 12 4.89 12 4.89h-.01s-4.5 0-6.99.133c-.39.05-1.247.053-2.01.89-.6.638-.8 2.088-.8 2.088S2 9.57 2 11.138v1.72c0 1.57.2 3.138.2 3.138s.2 1.45.8 2.088c.763.837 1.763.81 2.21.898 1.6.153 6.79.19 6.79.19s4.51-.006 6.99-.14c.39-.05 1.247-.053 2.01-.89.6-.638.8-2.088.8-2.088s.2-1.568.2-3.138v-1.72c0-1.568-.2-3.137-.2-3.137zM9.75 14.848V9.267l5.25 2.79-5.25 2.79z",
              },
              {
                label: "LinkedIn",
                path: "M20.45 20.45h-3.554v-5.568c0-1.328-.026-3.037-1.85-3.037-1.85 0-2.134 1.444-2.134 2.94v5.665H9.355V9h3.414v1.561h.05c.475-.9 1.637-1.85 3.368-1.85 3.6 0 4.265 2.37 4.265 5.451v6.288zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.07 0-1.145.926-2.07 2.07-2.07 1.144 0 2.07.925 2.07 2.07 0 1.142-.926 2.07-2.07 2.07zM6.993 20.45H3.678V9h3.315v11.45z",
              },
            ].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="group bg-gray-800 hover:bg-[#C6F812] focus:bg-[#C6F812] active:bg-[#C6F812] transition-colors duration-300 p-3 rounded-full"
              >
                <svg
                  className="w-4 h-4 fill-current text-white group-hover:text-black group-focus:text-black group-active:text-black"
                  viewBox="0 0 24 24"
                >
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Center Section */}
        <div className="space-y-4 text-center hidden md:block">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-lime-400"></span>
            <h3 className="uppercase font-bold">Quick Links</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Home",
              "Who We Are",
              "Pricing",
              "Collection",
              "Services",
              "News",
              "Contact Us",
            ].map((link, index) => (
              <button
                key={index}
                className="bg-white hover:bg-lime-400 focus:bg-lime-400 active:bg-lime-400
                           text-black hover:text-black focus:text-black active:text-black
                           px-4 py-2 rounded-full transition duration-300"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6 font-clash hidden md:block">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-lime-400"></span>
            <h3 className="uppercase font-bold">Contact Us</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Pipeline@Studio.Com</li>
            <li>+(3432) 555-0107</li>
            <li>
              4515 Washington Ave.
              <br />
              Manchester,
              <br />
              Kentucky 37495
            </li>
          </ul>
        </div>
      </div>

     <div className="md:hidden grid grid-cols-[3fr_1fr] gap-6 max-w-full mx-auto mt-3 px-2">
  {/* Quick Links */}
  <div>
    <h3 className="font-bold mb-4 flex items-center gap-2 text-sm">
      <span className="h-1 w-1 rounded-full bg-lime-400"></span> Quick Links
    </h3>
    <div className="flex flex-wrap gap-2">
      {[
        "Home",
        "Who We Are",
        "Pricing",
        "Collection",
        "Services",
        "News",
        "Contact Us",
      ].map((link, index) => (
        <button
          key={index}
          className="bg-[#171717] hover:bg-lime-400 focus:bg-lime-400 active:bg-lime-400
                     text-white hover:text-black focus:text-black active:text-black
                     px-3 py-1.5 text-xs rounded-full transition duration-300"
        >
          {link}
        </button>
      ))}
    </div>
  </div>

  {/* Contact Us */}
  <div>
    <h3 className="font-bold mb-4 flex items-center gap-2 text-sm">
      <span className="h-1 w-1 rounded-full bg-lime-400"></span> Contact Us
    </h3>
    <ul className="space-y-2 text-xs">
      <li>Pipeline@Studio.Com</li>
      <li>+(3432) 555-0107</li>
      <li>
        4515 Washington Ave.
        <br />
        Manchester,
        <br />
        Kentucky 37495
      </li>
    </ul>
  </div>
</div>
     {/* Social Icons */}
      <div className="flex mt-5 space-x-4 px-4 md:hidden text-left">
        {[
          {
            label: "Facebook",
            path: "M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z",
          },
          {
            label: "Instagram",
            path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
          },
          {
            label: "YouTube",
            path: "M21.8 8.001s-.2-1.45-.8-2.088c-.763-.837-1.62-.84-2.01-.89C16.5 4.89 12 4.89 12 4.89h-.01s-4.5 0-6.99.133c-.39.05-1.247.053-2.01.89-.6.638-.8 2.088-.8 2.088S2 9.57 2 11.138v1.72c0 1.57.2 3.138.2 3.138s.2 1.45.8 2.088c.763.837 1.763.81 2.21.898 1.6.153 6.79.19 6.79.19s4.51-.006 6.99-.14c.39-.05 1.247-.053 2.01-.89.6-.638.8-2.088.8-2.088s.2-1.568.2-3.138v-1.72c0-1.568-.2-3.137-.2-3.137zM9.75 14.848V9.267l5.25 2.79-5.25 2.79z",
          },
          {
            label: "LinkedIn",
            path: "M20.45 20.45h-3.554v-5.568c0-1.328-.026-3.037-1.85-3.037-1.85 0-2.134 1.444-2.134 2.94v5.665H9.355V9h3.414v1.561h.05c.475-.9 1.637-1.85 3.368-1.85 3.6 0 4.265 2.37 4.265 5.451v6.288zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.07 0-1.145.926-2.07 2.07-2.07 1.144 0 2.07.925 2.07 2.07 0 1.142-.926 2.07-2.07 2.07zM6.993 20.45H3.678V9h3.315v11.45z",
          },
        ].map((icon, index) => (
          <a
            key={index}
            href="#"
            className="group bg-[#171717] hover:bg-[#C6F812] focus:bg-[#C6F812] active:bg-[#C6F812] transition-colors duration-300 p-3 rounded-full"
          >
            <svg
              className="w-4 h-4 fill-current text-white group-hover:text-black group-focus:text-black group-active:text-black"
              viewBox="0 0 24 24"
            >
              <path d={icon.path} />
            </svg>
          </a>
        ))}
      </div>
{/* Footer Image */}
<div className="mt-12 px-2 text-center pb-4">
  <Image
    src={footerlogo}
    alt="Your Brand Banner"
    width={425}
    className="rounded-lg mx-auto h-auto w-auto"
  />
</div>



    </footer>
  );
}