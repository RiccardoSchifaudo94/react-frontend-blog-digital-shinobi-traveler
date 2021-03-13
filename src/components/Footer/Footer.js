import React from 'react';
import ricky_photo from './../../ricky-shinobi.jpg';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <h2>Riccardo Schifaudo</h2>
                <img src={ricky_photo}/>
                <p className="dst_footer_text">
                    Ciao, sono Ricky, e sono lo “Shinobi” di questo blog “Dojo”.
                    Amo viaggiare, sono curioso e mi dedico a diversi hobbies come giocoleria con il Diabolo, la Prototipazione Elettronica e l’Attivismo Politico. Ho studiato Elettronica, mi sono specializzato in UX Design e sono un Web Developer. Cerco sempre nuovi stimoli e ispirazioni per imparare e fare nuove esperienze di viaggio.
                </p>
                <div className="dst_footer_icon_socials">
                        <a href="https://it.linkedin.com/in/riccardo-schifaudo-20345993" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.facebook.com/DigitalShinobiTraveler/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/digitalshinobidiabolist/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.twitter.com/ActivistShinobi/" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    )
}
