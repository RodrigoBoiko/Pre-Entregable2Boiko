const vuelos = {
    "New York": {"Los Angeles": 300, "Miami": 250, "Chicago": 200},
    "Los Angeles": {"New York": 300, "Miami": 350, "Chicago": 400},
    "Miami": {"New York": 250, "Los Angeles": 350, "Chicago": 300},
    "Chicago": {"New York": 200, "Los Angeles": 400, "Miami": 300}
};

const origenSelect = document.getElementById("origen");
const destinoSelect = document.getElementById("destino");
const fechaInput = document.getElementById("fecha");
const pasajerosInput = document.getElementById("pasajeros");
const resumenDiv = document.getElementById("resumen");

for (const ciudad in vuelos) {
    const option = document.createElement("option");
    option.text = ciudad;
    origenSelect.add(option);
}

