// APIs URL.
const APIUrlCharacter = 'https://swapi.co/api/people';
const APIUrlPlanets = 'https://swapi.co/api/planets';

async function load(){

    async function getData(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    // get characters list Array.
    const characterList = await getData(APIUrlCharacter);

// This is Container of the Box character.
    const $box = document.getElementById('box');

    const character = (data) => data.results

// Creating Data Template.
    function dataTemplate(data){
        return (
            `<div class="box">
                <h1>${data.name}</h1>
                <p>Heigth: <span>${data.height}</span> </p>
                <p>Mass: <span>${data.mass}</span> </p>
                <p>Gender: <span>${data.gender}</span> </p>
            </div>`
        )
    }
// Creating the HTML file Template.
    function createTemplate(HTMLString){
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        return html.body.children[0]
    }
// Rendering the HTML Template to the DOM.
    function renderCharacterBox(characterData, $box){
        $box.children[0].remove();
        characterData.forEach(character => {
            const HTMLString = dataTemplate(character);
            const boxCharacter = createTemplate(HTMLString);
            $box.append(boxCharacter);
        });
    }

    renderCharacterBox(character(characterList), $box);
}