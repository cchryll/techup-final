/* HOME PAGE */
document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            id: 1,
            name: "Free Concert in the Park",
            date: "2024-05-20",
            time: "18:00",
            location: "Central Park",
            description: "Enjoy a free concert by local bands in Central Park.",
            tag: "Outdoor",
        },
        {
            id: 2,
            name: "Art Gallery Open House",
            date: "2024-05-22",
            time: "10:00",
            location: "Downtown Art Gallery",
            description: "Visit the art gallery's open house and enjoy free admission."
        },
        
        {
            id: 3,
        name: "Beach Picnic",
        date: "2024-05-23",
        time: "12:00",
        location: "Sentosa Beach",
        description: "Pack a picnic and spend the day at the beach.",
        },

        {
            id: 4,
            name: "Movie Marathon at Home",
            date: "2024-05-24",
            time: "All day",
            location: "Your Living Room",
            description: "Stay in and watch your favorite movies all day.",
            tags: ["Indoor", "Free", "Movie"]
        },
        {
            id: 5,
            name: "Hiking Adventure",
            date: "2024-05-25",
            time: "08:00",
            location: "MacRitchie Reservoir",
            description: "Explore nature with a hike at MacRitchie Reservoir.",
            tags: ["Outdoor", "Free", "Hiking"]
        },

        {
            id: 6,
            name: "Volunteer Together at a Local Charity",
            date: "2024-05-26",
            time: "09:00",
            location: "Various Locations",
            description: "Spend the day giving back to the community by volunteering together at a local charity.",
            tags: ["Indoor", "Free", "Volunteering"]
        },

        {
            id: 7,
            name: "Explore a Botanical Garden",
            date: "2024-05-27",
            time: "10:00",
            location: "Singapore Botanic Gardens",
            description: "Take a leisurely stroll through the beautiful Singapore Botanic Gardens.",
            tags: ["Outdoor", "Free", "Nature"]
        },
        {
            id: 8,
            name: "Attend a Free Outdoor Yoga Class",
            date: "2024-05-28",
            time: "08:00",
            location: "Public Park",
            description: "Start your day with a rejuvenating outdoor yoga class in the park.",
            tags: ["Outdoor", "Free", "Yoga"]
        },

        {
            id: 9,
            name: "Visit a Local Farmers' Market",
            date: "2024-05-29",
            time: "09:00",
            location: "Various Locations",
            description: "Explore fresh produce and artisanal goods at a nearby farmers' market.",
            tags: ["Outdoor", "Free", "Market"]
        },
        {
            id: 10,
            name: "Go on a Scenic Bike Ride",
            date: "2024-05-30",
            time: "Morning",
            location: "Cycling Trail",
            description: "Enjoy a leisurely bike ride together along a scenic cycling trail.",
            tags: ["Outdoor", "Free", "Cycling"]
        },
        {
            id: 11,
            name: "Take a Free Guided Tour of a Historic District",
            date: "2024-06-01",
            time: "11:00",
            location: "Historic District",
            description: "Learn about the history of your city with a free guided tour of a historic district.",
            tags: ["Outdoor", "Free", "Tour"]
        },
        {
            id: 12,
            name: "Visit a Community Garden",
            date: "2024-06-02",
            time: "Afternoon",
            location: "Local Community",
            description: "Discover local flora and fauna at a nearby community garden.",
            tags: ["Outdoor", "Free", "Gardening"]
        },

        {
            id: 13,
            name: "Attend a Free Outdoor Movie Screening",
            date: "2024-06-03",
            time: "20:00",
            location: "Public Park",
            description: "Grab a blanket and watch a classic movie under the stars at a free outdoor screening.",
            tags: ["Outdoor", "Free", "Movie"]
        },
        {
            id: 14,
            name: "Explore a Nature Reserve",
            date: "2024-06-04",
            time: "Morning",
            location: "Nature Reserve",
            description: "Immerse yourselves in the beauty of nature by exploring a nearby nature reserve.",
            tags: ["Outdoor", "Free", "Nature"]
        },
        {
            id: 15,
            name: "Have a Picnic in the Park",
            date: "2024-06-05",
            time: "12:00",
            location: "Public Park",
            description: "Pack some sandwiches and enjoy a relaxing picnic in the park together.",
            tags: ["Outdoor", "Free", "Picnic"]
        },
        {
            id: 16,
            name: "Attend a Free Outdoor Concert",
            date: "2024-06-06",
            time: "18:00",
            location: "Public Square",
            description: "Listen to live music and soak up the atmosphere at a free outdoor concert.",
            tags: ["Outdoor", "Free", "Live Music"]
        },
        {
            id: 17,
            name: "Visit a Local Library",
            date: "2024-06-07",
            time: "Anytime",
            location: "Local Library",
            description: "Spend a cozy afternoon together browsing books and exploring a local library.",
            tags: ["Indoor", "Free", "Library"]
        },
        {
            id: 18,
            name: "Take a Free Dance Class",
            date: "2024-06-08",
            time: "Evening",
            location: "Community Center",
            description: "Learn some new moves and have fun dancing together at a free dance class.",
            tags: ["Indoor", "Free", "Dance"]
        },
        {
            id: 19,
            name: "Go on a Photography Walk",
            date: "2024-06-09",
            time: "Late Afternoon",
            location: "Various Locations",
            description: "Explore the city with your cameras and capture some memorable moments together on a photography walk.",
            tags: ["Outdoor", "Free", "Photography"]
        },
        {
            id: 20,
            name: "Have a DIY Home Spa Day",
            date: "2024-06-10",
            time: "All day",
            location: "Your Home",
            description: "Indulge in some self-care and relaxation with a DIY spa day at home.",
            tags: ["Indoor", "Free", "Spa"]
        }

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
                <p><strong>Tag:</strong> ${event.tag}</p>
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

/* generate */
document.addEventListener('DOMContentLoaded', function() {
    const dateIdeas = [
        "Go for a walk in the park",
        "Visit a free museum",
        "Have a picnic at the beach",
        "Attend a free community concert",
        "Explore a local art gallery",
        "Go hiking on a nearby trail",
        "Stargaze in your backyard",
        "Visit a public library and read together",
        "Attend a free fitness class",
        "Have a game night at home"
    ];

    const wheel= document.getElementById('wheel');
    const spinBtn = document.getElementById('spin-btn');
    const selectedIdeaDisplay = document.getElementById('selected-idea');

    function createWheel() {
        const numSegments = dateIdeas.length;
        const segmentAngle = 360 / numSegments;
        dateIdeas.forEach((idea, index) => {
            const segment = document.createElement('div');
            segment.classList.add('segment');
            segment.style.transform = `rotate(${segmentAngle * index}deg) skewY(${90 - segmentAngle}deg)`;
            segment.innerHTML = `<div class="segment-content" style="transform: skewY(${segmentAngle - 90}deg) rotate(${segmentAngle / 2}deg);">${idea}</div>`;
            wheel.appendChild(segment);
        });
    }

    function spinWheel() {
        const randomDegree = Math.floor(Math.random() * 360) + 360 * 5; // Extra spins for effect
        wheel.style.transition = 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        wheel.style.transform = `rotate(${randomDegree}deg)`;
        setTimeout(() => {
            const selectedIdeaIndex = Math.floor((randomDegree % 360) / (360 / dateIdeas.length));
            selectedIdeaDisplay.textContent = dateIdeas[dateIdeas.length - selectedIdeaIndex - 1];
        }, 5000); // Match the transition duration
    }

    spinBtn.addEventListener('click', spinWheel);

    createWheel();
});


/* Recommend Page */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#recommendation-form');
    const resultSection = document.querySelector('#recommendation-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const age = document.querySelector('#age').value;
        const gender = document.querySelector('#gender').value;
        const interests = document.querySelector('#interests').value;
        const personality = document.querySelector('#personality').value;

        // Placeholder recommendation logic
        const recommendation = `Based on your input:
            Age: ${age}
            Gender: ${gender}
            Interests: ${interests}
            Personality: ${personality}
            We recommend trying out a scenic bike ride along the coast this weekend!`;

        // Display the recommendation on the page
        resultSection.innerHTML = `
            <h2>Recommendation</h2>
            <p>${recommendation}</p>
        `;

        // Scroll to the recommendation result
        resultSection.scrollIntoView({ behavior: 'smooth' });
    });
});