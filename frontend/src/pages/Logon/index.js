import React from "react";
import {Link} from "react-router-dom";
import {FiLogIn} from "react-icons/fi";


import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon () {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be" />

                <form>
                    <h1> Log on </h1>

                    <input placeholder="Your username" />
                    <button className="button" type="submit"> Log on</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        I don't have an account
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}