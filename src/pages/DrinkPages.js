import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners";
import { ProductCard } from "../components/ProductCard";
import productActions from "../redux/actions/product.actions";
import PaginationBar from "../components/PaginationBar";
import { useHistory } from "react-router-dom";

const DrinkPages = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.product.products);
  const totalPages = useSelector((state) => state.product.totalPages);
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const loading = useSelector((state) => state.product.loading);
  const [pageNum, setPageNum] = useState(1);
  const limit = 6;
  const [category, setCategory] = useState("drink");

  useEffect(() => {
    dispatch(
      productActions.getAllProducts(pageNum, limit, category, searchTerm)
    );
  }, [dispatch, pageNum, limit, category, searchTerm]);

  // const handleClick = () =>{
  //   console.log("jhjh",e.target.value)
  //   dispatch(productActions.getAllProducts(pageNum,limit,category));
  // }

  const handleClickProduct = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div>
      {loading ? (
        <div style={{padding:"40px"}} className="d-flex justify-content-center align-items-center">
          <img style={{width:"60px"}} loading={true} className="loaderImage" src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617273759/teaHouse/logo-removebg-preview_1_etgr6b.png"/>
        </div>
      ) : (
        <>
          <Container fluid className="text-center drink-header">
            <h1 className="header-title">DRINK</h1>
            <ul className="menu-list">
              <button
                className="header-menu-item"
                value="drink"
                onClick={(e) => setCategory(e.target.value)}
              >
                ALL
              </button>
              <button
                className="header-menu-item"
                value="fruit tea"
                onClick={(e) => setCategory(e.target.value)}
              >
                FRUIT TEA
              </button>
              <button
                className="header-menu-item"
                value="flavored tea"
                onClick={(e) => setCategory(e.target.value)}
              >
                FLAVORED TEA
              </button>
              <button
                className="header-menu-item"
                value="tea latte"
                onClick={(e) => setCategory(e.target.value)}
              >
                TEA LATTE
              </button>
            </ul>
          </Container>
          <Container className="py-5 d-flex justify-content-center">
            <Row className="justify-content-center">
              {products.map((p) => (
                <ProductCard
                  product={p}
                  handleClickProduct={handleClickProduct}
                />
              ))}
            </Row>
          </Container>
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};

export default DrinkPages;
