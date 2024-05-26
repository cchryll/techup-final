// Wait until the entire HTML document is loaded and ready to be interacted with.
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recommendationForm');
    const resultSection = document.getElementById('recommendation-result');

        // Add an event listener to the form to handle form submission.
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const interests = document.getElementById('interests').value.toLowerCase();

        // Recommendations based on interests
        const recommendations = {
            'outdoor': 'Go for a scenic bike ride along the coast this weekend!',
            'art': 'Visit the newest exhibition at National Gallery!',
            'music': 'Enjoy a free concert at Botanics Garden.',
            'nature': 'Explore nature with a hike at MacRitchie Reservoir.',
            'food': 'Follow a YouTube cooking video and start a cook off at home!',
            'history': 'Have a walk along the Singapore River.',
            'relax': 'Have a movie marathon at home.',
            'sports': 'Have a badminton tournament at your neighbourhood community centre!',
        };
         // Default recommendation if no interest matches.
        let recommendation = 'Try visiting a new part of Singapore or exploring a local new hawker market.';
           // Loop through the recommendations to find a match based on interests.
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