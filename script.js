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
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    }
    return colors;
};

let pieColors = generateColors(6);

const rotationValues = [
    { minDegree: 0, maxDegree: 30, value: 2 },
    { minDegree: 31, maxDegree: 90, value: 1 },
    { minDegree: 91, maxDegree: 150, value: 6 },
    { minDegree: 151, maxDegree: 210, value: 5 },
    { minDegree: 211, maxDegree: 270, value: 4 },
    { minDegree: 271, maxDegree: 330, value: 3 },
    { minDegree: 331, maxDegree: 360, value: 2 },
];

let myChart = new Chart(wheel, {
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
        labels: ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6"],
        datasets: [{
            backgroundColor: pieColors,
            data: [1, 1, 1, 1, 1, 1],
        }],
    },
    options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
            tooltip: false,
            legend: { display: false },
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 24 },
            },
        },
    },
});

const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            finalValue.innerHTML = `<p>Winner: Section ${i.value}</p>`;
            spinBtn.disabled = false;
            break;
        }
    }
};

let count = 0;
let resultValue = 101;

spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    finalValue.innerHTML = `<p>Spinning the wheel. Good luck!</p>`;
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    let rotationInterval = window.setInterval(() => {
        myChart.options.rotation = myChart.options.rotation + resultValue;
        myChart.update();
        if (myChart.options.rotation >= 360) {
            count += 1;
            resultValue -= 5;
            myChart.options.rotation = 0;
        } else if (count > 15 && myChart.options.rotation == randomDegree) {
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count = 0;
            resultValue = 101;
        }
    }, 10);
});

/* Recommend */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#recommendationForm');
    const resultSection = document.querySelector('#recommendation-result');
    const interestsField = document.querySelector('#interests');

    // Prompt message when the interests field is focused
    interestsField.addEventListener('focus', function() {
        if (!interestsField.dataset.promptShown) {
            alert('Please enter your interests, such as "outdoor person", "art", "music", etc.');
            interestsField.dataset.promptShown = true;
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const age = document.querySelector('#age').value;
        const gender = document.querySelector('#gender').value;
        const interests = document.querySelector('#interests').value.toLowerCase();

        // Debug: Log the input values
        console.log('Age:', age);
        console.log('Gender:', gender);
        console.log('Interests:', interests);

        // Placeholder recommendation logic
        const recommendations = [
            {
                match: ['outdoor', 'active'],
                suggestion: 'Go for a scenic bike ride along the coast this weekend!'
            },
            {
                match: ['art', 'indoor'],
                suggestion: 'Visit the downtown art gallery open house.'
            },
            {
                match: ['music', 'outdoor'],
                suggestion: 'Enjoy a free concert in the park.'
            },
            {
                match: ['nature', 'outdoor'],
                suggestion: 'Explore nature with a hike at MacRitchie Reservoir.'
            },
            {
                match: ['food', 'indoor'],
                suggestion: 'Attend a cooking class together.'
            },
            {
                match: ['history', 'indoor'],
                suggestion: 'Visit the national museum for a free tour.'
            },
            {
                match: ['relax', 'indoor'],
                suggestion: 'Have a movie marathon at home.'
            }
        ];

        // Simplified matching logic
        let recommendation = recommendations.find(rec => {
            return rec.match.some(tag => interests.includes(tag));
        });

        if (!recommendation) {
            recommendation = { suggestion: 'Try visiting a new part of town or exploring a local market.' };
        }

        // Debug: Log the recommendation
        console.log('Recommendation:', recommendation.suggestion);

        // Display the recommendation on the page
        resultSection.innerHTML = `
            <h2>Recommendation</h2>
            <p>Based on your input, we recommend: ${recommendation.suggestion}</p>
        `;

        // Scroll to the recommendation result
        resultSection.scrollIntoView({ behavior: 'smooth' });
    });
});
