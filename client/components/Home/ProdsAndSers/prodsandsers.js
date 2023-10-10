import React from 'react'
import styles from './prodsandsers.module.css'
import dynamic from 'next/dynamic'
const Card = dynamic(
    ()=>import('@/components/Home/ProdsAndSers/Card/card'),
    {suspense:true}
)

function ProdsAndSers() {
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
        <div className={`${styles.container}`}>
            <div className={`${styles.productsContainer}`}>
                <div className={`${styles.text}`}>
                    <div className={`${styles.textHeading}`}>
                        <h1>Products of the week</h1>
                    </div>
                    <div className={`${styles.textContent}`}>
                        <p>Our latest products this week</p>
                    </div>
                </div>
                <div className={`${styles.flex}`}>
                    {cardData.map((data, index)=>(
                        <Card 
                        key = {index}
                        imageUrl = {data.imageURL}
                        heading = {data.name}
                        content = {data.description}
                        />
                    ))}
                </div>
            </div>

            <div className={`${styles.servicesContainer}`}>
                <div className={`${styles.text}`}>
                    <div className={`${styles.textHeading}`}>
                        <h1>Services of the week</h1>
                    </div>
                    <div className={`${styles.textContent}`}>
                        <p>Our latest services this week</p>
                    </div>
                </div>
                <div className={`${styles.flex}`}>
                    {cardData.map((data, index)=>(
                        <Card 
                        key = {index}
                        imageUrl = {data.imageURL}
                        heading = {data.name}
                        content = {data.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProdsAndSers