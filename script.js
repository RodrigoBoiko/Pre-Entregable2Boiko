document.addEventListener('DOMContentLoaded', function () {

    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    const tripTypeSelect = document.getElementById('tripType');
    const departureDateInput = document.getElementById('departureDate');
    const returnDateInput = document.getElementById('returnDate');
    const passengersInput = document.getElementById('passengers');
    const searchButton = document.getElementById('searchButton');
    const flightList = document.getElementById('flightList');
    const cartContainer = document.getElementById('cart');
    const priceDisplay = document.getElementById('priceDisplay');
    const cart = [];

    searchButton.addEventListener('click', searchFlights);

    function searchFlights() {
        const origin = originSelect.value;
        const destination = destinationSelect.value;
        const tripType = tripTypeSelect.value;
        const departureDate = departureDateInput.value;
        const returnDate = returnDateInput.value;
        const passengers = passengersInput.value;

        // Calcular el precio total del vuelo (simulación)
        const pricePerPassenger = 500; // Precio base por pasajero
        const totalPrice = pricePerPassenger * passengers;

        // Mostrar el precio total en la página
        priceDisplay.textContent = `Precio total del vuelo para ${passengers} pasajeros desde ${origin} a ${destination}: $${totalPrice}`;

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

document.addEventListener('DOMContentLoaded', function () {
    const discounts = [
        { destination: 'Londres, Reino Unido', discount: '20%', price: '$800', description: 'Descuento especial del 20% para vuelos a Londres. Precio original: $1000.' },
        { destination: 'Roma, Italia', discount: '15%', price: '$700', description: '¡Ahorra un 15% en tu viaje a Roma! Precio original: $825.' },
        { destination: 'Bangkok, Tailandia', discount: '25%', price: '$900', description: '¡Descuento del 25% en vuelos a Bangkok! Precio original: $1200.' }
    ];

    const discountsContainer = document.getElementById('discountsContainer');
    const discountDetails = document.getElementById('discountDetails');

    // Mostrar descuentos de viajes
    discounts.forEach(discount => {
        const discountElement = document.createElement('div');
        discountElement.classList.add('discount');
        discountElement.innerHTML = `
            <h3>${discount.destination}</h3>
            <p>Precio: ${discount.price}</p>
            <p>¡Descuento especial del ${discount.discount}!</p>
            <button class="button">Ver Detalles</button>
        `;
        discountElement.addEventListener('click', () => showDiscountDetails(discount.description));
        discountsContainer.appendChild(discountElement);
    });

    function showDiscountDetails(description) {
        discountDetails.textContent = description;
        discountDetails.style.display = 'block';
        setTimeout(() => {
            discountDetails.style.display = 'none';
        }, 5000);
    }
});