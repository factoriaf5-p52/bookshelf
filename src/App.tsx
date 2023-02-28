import { FormEventHandler, useState } from 'react'

import './App.css'
import { Navigation } from './components/navigation'
import { Routes,Route,useNavigate} from 'react-router-dom'
import { Login } from './features/auth/login'
import { Books } from './features/books'
import { Home } from './features/home'
import { NoMatch } from './features/no-match'
import { authService } from './features/auth/services/auth.service'

function App() {
//hook de navegación
  const navigate = useNavigate()
//estado para almacenar el token
  const [loggedInUser, setLoggedInUser]=useState<string|null>(null)
//método para manejar evento onSubmit de Login
  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e)=>{
    e.preventDefault();

    try {
      const result = await authService.login({
        email:'mi@mail.com',
        password:'1234'
      })
      console.log(result.data.access_token);

      const {access_token} = result.data;
//almacenamos token en localstorage


      localStorage.setItem('token',access_token)
//refrescamos estado
      setLoggedInUser(localStorage.getItem('token'))
//si el login es ok navegamos a ruta protegida
      navigate('/books',{replace:true});



    } catch (error) {
      console.log(error);

    }
  }
//método logOut. Elimina token de almacenamiento y navega a la Home
  const onLogOut = ()=>{
    localStorage.removeItem('token')
    setLoggedInUser(null)
    navigate('/')
  }
  return (
    <>
    <Navigation loggedInUser={loggedInUser} onLogOut = {onLogOut}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books' element={<Books />}/>
      <Route path='/auth/login' element={<Login handleSubmit = {handleSubmit}/>}/>
      <Route path='*' element={<NoMatch />} />
      {/* <Route path='/auth/register' element={<Register />}/> */}

    </Routes>
    </>
  )
}

export default App
