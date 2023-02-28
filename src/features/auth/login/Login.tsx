import {FormEventHandler} from 'react'

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
}

export const Login = (props: Props) => {
    const {handleSubmit} = props;
  return (
    <section>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <button>Login</button>
        </form>
    </section>
  )
}