export default function Footer() {
     return (
          <>
               <section className="w-[1520px] m-auto pt-20 relative">
                    <h1 className="text-[64px] text-center font-medium mt-5 leading-20">
                         Pack your bags, your <br />{" "}
                         <span className="text-[#B5B5B5]">
                              adventure awaits!
                         </span>
                    </h1>
                    <section className="flex items-center justify-center absolute top-30 right-20">
                         <button className="bg-[#FFFFFF] flex items-center gap-2 text-[#001B30] font-medium cursor-pointer text-[21px] px-5 py-1 rounded-4xl">
                              Book vacations
                         </button>
                    </section>
                    <section className="flex w-[1240px] m-auto justify-between items-center py-2">
                         <section>
                              <section>
                                   <img
                                        src="/logo.png"
                                        alt="footer logo"
                                        className="w-[203px] h-[48px]"
                                   />
                              </section>
                              <p className="text-[#D4D4D4] mt-4 text-[21px]">
                                   Perfect location for a <br /> relaxing
                                   vacation
                              </p>
                         </section>
                         <section>
                              <ul className="text-[21px] font-normal">
                                   <a href="#">
                                        <li className="my-4">ABOUT US</li>
                                   </a>
                                   <a href="#">
                                        <li className="my-4">OUR SERVICES</li>
                                   </a>
                                   <a href="#">
                                        <li className="my-4">OUR RESORTS</li>
                                   </a>
                                   <a href="#">
                                        <li className="my-4">
                                             TERMS AND <br /> CONDITIONS
                                        </li>
                                   </a>
                              </ul>
                         </section>
                         <section>
                              <ul className="text-[21px] font-normal">
                                   <li className="font-medium">
                                        Contact Number
                                   </li>
                                   <li className="mb-4">480 555 0103</li>
                                   <li>Email Address</li>
                                   <li>Travelvlog@gmail.com</li>
                              </ul>
                         </section>
                    </section>
               </section>
          </>
     );
}
