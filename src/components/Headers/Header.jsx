import React from 'react';
import logo from '../../assets/logo.png'
import './Header.css';
import Shop from './Shop/Shop';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Review from './Review/Review';
import Manage from './Manage/Manage';
import NotFoundPage from '../NotFoundPage';
import ProdactDetels from './Shop/Prodact/ProdactDetels/ProdactDetels';
import TopHedline from '../News/TopHedline/TopHedline';




const Header = () => {
    return (
        <div>
            <div className='header_area'>


            <nav>
                <div className="logo_area">
                    <div className="container">
                        <div className="logo_section">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>

             
                    {/* <li><a href="#">Shop</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory here</a></li> */}

                    <BrowserRouter>
                        {/* Navigation */}
                        <ul className='main_Navbar'>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/review">Order Review</Link></li>
                            <li><Link to="/manage">Manage Inventory here</Link></li>
                            <li><Link to="/news">News</Link></li>
                            
                        </ul>

                        <div className="search_area">
                            <input type="text" placeholder='type here to Search' />
                            <a href=""><span>0</span></a>
                        </div>
                        {/* Routes */}
                        <Routes>
                            <Route exact path="/" element={<Shop></Shop>} />
                            <Route exact path="/Shop" element={<Shop></Shop>} />
                            <Route path="/review" element={<Review></Review>} />
                            <Route path="/Manage" element={<Manage></Manage>} />
                            <Route path="/prodact/:ProdactKey" element={<ProdactDetels></ProdactDetels>} />
                            {/* <Route exact path="/news" element={<TopHedline></TopHedline>} /> */}

                            <Route path="*" element={<NotFoundPage></NotFoundPage>} /> 

                        </Routes>
                    </BrowserRouter>
            

            </nav>




        </div>
        </div>
    );
};

export default Header;