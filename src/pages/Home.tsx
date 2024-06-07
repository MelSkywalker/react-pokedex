import PokemonList from "../components/PokemonList";
import './home.scss';

function Home () {
    return (
        <div className="home-page">
            <div className="head" />
            <PokemonList />
        </div>
    )
}

export default Home;
