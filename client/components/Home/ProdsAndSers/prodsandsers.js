import React from 'react'
import styles from './prodsandsers.module.css'

function ProdsAndSers() {
  return (
    <div className={`${styles.container}`}>
        <strong><h1 className={`${styles.name}`}>Products of the week</h1></strong>
        <div className={`${styles.containerListing}`}>
            <ul>
                <li>
                    <div>
                        <div style={{backgroundImage: `url('/assets/homePage.webp')`}}></div>
                    </div>
                </li>
                <li>
                    <div>
                        <div style={{backgroundImage: `url('/assets/homePage.webp')`}}></div>
                    </div>
                </li>
                <li>
                    <div>
                        <div style={{backgroundImage: `url('/assets/homePage.webp')`}}></div>
                    </div>
                </li>
                <li>
                    <div>
                        <div style={{backgroundImage: `url('/assets/homePage.webp')`}}></div>
                    </div>
                </li>
            </ul>
        </div>

        <strong><h1 className={`${styles.name}`}>Services of the week</h1></strong>
        <div className={`${styles.containerListing}`}>
            <ul>
                <li>
                    <div>
                        <div style={{backgroundImage: `url('/assets/homePage.webp')`}}></div>
                    </div>
                </li>
                <li>
                    <div>
                        <div style={{backgroundImage: `url('/assets/homePage.webp')`}}></div>
                    </div>
                </li>
                <li>
                    <div>
                        <div style={{backgroundImage: `url('/assets/homePage.webp')`}}></div>
                    </div>
                </li>
                <li>
                    <div>
                        <div style={{backgroundImage: `url('/assets/homePage.webp')`}}></div>
                    </div>
                </li>
            </ul>
        </div>
        <div className={`${styles.containerButton}`}>
            <button>View All Products</button>
            <button>View All Services</button>
        </div>
    </div>
  )
}

export default ProdsAndSers