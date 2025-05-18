import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='row text-center mt-5'>
                <h1>Pricing</h1>
                <h3 className='fs-5 mt-3 text-muted'>Free equity investments and flat 220 traday and F&O trades</h3>
                <div className='col-4 p-4'>
                    <img src='media/pricingMF.svg'></img>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — * 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='/media/intradayTrades.svg'></img>
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/pricingMF.svg'></img>
                    <h3>Free direct MUF</h3>
                    <p className='text-muted'>All direct mutual funds absolutely free -</p>
                </div>
            </div>
            <div className='row text-center'>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
                    F&0 trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto", }}>Signup Now</button>
            </div>

        </div>
    );
}

export default Hero;