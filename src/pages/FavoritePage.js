import React,{useState, useEffect} from "react";
import { Container, Row,Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import productActions from "../redux/actions/product.actions";
import PaginationBar from "../components/PaginationBar";
import {useHistory} from "react-router-dom";



const FavoritePage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const products = useSelector((state) => state.product.products);
  const totalPages = useSelector((state) => state.product.totalPages);
  const [pageNum, setPageNum] = useState(1);
  const limit = 6;

  useEffect(() => {
    dispatch(productActions.getAllFavoriteProducts(pageNum,limit));
  }, [dispatch,pageNum,limit]);
    
  
  // const handleClick = () =>{
  //   console.log("jhjh",e.target.value)
  //   dispatch(productActions.getAllProducts(pageNum,limit,category));
  // }

  const handleClickProduct = (id) => {
    history.push(`/products/${id}`)
  }

  return (
    <div>
    <Container fluid className="text-center favorite-header">
        <h1 className="header-title">FAVORITE</h1>
    </Container>
    <Container style={{minHeight:"80vh"}} className="py-5 d-flex justify-content-center">
      <Row>
      {products.map((p)=>(
        <ProductCard product ={p} handleClickProduct={handleClickProduct}/>
      ))}
      </Row>
      
    </Container>
    <PaginationBar pageNum={pageNum} setPageNum={setPageNum} totalPages={totalPages}/>
    </div>
  );
};

export default FavoritePage;

