async function Tempo(request, response) {
    const dynamicDate = new Date();

    const spiderMan = await fetch("https://gateway.marvel.com/v1/public/characters/1009610?ts=1&apikey=fb947c0403b0f233b4fe3a9b44dc05a3&hash=37976f38a41622b0306c8ac6c7c60a41");
    const spiderManJson = await spiderMan.json();
    const miranha = spiderManJson.data.results.name;

    response.json({
        date: dynamicDate.toGMTString(),
        miranha: miranha

    })
}

export default Tempo;