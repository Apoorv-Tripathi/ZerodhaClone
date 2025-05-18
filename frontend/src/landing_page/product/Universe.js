import React from 'react';
function Universe() {
    return (
        <div className='conatiner p-5'>
            <div className='row text-center  mb-4'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3'>
                    <img src='media/smallcaseLogo.png'></img>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/streakLogo.png' style={{width:"40%"}}></img>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/sensibullLogo.svg' style={{width:"60%"}}></img>
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>
            </div>

            <div className='row text-center '>
                <div className='col-4 p-5'>
                    <img src='media/zerodhaFundhouse.png'style={{width:"55%"}}></img>
                    <p className='text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/goldenpiLogo.png' style={{width:"55%"}}></img>
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/dittoLogo.png'style={{width:"40%"}}></img>
                    <p className='text-small text-muted'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "15%", margin: "0 auto", }}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;