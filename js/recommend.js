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