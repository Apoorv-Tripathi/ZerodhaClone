import React from 'react';

function Hero() {
    return (

        <div className='container'>
            <div className='row p-5'>
                <h1 className='text-center fs-2'>
                    We pioneered the discount kroking model in India.<br /> Now, we are breaking ground with our technology.
                </h1>
            </div>

            <div className='row p-5 mt-5 border-top text-muted ' style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                <div className='col-6 p-5'>
                    <p>Hello! I’m Apoorv Tripathi, an enthusiastic and innovative Bachelor of Technology (B.Tech) student in Computer Science and Engineering, currently pursuing my degree from 2023 to 2027 in India. I am highly passionate about software development, with a particular interest in full stack web development, RESTful API integration, and the exciting world of Web3 and blockchain-based platforms.</p>

                    <p>From the start of my academic journey, I’ve been actively involved in hands-on learning by developing various practical and creative projects. Some of my key projects include:</p>
                    <p>	•	Zerodha Clone – a full-fledged stock trading platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js), allowing users to manage holdings, positions, and orders.<br></br>
                        •	Postify – a Quora-style social discussion platform where users can create, edit, and view posts, built using RESTful APIs and Express.js.<br></br>
                        •	API Wonderland – a creative platform integrating multiple public APIs to deliver random jokes, facts, and media, combining functionality with fun.<br></br>
                        •	Simon Says Game, Spotify Homepage Clone, and more – showcasing my ability to replicate UI/UX and implement JavaScript logic with precision.</p>
                </div>
                <div className='col-6 p-5'>
                    <p>To complement my project experience, I completed a Full Stack Web Developer internship at Pinnacle Labs, where I was exposed to real-world development practices, collaborative coding, and agile workflows. This experience refined my technical skills and taught me how to deliver scalable, maintainable, and user-friendly applications in a team environment.

                        In addition, I’ve earned a certification in Data Analysis using Python by IBM, expanding my capabilities into the data domain. I also actively participate in coding competitions like Code-O-Fiesta, constantly testing and improving my problem-solving and programming abilities.</p>
                    <p>My tech stack includes:
                        •	Frontend: HTML, CSS, JavaScript, React.js<br></br>
                        •	Backend: Node.js, Express.js<br></br>
                        •	Database: MongoDB, Mongoose<br></br>
                        •	Others: REST APIs, Git/GitHub, EJS templating</p>
                    <p>I strongly believe in learning by building. For me, every project is not just about coding, but about understanding user needs, optimizing performance, and crafting elegant solutions to real-world problems. Whether it’s developing a school website, working on a hotel QR menu ordering system, or building decentralized digital art marketplaces, I thrive on turning ideas into working applications.</p>
                </div>
            </div>
        </div >
    );
}

export default Hero;