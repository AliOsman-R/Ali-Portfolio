export type NavBarType = {
    name:string,
    to:string,
    isHomeSection:boolean
}


export type ContextProps = {
    children:React.ReactNode
}
  
export type GlobalStatesType = {
    activeLink:number,
    setActiveLink:React.Dispatch<React.SetStateAction<number>>
}