import React,{useEffect, useState} from 'react';
import {Carousel} from '../../components';
import posts_it from '../../data_mocks/carousel_mock/it-mock.json';
import posts_en from '../../data_mocks/carousel_mock/en-mock.json';
import './Intro.css';
import { Link } from 'react-router-dom';

export default function Intro({data}) {
    let [posts,setPosts] = useState([]);
    console.log(data);
    useEffect(()=>{
        console.log(data);
       (data.lang==='it') ? setPosts(posts_it) : setPosts(posts_en);
    },[posts]);
    return (
        <div className="dst_intro">
            <div className="shinobi_img_box" style={{backgroundImage:"url('/images/digital-shinobi-traveler-cinque-terre-riomaggiare.jpg')"}}></div>
            <div className="shinobi_bio">
                    <p>{data.intro[0].shinobi_bio_text_1}</p>
                    <p>{data.intro[0].shinobi_bio_text_2}</p>
                    <p>{data.intro[0].shinobi_bio_text_3}</p>
                    <p>{data.intro[0].shinobi_bio_text_4}</p>
                    <Link to={data.header[0].items[2].url}><button>{data.intro[0].shinobi_bio_label_btn}<i class="fa fa-address-card-o"></i></button></Link>
            </div>
            <div className="shinobi_divider_splash"></div>
            <div className="shinobi_introduction">
                    <div className="container">
                        <h3>{data.intro[0].shinobi_introduction_heading_1} </h3>
                        <h3>
                        {data.intro[0].shinobi_introduction_heading_2}
                        </h3>
                        <h2>{data.intro[0].shinobi_title_section_1}</h2>
                        <p>{data.intro[0].shinobi_section_1_text_1}</p>
                        <p>
                            {data.intro[0].shinobi_section_1_text_2}<br/>
                            {data.intro[0].shinobi_section_1_text_3}<br/>
                            {data.intro[0].shinobi_section_1_text_4}
                        </p>	
                    </div>
            </div>	
            <br/>
            <div class="shinobi_start_splash">
                <div className="container">
                    <h2>{data.intro[0].shinobi_start_splash_heading_1}</h2>
                            <div className="dst_intro_row">
                                <div className="shinobi_social_divider">
                                    <div className="dst_intro_col_3" align="center">
                                        <i className="fa fa-facebook fa-2x"></i>
                                        <h4>{data.intro[0].shinobi_start_splash_follow_facebook}</h4>
                                    </div>
                                    <div className="dst_intro_col_9">
                                        <h5>{data.intro[0].shinobi_start_splash_follow_facebook_label_1}</h5>
                                        <p>{data.intro[0].shinobi_start_splash_follow_facebook_text_1}</p>
                                        <br/>
                                        <h5>{data.intro[0].shinobi_start_splash_follow_facebook_label_2}</h5>
                                        <p>{data.intro[0].shinobi_start_splash_follow_facebook_text_2}</p>
                                        <br/>
                                        <a href="https://www.facebook.com/DigitalShinobiTraveler/">
                                            <button>
                                                {data.intro[0].shinobi_start_splash_follow_label_btn} 
                                                <i class="fa fa-thumbs-up"></i>
                                            </button>
                                        </a>
                                        <hr/>
                                    </div>
                                </div>
							</div>	
                            <div className="dst_intro_row">
                                <div className="shinobi_social_divider">
                                    <div className="dst_intro_col_3" align="center">
                                        <i className="fa fa-instagram fa-2x"></i>
                                        <h4>{data.intro[0].shinobi_start_splash_follow_linkedin}</h4>
                                    </div>
                                    <div className="dst_intro_col_9">
                                        <h5>{data.intro[0].shinobi_start_splash_follow_instagram_label_1}</h5>
                                        <p>
                                            {data.intro[0].shinobi_start_splash_follow_instagram_text_1}
                                        </p>
                                        <br/>
                                        <a href="https://www.instagram.com/digitalshinobidiabolist/" target="_blank">
                                            <button>
                                                {data.intro[0].shinobi_start_splash_follow_label_btn}
                                                <i className="fa fa-arrow-right"></i>
                                            </button>
                                        </a>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="dst_intro_row">
                                <div className="shinobi_social_divider">
                                    <div class="dst_intro_col_3" align="center">
                                        <i className="fa fa-times fa-2x"></i>
                                        <h4>{data.intro[0].shinobi_start_splash_not_done}</h4>
                                    </div>
                                    <div className="dst_intro_col_9">
                                        <h5>{data.intro[0].shinobi_start_splash_not_done_label_1}</h5>
                                        <p>{data.intro[0].shinobi_start_splash_not_done_text_1}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dst_intro_row">
								<div className="shinobi_social_divider">
										<div className="dst_intro_col_3" align="center">
											<i className="fa fa-check fa-2x"></i>
											<h4>{data.intro[0].shinobi_start_splash_done}</h4>
										</div>
										<div className="dst_intro_col_9">
											<h5>{data.intro[0].shinobi_start_splash_done_label_1}</h5>
											<p>{data.intro[0].shinobi_start_splash_done_text_1}</p>
										</div>
								</div>
							</div>
                </div>
            </div>
            <div className="container">
				<div className="dst_intro_row">
						<h2>Quali sono le arti dell'Eccentrico Ninja Digitale?</h2>
						<p>
							Come uno Shinobi, ovvero un maestro Ninja, le arti del travestimento sono molteplici,<br/>
							la sua identità e il suo scopo può cambiare nel corso della missione.
						</p>
				</div>
            </div>
            <br/>
            <div className="dst_intro_row" style={{position:"relative"}}>
                
                <div className="dst_intro_col_4 shinobi_block_topic" style={{backgroundImage:"url('images/digital-shinobi-traveler-cinque-terre-riomaggiare.jpg')"}}>
                    <h6>Digital Shinobi <strong>Traveler</strong></h6>
                </div>
                <div className="dst_intro_col_4 shinobi_block_topic" style={{backgroundImage:"url('images/ricky-arduino-maker.jpg')"}}>
                    <h6>Digital Shinobi <strong>Maker</strong></h6>
                </div>
                <div className="dst_intro_col_4 shinobi_block_topic" style={{backgroundImage:"url('images/ricky-diabolo.jpg')"}}>
                    <h6>Digital Shinobi <strong>Diabolist</strong></h6>
                </div>
                <div class="shinobi_divider_splash" style={{position:"absolute"}}></div>
            </div>
            <div className="container">
				<div className="dst_intro_row">
					<h2 style={{border:0}}>Sei curioso di sapere cosa troverai nel Blog? :)</h2>
				</div>
                <div className="dst_intro_row">
                    <div className="shinobi_general_description">
						<div className="dst_intro_col_6">
							<h3>The Shinobi Arts of Eccentricity</h3>
							<p id="p_correct">
								Il progetto nasce come blog personale dove racconto le mie esperienze di viaggio alternativi,
								 metodi educativi e i miei particolari interessi in stile dojo Ninja.
							</p>
						</div>
						<div className="dst_intro_col_6">
							<ul>
								<li>
									<label>
                                        <i className="fa fa-map-signs fa-2x"></i>
                                        <strong>Travel Blogging</strong>
                                    </label>
									<p>Esperienze di viaggio personale, in Interrail, Viaggi in Solitaria, Viaggi "Fuori Porta";</p>
								</li>
								<li>
									<label>
                                        <i className="fa fa-subway fa-2x"></i>
                                        <strong>Travel Planning</strong>
                                    </label>
									<p>Organizzazione logistica dei viaggi, dove mangiare, pendolarismo, mobilità sostenibile e alternativa, tecniche di viaggio scout;</p>
								</li>
								<li>
									<label>
                                        <i className="fa fa-plane fa-2x"></i>
                                        <strong>Edu-Travelling</strong>
                                    </label>
									<p>Curiosità culturali, metodi di educazione non-formale dei progetti di mobilità Erasmus Plus e di apprendimento altenativo e a distanza;</p>
								</li>
								<li>
									<label>
                                        <i className="fa fa-gamepad fa-2x"></i>
                                        <strong>Digital Youth Work</strong>
                                    </label>
									<p>Strumenti di gioco, guide interattive e schede per attività educative e animazione giovanile per bambini e ragazzi basate sul metodo scout e all'educazione non-formale apprese durante i progetti europei in formato digitale;</p>
								</li>
								<li>
									<label>
                                        <i className="fa fa-user-secret fa-2x"></i>
                                        <strong>Digital Ninjutsu</strong>
                                    </label>
									<p>Come in Ninja erano esperti nell'arte dello spiongaggio e nel furto dei dati, puoi trovare consigli su applicazioni web e mobile per trovare informazioni, risorse per scopi personali, scolastici e lavorativi grazie a Internet.</p>
								</li>
							</ul>
						</div>
					</div>
                </div>
				<div className="dst_intro_row">
                    <form className="shinobi_search_article" action="https://www.the-shinobi-arts-of-eccentricity.com/blog/" method="GET">
                        <label>Vuoi rileggere un articolo?</label>
                        <input type="text" name="s" placeholder="Inserisci il titolo"/>
                        <button>Cerca <i className="fa fa-search"></i></button>
                    </form>
                    <p>Oppure</p>
                    <h2>Ecco i 5 articoli più letti del Blog</h2>
                    <Carousel data={data} posts={posts} autoplay={false}/>
				</div>
                <div className="dst_intro_row">
                    <h2>Dai su, cosa aspetti? </h2>
                </div>
            </div>
            <div className="shinobi_img_box" style={{backgroundImage:"url('images/ricky-amsterdam.jpg')",backgroundPosition:"center"}}>
                <a href="https://www.the-shinobi-arts-of-eccentricity.com/blog/"><button>Entra nel Blog</button></a>
            </div>
            <div className="shinobi_divider_splash"></div>
        </div>
    )
}
