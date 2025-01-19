'use client';

import React, { useContext } from "react";
import SearchContext from "../context/SearchContext";

export default function MovieResults() {
    const { searchResults, loading } = useContext(SearchContext);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (searchResults.length === 0) {
        return <div>Nenhum resultado encontrado.</div>;
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {searchResults.map((m) => (
                <div key={m.imdbID} style={{ margin: '10px', maxWidth: '200px' }}>
                    <h2>{m.Title}</h2>
                    <p>{m.Year}</p>
                    <img src={m.Poster} alt={m.Title} style={{ width: '100%' }} />
                </div>
            ))}
        </div>
    );
}
