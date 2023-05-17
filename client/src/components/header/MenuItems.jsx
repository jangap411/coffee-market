import React from "react";

const MenuItems = ({ section }) => {
  return (
    <>
      <li>
        <a href="./index.html" className={`${section}-link`}>
          Home
        </a>
      </li>

      <li>
        <a href="/#" className={`${section}-link`}>
          Farmers
        </a>
      </li>

      <li>
        <a href="/#" className={`${section}-link`}>
          Exporters
        </a>
      </li>

      {/* <li>
                <a href="#" className="navbar-link">
                  Web Series
                </a>
              </li> */}

      <li>
        <a href="/#" className={`${section}-link`}>
          Pricing
        </a>
      </li>
    </>
  );
};

export default MenuItems;
