import logo from './plantLogo1.png';

function Navbar({setSearchTerm}){
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    return (
        <nav className="navbar container navbar-expand-lg navbar-light bg-light" style={{borderRadius : 2 + 'rem'}}>
        <img src={logo} width={100 + 'rem'} />
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Plants</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 d-flex" style={{paddingLeft: 20 + 'rem'}}>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
            </form>
        </div>
    </nav>
  )
}

export default Navbar;
