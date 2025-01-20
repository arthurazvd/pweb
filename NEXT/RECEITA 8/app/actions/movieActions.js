'use server'

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey");
    const year = formData.get("year");

    if (!titleSearchKey || titleSearchKey === '') return { Search: [] };

    try {
        let url = `http://www.omdbapi.com/?apikey=c3a1339c&s=${titleSearchKey}`;
        if (year && year !== '') {
            url += `&y=${year}`;
        }

        const httpRes = await fetch(url);
        const jsonRes = await httpRes.json();
        return jsonRes;
    } catch (err) {
        return { error: `Erro na requisição ${err}` };
    }
}
