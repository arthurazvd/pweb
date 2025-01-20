"use client";

import { searchMovies } from "../actions/movieActions";
import Form from "next/form";
import { useState } from "react";

export default function Home() {
    const [data, setData] = useState({});
    const [titleSearchKey, setTitleSearchKey] = useState("");
    const [year, setYear] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleAction(formData) {
        setLoading(true);
        const res = await searchMovies(formData);
        setData(res);
        setLoading(false);
    }

    return (
        <div style={{ padding: '16px' }}>
            <MovieForm 
                actionHandler={handleAction} 
                titleSearchKey={titleSearchKey}
                setTitleSearchKey={setTitleSearchKey}
                year={year}
                setYear={setYear}
                loading={loading} 
            />
            {data.Search && <MovieTable movies={data.Search} />}
        </div>
    );
}

export function MovieForm({ actionHandler, titleSearchKey, setTitleSearchKey, year, setYear, loading }) {
    return (
        <form onSubmit={(e) => {
                e.preventDefault();
                actionHandler(new FormData(e.target));
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
            <label htmlFor="idYear" style={{ display: 'block', marginBottom: '8px' }}>Ano</label>
            <input 
                id="idYear" 
                name="year" 
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={{ marginBottom: '16px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
            />
            <button type="submit" disabled={loading} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? "Pesquisando..." : "Pesquisar"}
            </button>
        </form>
    );
}

export function MovieTable({ movies }) {
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
}
