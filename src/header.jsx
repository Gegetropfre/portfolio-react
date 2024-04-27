import './index.css';
import { useState } from 'react';
import './header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(Array(5).fill(false));

    const handleItemClick = (index) => {
        // Créer un nouveau tableau avec tous les éléments à false, sauf celui cliqué qui est mis à true
        const updatedState = Array(5).fill(false);
        updatedState[index] = !isOpen[index];
        // Mettre à jour l'état avec le nouveau tableau
        setIsOpen(updatedState);
    };

    return (
        <div className="header">
            <div className="ad"></div>
            <div className="name">
                <h1>AUDRIC</h1>
            </div>
            <div className="menu">
                <ul>
                    {/* Utilisation de isOpen[index] pour appliquer la classe uniquement à l'élément ouvert */}
                    <li onClick={() => handleItemClick(0)}><a href="#"><p>ACCUEIL</p><img className={isOpen[0] ? 'open' : ''} src="src\assets\icons\arrow-up-svgrepo-com.svg" alt="" /></a></li>
                    <li onClick={() => handleItemClick(1)}><a href="#"><p>ABOUT</p><img className={isOpen[1] ? 'open' : ''} src="src\assets\icons\arrow-up-svgrepo-com.svg" alt="" /></a></li>
                    <li onClick={() => handleItemClick(2)}><a href="#"><p>COMPETENCES</p><img className={isOpen[2] ? 'open' : ''} src="src\assets\icons\arrow-up-svgrepo-com.svg" alt="" /></a></li>
                    <li onClick={() => handleItemClick(3)}><a href="#"><p>VEILLES</p><img className={isOpen[3] ? 'open' : ''} src="src\assets\icons\arrow-up-svgrepo-com.svg" alt="" /></a></li>
                    <li onClick={() => handleItemClick(4)}><a href="#"><p>CONTACT</p><img className={isOpen[4] ? 'open' : ''} src="src\assets\icons\arrow-up-svgrepo-com.svg" alt="" /></a></li>
                    <li></li>
                    <li onClick={() => handleItemClick(4)}>
                        <img src="src/assets/icons/github.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;




  