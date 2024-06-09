import React from "react";

const Navbar = () => {
  const navLeftLinks = [
    { id: "home", name: "Home" },
    { id: "products", name: "Products" },
  ];

  const navRightLinks = [
    { id: "cart", name: "C" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between bg-[#1A1A1A] px-24 font-montserrat">
      <ul className="flex flex-row text-white">
        {navLeftLinks.map((items) => (
          <li className="px-5 py-3 m-2 rounded-lg outline outline-1 outline-[#262626]" key={items.id}>{items.name}</li>
        ))}
      </ul>
      <h1 className="font-bold text-white text-2xl">Style.Loom</h1>
      <ul className="flex flex-row text-white">
        {navRightLinks.map((items) => (
          <li className="px-5 py-3 m-2 rounded-lg outline outline-1 outline-[#262626]" key={items.id}>{items.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
