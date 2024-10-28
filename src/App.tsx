import Header from "./layout/Header";
import Home from "./pages/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import About from "./pages/About";
import { Toaster} from 'sonner';
import Footer from "./layout/Footer";
import GlobalStates from "./services/context/GlobalStates";
import { useEffect, useState } from "react";
import i18n from "./services/i18next/i18next";
import { Spinner } from "./components/Loader";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    
    const loadLanguage = () => {
      setIsLoading(false); 
    };

    i18n.on('initialized', loadLanguage);
    
    return () => {
      i18n.off('initialized', loadLanguage);
    };
    
  }, [])

  if(isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <Spinner/>
    </div>
  )

  return (
    <Router>
      <GlobalStates>
        <div className="app-style">
          <Toaster position="top-center" duration={4000} richColors/>
          <Header/>
          <div className="pt-[80px] container mx-auto md:px-10">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </GlobalStates>
    </Router>
  )
}

export default App
