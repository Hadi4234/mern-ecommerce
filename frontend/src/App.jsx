import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from './components/Header'
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
   <>
      <Header/>
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
      </main>

   </>
  )
}
