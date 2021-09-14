import Route from './router'
import { HashRouter } from 'react-router-dom'
import './reset.css'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
      <HashRouter>
        <Route path='/' />
        <ToastContainer autoClose={3000} position='top-left' />
      </HashRouter>
    </>
  )

}

export default App;
