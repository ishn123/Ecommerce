import React from "react";
import { useNavigate } from "react-router";
import './Hero.scss'

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="Hero">
            <div className="hero-content center">
                <h2 className="heading">Your True Companion</h2>
                <p className="subheading">
                Not just think about the phone just grab it.
                </p>
                <button onClick={() => navigate('/category')} className="cta btn-primary">Explore more</button>
            </div>
        </div>
    );
}

export default Hero;
