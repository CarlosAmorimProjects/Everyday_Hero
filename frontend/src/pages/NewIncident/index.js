import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; 
import "./styles.css";

import logoImg from "../../assets/logo.svg";


export default function NewIncident () {
    return (
            <div className="new-incident-container">
                <div className="content">
                        <section>
                                <img src={logoImg} alt="Be" />

                                <h1>Register a new case</h1>
                                <p>Describe the case in detail to fin help</p>

                                <Link className="back-link" to="/profile">
                                <FiArrowLeft size={16} color="#E02041"/>
                                    Go back
                                </Link>
                        </section>

                        <form>
                        <input placeholder="Case name" />
                        <textarea placeholder="Description" />
                        <input placeholder="Value"  /> 

                        <button className="button" type="submit">Register</button>
                        </form>
                </div>

            </div> 
)}