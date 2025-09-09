export default function Destination() {
     return (
          <>
               <section className="w-[1328px] h-[900px] m-auto">
                    <h1 className="text-[64px] text-center font-medium">
                         Your next dream destinations
                    </h1>
                    <section className="mt-[30px] flex gap-3 text-[21px] font-medium">
                         <span className="px-4 py-1 border-t-1 border-b-[1px] rounded-[38px] border-t-[#2B2B2BD6] border-b-[#8D8D8D] text-[#D4D4D4] hover:text-[#FFF]">
                              Popular
                         </span>
                         <span className="px-4 py-1 border-t-1 border-b-[1px] rounded-[38px] border-t-[#2B2B2BD6] border-b-[#8D8D8D] text-[#D4D4D4] hover:text-[#FFF]">
                              Adventure
                         </span>
                         <span className="px-4 py-1 border-t-1 border-b-[1px] rounded-[38px] border-t-[#2B2B2BD6] border-b-[#8D8D8D] text-[#D4D4D4] hover:text-[#FFF]">
                              Budget
                         </span>
                         <span className="px-4 py-1 border-t-1 border-b-[1px] rounded-[38px] border-t-[#2B2B2BD6] border-b-[#8D8D8D] text-[#D4D4D4] hover:text-[#FFF]">
                              Luxury
                         </span>
                         <span className="px-4 py-1 border-t-1 border-b-[1px] rounded-[38px] border-t-[#2B2B2BD6] border-b-[#8D8D8D] text-[#D4D4D4] hover:text-[#FFF]">
                              Mid-range
                         </span>
                         <span className="px-4 py-1 border-t-1 border-b-[1px] rounded-[38px] border-t-[#2B2B2BD6] border-b-[#8D8D8D] text-[#D4D4D4] hover:text-[#FFF]">
                              Family-friendly
                         </span>
                    </section>
                    <section className="flex gap-[23px] mt-10">
                         <section className="w-[524px] h-[573px] relative">
                              <section>
                                   <span className="bg-[#0a0a0a66] border-2 absolute top-4 left-4 flex items-center  border-white px-5 rounded-4xl py-1 text-white font-medium">
                                        3 day, 2 night
                                   </span>
                                   <a
                                        href="#"
                                        className="bg-[#0a0a0a66] absolute top-4 right-4 flex items-center border-white p-2 rounded-4xl text-white font-medium"
                                   >
                                        <i class="fa-regular fa-heart"></i>
                                   </a>
                              </section>
                              <section className="w-[524px] h-[573px]">
                                   <img
                                        src="../../../public/destination_element/images-1.png"
                                        alt="image-1"
                                        className="w-full h-full object-cover rounded-2xl"
                                   />
                              </section>
                         </section>
                         <section className="flex flex-wrap gap-[23px]">
                              <section className="w-[378px] h-[274px] relative">
                                   <section className="absolute bottom-4 flex items-center gap-2 text-white font-normal left-4">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span className="">
                                             Vernazza, La Spezia, Italien
                                        </span>
                                   </section>
                                   <section className="absolute top-4 right-4">
                                        <a
                                             href="#"
                                             className="bg-[#0a0a0a66] p-2 rounded-4xl font-medium"
                                        >
                                             <i class="fa-solid fa-arrow-right rotate-[-45deg]"></i>
                                        </a>
                                   </section>
                                   <img
                                        src="../../../public/destination_element/images-5.png"
                                        alt="image-2"
                                        className="w-full h-full object-cover rounded-2xl"
                                   />
                              </section>
                              <section className="w-[378px] h-[274px] relative">
                                   <section className="absolute bottom-4 flex items-center gap-2 text-white font-normal left-4">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span className="">
                                             Vernazza, La Spezia, Italien
                                        </span>
                                   </section>
                                   <section className="absolute top-4 right-4">
                                        <a
                                             href="#"
                                             className="bg-[#0a0a0a66] p-2 rounded-4xl font-medium"
                                        >
                                             <i class="fa-solid fa-arrow-right rotate-[-45deg]"></i>
                                        </a>
                                   </section>
                                   <img
                                        src="../../../public/destination_element/images-4.png"
                                        alt="image-3"
                                        className="w-full h-full object-cover rounded-2xl"
                                   />
                              </section>
                              <section className="w-[780px] h-[274px] relative">
                                   <section className="absolute bottom-4 flex items-center gap-2 text-white font-normal left-4">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span className="">
                                             Vernazza, La Spezia, Italien
                                        </span>
                                   </section>
                                   <section className="absolute top-4 right-4">
                                        <a
                                             href="#"
                                             className="bg-[#0a0a0a66] p-2 rounded-4xl font-medium"
                                        >
                                             <i class="fa-solid fa-arrow-right rotate-[-45deg]"></i>
                                        </a>
                                   </section>
                                   <img
                                        src="../../../public/destination_element/images-3.png"
                                        alt="image-3"
                                        className="w-full h-full object-cover object-center-left rounded-2xl"
                                   />
                              </section>
                         </section>
                    </section>
               </section>
          </>
     );
}
