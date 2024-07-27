import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootState } from "../app/store"

interface IProps{
    children: ReactNode,
    path:string
}


const ProtectedRoute = ({path,children}:IProps) => {
    const {isLogged} = useSelector( (state:RootState) => state.auth ) 
    
    if(!isLogged) return <Navigate to={path} />

    return (
      <div>{children}</div>
    )
}

export default ProtectedRoute