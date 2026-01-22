import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ButtonAccount = () => {
  const { user, hdlLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const isOpenDropdown = user && isOpen;

  const hdlHover = () => setIsOpen(true);
  const hdlLeave = () => setIsOpen(false);
  const hdlToggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <div
        role="button"
        onMouseEnter={hdlHover}
        onMouseLeave={hdlLeave}
        className="relative flex items-center"
      >
        <NavLink
          to={user ? "/profile" : "/login"}
          className={`
    inline-flex items-center justify-center
    text-white px-3 py-1
    hover:bg-white hover:text-primary
    transition 
    ${user ? "border border-white rounded-md" : ""}
  `}
        >
          {user ? (
            <span className="max-w-25 truncate ">{user?.first_name}</span>
          ) : (
            <FaUser size={22} />
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default ButtonAccount;
