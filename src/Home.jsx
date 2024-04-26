import './Home.css'


function Home() {
    return ( 
        <div className="home">
            <div className="home-header">
                <h1>Home</h1>                
            </div>
            <div className="home-bottom">

                <div className="home-left">
                    <h1>Who am I ?
                    <img className="exclamation" src="src/assets/icons/excalamation1-svgrepo-com.svg" alt="" />

                    </h1>
                    <h3>Etudiant en développement informatique</h3>
                    <p>1ère année de BTS SIO option SLAM (Solutions logicielles et applications métier)</p>
                </div>
                <div className="home-right"></div>
            </div>
        </div>
     );
}

export default Home;