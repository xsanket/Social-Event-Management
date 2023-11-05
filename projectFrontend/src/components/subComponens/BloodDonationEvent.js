import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img13 from '../../images/Blood.jpg';

const BloodDonationEvent = () => {
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
                     src={img13}
                        alt="Beach Cleaning Event"
                        className="img-fluid rounded"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Blood Donation Camp</h2>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Save a life by donating blood!
                    </p>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Event Details:
                    </p>

                    <ul>
                        <li><strong>Date:</strong> Saturday, November 12, 2023</li>
                        <li><strong>Time:</strong> 10:00 AM - 4:00 PM</li>
                        <li><strong>Location:</strong> Community Center, Blood Donation Camp</li>
                    </ul>

                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                        Description:
                    </p>

                    <p style={{ fontFamily: 'cursive' }}>
                        Join us for a blood donation camp at the Community Center. Your donation can save lives!
                        We'll have medical professionals on-site to ensure a safe and comfortable experience. Refreshments
                        will be provided, and every donor will receive a certificate of appreciation.
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

export default BloodDonationEvent;
