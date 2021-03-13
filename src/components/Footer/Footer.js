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
                <span className="dst_footer_copyright">
                    The Shinobi Arts of Eccentricity non costituisce una testata giornalistica. Non ha carattere periodico ed è un sito aggiornato secondo le disponibilità e la reperibilità dei materiali. Pertanto non può essere considerato in alcun modo un prodotto editoriale ai sensi della Legge n.62 del 2001 e alla sentenza Corte cost. del 10 Marzo 2009 n. 10535. Non è soggetto a registrazione telematica in quanto non percepisce sovvenzioni dal fondo dell'editoria. I contenuti di "the-shinobi-arts-of-eccentricity.com" non possono essere messi sotto sequestro poiché l’art. 21, comma 3, Cost. riserva soltanto alla stampa, inoltre non possono essere copiati, riprodotti, pubblicati o redistribuiti in qualsiasi modo o forma se non come stabilito dall'Amministratore.
                </span>
            </div>
        </footer>
    )
}
