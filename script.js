document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            id: 1,
            name: "Free Concert in the Park",
            date: "2024-05-20",
            time: "18:00",
            location: "Central Park",
            description: "Enjoy a free concert by local bands in Central Park."
        },
        {
            id: 2,
            name: "Art Gallery Open House",
            date: "2024-05-22",
            time: "10:00",
            location: "Downtown Art Gallery",
            description: "Visit the art gallery's open house and enjoy free admission."
        },
        // Add more events here
    ];

    const eventList = document.getElementById('event-list');
    const searchBar = document.getElementById('search-bar');

    function displayEvents(eventArray) {
        eventList.innerHTML = '';
        eventArray.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <button onclick="saveFavorite(${event.id})">Save to Favorites</button>
            `;
            eventList.appendChild(eventCard);
        });
    }

    function saveFavorite(eventId) {
        const event = events.find(event => event.id === eventId);
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(event);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Event saved to favorites!');
    }

    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchTerm));
        displayEvents(filteredEvents);
    });

    displayEvents(events);
});