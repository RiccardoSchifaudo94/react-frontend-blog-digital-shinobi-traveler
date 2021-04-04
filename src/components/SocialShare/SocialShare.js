import React from 'react';
import './SocialShare.css';

export default function SocialShare({title='',link='',facebook=true,whatsapp=true,twitter=true,email=true, linkedin=true}) {
    return (
        (link.length>0)
        &&(
            <div className="dst_socials_section">
                {
                (facebook)&&(
                                <a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(link)}`} target="_blank" rel="noreferrer">
                                    <div style={{backgroundColor:"#3b5998",borderBottom:"3px solid #1b305d"}}>
                                        <i className="fa fa-facebook-f"></i>
                                    </div>
                                </a>
                            )
                }
                {
                (linkedin)&&(
                                <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(link)}`} target="_blank" rel="noreferrer">
                                    <div style={{backgroundColor:"#0e76a8",borderBottom:"3px solid #004b6f"}}>
                                        <i className="fab fa-linkedin-in"></i>
                                    </div>
                                </a>
                            )
                }
                {
                (twitter)&&(
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(link)}`} target="_blank" rel="noreferrer">
                        <div style={{backgroundColor:"#1da1f2",borderBottom:"3px solid #136ba0"}}>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </a>   
                )
                }
                {
                (whatsapp)&&(
                    <a href={`https://wa.me/?text=${encodeURIComponent(link)}`} target="_blank" rel="noreferrer">
                        <div style={{backgroundColor:"#26be0a",borderBottom:"3px solid #3d751e"}}>
                            <i className="fab fa-whatsapp"></i>
                        </div>	
                    </a>
                )
                }
                {
                (email)&&(
                        <a href={`mailto:?subject=${title}&body=Digital Shinobi Traveler - Riccardo Schifaudo Blog : ${encodeURIComponent(link)}`} title={`${title}`} rel="noreferrer">
                            <div style={{backgroundColor:"#999",borderBottom:"3px solid #6d6d6d"}}>
                                <i className="far fa-envelope"></i>
                            </div>
                        </a>     
                    )
                }
            </div>
        )
    )
}
