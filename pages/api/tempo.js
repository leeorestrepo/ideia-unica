async function Tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const apiSecretHash = process.env.CONVERTKIT_API_SECRET_HASH;
    const dynamicDate = new Date();

    const charactersMarvel = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiSecret}&hash=${apiSecretHash}`);
    const charactersMarvelJson = await charactersMarvel.json();
    const characters = charactersMarvelJson.data.results;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        busca: characters
    })
}

export default Tempo;