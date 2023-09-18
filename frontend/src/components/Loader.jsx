import { Spinner } from "react-bootstrap"

export default function Loader() {
  return (
    <Spinner animation="border" role="status" style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        
    }}>
      
    </Spinner>
  )
}
