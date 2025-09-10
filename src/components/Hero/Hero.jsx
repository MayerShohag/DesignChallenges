export default function Hero() {
     return (
          <>
               <section className="w-[1520px] m-auto">
                    <section className="w-[1438px] h-[1000px] m-auto mr-0">
                         <section className="relative">
                              <h1 className="text-[194px] font-bold">
                                   Feel the thrill{" "}
                                   <span className="text-[60px] absolute bottom-[72px] leading-[50px]">
                                        of mountain
                                   </span>
                              </h1>
                         </section>
                         <section className="flex">
                              <section className="w-[440px] h-[100px] relative">
                                   <ul className="list-disc absolute top-[370px] px-5 text-[21px]">
                                        <li className="font-bold text-[#D4D4D4]">
                                             MOUNTIAN
                                        </li>
                                        <li className="font-normal text-[#D4D4D4]">
                                             SEA BEACH
                                        </li>
                                        <li className="font-normal text-[#D4D4D4]">
                                             RAIN FOREST
                                        </li>
                                        <li className="font-normal text-[#D4D4D4]">
                                             ANIMAL PARK
                                        </li>
                                        <li className="font-normal text-[#D4D4D4]">
                                             WATER PARK
                                        </li>
                                        <li className="font-normal text-[#D4D4D4]">
                                             VIEW LAKE
                                        </li>
                                   </ul>
                              </section>
                              <section className="w-[1000px] m-auto relative mr-0 flex flex-wrap gap-4">
                                   <section className="w-[220px] h-[355px]">
                                        <img
                                             src="/hero_element/thailand-image.png"
                                             alt="thailand"
                                             className="w-[220px] h-[314px] object-cover rounded-[10px]"
                                        />
                                        <p>
                                             <span className="mt-2 inline-block font-bold">
                                                  Phuket
                                             </span>
                                             , Thailand
                                        </p>
                                   </section>
                                   <section className="switzerland w-[220px] h-[183px]">
                                        <img
                                             src="/hero_element/switzerland-image.png"
                                             alt="switzerland"
                                             className="w-[220px] h-[183px] rounded-[10px]"
                                        />
                                        <p>
                                             <span className="mt-2 inline-block font-bold">
                                                  Flonalpstock
                                             </span>
                                             , Switzerland
                                        </p>
                                   </section>
                                   <section className="lampang w-[220px] h-[355px] mt-3">
                                        <img
                                             src="/hero_element/lampang-image.png"
                                             alt="lampang"
                                             className="rounded-[10px] w-[220px] h-[314px] object-cover object-top-left"
                                        />
                                        <p>
                                             <span className="mt-2 inline-block font-bold">
                                                  Mae Moh
                                             </span>
                                             , Lampang
                                        </p>
                                   </section>
                                   <section className="nepal w-[240px] h-[224px]">
                                        <img
                                             src="/hero_element/lepal-image.png"
                                             alt="nepal"
                                             className="rounded-[10px] object-cover"
                                        />
                                        <p>
                                             <span className="mt-2 inline-block font-bold">
                                                  Himalayas
                                             </span>
                                             , Nepal
                                        </p>
                                   </section>
                                   <section className="japan w-[220px]  h-[205px]  absolute top-[355px]">
                                        <img
                                             src="/hero_element/japan-image.png"
                                             alt="japan"
                                             className="rounded-[10px] w-[220px] h-[100px] object-cover"
                                        />
                                        <p>
                                             <span className="mt-2 inline-block font-bold">
                                                  Mt. Fuji sunset
                                             </span>
                                             , Japan
                                        </p>
                                   </section>
                                   <section className="temp-image-1 w-[220px] h-[335px]  absolute top-[225px] left-[236px]">
                                        <img
                                             src="/hero_element/thailand-image.png"
                                             alt="Thailand"
                                             className="rounded-[10px] w-[220px] h-[180px]"
                                        />
                                        <p>
                                             <span className="mt-2 inline-block font-bold">
                                                  Phuket
                                             </span>
                                             , Thailand
                                        </p>
                                   </section>
                                   <section className="temp-image-2 w-[220px] h-[190px]  absolute top-[370px] right-[304px] ">
                                        <img
                                             src="/hero_element/lepal-image.png"
                                             alt="nepal"
                                             className="rounded-[10px]"
                                        />
                                        <p>
                                             <span className="mt-2 inline-block font-bold">
                                                  Flonalpstock
                                             </span>
                                             , Switzerland
                                        </p>
                                   </section>
                                   <section className="temp-image-3 absolute w-[240px]  h-[360px] top-[200px] right-[48px]">
                                        <img
                                             src="/hero_element/japan-image.png"
                                             alt="lampang"
                                             className="w-[240px] h-[318px] object-cover rounded-[10px]"
                                        />
                                        <p>
                                             <span className="mt-2 inline-block font-bold">
                                                  Mae Moh
                                             </span>
                                             , Lampang
                                        </p>
                                   </section>
                              </section>
                         </section>
                    </section>
               </section>
          </>
     );
}
