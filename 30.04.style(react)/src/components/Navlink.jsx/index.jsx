import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss'

const NavLinks = () => {
    return (
        <>
            <div className="container">
                <ul className={`d-flex list-unstyled justify-content-center gap-4 ${styles.navlinks}`}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Content</a></li>
                </ul></div>

        </>
    )
}

export default NavLinks
