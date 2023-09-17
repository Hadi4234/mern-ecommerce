import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    

  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>ProShop @2023 </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
