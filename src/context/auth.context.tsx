import { createContext, ReactNode, useState } from "react"
import { authService } from "../features/auth/services/auth.service"

export const AuthContext = createContext({} as AuthContextType);

type AuthContextType = {
    loggedInUser?: string | null,
    onSubmit?: ()=>void,
    onLogOut?: ()=>void
}
type Props = {
    children:ReactNode
}
export const AuthProvider = ({children}:Props) =>{
    //handlesubmit
    //handlelogout
    //va a devolver el estado --loggedInUser

//estado para almacenar el token
const [loggedInUser, setLoggedInUser]=useState<string|null>(null)

const handleSubmit = async ()=>{
    try {

        const result = await authService.login({
            email:'mi@mail.com',
            password:'1234'
        })
        const {access_token} = result.data;
        console.log(access_token);

        localStorage.setItem('token',access_token)
        setLoggedInUser(access_token);

    } catch (error) {
        console.log(error);
    }
}

const handleLogOut= ()=>{
    localStorage.removeItem('token');
    setLoggedInUser(null);
}

const value = {
    loggedInUser,
    onSubmit: handleSubmit,
    onLogOut: handleLogOut,
}

return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>


)


}