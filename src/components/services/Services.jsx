export default function Services() {
     return (
          <>
               <section className="w-[1520px] m-auto">
                    <section>
                         <section>
                              <p className="text-2xl font-medium text-center mt-30">
                                   What we serve?
                              </p>
                              <h1 className="text-[64px] text-center font-medium mt-5 leading-20">
                                   Top values for you
                              </h1>
                              <p className="text-center py-4">
                                   Escape the ordinary with handpicked travel
                                   experiences made just for you. <br /> Your
                                   dream destination, brought to
                                   life—effortlessly and memorably.
                              </p>
                         </section>
                         <section className="flex gap-10 mt-10 justify-center">
                              <section className="w-[295px] h-[325px] relative ">
                                   <section className="absolute bottom-2 p-4">
                                        <h1 className="text-2xl font-medium mb-2">
                                             Custom Destinations
                                        </h1>
                                        <p className="text-[16px] font-normal">
                                             Customize your destination for a
                                             journey that’s truly yours.Tailor
                                             your
                                        </p>
                                   </section>
                                   <section className="absolute top-4 right-4 bg-[#0F0F0F5E] w-[32px] h-[32px] flex items-center justify-center p-1 rounded-4xl">
                                        <a href="#">
                                             <i class="fa-solid fa-arrow-right rotate-[-45deg]"></i>
                                        </a>
                                   </section>
                                   <img
                                        className="w-full h-full object-cover rounded-2xl object-bottom-right"
                                        src="../../../public/service_element/destination.png"
                                        alt="destination image"
                                   />
                              </section>

                              <section className="w-[295px] h-[325px] relative ">
                                   <section className="absolute bottom-2 p-4">
                                        <h1 className="text-2xl font-medium mb-2">
                                             24/7 Available
                                        </h1>
                                        <p className="text-[16px] font-normal">
                                             Customize your destination for a
                                             journey that’s truly yours.Tailor
                                             your
                                        </p>
                                   </section>
                                   <section className="absolute top-4 right-4 bg-[#0F0F0F5E] w-[32px] h-[32px] flex items-center justify-center p-1 rounded-4xl">
                                        <a href="#">
                                             <i class="fa-solid fa-arrow-right rotate-[-45deg]"></i>
                                        </a>
                                   </section>
                                   <img
                                        className="w-full h-full object-cover rounded-2xl object-bottom-right"
                                        src="../../../public/service_element/available.png"
                                        alt="available image"
                                   />
                              </section>

                              <section className="w-[295px] h-[325px] relative ">
                                   <section className="absolute bottom-2 p-4">
                                        <h1 className="text-2xl font-medium mb-2">
                                             Private Transport
                                        </h1>
                                        <p className="text-[16px] font-normal">
                                             Customize your destination for a
                                             journey that’s truly yours.Tailor
                                             your
                                        </p>
                                   </section>
                                   <section className="absolute top-4 right-4 bg-[#0F0F0F5E] w-[32px] h-[32px] flex items-center justify-center p-1 rounded-4xl">
                                        <a href="#">
                                             <i class="fa-solid fa-arrow-right rotate-[-45deg]"></i>
                                        </a>
                                   </section>
                                   <img
                                        className="w-full h-full object-cover rounded-2xl object-bottom-right"
                                        src="../../../public/service_element/transport.png"
                                        alt="transport image"
                                   />
                              </section>

                              <section className="w-[295px] h-[325px] relative ">
                                   <section className="absolute bottom-2 p-4">
                                        <h1 className="text-2xl font-medium mb-2">
                                             Experienced Guide
                                        </h1>
                                        <p className="text-[16px] font-normal">
                                             Customize your destination for a
                                             journey that’s truly yours.Tailor
                                             your
                                        </p>
                                   </section>
                                   <section className="absolute top-4 right-4 bg-[#0F0F0F5E] w-[32px] h-[32px] flex items-center justify-center p-1 rounded-4xl">
                                        <a href="#">
                                             <i class="fa-solid fa-arrow-right rotate-[-45deg]"></i>
                                        </a>
                                   </section>
                                   <img
                                        className="w-full h-full object-cover rounded-2xl object-bottom-right"
                                        src="../../../public/service_element/experience.png"
                                        alt="experience image"
                                   />
                              </section>
                         </section>
                    </section>
                    <section className="flex justify-center py-8 ">
                         <button className="border cursor-pointer hover:bg-amber-50 hover:text-black font-medium  px-5 py-[6px] flex items-center gap-1 rounded-4xl">
                              See all services
                              <i class="fa-solid fa-arrow-right"></i>
                         </button>
                    </section>
               </section>
          </>
     );
}
