import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img16 from '../../images/Music.jpg';


const MusicEvent = () => {
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
                     src={img16}
                        alt="Beach Cleaning Event"
                        className="img-fluid rounded"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Music Event</h2>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Experience the magic of live music!
                    </p>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Event Details:
                    </p>

                    <ul>
                        <li><strong>Date:</strong> Friday, December 1, 2023</li>
                        <li><strong>Time:</strong> 6:00 PM - 10:00 PM</li>
                        <li><strong>Location:</strong> Harmony Park, Music Stage</li>
                    </ul>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Description:
                    </p>

                    <p style={{ fontFamily: 'cursive' }}>
                        Join us for an enchanting evening of live music at Harmony Park. Our talented musicians
                        will create a mesmerizing atmosphere that you won't want to miss. Bring your friends and family
                        for a night filled with melodious tunes and good vibes. Food and drinks will be available.
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

export default MusicEvent;
