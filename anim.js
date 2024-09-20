
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
    { text: "Como tú, no hay nadie que me cuide y me quiera", time: 19 },
    { text: "No encuentro una belleza más sincera", time: 25 },
    { text: "Por eso te doy todo lo que soy", time: 28 },
    { text: "Como tú, como un hechizo de amor en mis venas", time: 35 },
    { text: "Como reflejo, como primavera", time: 40 },
    { text: "No hay nada que me llene más que tú", time: 41 },
    { text: "Podrás confiar al fin en alguien que te quiera", time: 49 },
    { text: "Que dé su amor y dé por ti la vida entera", time: 50 },
    { text: "Alguien que te enamore", time: 56},
    { text: "Y que sepa cuidar siempre cada momento", time: 58 },
    { text: "Hoy, aquí, vengo a decirte que ando loco por ti", time: 64 },
    { text: "Nena, provócame, anda, acaríciame", time: 70 },
    { text: "Si tú me quieres, tengo toda una vida", time: 71 },
    { text: "Pa' darte mi amor, pa' darte mi amor", time: 75 },
    { text: "En esta vida ya no busco nada más", time: 105 },
    { text: "Porque te he encontrado a ti", time: 112 },
    { text: "Vivir contigo por toda la eternidad", time: 113 },
    { text: "Hasta que nos llegue el fin", time: 118 },
    { text: "Podrás confiar al fin en alguien que te quiera", time: 119 },
    { text: "Que dé su amor y dé por ti la vida entera", time: 123 },
    { text: "Alguien que te enamore", time: 125 },
    { text: "Y que sepa cuidar siempre cada momento", time: 130 },
    { text: "Hoy, aquí, vengo a decirte que ando loco por ti", time: 136 },
    { text: "Nena, provócame, anda, acaríciame", time: 141 },
    { text: "Si tú me quieres, tengo toda una vida", time: 142 },
    { text: "Pa' darte mi amor, pa' darte mi amor", time: 149 },
    { text: "", time: 170 },
    { text: "Y no habrá nadie mujer que te regale su amor infinito", time: 193 },
    { text: "Más que a mi vida yo te necesito", time:  198 },
    { text: "Quiero que sepas lo que estoy sintiendo", time: 200 },
    { text: "Y que muero de amor", time: 205 },
    { text: "", time: 213 },
    { text: "Y no habrá nadie mujer que te regale su amor infinito", time: 222 },
    { text: "Más que a mi vida yo te necesito", time: 225 },
    { text: "Quiero que sepas lo que estoy sintiendo", time: 230 },
    { text: "Y que muero de amor", time: 233 },
    { text: "", time: 240 },
    { text: "Y no habrá nadie mujer", time: 251 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 251 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 251000);