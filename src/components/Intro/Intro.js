import React from 'react';
import { Carousel } from '../../components';

import './Intro.css';
import { Link } from 'react-router-dom';

export default function Intro({data,postsCarousel}) {

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
						<h2>{data.intro[0].shinobi_title_section_2}</h2>
						<p>
                            {data.intro[0].shinobi_section_2_text_1}
							<br/>
                            {data.intro[0].shinobi_section_2_text_2}
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
					<h2 style={{border:0}}>{data.intro[0].shinobi_title_section_3}</h2>
				</div>
                <div className="dst_intro_row">
                    <div className="shinobi_general_description">
						<div className="dst_intro_col_6">
							<h3>{data.intro[0].shinobi_section_3_label_1}</h3>
							<p id="p_correct">
                                {data.intro[0].shinobi_section_3_text_1}
							</p>
						</div>
						<div className="dst_intro_col_6">
							<ul>
                                {data.intro[0].shinobi_info_graphics.map((item)=>(
                                    <li>
                                        <label>
                                            <i className={item.icon}></i>
                                            <strong>{item.title}</strong>
                                        </label>
                                        <p>{item.text}</p>
                                    </li>   
                                ))}
							</ul>
						</div>
					</div>
                </div>
				<div className="dst_intro_row">
                    <form className="shinobi_search_article" action="/search" method="GET">
                        <label>{data.intro[0].shinobi_searchbar_title}</label>
                        <input type="text" name="s" placeholder={data.intro[0].shinobi_searchbar_placeholder}/>
                        <button>{data.intro[0].shinobi_searchbar_label_btn} <i className="fa fa-search"></i></button>
                    </form>
                    <p>{data.intro[0].shinobi_searchbar_or}</p>
                    <h2>{data.intro[0].shinobi_searchbar_more_read}</h2>
                    <Carousel data={data} posts={postsCarousel} autoplay={false}/>
				</div>
                <div className="dst_intro_row">
                    <h2>{data.intro[0].shinobi_title_section_4}</h2>
                </div>
            </div>
            <div className="shinobi_img_box" style={{backgroundImage:"url('images/ricky-amsterdam.jpg')",backgroundPosition:"center"}}>
            <Link to={data.header[0].items[1].url}><button>{data.intro[0].shinobi_section_4_label_btn}</button></Link>
            </div>
            <div className="shinobi_divider_splash"></div>
        </div>
    )
}
