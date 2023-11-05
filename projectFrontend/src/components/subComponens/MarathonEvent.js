import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img12 from '../../images/MarathonPic.jpg';

const MarathonEvent = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribeClick = () => {
        toast.success('Subscribed! We will notify you prior to this event.');
        setSubscribed(true);
    };

    const buttonColor = subscribed ? 'green' : '#007bff';

    return (
        <div className="container mt-6" style={{ marginTop: '80px' }}>
            
            <div className="row">
                <div className="col-md-6">
                    <img
                     src={img12}
                        alt="Beach Cleaning Event"
                        className="img-fluid rounded"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Marathon Event</h2>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Lace up your running shoes and join the marathon!
                    </p>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Event Details:
                    </p>

                    <ul>
                        <li><strong>Date:</strong> Sunday, November 19, 2023</li>
                        <li><strong>Time:</strong> 7:00 AM - 12:00 PM</li>
                        <li><strong>Location:</strong> City Park, Marathon Start</li>
                    </ul>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Description:
                    </p>

                    <p style={{ fontFamily: 'cursive' }}>
                        Get ready for an exhilarating marathon through the scenic City Park. Whether you're a seasoned
                        runner or a beginner, this event is for everyone. Enjoy the beauty of nature and the thrill of
                        running alongside fellow enthusiasts. Medals and refreshments will be provided for all participants.
                    </p>
                    <p style={{ fontFamily: 'cursive' }}>
                        <button
                            onClick={handleSubscribeClick}
                            disabled={subscribed}
                            style={{
                                backgroundColor: buttonColor,
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                cursor: 'pointer',
                            }}
                        >
                            {subscribed ? 'Subscribed' : 'Subscribe'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MarathonEvent;
