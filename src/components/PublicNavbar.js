import React, { useState } from "react";
import { Nav, Navbar, Dropdown, Row } from "react-bootstrap";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSignOutAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import SearchBar from "./SearchBar";
import authActions from "../redux/actions/auth.actions";
import productActions from "../redux/actions/product.actions";

const PublicNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(productActions.addSearchTerm(searchInput));
  };
  const adminBar = (
    <div
      style={{
        position: "absolute",
        right: "10%",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        zIndex: 10,
      }}
    >
      <FontAwesomeIcon className="mr-3" icon={faUser} size="lg" color="black" />

      <Link
        className="mr-4"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "17px",
          color: "black !important",
        }}
        to="/admin/products"
      >
        Dashboard
      </Link>
      <FontAwesomeIcon
        onClick={handleLogout}
        icon={faSignOutAlt}
        size="lg"
        color="black"
      />
    </div>
  );

  const userBar = (
    <div
      style={{
        position: "absolute",
        right: "10%",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <Link className="nav-icon" to="/users/me/profile">
        <FontAwesomeIcon icon={faUser} size="lg" color="black" />
      </Link>
      <span>{user?.name}</span>
      <Link className="ml-2">
        <FontAwesomeIcon icon={faHeart} size="lg" color="black" />
      </Link>
       <span className="mr-1">({!loading && user && user.favorite && user.favorite.length})</span>
      <Link className="nav-icon" to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" color="black" />
      </Link>
      <span className="mr-2">
        ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
      </span>
      <FontAwesomeIcon
        onClick={handleLogout}
        icon={faSignOutAlt}
        size="lg"
        color="black"
      />
    </div>
  );
  const staffBar = (
    <div
      style={{
        position: "absolute",
        right: "10%",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <Link
        className="mr-4"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "17px",
          color: "black !important",
        }}
        to="/staff/createorder"
      >
        Dashboard
      </Link>
      <FontAwesomeIcon
        onClick={handleLogout}
        icon={faSignOutAlt}
        size="lg"
        color="black"
      />
    </div>
  );

  const publicBar = (
    <div
      style={{
        position: "absolute",
        right: "10%",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <Link className="nav-icon" to="/users/me">
        <FontAwesomeIcon icon={faUser} size="lg" color="black" />
      </Link>
      {/* <Link className="nav-icon" to="/users/favorite">
        <FontAwesomeIcon icon={faHeart} size="lg" color="black" />
      </Link> */}
      <Link className="nav-icon" to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" color="black" />
      </Link>
      <span className="mr-2">
        ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
      </span>
    </div>
  );

  return (
    <div>
      <div style={{ position: "relative", padding: "50px" }}>
        <div
          style={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          className="d-lg-block d-none "
        >
          <SearchBar
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
            searchInput={searchInput}
          />
        </div>
        <div
          style={{
            position: "absolute",
            right: "40%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <img
            style={{ width: "50px", marginBottom: "30px" }}
            src="https://res.cloudinary.com/dbxawxez9/image/upload/v1616422909/teaHouse/logo-removebg-preview_1_fb3gkc.png"
          />
          <span
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "40px",
            }}
          >
            TeaHouse
          </span>
        </div>
        {isAuthenticated && user.role === "user"
          ? userBar
          : isAuthenticated && user.role === "admin"
          ? adminBar
          : isAuthenticated && user.role === "staff"
          ? staffBar
          : publicBar}
      </div>
      <div className="d-lg-block d-none ">
        <Navbar bg="custom" expand="md">
          <Navbar.Toggle
            bsPrefix="navbar-toggler hamburger-button"
            children={<Hamburger toggled={isOpen} toggle={setOpen} />}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className="d-flex justify-content-center "
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link className="nav-menu" as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link className="nav-menu" as={Link} to="/drink">
                DRINK
              </Nav.Link>
              <Nav.Link className="nav-menu" as={Link} to="/tea">
                TEA
              </Nav.Link>
              <Nav.Link className="nav-menu" as={Link} to="/gift">
                GIFT SETS
              </Nav.Link>
              <Nav.Link className="nav-menu" as={Link} to="/aboutus">
                ABOUT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="d-lg-none py-3">
        <Navbar bg="custom" expand="md">
          <Navbar.Toggle
            bsPrefix="navbar-toggler hamburger-button"
            children={<Hamburger toggled={isOpen} toggle={setOpen} />}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="nav-menu" as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link className="nav-menu" as={Link} to="/drink">
                DRINK
              </Nav.Link>
              <Nav.Link className="nav-menu" as={Link} to="/tea">
                TEA
              </Nav.Link>
              <Nav.Link className="nav-menu" as={Link} to="/gift">
                GIFT SETS
              </Nav.Link>
              <Nav.Link className="nav-menu" as={Link} to="/aboutus">
                ABOUT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="bg-custom bar d-lg-none py-3">
        <SearchBar />
      </div>
    </div>
  );
};

export default PublicNavbar;
