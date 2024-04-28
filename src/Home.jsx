import './Home.css'


function Home() {
    return ( 
        <div className="home" id="home" >
            <div className="home-header">
                <h1>Home</h1> 
                <img src="src/assets/icons/diamond1-svgrepo-com.svg" alt="" />               
            </div>
            <div className="home-bottom" id="home-bottom">

                <div className="home-left">
                    <h1>Who am I ?
                    <img className="exclamation" src="src/assets/icons/excalamation1-svgrepo-com.svg" alt="" />
                    </h1>

                    <h3>Etudiant en développement informatique</h3>
                    <p>1ère année de BTS SIO option SLAM (Solutions logicielles et applications métier)</p>
                    <img src="src/assets/icons/developpeur.png" id="dev" alt="" />
                    <img src="src/assets/icons/guitare gif.gif" id="dj" alt="" />
                    {/* <img src="src/assets/icons/musicien.png" id="dj" alt="" /> */}
                </div>
                <div className="home-right">
                    {/* <img src="src/assets/icons/react-icon.png" alt="" />
                    <img src="src/assets/icons/php-icon.png" alt="" />
                    <img className="imgC" src="src/assets/icons/c++-icon.png" alt="" />
                    <img className="imgJS" src="src/assets/icons/javascript-icon.png" alt="" /> */}
                        <embed src="src/assets/icons/CV HETE Audric.png" alt="" id='CV' type="" />
                </div>
            </div>
        </div>
     );
}

export default Home;