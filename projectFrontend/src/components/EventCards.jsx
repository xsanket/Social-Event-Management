import CardDetails from "./CardDetails";
import { useNavigate, Navigate } from "react-router-dom";
import img5 from '../images/BeachPNG.jpg';
import img6 from '../images/marathonPNG.jpg';
import img7 from '../images/BloodDonationPNG.jpg';
import img8 from '../images/MusicPNG.jpg';
import img9 from '../images/FortCleaningPNG.jpg';
import img10 from '../images/YogPNG.jpg';




function EventCards() {
    const navigate = useNavigate();

    return (
        <>
            <div className="row justify-content-center">

                <div className="col-md-4">
                    <CardDetails
                        imgsrc={img5}
                        sname="Beach Cleaning"
                        onButtonClick={() => {
                            navigate('/BeachCleaningEvent');
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <CardDetails
                        imgsrc={img6} sname="Marathon"
                        onButtonClick={() => {
                            navigate('/MarathonEvent');
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <CardDetails 
                        imgsrc={img7}
                        sname="Blood Donation"
                        onButtonClick={() => {
                            navigate('/BloodDonationEvent');
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <CardDetails
                        imgsrc={img10}
                        sname="Yoga" 
                        onButtonClick={() => {
                            navigate('/YogaEvent');
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <CardDetails
                        imgsrc={img9}
                        sname="Fort cleaning"
                        onButtonClick={() => {
                            navigate('/FortCleaningEvent');
                        }}
                    />
                </div>


                <div className="col-md-4">
                    <CardDetails
                        imgsrc={img8}
                        sname="Music"
                        onButtonClick={() => {
                            navigate('/MusicEvent');
                        }}
                    />
                </div>
            </div>


        </>

    );
}
export default EventCards;
