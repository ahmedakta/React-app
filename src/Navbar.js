import logo from './plantLogo1.png';
import {BrowserRouter , Link , Route , Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import PostsModel from "./PostsModel";
import PostShow from "./PostShow";
import ContactUs from "./ContactUs";

function Navbar(){
    const {isWaiting , posts , serverError , setSearchTerm} = PostsModel(); 
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };

    return (
        <BrowserRouter>
            <nav className="navbar container navbar-expand-lg navbar-light bg-light fixed-top mt-3" style={{borderRadius : 2 + 'rem'}}>
                <img src={logo} width={100 + 'rem'} />
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts" className="nav-link" href="#">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about-us" className="nav-link" href="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact-us" className="nav-link" href="#">Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                            </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Yasmin</a></li>
                            <li><a className="dropdown-item" href="#">Dasmin</a></li>
                            <li><a className="dropdown-item" href="#">Jasmin</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex" style={{paddingLeft: 30 + 'rem'}}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search For Plants..." aria-label="Search" onChange={handleSearch}/>
                    </form>
                </div>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/posts/:title" element={<PostShow />}></Route>
                <Route path="/about-us" element={<About />}></Route>
                <Route path="/contact-us" element={<ContactUs />}></Route>
            </Routes>
        </BrowserRouter>
       
  )
}

export default Navbar;
