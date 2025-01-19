"use client";

import React, { useState, useCallback } from "react";
import Form from "next/form";

export default function Home() {
    const [resultMovies, setResultMovies] = useState([]);
    const [titleSearchKey, setTitleSearchKey] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAction = useCallback(async (formData) => {
        setLoading(true);
        const titleSearchKey = formData.get("titleSearchKey");
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`);
        const jsonRes = await httpRes.json();
        setResultMovies(jsonRes.Search || []);
        setLoading(false);
    }, []);

    return (
        <div style={{ padding: '16px' }}>
            <MovieForm 
                handleAction={handleAction}
                titleSearchKey={titleSearchKey}
                setTitleSearchKey={setTitleSearchKey}
                loading={loading}
            />
            <MovieTable movies={resultMovies} />
        </div>
    );
}

export const MovieForm = React.memo(({ handleAction, titleSearchKey, setTitleSearchKey, loading }) => {
    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                handleAction(new FormData(e.target));
            }}
            style={{ marginBottom: '16px', padding: '16px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
        >
            <label htmlFor="idTitleSearchKey" style={{ display: 'block', marginBottom: '8px' }}>Título</label>            
            <input 
                id="idTitleSearchKey" 
                name="titleSearchKey" 
                value={titleSearchKey}
                onChange={(e) => setTitleSearchKey(e.target.value)}
                style={{ marginBottom: '16px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
            />
            <button type="submit" disabled={loading} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? "Pesquisando..." : "Pesquisar"}
            </button>
        </form>
    );
});

export const MovieTable = React.memo(({ movies }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {movies.map((m) => (
                <div key={m.imdbID} style={{ margin: '10px', padding: '16px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', maxWidth: '200px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{m.Title}</h2>
                    <p>{m.Year}</p>
                    <img src={m.Poster} alt={m.Title} style={{ width: '100%', height: 'auto' }} />
                </div>
            ))}
        </div>
    );
});
