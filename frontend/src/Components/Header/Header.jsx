import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [currentTime, setCurrentTime] = useState("");

  // Function to get current time
  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    return `${hours}:${minutes}:${seconds} ${period}`;
  };

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  return (
    <div
      className={` h-14 w-full flex justify-between items-center${
        isDarkMode
          ? " bg-black text-white "
          : " bg-secendaryColor "
      }`}>
      <div className="h-full">
        <img src="/icons/menu.png" className="h-full" alt="menu" />
      </div>
      <div className="h-full flex items-center justify-center">
        <p className="font-Paraline text-lg font-normal">
          Date: {currentDate} & Time: {currentTime}
        </p>
      </div>
      <div className="h-full flex items-center justify-center pr-2 gap-2">
        <p className="font-Headline">Hello, Admin</p>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={60}
        />
      </div>
    </div>
  );
};

export default Header;
