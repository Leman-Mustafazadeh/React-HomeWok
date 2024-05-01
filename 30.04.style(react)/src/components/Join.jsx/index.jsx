import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './index.module.scss';

const Join = () => {
  return (
    <>
      <div className={`container ${styles.subscribe} `}>
        <h1>Join Newsletter</h1>
        <p>Lorem started its journey with cast iron (CI) products in 1980. The initial main objective was to ensure pure water and affordable irrigation.</p>
        <div className='d-flex'>
            <input type="text" className='form-control' placeholder='enter email' />
            <button>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default Join
