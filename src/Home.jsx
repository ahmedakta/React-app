import plant from './plant-care.jpg';
import plant2 from './plants-care2.jpg';
import plant3 from './plants-care3.jpg';
function Home(){
    const website = "Just Plants"
    return(
        <div className="container" id="homepage">
            <h1 className="header">What we do ?</h1>
            <div className="container row row-cols-1 row-cols-md-3" id="whatwedo">
                <div className="card whatWeDoCard" style={{width: 25 + 'rem' , height: 25 + 'rem'}}  >
                    <img src={plant} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Plant Care Tips</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card whatWeDoCard" style={{width: 25 + 'rem', height: 25 + 'rem'}}  >
                <img src={plant2} className="card-img-top" alt="..." />
                <div className="card-body">
                        <h5 className="card-title"> Plant Identification</h5>
                        <p className="card-text">Curious about the plant in your garden or the one you just brought home? Our plant identification service is here to help. Upload a photo of your plant, and our advanced recognition system will identify it for you. Get to know your plants better, from their scientific names to their care requirements. Discover a world of botanical wonders with just plants</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card whatWeDoCard" style={{width: 25 + 'rem', height: 25 + 'rem'}} >
                <img src={plant3} className="card-img-top" alt="..." />

                <div className="card-body">
                        <h5 className="card-title">Shop for Greenery</h5>
                        <p className="card-text">Transform your living space with the beauty of plants. In our online store, you'll find a wide selection of indoor and outdoor plants, pots, and gardening accessories. We're passionate about making plant shopping a delightful experience. Whether you're looking for a vibrant houseplant or a gift for a fellow plant enthusiast, you'll find the perfect green companion at</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div id="portfolio">
            <h1 className="header" style={{float : 'right' , marginTop : 1 + 'rem' , width : 10 + 'rem'}}>Portfolio</h1>
                <div className="container row row-cols-1 row-cols-md-3" id="portDesc">
                I'm a passionate plant enthusiast and web developer with 
                a deep love for all things green. I have [X] years of experience in 
                designing and developing plant-related websites that aim to connect plant lovers,
                educate beginners, and celebrate the beauty of nature. My goal is to create online spaces
                that foster a sense of community and promote plant care and appreciation.
                I'm a passionate plant enthusiast and web developer with 
                a deep love for all things green. I have [X] years of experience in 
                designing and developing plant-related websites that aim to connect plant lovers,
                educate beginners, and celebrate the beauty of nature. My goal is to create online spaces
                that foster a sense of community and promote plant care and appreciation.
                I'm a passionate plant enthusiast and web developer with 
                a deep love for all things green. I have [X] years of experience in 
                designing and developing plant-related websites that aim to connect plant lovers,
                educate beginners, and celebrate the beauty of nature. My goal is to create online spaces
                that foster a sense of community and promote plant care and appreciation.
                </div>
            </div>
            <div id="whous"></div>
            <h1>Home page , welcome to {website}</h1>
        </div>
    )
}

export default Home;