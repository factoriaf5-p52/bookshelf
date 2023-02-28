import { FormEventHandler, useContext } from 'react'
// import { AuthContext } from '../../../context/auth.context';
import { useAuth } from '../../../hooks/auth.hook';



export const Login = () => {

  // const {onSubmit} = useContext(AuthContext);
  const { onSubmit } = useAuth();


  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (onSubmit)
      return onSubmit();
  }

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}