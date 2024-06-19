import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import photo from "../assets/media/LandingPage/hero.png";
import Navbar from "../components/shared/Navbar";
import PopularCategory from "../components/Home Page/PopularCategory";
import HowWorks from "../components/Home Page/HowWorks";
import Brands from "../components/Home Page/Brands";


const Landing = () => {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }, []);
    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <Wrapper ref={heroRef}>
                <div className="hero-content">
                    <div className="text-content">
                        <h1>
                            Get Your <span className="fancy">Dream Job </span> 
                            Today!
                        </h1>
                        <p>
                        Bienvenue sur  JobPortal, votre plateforme dédiée à la recherche d'emploi et au développement de carrière. Nous simplifions votre parcours professionnel en vous connectant aux meilleures opportunités disponibles. Que vous soyez à la recherche d'un nouveau défi, d'une promotion interne ou d'une reconversion professionnelle, Finder Job est là pour vous accompagner. Explorez des offres d'emploi variées, adaptez votre profil professionnel et bénéficiez de formations pertinentes pour atteindre vos objectifs. Rejoignez une communauté dynamique où chaque étape de votre progression compte. Découvrez ce que Finder Job peut faire pour votre avenir professionnel dès aujourd'hui !
                        </p>
                        <div className="btn-grp">
                            <Link className="btn" to="/all-jobs">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="placeholder">
                        <img src={photo} alt="job viva photo" />
                    </div>
                </div>
            </Wrapper>
            <div>
            <PopularCategory/>
            <HowWorks/>
            <Brands/>
            </div>
        </>
    );
};

export default Landing;
