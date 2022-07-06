async function Tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const apiSecretHash = process.env.CONVERTKIT_API_SECRET_HASH;
    const dynamicDate = new Date();

    // fb947c0403b0f233b4fe3a9b44dc05a3
    // 37976f38a41622b0306c8ac6c7c60a41
    
    const charactersMarvel = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiSecret}&hash=${apiSecretHash}`);
    const charactersMarvelJson = await charactersMarvel.json();
    const characters = charactersMarvelJson.data;

    response.json({
        date: dynamicDate.toGMTString(),
        characters: characters
    })
}

export default Tempo;