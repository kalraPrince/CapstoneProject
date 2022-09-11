import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/UserNavbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircle';
import ChairIcon from '@mui/icons-material/Chair';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { useDispatch, useSelector } from "react-redux";
import { ProductFetch } from '../../Store/ProductSlice';
import { useState } from 'react';
import '../../Styles/search.css'
function SpectatorNavbar() {
  const dispatch=useDispatch()
  const [term,setTerm]=useState('')
  const submitHandler=(e)=>{
      e.preventDefault()
      if(term==="") return alert("Please enter search term")
      dispatch(ProductFetch(term))
      setTerm("")
  }
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar custom-nav' sticky='top'>
      <Container className='custom-container'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="class1">
            <Nav.Link href="#home" className='text'>
              <div className="px-3"><ChairIcon /></div> </Nav.Link>
            
            <Nav.Link href="/" className='text'>
              <div className="px-3">Home</div> </Nav.Link>
            
            <Nav.Link href="/product" className='text'>
              <div className="px-3">Products</div> </Nav.Link>
            
            <Nav.Link href="/about" className='text'>
              <div className="px-3">About</div> </Nav.Link>
            
            <Nav.Link href="#features" className='text'>
            <div className="px-3">Contact</div> </Nav.Link>
            <NavbarBrand>


            <div className='search-bar'>
            <form  className='search-form' onSubmit={submitHandler}>
            <button className='searching-button' type='submit'><i className="fa fa-search"></i></button>
              <input type="text" value={term} placeholder="Search Products" onChange={(e)=>setTerm(e.target.value)}/>
            </form>
        </div>


        </NavbarBrand>
          <NavDropdown
          title={
              <span>
                  <i className="last"></i> <AccountCircleOutlinedIcon/>
              </span>
          }
          id='collasible-nav-dropdown'>
          <NavDropdown.Item href='/login' className='square border-bottom'>Login</NavDropdown.Item>
          <NavDropdown.Item href='/register' className='square border-top'>Register</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/" className='text'>
            <div className="px-3"><FavoriteBorderOutlinedIcon/></div>
            </Nav.Link>
        <Nav.Link href="/" className='text'>
            <div className="px-3"><ShoppingCartOutlinedIcon/></div>
            </Nav.Link> 
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SpectatorNavbar;