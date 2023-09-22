import { useParams, Link,useNavigate } from "react-router-dom";
import { Row,Col,Image,ListGroup,Card,Button,Form } from "react-bootstrap";
import Rating from "../components/Rating"
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import {useDispatch} from 'react-redux'
import { useState } from "react";
import {addToCart} from '../slices/cartSlice'



export default function ProductScreen() {

    const {id:productId}=useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [qty,setQty] = useState(1);
    
    const {data: product,isLoading,error}= useGetProductDetailsQuery(productId);
    const addToCardHandler=()=>{
        dispatch(addToCart({...product, qty}));
        navigate('/cart');
    }


  return (
    <>
      <Link className="btn btn-light my-3" to='/'>
        Go Back
      </Link>
       { isLoading ? (
        <Loader/>
       ) : error ? (
        <div>{error?.data?.message }</div>
       ) : (
        <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />

        </Col>
        <Col md={4}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price} </ListGroup.Item>
                <ListGroup.Item>${product.description} </ListGroup.Item>

            </ListGroup>
            
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>Price</Col>                      
                            <Col>
                              <strong>${product.price}</strong>
                            </Col>
                        </Row>

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status</Col>                      
                            <Col>
                              <strong>{product.countInStock > 0 ? "In Stock":"Out Of Stock"}</strong>
                            </Col>
                        </Row>

                    </ListGroup.Item>

                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col>
                                   <Form.Control as='select'
                                     value={qty} 
                                     onChange={(e)=> setQty(e.target.value)}
                                    >
                                    {[...Array(product.countInStock).keys()].map( 
                                        (x) => (
                                        <option key={x + 1} value={x + 1}  >
                                            {x + 1}
                                        </option>
                                    )
                                    )}

                                   </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}


                    <ListGroup.Item>
                        <Button className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                        onClick={addToCardHandler}>
                            Add To Card
                        </Button>
                    </ListGroup.Item>

                </ListGroup>
            </Card>
            
        </Col>
      </Row>

       )}
      
    </>
  )
}
