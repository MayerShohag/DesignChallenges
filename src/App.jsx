import Header from "./components/header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Destination from "./components/desination/Destination";
import Companies from "./components/companies/companies";
import About from "./components/about-us/About";
import Travel from "./components/travel/Travel";
import Newsletter from "./components/newsletter/Newsletter";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import Main_Footer from "./components/main-footer/Main_Footer";
function App() {
     return (
          <>
               <section className="bg-[#0b0801] text-[#ebebeb] font-[Inter]">
                    <Header />
                    <Hero />
                    <Destination />
                    <Companies/>
                    <About/>
                    <Travel/>
                    <Newsletter/>
                    <Services/>
                    <Testimonial/>
                    <Footer/>
                    <Main_Footer/>
               </section>
          </>
     );
}

export default App;
