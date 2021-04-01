import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import productActions from "../redux/actions/product.actions";
import PaginationBar from "../components/PaginationBar";
import { useHistory } from "react-router-dom";

const GiftPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.product.products);
  const totalPages = useSelector((state) => state.product.totalPages);
  const loading = useSelector((state) => state.product.loading);

  const searchTerm = useSelector((state) => state.product.searchTerm);
  const [pageNum, setPageNum] = useState(1);
  const limit = 6;
  const [category, setCategory] = useState("gift set");

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
        <div
          style={{ padding: "40px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            style={{ width: "60px" }}
            loading={true}
            className="loaderImage"
            src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617273759/teaHouse/logo-removebg-preview_1_etgr6b.png"
          />
        </div>
      ) : (
        <>
          <Container fluid className="text-center gift-header">
            <h1 className="header-title">GIFT SETS</h1>
          </Container>
          <Container className="py-5 d-flex justify-content-center">
            <Row>
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

export default GiftPage;
