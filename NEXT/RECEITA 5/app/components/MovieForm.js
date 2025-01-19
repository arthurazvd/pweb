'use client';

import React, { useState, useContext } from "react";
import SearchContext from "../context/SearchContext";

export default function MovieForm() {
    const [titleSearchKey, setTitleSearchKey] = useState("");
    const [year, setYear] = useState("");
    const { searchMovies } = useContext(SearchContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovies(titleSearchKey, year);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="idTitleSearchKey">Título</label>
                <input 
                    id="idTitleSearchKey" 
                    name="titleSearchKey" 
                    value={titleSearchKey} 
                    onChange={(e) => setTitleSearchKey(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="idYear">Ano</label>
                <input 
                    id="idYear" 
                    name="year" 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <button type="submit">Pesquisar</button>
        </form>
    );
}
