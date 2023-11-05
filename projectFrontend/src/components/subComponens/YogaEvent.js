import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img14 from '../../images/Yoga.jpg';

const YogaEvent = () => {
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
                     src={img14}
                        alt="Beach Cleaning Event"
                        className="img-fluid rounded"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Yoga Event</h2>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Join us for a day of relaxation and mindfulness!
                    </p>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Event Details:
                    </p>

                    <ul>
                        <li><strong>Date:</strong> Sunday, November 5, 2023</li>
                        <li><strong>Time:</strong> 10:00 AM - 12:00 PM</li>
                        <li><strong>Location:</strong> Serene Park, Yoga Spot</li>
                    </ul>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Description:
                    </p>

                    <p style={{ fontFamily: 'cursive' }}>
                        Join us for a relaxing morning of yoga and mindfulness at Serene Park. We'll be practicing yoga
                        in the midst of nature, focusing on relaxation, meditation, and rejuvenation. All levels of
                        experience are welcome, and please bring your own yoga mat. Let's find inner peace together!
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

export default YogaEvent;
