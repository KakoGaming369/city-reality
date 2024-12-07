document.getElementById('reservation-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Zabránime obnove stránky

    const houseType = document.getElementById('house-type').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;

    const confirmationSection = document.getElementById('confirmation');
    const confirmationDetails = document.getElementById('confirmation-details');

    confirmationDetails.innerHTML = `
        Typ domčeka: ${houseType} <br>
        Dátum príchodu: ${checkIn} <br>
        Dátum odchodu: ${checkOut} <br>
        Počet hostí: ${guests}
    `;

    confirmationSection.style.display = 'block';
});
