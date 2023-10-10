import React from 'react'
import styles from './trending.module.css'

function Trending() {
  return (
    <div>
        <h1 className={`${styles.text}`}>Trending News</h1>
        <ul>
            <li>
                <div>
                    <div className={`${styles.trending}`}style={{backgroundImage:`url('/assets/trending1.jpg')`}}></div>
                    <div>
                        <h6>Mixed metals are on trend</h6>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <div className={`${styles.trending}`}style={{backgroundImage:`url('/assets/trending1.jpg')`}}></div>
                    <div>
                        <h6>Mixed metals are on trend</h6>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <div className={`${styles.trending}`}style={{backgroundImage:`url('/assets/trending1.jpg')`}}></div>
                    <div>
                        <h6>Mixed metals are on trend</h6>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Trending