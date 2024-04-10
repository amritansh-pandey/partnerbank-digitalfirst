import React from "react";
import { Link } from "react-router-dom";
import TextButtonMedium from "../../components/Buttons/TextButtonMedium";
import WhiteButtonMedium from "../../components/Buttons/WhiteButtonMedium";
import "./style.css";
import { importImage } from '../../utils';


function Splash({brand, theme}) {

    return (
        <div className="splash-background" >
            <div>
                <img src={importImage(brand, theme, "logo.png")} alt="logo" className="splash-logo-white" />
            </div>

            <div className="button-container-splash">
                <div>
                    <Link to="/intro" style={{ textDecoration: "none" }}>
                        <WhiteButtonMedium text={"Register"} />
                    </Link>
                </div>
                <div>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <div className="button-text-white">
                        <TextButtonMedium text={"Log in"} />
                        </div>
                       
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Splash;