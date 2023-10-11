import React from 'react'
import styles from './cart.module.css'
import dynamic from 'next/dynamic'
const Card = dynamic(
    ()=>import('@/components/Cart/Card/card'),
    {suspense:true}
)

function Cart() {

    const cardData = [
        {
            name:"Demo",
            amount:500,
            imageURL: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "This is a demo product",
            quantity:1,
        },
        {
            name:"Demo",
            amount:500,
            imageURL: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "This is a demo product",
            quantity:1,
        },
        {
            name:"Demo",
            amount:500,
            imageURL: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "This is a demo product",
            quantity:1,
        },
        {
            name:"Demo",
            amount:500,
            imageURL: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "This is a demo product",
            quantity:1,
        }
    ]
  return (
    <>
    <br/>
    <br/>
    <br/>
    <div className={`${styles.container}`}>
            <div className={`${styles.cartContainer}`}>
                <div className={`${styles.text}`}>
                    <div className={`${styles.textHeading}`}>
                        <h1>Your Cart:</h1>
                    </div>
                </div>
                <div className={`${styles.flex}`}>
                    {cardData.map((data, index)=>(
                        <Card 
                        key = {index}
                        imageUrl = {data.imageURL}
                        heading = {data.name}
                        content = {data.description}
                        amount = {data.amount}
                        qty = {data.quantity}
                        />
                    ))}
                </div>
                <div className={`${styles.orderNow}`}>
                    <button>Order Now</button>
                </div>
            </div>
            </div>
            </>
  )
}

export default Cart;