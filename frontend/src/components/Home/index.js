import React from 'react';
import {AiFillLinkedin, AiFillGithub, AiOutlinePhone, AiFillPhone, AiFillMail, AiOutlineMail} from 'react-icons/ai';
import {
    SiReact,
    SiJavascript,
    SiJava,
    SiPython,
    SiExpress,
    SiFlask,
    SiHtml5,
    SiCss3,
    SiPostgresql,
    SiDocker,
    SiSocketdotio,
    SiAmazonaws,
    SiNodedotjs
} from 'react-icons/si';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import ExploreButton from './ExploreButton';
import LocationCard from "./LocationCard";
import css from './Home.module.css';

const Home = () => {
    return (
        <div id={css.container}>
            <div id={css.lowerBackground}>
                <div id={css.upperBackground}>
                    <div id={css.contentContainer}>
                        <div className={css.contentCard} id={css.imageContainer}>
                            <img id={css.mainImage}
                                 alt={"Stylish camping in the woods"}
                                 src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_q=highq&im_w=1920"/>
                            <div id={css.imageHeader}>
                                <div id={css.imageText}>Not sure where to go? Perfect.</div>
                                <button id={css.imageButton}><span id={css.imageButtonText}>I'm flexible</span></button>
                            </div>
                        </div>
                        <div className={css.contentCard} id={css.giftCardContainer}>
                            <div id={css.leftGCContainer}>
                                <div id={css.littleHeaderGC}>Introducing</div>
                                <div id={css.bigHeaderGC}>Airbnb gift cards</div>
                                {/*<div id={css.bigHeaderGC}>Taylor Barnabic</div>*/}
                                <div id={css.GCButton}>
                                    {/*<span id={css.GBButtonText}>Shop now</span>*/}
                                    <a href={"/about"}><span id={css.GBButtonText}>Learn more</span></a>
                                </div>
                            </div>
                            <div id={css.rightGCContainer}>
                                <div id={css.businessCard}>
                                    <div id={css.businessCardText}>
                                        <div id={css.bcName}>Taylor Barnabic</div>
                                        <div id={css.bcTitle}>Full Stack Web Developer</div>
                                        <div><a href={"https://www.linkedin.com/in/taylor-barnabic-63892a20a"}
                                                target={"_blank"} id={css.bcLink}><AiFillLinkedin/> Linkedin</a></div>
                                        <div><a href={"https://github.com/taylor-b-02"}
                                                target={"_blank"} id={css.bcLink}><AiFillGithub/> taylor-b-02</a></div>
                                        <div><AiFillPhone/> <span id={css.hiddenContent}>(201)-983-9337</span></div>
                                        <div><a href={"mailto:tbarnabic@gmail.com"} id={css.bcLink}>
                                            <AiFillMail/> tbarnabic@gmail.com
                                        </a>
                                        </div>
                                    </div>
                                    <div id={css.businessCardRight}>
                                        <SiHtml5 title={"HTML5"}/>
                                        <SiCss3 title={"CSS3"}/>
                                        <SiJavascript title={"JavaScript"}/>
                                        <SiReact title={"React"}/>
                                        <SiExpress title={"Express"}/>
                                        <SiNodedotjs title={"node.js"}/>
                                        <SiPython title={"python"}/>
                                        <SiFlask title={"Flask"}/>
                                        <SiPostgresql title={"PostgreSQL"}/>
                                        <SiSocketdotio title={"Socket.IO"}/>
                                        <SiDocker title={"docker"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.contentCard} id={css.locationCardContainer}>
                            <span id={css.locationHeader}>Inspiration for your next trip</span>
                            <div id={css.locationCardWrapper}>
                                <LocationCard bgColor={"#BC196D"} name={"Scranton"} distance={68}/>
                                <LocationCard bgColor={"#DD3150"} name={"New York"} distance={68}/>
                                <LocationCard bgColor={"#CC2D4A"} name={"Third Thing"} distance={68}/>
                                <LocationCard bgColor={"#D93A30"} name={"Los Angeles"} distance={68}/>
                            </div>
                        </div>
                        {/*<footer id={css.footerContainer}>Foot</footer>*/}
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Home;
