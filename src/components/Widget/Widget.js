import React from 'react';
import './Widget.css';

export default function Widget({data,lastPosts = []}) {
    
    return (
        <div className="dst_widget">
          <h2>Digital Shinobi</h2>
          <img src="/images/ricky-interrail.jpg" alt="Ricky Interrail"/>
          <h2>Chi Sono</h2>
          <p>Ciao, sono Riccardo Schifaudo, creatore del blog di “The Shinobi Arts of Eccentricity”.</p>
          <p>Ho fondato questo blog per divulgare le mie tecniche personali di filosofia ninja applicata alla tecnologia per diventare smart nei viaggi, nella vita quotidiana tramite le forme di apprendimento alternativo.</p>
          <p>Leggendo le mie esperienze personali potrete diventare esperti nell’arte marziale del ninja digitale.</p>
          <div className="dst_widget_icon_socials">
                <a href={`${data.footer[0].social_urls[0].linkedin}`} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href={`${data.footer[0].social_urls[0].facebook}`} target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a>
                <a href={`${data.footer[0].social_urls[0].instagram}`} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href={`${data.footer[0].social_urls[0].twitter}`} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
          {
            (lastPosts.length>0)
            &&(
                    <>
                        <h2>Le ultime dal Dojo</h2>
                        <ul>
                            {
                                lastPosts.map((post)=>(
                                                        <li>
                                                            <a href={`/post/${post.slug}`}>{post.title.rendered}</a>
                                                        </li>
                                                    )
                            )}
                        </ul>
                    </>
                )
            }
        </div>
    )
}
