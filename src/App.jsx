import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import AppLayOut from './AppLayOut'
import SwiggyCorporate from './pages/SwiggyCorporate'
import Search from './pages/search'
import Offers from './pages/Offers'
import Help from './pages/Help'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import RestoItemsSep from './pages/RestoItemsSep'
import ErrorPage from './pages/ErrorPage'
import store from './redux/CreateStore';
import PaymentSuccess from './pages/PaymentSuccess'
import Home from './pages/Home'



function App() {
  return <div> 
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayOut/>}>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="/home"  element={<Home/>}></Route>
            <Route path="/swiggyCorporate" element={<SwiggyCorporate/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path='/offers' element={<Offers/>}></Route>
            <Route path='/help' element={<Help/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/city/banglore/:name/:id' element={<RestoItemsSep/>}></Route>
            <Route path='/payment-success' element={<PaymentSuccess/>} ></Route>
        </Route>
        <Route path='/error' element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    
    
  </div>
}

export default App