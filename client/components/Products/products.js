import React from 'react'
import styles from './products.module.css'
import dynamic from 'next/dynamic'
const Card = dynamic(
    ()=>import('@/components/Products/Card/card'),
    {suspense:true}
)

function Products() {

    const cardData = [
        {
            name:"Demo",
            amount:500,
            imageURL: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "This is a demo product",
        },
        {
            name:"Demo",
            amount:500,
            imageURL: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "This is a demo product",
        },
        {
            name:"Demo",
            amount:500,
            imageURL: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "This is a demo product",
        },
        {
            name:"Demo",
            amount:500,
            imageURL: "https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "This is a demo product",
        }
    ]
    return (
        <>
        <br/>
        <br/>
        <div className={`${styles.container}`}>
            <div className={`${styles.productsContainer}`}>
                <div className={`${styles.text}`}>
                    <div className={`${styles.textHeading}`}>
                        <h1>All Products Available...</h1>
                    </div>
                    <div className={`${styles.textContent}`}>
                        <p>Our latest products</p>
                    </div>
                </div>
                <div className={`${styles.flex}`}>
                    {cardData.map((data, index) => (
                        <Card
                            key={index}
                            imageUrl={data.imageURL}
                            heading={data.name}
                            content={data.description}
                            amount = {data.amount}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Products;