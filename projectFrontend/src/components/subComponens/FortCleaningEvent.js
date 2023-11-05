import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img15 from '../../images/Fort.jpg';

const FortCleaningEvent = () => {
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
                     src={img15}
                        alt="Beach Cleaning Event"
                        className="img-fluid rounded"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Fort Cleaning Event</h2>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Join us for a day of environmental stewardship and community engagement!
                    </p>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Event Details:
                    </p>

                    <ul>
                        <li><strong>Date:</strong> Saturday, October 15, 2023</li>
                        <li><strong>Time:</strong> 9:00 AM - 12:00 PM</li>
                        <li><strong>Location:</strong> Fort Beach, Coastal Cleanup Site</li>
                    </ul>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Description:
                    </p>

                    <p style={{ fontFamily: 'cursive' }}>
                        Join us for a morning of cleaning up the beautiful fort area. We'll be gathering at Fort Beach
                        and working together to remove litter and debris from the area and its surroundings. This is a
                        family-friendly event, and all necessary cleaning supplies will be provided. Let's make our
                        environment cleaner and safer for everyone!
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

export default FortCleaningEvent;
