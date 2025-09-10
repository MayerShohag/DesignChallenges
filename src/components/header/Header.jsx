
export default function Header() {
     return (
          <>
               <nav className="flex items-center justify-between w-[1326px] mx-auto py-[30px]">
                    <section className="nav-container">
                         <section className="logo">
                              <a href="#home">
                                   <img
                                        src='/logo.png'
                                        className="w-[166px] h-[40px]"
                                        alt="logo"
                                   />
                              </a>
                         </section>
                    </section>
                    <section className="nav-menu flex items-center justify-between w-[965px]">
                         <section className="about-section">
                              <ul>
                                   <li>
                                        <a
                                             href="#about"
                                             className="text-[16px] font-medium text-[#D4D4D4] hover:text-white"
                                        >
                                             ABOUT US
                                        </a>
                                   </li>
                              </ul>
                         </section>
                         <section className="menus">
                              <ul className="flex gap-[32px] items-center text-[16px] font-medium text-[#D4D4D4]">
                                   <li>
                                        <a
                                             href="#top-destinations"
                                             className="hover:text-white"
                                        >
                                             TOP DESTINATIONS
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="#testimonial"
                                             className="hover:text-white"
                                        >
                                             TESTIMONIAL
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="#sevices"
                                             className="hover:text-white"
                                        >
                                             SERVICES
                                        </a>
                                   </li>
                                   <button className="rounded-[38px] hover:bg-[#EBEBEB] hover:text-[#0B0801] border-2 px-5 py-1 cursor-pointer">
                                        CONTACT US
                                   </button>
                              </ul>
                         </section>
                    </section>
               </nav>
          </>
     );
}
