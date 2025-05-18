import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className=' p-5 ' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a style={{color:"white"}} href=''>Track Tickets</a>
            </div>
            <div className='row p-3 ' >
                <div className='col-6  p-3 '>
                    <h3>Search for an answer or browse help topics to create a ticket</h3>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..' style={{padding:'1rem',borderRadius:'1rem',width:"35rem",height:"5rem",border:"none",marginTop:"1rem",marginBottom:"1rem"}}></input><br/>
                    <a href='' style={{color:"white",marginLeft:"10px"}}>Track account opening</a>
                    <a href='' style={{color:"white",marginLeft:"10px"}}>Track segment activation</a>
                    <a href='' style={{color:"white",marginLeft:"10px"}}>Intraday margins</a><br/> 
                    <a href='' style={{color:"white",marginLeft:"10px"}}>Kite user manual</a>
                </div>
                <div className='col-6  p-3'>
                    <h3><i class="fa fa-id-badge" aria-hidden="true"></i> Featured</h3>
                    <a href='' style={{color:"white"}}>1. Current Takeovers and Delisting - January 2024</a><br/><br/>
                    <a href='' style={{color:"white"}}>2. Latest Intraday leverages - MIS & CQ</a>
                </div>
            </div>
        </section> 
    );
}

export default Hero;