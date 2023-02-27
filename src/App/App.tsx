import { Layout } from '../components/layout';
import { Books, Book } from '../features/books';
import { Home } from '../features/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../features/auth/login/Login';
import { Register } from '../features/auth/register/Register';
import { NoMatch } from '../features/no-match';

type Props = {}

export const App = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='*' element={<NoMatch />}/>
        </Route>
      </Routes>
    </Router>
  )
}

