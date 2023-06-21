const posters = [
    {
        image: 'https://m.media-amazon.com/images/I/51xtGwS4TtL._AC_UF894,1000_QL80_.jpg',
        title: 'Practice?',
        quote: 'read the pic bruh',
    },
    {
        image: 'https://therockle.com/wp-content/uploads/2020/11/funny-demotivational-quote-2.jpg',
        title: 'Only Downhill From Here...',
        quote: 'read the pic bruh',
    },
    {
        image: 'https://m.media-amazon.com/images/I/51gEVLok1iL._AC_UF894,1000_QL80_.jpg',
        title: 'Just Stay Home',
        quote: 'read the pic bruh',
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0535/6917/products/motivationdemotivator.jpeg?v=1414011398',
        title: 'ChatGPT Will Take Your Job',
        quote: 'read the pic bruh',
    },
    {
        image: 'https://i.kym-cdn.com/entries/icons/original/000/000/460/poster.jpg',
        title: '2 Kids and a Mortgage',
        quote: 'read the pic bruh',
    },
];

//Set initial image at page load
UpdatePoster();

// Event listener for randomize button
document.getElementById("randomize").addEventListener("click", () => {
    console.log("Randomize button clicked!");
    UpdatePoster();
});

// Event listener for submit button
document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Submit button clicked!");
    generateCustomPoster(event);
});

// Function to generate a random poster
function UpdatePoster() {
    const poster = posters[Math.floor(Math.random() * 5)];
    document.getElementById("poster-image").src = poster.image;
    document.getElementById("poster-title").innerText = poster.title;
    document.getElementById("poster-quote").innerText = poster.quote;
    console.log("Updated Poster!");
};

function generateCustomPoster(event) {
    event.preventDefault();

    const imageInput = document.getElementById("poster-form-image").value;
    const titleInput = document.getElementById("poster-form-title").value;
    const quoteInput = document.getElementById("poster-form-quote").value;

    const poster = {
        image: imageInput,
        title: titleInput,
        quote: quoteInput,
    };

    posters.push(poster);
    console.log(posters)

    document.getElementById('poster-form').reset();

    console.log("Poster added successfully!");

    document.getElementById("poster-image").src = poster.image;
    document.getElementById("poster-title").innerText = poster.title;
    document.getElementById("poster-quote").innerText = poster.quote;


    // Show floating message card
    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');
    messageCard.textContent = 'Poster Added!';
    document.body.appendChild(messageCard);

    // Fade out and remove the message card after 3 seconds
    setTimeout(() => {
        messageCard.style.opacity = '0';
        setTimeout(() => {
            messageCard.remove();
        }, 1000);
    }, 3000);
}
  