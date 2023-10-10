import React from 'react'
import styles from './card.module.css'
import Image from 'next/image';
import {PiPlusSquareLight} from 'react-icons/pi'
import {PiMinusSquareLight} from 'react-icons/pi'
import {RxCross1} from 'react-icons/rx'

function Card(props) {
    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.cardImage}`}>
                <Image  
                className={`${styles.img}`}
                src={props.imageUrl}  
                height={323} 
                width={352}
                alt="Product Image"/>
            </div>
            <div className={`${styles.text}`}>
                <div className={`${styles.cardHeading}`}>
                    {props.heading}
                </div>
                <div className={`${styles.cardContent}`}>
                    {props.content}
                </div>
                <div className={`${styles.cardAmount}`}>
                <p>Amount is: {props.amount}</p>
                </div>
                <div className={`${styles.cardQuantity}`}>
                    <p>Quantity is: {props.qty}</p>
                </div>
            </div>
            <div className={`${styles.cardIcons}`}>
                <PiPlusSquareLight style={{height:"25px", width:"25px", margin:"10px"}}/>
                <PiMinusSquareLight style={{height:"25px", width:"25px", margin:"10px"}}/>
                <RxCross1 style={{height:"25px", width:"25px", margin:"10px"}}/>
            </div>
        </div>
    )
}

export default Card;