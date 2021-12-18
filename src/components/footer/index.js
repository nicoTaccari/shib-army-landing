import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.css";

export default function Footer() {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="footer-inner-left">
                    <h3 style={{ marginBottom: "5px", color: "#e6a30c" }}>Shib Army</h3>
                    <p style={{ margin: "0px"}}>8,888 unique mekas who need drivers.</p>
                    <p style={{ marginTop: "20px"}}>©2021 MekaVerse. All rights reserved.</p>
                </div>
                <div className="footer-inner-right">
                    <Link className="link" to="/"><div className="links">Home</div></Link>
                    <Link className="link" to="/team"><div className="links">Team</div></Link>
                    <Link className="link" to="/terms-and-conditions"><div className="links">Terms and conditions</div></Link>
                </div>
            </div>
        </section>
    )
}
