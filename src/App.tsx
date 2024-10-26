import Header from "./layout/Header";
import Home from "./pages/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import About from "./pages/About";
import { Toaster} from 'sonner';
import Footer from "./layout/Footer";
import GlobalStates from "./services/context/GlobalStates";


const App = () => {

  return (
    <Router>
      <GlobalStates>
        <div className="app-style">
          <Toaster position="top-center" duration={4000} richColors/>
          <Header/>
          <div className="pt-[80px] container mx-auto px-10">
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
