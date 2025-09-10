export default function Travel() {
     return (
          <>
               <section className="w-[1520px] m-auto">
                    <section>
                         <section>
                              <p className="text-2xl font-medium text-center mt-30">
                                   Why choose us?
                              </p>
                              <h1 className="text-[64px] text-center font-medium mt-5 leading-20">
                                   Let us show you the beauty of <br /> the
                                   world!
                              </h1>
                         </section>
                         <section className="flex justify-end mr-10">
                              <button className="flex items-center gap-2 cursor-pointer">
                                   <span className="underline">See all</span>
                                   <i class="fa-solid fa-arrow-right"></i>
                              </button>
                         </section>
                         <section className="p-8 flex gap-[24px] ">
                              <section className="border-[#ADADADC2] border rounded-2xl bg-[#7575752E] p-5">
                                   <img
                                        src="/travel_element/behicle.png"
                                        className="w-[64px] h-[64px] mb-5"
                                        alt="behicle image"
                                   />
                                   <h1 className="text-2xl font-semibold text-[#F4F4F4] mb-2">
                                        Tour and travel
                                   </h1>
                                   <p className="text-[16px] font-normal text-[#C9C9C9]">
                                        Indulge in luxury with our exclusive
                                        special offers. Enjoy complimentary
                                        upgrades, fine dining experiences,
                                   </p>
                              </section>
                              <section className="border-[#ADADADC2] border rounded-2xl bg-[#7575752E] p-5">
                                   <img
                                        src="/travel_element/wallet.png"
                                        className="w-[64px] h-[64px] mb-5"
                                        alt="wallet image"
                                   />
                                   <h1 className="text-2xl font-semibold text-[#F4F4F4] mb-2">
                                        Budget package
                                   </h1>
                                   <p className="text-[16px] font-normal text-[#C9C9C9]">
                                        Indulge in luxury with our exclusive
                                        special offers. Enjoy complimentary
                                        upgrades, fine dining experiences,
                                   </p>
                              </section>
                              <section className="border-[#ADADADC2] border rounded-2xl bg-[#7575752E] p-5">
                                   <img
                                        src="/travel_element/compass.png"
                                        className="w-[64px] h-[64px] mb-5"
                                        alt="compass image"
                                   />
                                   <h1 className="text-2xl font-semibold text-[#F4F4F4] mb-2">
                                        Adventure
                                   </h1>
                                   <p className="text-[16px] font-normal text-[#C9C9C9]">
                                        Indulge in luxury with our exclusive
                                        special offers. Enjoy complimentary
                                        upgrades, fine dining experiences,
                                   </p>
                              </section>
                         </section>
                    </section>
                    <section className="flex items-center justify-center">
                         <button className="bg-[#FFFFFF] cursor-pointer flex items-center gap-2 text-[#001B30] font-bold text-2xl px-5 py-1 rounded-4xl">
                              Book now
                              <i class="fa-solid fa-arrow-right text-[15px] rotate-[-45deg]"></i>
                         </button>
                    </section>
               </section>
          </>
     );
}
