import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 border-top mt-5'>
                <h1 className='text-center fs-2'>
                    People
                </h1>
            </div>
            <div className='row' style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                <div className='col-6 p-5 text-center text-muted' >
                    <img src='/media/apoorvimage.jpg' style={{ width: "75%", borderRadius: "100%", border: "2px solid black",marginTop:"50px" }}></img>
                    <h4 className='mt-3'>Apoorv Tripathi</h4>
                    <h6>Zerodha clone builder</h6>
                </div>
                <div className='col-6 p-5'>
                    <p> Hi, I’m Apoorv Tripathi, a B.Tech Computer Science and Engineering student (2023–2027) from India with a strong interest in full stack web development, API integration, and blockchain applications. I’ve worked on several impactful projects, including a Zerodha-inspired stock trading platform built with the MERN stack, a Quora-style app called Postify, and fun, interactive tools like Simon Says and API Wonderland.</p>

                    <p>I’m passionate about building innovative solutions that combine creativity with functionality and always eager to explore new technologies in the ever-evolving world of software development.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;

