import { useEffect,useState} from 'react'
import About from './componants/About/About'
import Banner from './componants/Banner/Banner'
import ChooseUs from './componants/ChooseUs/ChooseUs'
import Footer from './componants/Footer/Footer'
import Hero from './componants/Hero/Hero'
import Navbar from './componants/Navbar/Navbar'
import Popup from './componants/Popup/Popup'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(false)
  const HandlePopup =() =>{
    setShowPopup(true)
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=''>
      <Navbar HandlePopup={HandlePopup}/>
      <Hero/>
      <Banner/>
      <ChooseUs/>
      <About HandlePopup={HandlePopup}/>
      <Banner/>
      <Footer/>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>

    </div>
  )
}

export default App