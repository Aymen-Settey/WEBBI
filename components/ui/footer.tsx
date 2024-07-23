import React from "react";

const Footer = () => {
  return (
    <div
      className="p-5 text-center bottom-0 w-full text-white backdrop-blur"
      style={{ backgroundColor: "#294686" }}
    >
      <p>
        © {new Date().getFullYear()} ITALCAR Dashboard Services. Coded with ❤️
        by{" "}
        <b>
          <a
            href="https://6564e4bcc8ac301282e621c0--eloquent-paletas-faff5b.netlify.app/"
            target="_blank"
          >
            Aymen7ey
          </a>{" "}
        </b>
        .
      </p>
      <p className="mt-2 text-sm">All rights reserved.</p>
      {/* <nav className="mt-2">
        <a href="#" className="mr-4 text-white hover:text-gray-800">
          Terms of Service
        </a>
        <span className="text-gray-400">|</span>
        <a href="#" className="ml-4 text-white hover:text-gray-800">
          Privacy Policy
        </a>
      </nav> */}
    </div>
  );
};

export default Footer;
