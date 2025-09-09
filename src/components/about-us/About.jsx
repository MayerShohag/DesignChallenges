export default function About() {
     return (
          <>
               <section className="w-[1520px] m-auto">
                    <section className="w-[1077.5px] ml-15 mt-30">
                         <h1 className="text-[61px] font-normal">About us</h1>
                         <hr className="w-[695px]" />
                         <p className="text-[21px] font-normal w-[815px] mt-10">
                              We are a passionate team of travel enthusiasts
                              dedicated to making your travel dreams come true.
                              Our mission is to provide ou with the best travel
                              exprriences.We are a team of travel experts who
                              live and breathe adventure.
                         </p>
                         <section className="flex items-center gap-2 mt-5">
                              <i class="fa-solid fa-arrow-right"></i>
                              <span className="font-normal text-[16px]">
                                   More info
                              </span>
                         </section>
                    </section>
               </section>
               <section className="mt-10 w-[1520px] font-normal text-[21px] flex gap-[50px] justify-center m-auto">
                    <section className="w-[250px]">
                         <li className="mb-8">Client satisfaction</li>
                         <h1 className="text-[76px] font-medium">95%</h1>
                         <p className="text-[16px] mt-[-20px]">We mostly focus on exceeding expectation</p>
                    </section>
                    <section className="w-[250px]">
                         <li className="mb-8">Experienced guides</li>
                         <h1 className="text-[76px] font-medium">12k+</h1>
                         <p className="text-[16px] mt-[-20px]">We are serious about our guides experience.</p>
                    </section>
                    <section className="w-[250px]">
                         <li className="mb-8">Luxury facilities</li>
                         <h1 className="text-[76px] font-medium">470+</h1>
                         <p className="text-[16px] mt-[-20px]">Here you can find top notch facilities.</p>
                    </section>
               </section>
          </>
     );
}
