import Route from './router'
import { BrowserRouter } from 'react-router-dom'
import './reset.css'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' />
        <ToastContainer autoClose={3000} position='top-left' />
      </BrowserRouter>
    </>
  )

}

export default App;
