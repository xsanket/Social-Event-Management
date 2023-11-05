import React from 'react';
import { useNavigate, Link } from "react-router-dom";


import "../App.css";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function CardDetails(props) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Navigate to the About page when the button is clicked
        navigate('/CallEvents');
    };


    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt='thumbnail' className='card__img' />
                    <div className='card__info'>
                        <span className='card__catagory'>{props.title}</span>
                        <h3 className='card__title'>{props.sname}</h3>
                        <div className="centered-div" >
                            <button onClick={props.onButtonClick}>See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}
export default CardDetails;