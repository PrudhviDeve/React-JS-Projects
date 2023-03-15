import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt=''
            />

            <div className='home__row'>
                <Product
                    id="1"
                    title="Apple iPhone 14 Pro Max (128 GB) - Deep Purple"
                    rating={4}
                    price={899.99}
                    image="https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg" />

                <Product
                    id="2"
                    title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)"
                    rating={3}
                    price={15.69}
                    image='https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg' />
            </div>

            <div className='home__row'>
                <Product
                    id="3"
                    title="ASUS Vivobook 16X (2022), 16.0-inch (40.64 cms) FHD+ 16:10, AMD Ryzen 5 5600H, Thin and Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Silver/1.80 kg), M1603QA-MB501WS"
                    rating={5}
                    price={699.99}
                    image='https://m.media-amazon.com/images/I/81PTe+hHbgL._SL1500_.jpg' />

                <Product
                    id="4"
                    title="Lifelong FitPro LLTM09 (2.5 HP Peak) Manual Incline Motorized Treadmill for Home with 12 preset Workouts, Max Speed 12km/hr. (Free Installation Assistance) Max. User Weight 100Kg, 1 Year Warranty Roll over image to zoom in"
                    rating={3}
                    price={259.29}
                    image='https://m.media-amazon.com/images/I/61-X6z9Ms4S._SL1500_.jpg' />

                <Product
                    id="5"
                    title="Fire-Boltt Gladiator 1.96 : Biggest Display Smart Watch with Bluetooth Calling, Voice Assistant &123 Sports Modes, 8 Unique UI Interactions, SpO2, 24/7 Heart Rate Tracking, Rs 100 Off on UPI"
                    rating={2}
                    price={59.99}
                    image='https://m.media-amazon.com/images/I/71IqWwSIxwL._SL1500_.jpg' />
            </div>

            <div className='home__row'>
                <Product
                    id="6"
                    title="LG Ultrawide 29Wl500, 29 Inch (73 Cm) 21:9 Wfhd LCD 2560 X 1080 Pixels IPS Display - HDR 10, AMD Freesync, Srgb 99%, Slim Bezel, Multitasking Monitor, Hdmi X 2 (Black)"
                    rating={5}
                    price={229.30}
                    image='https://m.media-amazon.com/images/I/61y3SVAD+eL._SL1500_.jpg' />

        
            </div>



        </div>
    )
}

export default Home