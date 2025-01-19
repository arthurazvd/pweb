export default async function Home({ searchParams }) {
    const { titleSearchKey = 'bagdad', type = 'movie' } = searchParams;
    const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&type=${type}`);
    const data = await res.json();

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.Search.map((m) => (
                <div key={m.imdbID} style={{ margin: '10px', maxWidth: '200px' }}>
                    <h2>{m.Title}</h2>
                    <p>{m.Year}</p>
                    <img src={m.Poster} alt={m.Title} style={{ width: '100%' }} />
                </div>
            ))}
        </div>
    );
}
