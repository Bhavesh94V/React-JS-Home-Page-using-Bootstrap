import React from 'react';

export default function HomePage() {
    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-white">
                    <div className="container-fluid">
                        <a className="navbar-brand fs-4" href="#">
                            <img src="https://themewagon.github.io/stylish/images/main-logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontSize: "17px", textTransform: "uppercase" }}>
                                <li className="nav-item px-lg-1">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item px-lg-1">
                                    <a className="nav-link" href="#">Category</a>
                                </li>
                                <li className="nav-item px-lg-1">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item px-lg-1">
                                    <a className="nav-link" href="#">Enterprise</a>
                                </li>
                                <li className="nav-item px-lg-1">
                                    <a className="nav-link" href="#">Support</a>
                                </li>
                                <li className="nav-item px-lg-1">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                            <button className="btn btn-outline-primary mx-lg-3" type="">Sign Up</button>
                        </div>
                    </div>
                </nav>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                    <div className="carousel-item h-100">
                        <img style={{ maxHeight: "727px" }} src="https://www.superkicks.in/cdn/shop/files/PUMA_x_KIDSUPER.png?v=1728461017" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img style={{ maxHeight: "727px" }} src="https://www.superkicks.in/cdn/shop/files/PUMA_PALERMO_SUPERTIFO.jpg?v=1728131939" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ maxHeight: "727px" }} src="https://www.superkicks.in/cdn/shop/files/GAZELLE_INDOOR_BANNERpsb.jpg?v=1727946424" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h1 className="w-100 mx-auto my-5" style={{ textTransform: "uppercase" }}>Our Best Products</h1>

            <div className="container my-5">
                <div className="row">
                    <div className="col m-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "none" }}>
                            <img style={{ maxHeight: "250px" }} src="https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Trailblazer Boots</h5>
                                <p className="card-text">Conquer the great outdoors with our Trailblazer Boots. Engineered for durability and grip.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col m-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "none" }}>
                            <img style={{ maxHeight: "250px" }} src="https://www.jiomart.com/images/product/original/rvnwu5aqz8/bruton-trendy-sports-shoes-for-men-blue-product-images-rvnwu5aqz8-0-202209021248.jpg?im=Resize=(1000,1000)" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Classic Elegance</h5>
                                <p className="card-text">Step into sophistication with our Classic Elegance loafers. Perfect for work or formal occasions.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col m-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "none" }}>
                            <img style={{ maxHeight: "250px" }} src="https://rukminim2.flixcart.com/image/850/1000/l4x2rgw0/shoe/b/u/h/6-9403-6-world-wear-footwear-grey-orange-original-imagfpkgk7rznmbz.jpeg?q=90&crop=false" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sporty Chic</h5>
                                <p className="card-text">Combine fashion and function with our Sporty Chic athletic shoes. Ideal for workouts or casual outings.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col m-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "none" }}>
                            <img style={{ maxHeight: "250px" }} src="https://image.made-in-china.com/2f0j00UATQYEhlmbuL/2019-New-Design-Running-Shoes-Sneakers-Sports-Shoes-for-Men.webp" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sporty sneakers</h5>
                                <p className="card-text">Treat your feet to ultimate relaxation with our Cozy Slippers. Perfect for lounging at home.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col m-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "none" }}>
                            <img style={{ maxHeight: "250px" }} src="https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/o/05/856a7b05-181b-4f4d-8e6f-12ba6a1d9ba6.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Summer Vibes</h5>
                                <p className="card-text">Embrace the season with our Summer Vibes sandals. These sandals are perfect for trips!</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col m-3 d-flex justify-content-center">
                        <div className="card" style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "none" }}>
                            <img style={{ maxHeight: "250px" }} src="https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/o/05/856a7b05-181b-4f4d-8e6f-12ba6a1d9ba6.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Urban Explorer</h5>
                                <p className="card-text">Discover the vibrant energy of city life with our Urban Explorer sneakers.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-center text-white" style={{ backgroundColor: '#3f51b5' }}>
                <div className="container">
                    <section className="mt-5">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="text-white" style={{ textDecoration: "none" }}>About us</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="text-white" style={{ textDecoration: "none" }}>Features</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="text-white" style={{ textDecoration: "none" }}>Enterprise</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="text-white" style={{ textDecoration: "none" }}>Support</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="text-white" style={{ textDecoration: "none" }}>Blog</a>
                                </h6>
                            </div>
                        </div>
                    </section>

                    <hr className="my-4" />

                    <section className="mt-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    We are dedicated to providing high-quality products and exceptional customer service. Your satisfaction is our priority.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center mb-5">
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright : <a className="text-white">bhaveshvishwakarma223@gmail.com</a>
                </div>
            </footer>
        </div>
    );
}
