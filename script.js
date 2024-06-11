document.addEventListener('DOMContentLoaded', function () {
    const flights = [
        { id: 1, from: 'Madrid', to: 'Tokio', price: 600 },
        { id: 2, from: 'Paris', to: 'Seoul', price: 700 },
        { id: 3, from: 'London', to: 'Beijing', price: 800 },
    ];

    const flightList = document.getElementById('flightList');
    const cartContainer = document.getElementById('cart');
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');
    const tripTypeSelect = document.getElementById('tripType');
    const passengersInput = document.getElementById('passengers');
    const searchButton = document.getElementById('searchButton');
    const cart = [];

    searchButton.addEventListener('click', searchFlights);

    function searchFlights() {
        const origin = originInput.value;
        const destination = destinationInput.value;
        const tripType = tripTypeSelect.value;
        const passengers = passengersInput.value;

        // Aquí iría la lógica para buscar vuelos según los criterios seleccionados
        // Por simplicidad, mostraremos todos los vuelos disponibles
        displayFlights();
    }

    function displayFlights() {
        flightList.innerHTML = '';
        flights.forEach(flight => {
            const flightElement = document.createElement('div');
            flightElement.classList.add('flight');
            flightElement.innerHTML = `
                <h3>Vuelo ${flight.id}</h3>
                <p>Desde: ${flight.from}</p>
                <p>Hacia: ${flight.to}</p>
                <p>Precio: $${flight.price}</p>
                <button class="button">Reservar</button>
            `;
            flightList.appendChild(flightElement);

            const reserveButton = flightElement.querySelector('.button');
            reserveButton.addEventListener('click', () => addToCartAndReserve(flight));
        });
    }

    function addToCartAndReserve(flight) {
        cart.push(flight); // Agregar vuelo al carrito
        updateCart();
    }

    function updateCart() {
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>No hay vuelos en el carrito</p>';
        } else {
            const cartList = document.createElement('ul');
            cart.forEach(flight => {
                const flightItem = document.createElement('li');
                flightItem.textContent = `${flight.from} - ${flight.to} - $${flight.price}`;
                cartList.appendChild(flightItem);
            });
            cartContainer.appendChild(cartList);
        }
    }
});