export type NavBarType = {
    name:string,
    to:string,
    isRouteLink:boolean
}


export type ContextProps = {
    children:React.ReactNode
}
  
export type GlobalStatesType = {
    activeLink:string,
    setActiveLink:React.Dispatch<React.SetStateAction<string>>
}