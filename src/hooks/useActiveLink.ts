import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveLink } from "../services/context/GlobalStates";

const useActivateLink = () => {
  const {activeLink, setActiveLink} = useActiveLink()
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/'? setActiveLink(0) : setActiveLink(1)
  }, [])

  const handleActiveLink = (to: string, isHomeSection: boolean, index:number) => {
    if (activeLink !== index) {
      setActiveLink(index);
    }
    
    if (isHomeSection && location.pathname !== '/' && to !== "/") {
      navigate('/');
      setTimeout(() => {
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    } else {
      if(to === '/'){
        navigate('/');
        return window.scroll({top:0, behavior:"smooth"})
      } 
      document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
    }
  };    

  return {activeLink, handleActiveLink}
}

export default useActivateLink