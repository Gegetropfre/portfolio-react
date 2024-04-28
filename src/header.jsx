import React, { useState, useEffect } from 'react';
import './index.css';
import './header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(Array(5).fill(false));
    const [activeIndex, setActiveIndex] = useState(-1);
    const [paths, setPaths] = useState({
        0: '#home',
        1: '#home-bottom',
        2: '#skills',
        3: '#veilles',
        4: '#contact'
    });

    // État pour stocker le contenu de l'annonce
    const [adContent, setAdContent] = useState("Promotion ! :     Etudiant motivé cherche alternance !!  ");

    useEffect(() => {
        const interval = setInterval(() => {
            // Mettre à jour le contenu de l'annonce avec une nouvelle annonce
            // Pour l'instant, nous allons juste utiliser une annonce statique
            setAdContent("Découvrez mes projets sur GitHub !");
        }, 7000); // Changez le délai selon vos besoins

        return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
    }, []);

    const handleItemClick = (index) => {
        const updatedState = Array(5).fill(false);
        updatedState[index] = !isOpen[index];
        setIsOpen(updatedState);
    
        if (!isOpen[index]) {
            setActiveIndex(index);
            const element = document.querySelector(paths[index]);
            if (element) {
                const windowHeight = window.innerHeight;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const targetPosition = elementPosition - (windowHeight * 0.25);
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        } else {
            setActiveIndex(-1);
        }
    };
    
    return (
        <div className="header">
            <div className="ad">
                {/* Afficher le contenu de l'annonce */}
                {Array.from({ length: 5 }).map((_, index) => (
                    <p key={index} className="ad-content">{adContent}</p>
                ))}
            </div>

            <div className="name">
                <h1 onClick={() => window.location.href = ''}>AUDRIC</h1>
            </div>
            <div className="menu">
                <ul>
                    {Object.keys(paths).map((index) => (
                        <li key={index} className={activeIndex === Number(index) ? 'li-active' : ''} onClick={() => handleItemClick(Number(index))}>
                            <a>
                                <p>{index === '0' ? 'ACCUEIL' : index === '1' ? 'ABOUT' : index === '2' ? 'COMPETENCES' : index === '3' ? 'VEILLES' : 'CONTACT'}</p>
                                <img className={isOpen[Number(index)] ? 'open' : ''} src="src\assets\icons\arrow-up-svgrepo-com.svg" alt="" />
                            </a>
                        </li>
                    ))}
                    <li></li>
                    <li onClick={() => window.open('https://github.com/Obrikk/', '_blank')}>; 
                        <img src="src/assets/icons/github.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
