import React from 'react';

function lefttSection({ imageUrl, productName, productDerscription, tryDemo, learnMore, goglePlay, appStore }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageUrl} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDerscription}</p>
                    <div className='mt-3' >
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo</a>
                        <a href={learnMore} style={{ marginLeft: "3rem", textDecoration: "none" }}>Learn More</a>
                    </div>
                    <div className='mt-3'>
                        <a href={goglePlay}><img src='media/googlePlayBadge.svg'></img></a>
                        <a href={appStore} style={{ marginLeft: "3rem" }}><img src='media/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default lefttSection;