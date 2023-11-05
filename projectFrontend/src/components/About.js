import React from 'react';
import img18 from '../images/Team.jpg';

const About = () => {
    return (
        <div className="container mt-6" style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-md-6">

                    <img
                       src={img18}
                        alt="Company Image"
                        className="img-fluid rounded"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <div className="col-md-6">

                    <h2 className="mb-4 text-center">About Us</h2>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }} >
                        Social Event Management is an innovative web platform developed by a dedicated
                        team of seven talented students. Our mission is to simplify the process of planning,
                        organizing, and executing social events, making event management a seamless and enjoyable
                        experience for everyone involved.
                    </p>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Why Choose Us:

                        We're a dedicated student team committed to simplifying event management.
                        Social Event Management is our solution to streamline event planning. Join us for effortless event coordination!</p>
                </div>
            </div>
        </div>
    );
};

export default About;
