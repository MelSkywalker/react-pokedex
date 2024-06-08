import PokemonList from "../components/PokemonList";
import pokemonTitle from "../assets/images/pokemon-title.jpg";
import "./home.scss";

function Home () {
    return (
        <div className="home-page">
            <div className="head">
                <img src={pokemonTitle} alt="pokemon title" />
            </div>
            <PokemonList />
        </div>
    )
}

export default Home;
