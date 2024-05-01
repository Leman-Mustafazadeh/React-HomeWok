import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ setFilteredMovies, filteredMovies }) => {
    const [searchInp, setSearchInp] = useState("");

    const handleInputChange = (event) => {
        setSearchInp(event.target.value);
    };

    const searchFilm = (event) => {
        event.preventDefault();
        setFilteredMovies(filteredMovies.filter(movie => movie.name.includes(searchInp)));
    };

    return (
        <div className={styles.nav}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="d-flex justify-content-between align-items-center flex-sm">
                            <div className="header-info-left d-flex align-items-center">
                                <div className="logo">
                                    <a href="index.html"><img src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" alt="" /></a>
                                </div>
                                <form onSubmit={searchFilm} className={styles.form}>
                                    <input 
                                        type="text" 
                                        name="Search" 
                                        placeholder="Search book by author or publisher" 
                                        value={searchInp} 
                                        onChange={handleInputChange}
                                    />
                                    <CiSearch className={styles.search} type='submit' />
                                </form>
                            </div>
                            <div className="header-info-right d-flex align-items-center">
                                <ul className={styles['main-nav']}>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Track Order</a></li>
                                    <li className="shopping-card">
                                        <a href="cart.html"><LuShoppingCart className={styles.shopico} /></a>
                                    </li>
                                    <li><a href="login.html" className={`btn header-btn ${styles.btn}`}>Sign in</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
