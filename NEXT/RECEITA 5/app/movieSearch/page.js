import { SearchProvider } from "../context/SearchContext";
import MovieForm from "../components/MovieForm";
import MovieResults from "../components/MovieResults";

export default function MovieSearchPage() {
    return (
        <SearchProvider>
            <div>
                <h1>Pesquisar Filmes</h1>
                <MovieForm />
                <MovieResults />
            </div>
        </SearchProvider>
    );
}
