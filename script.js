const stanzas = [
    [

        { text: "Tu bandera es un lampo de ...", missingWord: "cielo" },
        { text: "por un bloque de nieve ...", missingWord: "cruzado" },
        { text: "y se ven en su fondo ...", missingWord: "sagrado" },
        { text: "cinco estrellas de pálido ...", missingWord: "azul" },
        { text: "en tu emblema, que un mar ...", missingWord: "rumoroso" },
        { text: "con sus ondas bravías ...", missingWord: "escuda" },
        { text: "de un volcán, tras la cima ...", missingWord: "desnuda" },
        { text: "hay un astro de nítida ...", missingWord: "luz" }
    ],
    [
        { text: "India virgen y hermosa ...", missingWord: "dormías" },
        { text: "de tus mares al canto ...", missingWord: "sonoro" },
        { text: "cuando echada en tus cuencas de ...", missingWord: "oro" },
        { text: "el audaz navegante te ...", missingWord: "halló" },
        { text: "y al mirar tu belleza ...", missingWord: "extasiado" },
        { text: "al influjo ideal de tu ...", missingWord: "encanto" },
        { text: "la orla azul de tu espléndido ...", missingWord: "manto" },
        { text: "con su beso de amor ...", missingWord: "consagró" }
    ],
    [
        { text: "De un país donde el sol se ...", missingWord: "levanta" },
        { text: "más allá del atlante ...", missingWord: "azulado" },
        { text: "aquel hombre te había ...", missingWord: "soñado" },
        { text: "y en tu busca a la mar se ...", missingWord: "lanzó" },
        { text: "Cuando erguiste la pálida ...", missingWord: "frente" },
        { text: "en la viva ansiedad de tu ...", missingWord: "anhelo" },
        { text: "bajo el dombo gentil de tu ...", missingWord: "cielo" },
        { text: "ya flotaba un extraño ...", missingWord: "pendón" }
    ],
    [
        { text: "Era inútil que el indio tu ...", missingWord: "amado" },
        { text: "se aprestara a la lucha con ...", missingWord: "ira" },
        { text: "porque envuelto en su sangre ...", missingWord: "Lempira" },
        { text: "en la noche profunda se ...", missingWord: "hundió" },
        { text: "y de la épica hazaña, en ...", missingWord: "memoria" },
        { text: "la leyenda tan sólo ha ...", missingWord: "guardado" },
        { text: "de un sepulcro el lugar ...", missingWord: "ignorado" },
        { text: "y el severo perfil de un ...", missingWord: "peñón" }
    ],
    [
        { text: "Por tres siglos tus hijos ...", missingWord: "oyeron" },
        { text: "el mandato imperioso del ...", missingWord: "amo" },
        { text: "por tres siglos tu inútil ...", missingWord: "reclamo" },
        { text: "en la atmósfera azul se ...", missingWord: "perdió" },
        { text: "pero un día gloria tu ...", missingWord: "oído" },
        { text: "percibió, poderoso y ...", missingWord: "distante" },
        { text: "que allá lejos, por sobre el ...", missingWord: "atlante" },
        { text: "indignado rugía un ...", missingWord: "león" }
    ],
    [
        { text: "Era Francia, la libre, la ...", missingWord: "heroica" },
        { text: "que en su sueño de siglos ...", missingWord: "dormida" },
        { text: "despertaba iracunda a la ...", missingWord: "vida" },
        { text: "al reclamo viril de ...", missingWord: "Dantón" },
        { text: "era Francia que enviaba a la ...", missingWord: "muerte" },
        { text: "la cabeza del rey ...", missingWord: "consagrado" },
        { text: "y que alzaba, soberbia a su ...", missingWord: "lado" },
        { text: "el altar de la Diosa ...", missingWord: "razón" }
    ],
    [
        { text: "Tú también ¡Oh mi patria! te ...", missingWord: "alzaste" },
        { text: "de tu sueño servil y ...", missingWord: "profundo" },
        { text: "tú también enseñastes al ...", missingWord: "mundo" },
        { text: "destrozado el infame ...", missingWord: "eslabón" },
        { text: "Y en tu suelo bendito, tras la ...", missingWord: "alta" },
        { text: "cabellera de monte ...", missingWord: "salvaje" },
        { text: "como un ave de negro ...", missingWord: "plumaje" },
        { text: "la colonia fugaz se ...", missingWord: "perdió" }
    ],
    [
        { text: "Por guardar ese emblema ...", missingWord: "divino" },
        { text: "marcharemos¡Oh patria!a la ...", missingWord: "muerte" },
        { text: "generosa será nuestra ...", missingWord: "suerte" },
        { text: "si morimos pensando en tu ...", missingWord: "amor" },
        { text: "Defendiendo tu santa ...", missingWord: "bandera" },
        { text: "y en tus pliegues gloriosos ...", missingWord: "cubiertos" },
        { text: "serán muchos, Honduras, tus ...", missingWord: "muertos" },
        { text: "pero todos caerán con ...", missingWord: "honor" }
    ]
];
let currentStanza = [];
let currentPhraseIndex = 0;
let score = 0;
let lastStanzaIndex = -1;
let completedStanzas = 0; // Cuenta las estrofas completadas

function loadStanza() {
    if (completedStanzas === stanzas.length) {
        showReward(); // Muestra el premio si todas las estrofas han sido completadas
        return;
    }

    let newStanzaIndex;
    do {
        newStanzaIndex = Math.floor(Math.random() * stanzas.length);
    } while (newStanzaIndex === lastStanzaIndex);

    currentStanza = stanzas[newStanzaIndex];
    lastStanzaIndex = newStanzaIndex;
    currentPhraseIndex = 0;
    displayPhrase();
}

function displayPhrase() {
    const phraseContainer = document.getElementById('phrase-container');
    const phrase = currentStanza[currentPhraseIndex];
    phraseContainer.innerHTML = `
        <p>${phrase.text.replace("...", `<input type="text" id="user-input" placeholder="¿...?" autofocus>`)} </p>
        <button onclick="checkAnswer()">Verificar</button>
    `;
}

function checkAnswer() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    const correctAnswer = currentStanza[currentPhraseIndex].missingWord.toLowerCase();

    if (userInput === correctAnswer) {
        score++;
        alert("¡Correcto!");
    } else {
        alert(`Incorrecto. La palabra correcta era "${correctAnswer}".`);
    }

    document.getElementById('score').innerText = `Puntuación: ${score}`;

    currentPhraseIndex++;
    if (currentPhraseIndex < currentStanza.length) {
        displayPhrase();
    } else {
        alert("¡Estrofa completada!");
        completedStanzas++;
        nextStanza();
    }
}

function nextStanza() {
    loadStanza();
}

function showReward() {
    const phraseContainer = document.getElementById('phrase-container');
    phraseContainer.innerHTML = `
        <h2>¡Felicidades! Has completado el himno completo</h2>
        <p>Gracias por participar. Aquí tienes un obsequio:</p>
        <img src="premio.png" alt="Premio" style="width:200px; height:auto;">
    `;
    document.getElementById('score').innerText = `Puntuación final: ${score}`;
}

window.onload = loadStanza;
