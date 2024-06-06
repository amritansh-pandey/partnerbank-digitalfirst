import React, { useEffect } from 'react';
import './style.css'
import Clock from '../../assets/images/clock64.svg'
import { useNavigate } from 'react-router-dom';

function Pause() {

    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/old-home", { replace: true });
      }, 4000);
    }, []);


    return (
        <div className='pause-container'>

            <div className='pause-content'>
                <img src={Clock} />
                <span style={{ fontSize: "24px" }}>Over the next few months</span>
                <span style={{ fontSize: "16px" }}>Alexis is now using her Bank app regularly to shop, pay bills, set goals and more...</span>
            </div>


        </div>
    )
}

export default Pause