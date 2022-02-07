import React from 'react';
import './styles.css';
import Logo from "../../assets/images/icons/Logo_with_text.webp";
import { SiDiscord } from "react-icons/si";
import LogoWithName from "../footer/logo-with-name";


export default function SecondaryHeader() {
    return <section className="terms-hero">
        <header className="terms-container terms-row">
            <LogoWithName logo={Logo} />
            <div className="icons-container">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://discord.gg/shibarmynft"
                >
                    <SiDiscord />
                </a>
            </div>
        </header>
    </section>;
}
