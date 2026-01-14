import React from 'react'

const Footer = () => {
  return (
    <footer className="h-63 bg-primary flex flex-col justify-end">
      <div className="h-full w-full md:flex items-start p-6">
        <img src="/icon.png" alt="icon" className="h-8 mr-4 hidden md:inline" />
        <div className="w-90 md:h-full flex flex-col items-start">
          <img
            src="/logo-m.png"
            alt="icon"
            className="w-auto h-8 object-contain shrink-0"
          />
          <h4 className="text-white text-xs mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </h4>
          <a className="text-white mt-auto hidden md:inline"> back to top</a>
        </div>
        <div className="ml-auto md:pr-2 mt-4 md:mt-0">
          <ul className="flex md:flex-col gap-2 text-end p-2 justify-evenly text-sm text-white">
            <li>HOME</li>
            <li>COLLECTION</li>
            <li>ABOUT US</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-8 bg-[#8F1366] text-white text-center">2025-2026 pepevim all right reserved</div>
    </footer>
  )
}

export default Footer