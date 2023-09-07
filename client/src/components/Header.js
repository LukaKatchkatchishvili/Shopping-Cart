import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BiDownArrowAlt, BiCart } from "react-icons/bi"; // Import the BiDownArrowAlt icon
import { useAddedItems } from "../useContext/addedItemsContext";

const Header = () => {
  const { t, i18n } = useTranslation();

  const { cartedItems } = useAddedItems();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <div>
      <header className="container flex justify-between items-center py-2">
        <div className="flex justify-between items-center gap-5">
          <div className="language">
            <div className="relative">
              <BiDownArrowAlt
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none cursor-pointer"
                size={24} // Adjust the size as needed
              />
              <select
                onChange={handleLanguageChange}
                className="border-none outline-none rounded-md mr-1 pl-2 pr-8 hover:bg-transparent appearance-none bg-transparent"
              >
                <option value="en">EN</option>
                <option value="ka">KA</option>
              </select>
            </div>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="border py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <h1 className="text-2xl font-bold">{t("logo")}</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-5 text-base">
            <Link to="/register">
              <li>{t("nav.register")}</li>
            </Link>
            <Link to="/login">
              <li>{t("nav.login")}</li>
            </Link>
            <div className="cart relative">
              <Link to="/cart">
                <BiCart size={30} />
              </Link>
              {cartedItems.items.length > 0 ? (
                <div className="absolute -top-1 -right-3 bg-gray-500 text-white text-sm px-1.5 rounded-xl">
                  {cartedItems.items.length}
                </div>
              ) : (
                ""
              )}
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
