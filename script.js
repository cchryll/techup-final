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


    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchTerm));
        displayEvents(filteredEvents);
    });

    displayEvents(events);
});

/* generate */
const decisionInput = document.getElementById('decision');
const decision = document.getElementById('decision-needed');

decisionInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const decisionData = decisionInput.value;
      decision.innerHTML = decisionData;
      decisionInput.disabled = false;
    }
  });

  const wheel = document.getElementById("wheel");
  spinBtn = document.getElementById("spin-button");
  finalValue = document.getElementById("final-value");
  inputValues = document.getElementById("item-list");

let myChart; // Declare myChart variable
let rotationValues; // Declare rotationValues as global variable

// Function to create or update chart
const initializeChart = () => {
  // Parse input values and set data array
  const inputData = inputValues.value.split('\n').map(value => value.trim());

  rotationValues = inputData.map((value, index) => {
    let minDegree, maxDegree;
  
    // Setting range of angle degrees for each index on the pie chart
    if (index >= 1) {
      minDegree = (360 / inputData.length) * index + 1;
      maxDegree = (360 / inputData.length) * (index + 1);
    } else {
      minDegree = (360 / inputData.length) * index;
      maxDegree = (360 / inputData.length) * (index + 1);
    }
  
    return { minDegree, maxDegree, value };
  });
  
  console.log(rotationValues);

  const pieColors = [
    "#1B9989", "#E9EDEE", "#F9C74F", "#4595C4", "#D98FB3",
  ];

  // Create a new chart if it doesn't exist
  if (!myChart) {
    myChart = new Chart(wheel, {
        // Display text on chart
        plugins: [ChartDataLabels],
        type: "pie",
        data: {
            labels: inputData,
            datasets: [{
                backgroundColor: pieColors,
                data: Array(inputData.length).fill(1), // Use 1 as a placeholder for text values
              }],
        },
        options: {
            responsive: true,
            animation: { duration: 0 },
            plugins: {
                tooltip: false,
                legend: {
                    display: false,
                  },
                datalabels: {
                    color: "#000000",
                    formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                    font: { size: 16 },
                  },
              },
          },
      });
  } else {
    // Update the existing chart
    myChart.data.labels = inputData;
    myChart.data.datasets[0].backgroundColor = pieColors;
    myChart.data.datasets[0].data = Array(inputData.length).fill(1);
    myChart.update();
  }
};

initializeChart();

// Event listener for automatic updating when input values change
inputValues.addEventListener("input", initializeChart);



// Display final value based on randomDegree
const generateValue = (angleValue) => {
  const adjustedValue = 360 - angleValue;

  for (let i of rotationValues) {
      if (adjustedValue >= i.minDegree && adjustedValue <= i.maxDegree) {
          finalValue.innerHTML = `${i.value}`;
          spinBtn.disabled = false;
          break;
      }
  }
}; 

// Spinner Count
let count = 0;
let resultValue = 101;

// Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  // Generate random degree to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  console.log(randomDegree);
  // Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
      myChart.options.rotation = myChart.options.rotation + resultValue;
      myChart.update();
      // If rotation > 360 the count is incremented, resultValue reduced and rotation resets to 0
      if (myChart.options.rotation >= 360) {
          count += 1;
          resultValue -= 5;
          myChart.options.rotation = 0;
      // If count exceeds 15 and rotation angle matches random degree, wheel stops
      } else if (count > 15 && myChart.options.rotation == randomDegree) {
          generateValue(randomDegree);
          clearInterval(rotationInterval);
          count = 0;
          resultValue = 101;
      }
  }, 10); //where setInterval rotation logic is executed every 10milisecs
});




/* Recommend */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recommendationForm');
    const resultSection = document.getElementById('recommendation-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const interests = document.getElementById('interests').value.toLowerCase();

        // Recommendations based on interests
        const recommendations = {
            'outdoor': 'Go for a scenic bike ride along the coast this weekend!',
            'art': 'Visit the downtown art gallery open house.',
            'music': 'Enjoy a free concert in the park.',
            'nature': 'Explore nature with a hike at MacRitchie Reservoir.',
            'food': 'Attend a cooking class together.',
            'history': 'Visit the national museum for a free tour.',
            'relax': 'Have a movie marathon at home.'
        };

        let recommendation = 'Try visiting a new part of town or exploring a local market.';
        for (let key in recommendations) {
            if (interests.includes(key)) {
                recommendation = recommendations[key];
                break;
            }
        }

        // Display the recommendation on the page
        resultSection.innerHTML = `
            <h2>Recommendation</h2>
            <p>Based on your input, we recommend: ${recommendation}</p>
        `;

        // Scroll to the recommendation result
        resultSection.scrollIntoView({ behavior: 'smooth' });
    });
});






/* back to top button */
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}