import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import HomeScreen from "./screens/HomeScreen";
import  Footer  from "./components/Footer";
import {logout} from "./slices/authSlice.js";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > expirationTime) {
        dispatch(logout());
      }
    }
  }, [dispatch]);
  return (
   <>
      <Header/>
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
      <ToastContainer/>
   </>
  )
}
