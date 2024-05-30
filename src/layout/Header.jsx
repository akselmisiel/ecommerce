function Header() {
  return (
    <header className="w-full h-[136px] pb-2 bg-white flex flex-col justify-start items-center gap-3">
      <div className="w-full h-[58px] pt-[9px] pb-[3px] bg-slate-800 flex justify-between items-center px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1 p-2.5 rounded-[5px] text-white text-sm font-bold font-['Montserrat']">
            <i className="fa-solid fa-phone" /> (225) 555-0118
          </span>
          <span className="flex items-center gap-1 p-2.5 rounded-[5px] text-white text-sm font-bold font-['Montserrat']">
            <i className="fa-regular fa-envelope" /> michelle.rivera@example.com
          </span>
        </div>
        <span className="p-2.5 text-white text-sm font-bold font-['Montserrat']">
          Follow Us and get a chance to win 80% off
        </span>
        <div className="flex items-center gap-2.5 p-2.5">
          <span className="text-white text-sm font-bold font-['Montserrat']">
            Follow Us:
          </span>
          <div className="flex items-center gap-1">
            <a href="https://instagram.com" className="p-1 flex items-center">
              <i className="fa-brands fa-instagram text-white" />
            </a>
            <a href="https://youtube.com" className="p-1 flex items-center">
              <i className="fa-brands fa-youtube text-white" />
            </a>
            <a href="https://facebook.com" className="p-1 flex items-center">
              <i className="fa-brands fa-facebook text-white" />
            </a>
            <a href="https://x.com" className="p-1 flex items-center">
              <i className="fa-brands fa-twitter text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-[17px]">
        <span className="pr-[79px] py-[13px] text-slate-800 text-2xl font-bold font-['Montserrat']">
          Bandage
        </span>
        <div className="w-full flex justify-between items-center px-[17px]">
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="text-neutral-500 text-sm font-bold font-['Montserrat']"
            >
              Home
            </a>
            <a
              href="#"
              className="text-slate-800 text-sm font-medium font-['Montserrat']"
            >
              Shop <i class="fa-solid fa-caret-down" />
            </a>
            <a
              href="#"
              className="text-neutral-500 text-sm font-bold font-['Montserrat']"
            >
              About
            </a>
            <a
              href="#"
              className="text-neutral-500 text-sm font-bold font-['Montserrat']"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-neutral-500 text-sm font-bold font-['Montserrat']"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-neutral-500 text-sm font-bold font-['Montserrat']"
            >
              Pages
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="flex items-center p-[15px] rounded-[37px] gap-2 text-center text-sky-500 text-sm font-bold font-['Montserrat']">
              <i class="fa-regular fa-user"></i> Login / Register
            </span>
            <div className="w-[46px] h-[46px] flex justify-center items-center p-[15px] rounded-[37px]">
              <div className="w-4 h-4 flex justify-center items-center">
                <i class="fa-solid fa-magnifying-glass text-sky-500" />
              </div>
            </div>
            <div className="w-14 h-[46px] flex justify-center gap-2 items-center p-[15px] rounded-[37px]">
              <div className="w-4 h-4 pr-px pt-px flex justify-center items-center">
                <i class="fa-solid fa-cart-shopping text-sky-500" />
              </div>
              <span className="text-center text-sky-500 text-xs font-normal font-['Montserrat']">
                1
              </span>
            </div>
            <div className="w-14 h-[46px] flex justify-center gap-2 items-center p-[15px] rounded-[37px]">
              <div className="w-4 h-4 pb-px flex justify-center items-center">
                <i class="fa-regular fa-heart text-sky-500" />
              </div>
              <span className="text-center text-sky-500 text-xs font-normal font-['Montserrat']">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
