import React from "react";

const Footer = () => {
  return (
    <footer className="pt-32 pb-8">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-[1.2rem] cursor-pointer">
          &copy; {new Date().getFullYear()} Erick Ricky 👋
        </p>
      </div>
    </footer>
  );
};

export default Footer;
