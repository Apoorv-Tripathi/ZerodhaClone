import React from 'react';
function Hero({ imageUrl, productName, productDerscription, learnMore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='mt-3'>{productName}</h1>
                    <p className='text-muted'>{productDerscription}</p>
                    <a href={learnMore} style={{ textDecoration: "none" }}>Learn More</a>
                </div>
                <div className='col-6 '>
                    <img src={imageUrl} />
                </div>

            </div>
        </div>
    );
}

export default Hero;