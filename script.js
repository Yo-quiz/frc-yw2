// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Samoussrai", img: "Milimpiano.png" },            
    { name: "Ronimpec", img: "Samulimpio.png" },
    { name: "Roupilion", img: "Dormileon.png" },
    { name: "Rugis", img: "Leon_Alfa.png" },
    { name: "Trépigno", img: "Pataleto.png" },
    { name: "Sale de bain", img: "Chupatinas.png" },
    { name: "Agonigiri", img: "Cortarroz.png" },
    { name: "Onigirix", img: "Socarrat.png" },
    { name: "Bouh", img: "Atierrador.png" },
    { name: "Coach Antonic", img: "Capi-Cachas.png" },
    { name: "Démophage", img: "Devoramonios.png" },
    { name: "Vampéric", img: "Devoralmas.png" },
    { name: "Pleurapluie", img: "Fracaguas.png" },
    { name: "Gastong", img: "Chancleto.png" },
    { name: "Mémogre", img: "Komecasa.png" },
    { name: "Ovide", img: "Sincara.png" },
    { name: "Trodésolé", img: "Losiento.png" },
    { name: "Pardomino", img: "Domiplof.png" },
    { name: "Brumette", img: "Niebli.png" },
    { name: "Brumella", img: "Nebula.png" },
    { name: "Maître Oden", img: "Don_Kaldo.png" },
    { name: "Mythovni", img: "Falsillo.png" },
    { name: "Apélicain", img: "Apelicano.png" },
    { name: "Triptic-tac", img: "Trielespejo.png" },
    { name: "Valentino", img: "Ambrosio.png" },
    { name: "Chymère", img: "Kimera.png" },
    { name: "Chyper", img: "Kimerreal.png" },
    { name: "Potache", img: "Aterracota.png" },
    { name: "Jalouseriz", img: "Quierodeso.png" },
    { name: "Fanfanfaron", img: "Gambulloso.png" },
    { name: "Égare-dare", img: "Indiligencio.png" },
    { name: "Charivari", img: "Tanquivocado.png" },
    { name: "Humainequin", img: "Mimoniqui.png" },
    { name: "Pachypipi", img: "Mamuguanto.png" },
    { name: "Antonnerre", img: "Rayael.png" },
    { name: "Parantonn", img: "Cazarayos.png" },
    { name: "Suinthan", img: "Zudado.png" },
    { name: "Crapop", img: "Eleganfibio.png" },
    { name: "Geeko", img: "Frikigarto.png" },
    { name: "Gambeth", img: "Patis.png" },
    { name: "Traviolette", img: "Picassina.png" },
    { name: "Yokoeil", img: "Chiclope.png" },
    { name: "Buchinyan", img: "Buchinyan.png" },
    { name: "Bakuku", img: "Somnia.png" },
    { name: "Sabruine", img: "Cellisca.png" },
    { name: "Vito", img: "Rapidizo.png" },
    { name: "Timours", img: "Oso_Boco.png" },
    { name: "Faux Kappa", img: "Kappafalso.png" },
    { name: "Kappadissi", img: "Tigrappa.png" },
    { name: "Maître Nyada", img: "Gran_Mangu.png" },
    { name: "Algacarena", img: "Algacabana.png" },
    { name: "Papilla", img: "Niscala.png" },
    { name: "Mme Papilla", aliases: ["Mme Papilla", "Madamme Papilla"], img: "Curaniscala.png" },
    { name: "Felipaix", img: "Arenito.png" },
    { name: "M. Felipaix", aliases: ["M. Felipaix", "M Felipaix", "Monsieur Felipaix"], img: "Don_Arenito.png" },
    { name: "Parasolal", img: "Sombrillo.png" },
    { name: "Scarasol", img: "Sombrillogro.png" },
    { name: "Ivanupieds", img: "Pauperman.png" },
    { name: "Lulutin", img: "Nomi.png" },
    { name: "Grégrigry", img: "Gran_Nomi.png" },
    { name: "Métaureaulog", img: "Torivinador.png" },
    { name: "Tauracle", img: "Torivino.png" },
    { name: "Donchan", aliases: ["DON-CHAN", "Don chan", "Donchan"], img: "Don-chan.png" },
    { name: "Sabrille", img: "Rayito.png" },
    { name: "Kyryn", img: "Kyryn.png" },
    { name: "Kyrycorne", img: "Unikyryn.png" },
    { name: "Couchtar", img: "Envelo.png" },
    { name: "Noctambil", img: "Cafeino.png" },
    { name: "Herbert", img: "Acelgo.png" },
    { name: "Carnanova", img: "Morenaso.png" },
    { name: "Gloups", img: "Prestragon.png" },
    { name: "Chip-Chope", img: "Bolsadron.png" },
    { name: "Hâtila", img: "Espaoi.png" },
    { name: "Amédélègue", img: "Hazlotu.png" },
    { name: "Compre Zapzap", img: "Zappingla.png" },
    { name: "Raltesse", img: "Rataleza.png" },
    { name: "Snombéa", img: "Frivolia.png" },
    { name: "Triptyk", img: "Babamandra_A.png" },
    { name: "Dracunyan", img: "Dracunyan.png" },
    { name: "Millyeux", img: "Ojezno.png" },
    { name: "Précyeux", img: "Joyezno.png" },
    { name: "Potofeu", img: "Caldewok_A.png" },
    { name: "Rapiaf", img: "Mirlobirlo.png" },
    { name: "Zikafon", img: "Estrequito.png" },
    { name: "Babarouf", img: "Vrumbo.png" },
    { name: "Poilux", img: "Peluco.png" },
    { name: "Poil-Émile", img: "Foliculio.png" },
    { name: "Non-non", img: "No-No.png" },
    { name: "Pépésbourf", img: "Batallitos.png" },
    { name: "Adolfo Jeton", img: "Eskakeo.png" },
    { name: "Onella", img: "Lena.png" },
    { name: "Sornella", img: "Malena.png" },
    { name: "Crocho", img: "Termascino_A.png" },
    { name: "Arachnus", img: "Aracnio.png" },
    { name: "Arachnia", img: "Aracne.png" },
    { name: "Crampaud", img: "Torticolis.png" },
    { name: "Maudieuse", img: "Malmet.png" },
    { name: "Jérémya", img: "Agorerana.png" },
    { name: "Yvantouse", img: "Desolvidador.png" },
    { name: "Ed Mémoire", img: "Memorio.png" },
    { name: "Scoltine", img: "Mosquereta.png" },
    { name: "Scolérique", img: "Bronquereta.png" },
    { name: "Sirénée", img: "Nereida.png" },
    { name: "Sirènité", img: "Sirenia.png" },
    { name: "Sireine-mère", img: "Oceanida.png" },
    { name: "Mlle Coucou", aliases: ["Mlle Coucou", "Mademoiselle Coucou"], img: "Cisnia.png" },
    { name: "Draconfus", img: "Vacilagon.png" },
    { name: "Carpitaine", img: "Bergantin_A.png" },
    { name: "Déballerine", img: "Chafarina.png" },
    { name: "Savantard", img: "Repeloso.png" },
    { name: "Slurpent", img: "Octosierpe.png" },
    { name: "Melonyan", img: "Melonyan.png" },
    { name: "Oranyan", img: "Naranyan.png" },
    { name: "Kiwinyan", img: "Kiwinyan.png" },
    { name: "Vigninyan", img: "Uvanyan.png" },
    { name: "Maranyan", img: "Fresanyan.png" },
    { name: "Pastènyan", img: "Sandinyan.png" },
    { name: "Robocap", img: "Robokapp.png" },
    { name: "Robokoma", img: "Robokoma.png" },
    { name: "Robopapéti", img: "Roboabuzampa.png" },
    { name: "Robocorniot", img: "Robocantonio.png" },
    { name: "Robonoko", img: "Robonoko.png" },
    { name: "Robodracou", img: "Robodraqui.png" },
    { name: "Boucanyan", img: "Maravinyan.png" },
    { name: "Robonyan F", img: "Robonyan_2.0.png" },
    { name: "Sailornyan", img: "Sailornyan.png" },
    { name: "Maskonyan", img: "Tigrenyan.png" },
    { name: "Hovernyan", img: "Hovernyan.png" },
    { name: "Darknyan", img: "Darknyan.png" },
    { name: "Jibakoma", img: "Jibakoma.png" },
    { name: "Jetnyan", img: "Jetnyan.png" },
    { name: "Injustin", img: "Injustio.png" },
    { name: "Fielippine", img: "Malicia.png" },
    { name: "Cyrustre", img: "Implacablio.png" },
    { name: "Maudicko", img: "Inaguantablio.png" },
    { name: "Ronéan", img: "Destrukto.png" },
    { name: "Gale de bain", img: "Chupatodo.png" },
    { name: "Mabouhl", img: "Aterrahorror.png" },
    { name: "Fumella", img: "Apestula.png" },
    { name: "Fou Kappa", img: "Kappamalo.png" },
    { name: "Pariasolal", img: "Sombrio.png" },
    { name: "Fatalutin", img: "Pillastre.png" },
    { name: "Métaréaulog", img: "Toragorero.png" },
    { name: "Poulux", img: "Cardado.png" },
    { name: "Sinisrénée", img: "Trampeida.png" },
    { name: "Mlle Courroux", aliases: ["Mlle Courroux", "Mademoiselle Courroux"], img: "Malisnia.png" },
    { name: "Mélobê", img: "Keji_Do_Khan.png" },
    { name: "Geigneau", img: "Gruñon_Khan.png" },
    { name: "Bon-huiii", img: "Puergazan.png" },
    { name: "Verrascible", img: "Torreznio.png" },
    { name: "Petit Panja", img: "Pupilo_Panja.png" },
    { name: "Panja-san", img: "Panja_Pro.png" },
    { name: "Samuren", img: "Samuranguila.png" },
    { name: "Barrakéda", img: "Anguilocio.png" },
    { name: "Poulpatouch", img: "Minipulpobola.png" },
    { name: "Poulpater", img: "Pulpobola_Rey.png" },
    { name: "Avallée", img: "Aranecido.png" },
    { name: "Mont Merci", img: "Desaranecido.png" },
    { name: "Sumodon", img: "Sumodon.png" },
    { name: "Soupotori", img: "Supersumodon.png" },
    { name: "Pfffuji", img: "Desinverest.png" },
    { name: "Krakatouaaah", img: "Inverestupcion.png" },
    { name: "Lacanne", img: "Contentallo.png" },
    { name: "Canastelle", img: "Talloestrella.png" },
    { name: "Grolos", img: "Tripasqueleto.png" },
    { name: "Méganyan", img: "Meganyan.png" },
    { name: "Barbefrousse", img: "Capitan_Penas.png" },
    { name: "Tourbœillon", aliases: ["Tourbœillon", "Tourboeillon"], img: "Cicluracan.png" },
    { name: "Laure", img: "Aurea.png" },
    { name: "Marge", img: "Argenta.png" },
    { name: "Lady Perpétua", img: "Lady_Desdicha.png" },
    { name: "Lady Démona", img: "Lady_Demona.png" },
    { name: "Firmain", img: "Manojo.png" },
    { name: "Trompœil", aliases: ["Tromplœil", "Trompoeil"], img: "Torbelloptico.png" },
    { name: "Taprice", img: "Martillete.png" },
    { name: "Barbebluff", img: "Capipalante.png" },
    { name: "Mariotte", img: "Pili.png" },
    { name: "Maribass", img: "Mili.png" },
    { name: "Lady Maggie", img: "Lady_Espanto.png" },
    { name: "Filomène", img: "Kali_Mera.png" },
    { name: "Blingos", img: "Aureosqueleto.png" },
    { name: "Bogos", img: "Diamanqueleto.png" },
    { name: "Maximain", img: "Manazas.png" },
    { name: "Cycloptique", img: "Retinado.png" },
    { name: "Narinos", img: "Tomoko.png" },
    { name: "Ultramax N", img: "Ultra_N.png" },
    { name: "Ultramax K", img: "Ultra_K.png" },
    { name: "Jibanyan S", img: "Jibanyan_S.png" },
    { name: "Komasan S", img: "Komasan_S.png" },
    { name: "Komajiro S", img: "Komajiro_S.png" },
    { name: "Obskyurbi", img: "Oskyubi.png" },
    { name: "Luminoct", img: "Iluminocto.png" },
    { name: "Gargaros", img: "Gargantuo_A.png" },
    { name: "Ogralos", img: "Cazamentires_A.png" },
    { name: "Orqanos", img: "Demoniorco_A.png" },
    { name: "Jiganyan", img: "Rubeo_J.png" },
    { name: "Komak", img: "Gran_Sabueso.png" },
    { name: "Domniscian", img: "Intelecto.png" },
    { name: "Ambronzio", img: "Nulo.png" },
    { name: "Thénuki", img: "Testructor.png" },
    { name: "Infiniris", img: "Infinitio.png" },
    { name: "Chomino", img: "Expresso.png" },
    { name: "Extrabuki", img: "Kabukio.png" }
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

// Mostrar la imagen de "¡Felicidades!" al finalizar el juego
function showCongratsImage() {
    const congratsImg = document.createElement("img");
    congratsImg.src = "congrats.png";
    congratsImg.id = "congrats-image";
    congratsImg.style.position = "fixed";
    congratsImg.style.bottom = "0";
    congratsImg.style.left = "50%";
    congratsImg.style.transform = "translateX(-50%)";
    congratsImg.style.width = "100vw";
    congratsImg.style.zIndex = "1000";
    congratsImg.style.cursor = "pointer";

    // Ocultar la imagen al hacer clic
    congratsImg.addEventListener("click", () => {
        congratsImg.remove();
    });

    document.body.appendChild(congratsImg);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "¿Estás seguro de que quieres salir? Se perderá todo el progreso.";
    }
});
