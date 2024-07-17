import React from 'react'
import './Home.css'
import BannerImage from "./home-banner-image.png";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


const Home = () => {
    return (
        <div className='home'>

            <div className='new'>
                <h1>Food Receipe</h1>
                <h1>Delicious & Fresh</h1>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
                <button className='btns'>
                    <p style={{ display: 'inline', marginRight: '10px' }}>Explore Now</p>
                    <ArrowForwardOutlinedIcon style={{ verticalAlign: 'middle' }} />
                </button>


            </div>

            <div>
                <img className='imge' src={BannerImage} alt="" />
            </div>


        </div>
    )
}

export default Home