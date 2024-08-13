import { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
    const [search, setsearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(search);
        setsearch('');
    };

    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={handleSearch}>
                <label htmlFor="search">Search Term:</label>
                <input
                    id="search"
                    type="text"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default StarshipSearch;