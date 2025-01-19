'use client';

import React, { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchMovies = async (titleSearchKey, year) => {
        setLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&y=${year}`);
        const data = await res.json();
        setSearchResults(data.Search || []);
        setLoading(false);
    };

    return (
        <SearchContext.Provider value={{ searchResults, searchMovies, loading }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
