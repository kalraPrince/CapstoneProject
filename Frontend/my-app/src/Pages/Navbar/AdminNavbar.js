import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/AdminNavbar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircle';
import ChairIcon from '@mui/icons-material/Chair';


function AdminNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar'>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="class1">
            <Nav.Link href="#home" className='text'>
            <div className="px-3"><ChairIcon/></div> </Nav.Link>
            <Nav.Link href="#features" className='products'>
            <div className="px-3">Products</div> </Nav.Link>
            <Nav.Link href="#features" className='text'>
            <div className="px-3">Users</div> </Nav.Link>
            <Nav.Link href="#features" className='text'>
            <div className="px-3">Sales</div> </Nav.Link>
            <Nav.Link href="#features" className='text'>
            <div className="px-3">Stocks</div> </Nav.Link>
            <Nav.Link href="#features" className='text'>
            <div className="px-3">Uploads</div> </Nav.Link>
            <Nav.Link href="#features" className='text'>
                <div className="px-3">Coupons</div>
            </Nav.Link>
            <NavDropdown
          title={
              <span>
                  <i className="last"></i> <AccountCircleOutlinedIcon/>
              </span>
          }
          id='collasible-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1' className='square border-bottom'>My Account</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3' className='square border-top'>Logout</NavDropdown.Item>
        </NavDropdown>
           
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;