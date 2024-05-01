import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss'
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="footer-wrappper section-bg mt-5 ">
                    <div className="footer-area footer-padding">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-3 col-lg-5 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="single-footer-caption mb-30">

                                            <div className="footer-logo mb-25">
                                                <a href="index.html"><img src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" alt=""/></a>
                                            </div>
                                            <div className="footer-tittle">
                                                <div className="footer-pera">
                                                    <p>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
                                                </div>
                                            </div>

                                            <div className="footer-social">
                                                <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fab fa-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Book Category</h4>
                                            <ul>
                                                <li><a href="#">History</a></li>
                                                <li><a href="#">Horror - Thriller</a></li>
                                                <li><a href="#">Love Stories</a></li>
                                                <li><a href="#">Science Fiction</a></li>
                                                <li><a href="#">Business</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>&nbsp;</h4>
                                            <ul>
                                                <li><a href="#">Biography</a></li>
                                                <li><a href="#">Astrology</a></li>
                                                <li><a href="#">Digital Marketing</a></li>
                                                <li><a href="#">Software Development</a></li>
                                                <li><a href="#">Ecommerce</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Site Map</h4>
                                            <ul className="mb-20">
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">FAQs</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="footer-border">
                                <div className="row d-flex align-items-center">
                                    <div className="col-xl-12 ">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
