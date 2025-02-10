const catBreeds = [
    {
        "id": 1,
        "name": "Siamese",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg",
        "origin": "Thailand",
        "lifespan": "12-15 years",
        "size": "Medium",
        "coat": "Short",
        "personality": ["Playful", "Loyal", "Vocal"],
        "wikiPage": "Siamese_cat"
    },
    {
        "id": 2,
        "name": "Maine Coon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Maine_Coon_cat_by_Tomitheos.JPG",
        "origin": "United States",
        "lifespan": "12-18 years",
        "size": "Large",
        "coat": "Long",
        "personality": ["Friendly", "Intelligent", "Gentle"],
        "wikiPage": "Maine_Coon"
    },
    {
        "id": 3,
        "name": "Persian",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg",
        "origin": "Iran",
        "lifespan": "10-15 years",
        "size": "Medium",
        "coat": "Long",
        "personality": ["Calm", "Sweet", "Quiet"],
        "wikiPage": "Persian_cat"
    },
    {
        "id": 4,
        "name": "Bengal",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Paintedcats_Red_Star_standing.jpg/800px-Paintedcats_Red_Star_standing.jpg",
        "origin": "United States",
        "lifespan": "10-16 years",
        "size": "Medium",
        "coat": "Short",
        "personality": ["Active", "Curious", "Energetic"],
        "wikiPage": "Bengal_cat"
    },
    {
        "id": 5,
        "name": "Russian Blue",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Russian_blue.jpg/800px-Russian_blue.jpg",
        "origin": "Russia",
        "lifespan": "15-20 years",
        "size": "Medium",
        "coat": "Short",
        "personality": ["Quiet", "Gentle", "Intelligent"],
        "wikiPage": "Russian_Blue"
    },
    {
        "id": 6,
        "name": "Scottish Fold",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Adult_Scottish_Fold.jpg/800px-Adult_Scottish_Fold.jpg",
        "origin": "Scotland",
        "lifespan": "11-14 years",
        "size": "Medium",
        "coat": "Short",
        "personality": ["Sweet", "Calm", "Adaptable"],
        "wikiPage": "Scottish_Fold"
    },
    {
        "id": 7,
        "name": "Ragdoll",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg",
        "origin": "United States",
        "lifespan": "12-17 years",
        "size": "Large",
        "coat": "Long",
        "personality": ["Relaxed", "Affectionate", "Docile"],
        "wikiPage": "Ragdoll"
    },
    {
        "id": 8,
        "name": "Sphynx",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sphynx_-_cat._img_031.jpg/440px-Sphynx_-_cat._img_031.jpg",
        "origin": "Canada",
        "lifespan": "8-14 years",
        "size": "Medium",
        "coat": "Hairless",
        "personality": ["Energetic", "Friendly", "Mischievous"],
        "wikiPage": "Sphynx_cat"
    },
    {
        "id": 9,
        "name": "British Shorthair",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Britishblue.jpg/800px-Britishblue.jpg",
        "origin": "United Kingdom",
        "lifespan": "12-17 years",
        "size": "Medium",
        "coat": "Short",
        "personality": ["Calm", "Easygoing", "Loyal"],
        "wikiPage": "British_Shorthair"
    },
    {
        "id": 10,
        "name": "Norwegian Forest Cat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Norwegian_Forest_Cat_in_snow.jpg/1280px-Norwegian_Forest_Cat_in_snow.jpg",
        "origin": "Norway",
        "lifespan": "14-16 years",
        "size": "Large",
        "coat": "Long",
        "personality": ["Gentle", "Intelligent", "Adventurous"],
        "wikiPage": "Norwegian_Forest_Cat"
    }
];

// DOM Elements
const catBreedContainer = document.getElementById('cat-breeds-container');
const searchInput = document.getElementById('search-input');
const sizeFilter = document.getElementById('size-filter');
const coatFilter = document.getElementById('coat-filter');
const catDetailsModal = document.getElementById('cat-details-modal');
const catDetailsContent = document.getElementById('cat-details-content');
const closeModalBtn = document.querySelector('.close-modal');
const wikipediaExcerpt = document.getElementById('wikipedia-excerpt');
const wikipediaLink = document.getElementById('wikipedia-link');

// Render cat breeds
function renderCatBreeds(breeds) {
    catBreedContainer.innerHTML = '';
    breeds.forEach(breed => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');
        catCard.innerHTML = `
            <img src="${breed.image}" alt="${breed.name}">
            <div class="cat-card-content">
                <h3>${breed.name}</h3>
                <p>Size: ${breed.size} | Coat: ${breed.coat}</p>
            </div>
        `;
        catCard.addEventListener('click', () => showCatDetails(breed));
        catBreedContainer.appendChild(catCard);
    });
}

// Show cat details in modal with Wikipedia integration
function showCatDetails(breed) {
    catDetailsContent.innerHTML = `
        <h2>${breed.name}</h2>
        <img src="${breed.image}" alt="${breed.name}">
        <p><strong>Origin:</strong> ${breed.origin}</p>
        <p><strong>Lifespan:</strong> ${breed.lifespan}</p>
        <p><strong>Size:</strong> ${breed.size}</p>
        <p><strong>Coat:</strong> ${breed.coat}</p>
        <p><strong>Personality:</strong> ${breed.personality.join(', ')}</p>
    `;

    // Wikipedia Link
    wikipediaLink.href = `https://en.wikipedia.org/wiki/${breed.wikiPage}`;
    wikipediaExcerpt.textContent = 'Loading Wikipedia information...';

    // Simulated Wikipedia excerpt
    const wikiExcerpts = {
        "Siamese_cat": "Siamese cats are known for their distinctive point coloration and vocal nature, originating from Thailand.",
        "Maine_Coon": "Maine Coons are large, sociable cats known for their intelligence and dog-like behaviors.",
        "Persian_cat": "Persian cats are characterized by their long, fluffy coats and sweet, docile temperament.",
        "Bengal_cat": "Bengal cats are a hybrid breed developed by crossing domestic cats with Asian leopard cats.",
        "Russian_Blue": "Russian Blue cats are known for their distinctive blue-gray coat and emerald green eyes.",
        "Scottish_Fold": "Scottish Fold cats are recognized by their unique folded ears and sweet temperament.",
        "Ragdoll": "Ragdolls are large, semi-longhair cats known for their docile and calm nature.",
        "Sphynx_cat": "Sphynx cats are unique for their lack of fur and are known for being very affectionate.",
        "British_Shorthair": "British Shorthairs are known for their round faces and plush, dense coats.",
        "Norwegian_Forest_Cat": "The Norwegian Forest Cat (Norwegian: Norsk skogkatt or Norsk skaukatt), less commonly referred to simply as the Norwegian Forest, is a breed of domestic cat originating in Northern Europe."
                            
    };

    wikipediaExcerpt.textContent = wikiExcerpts[breed.wikiPage] || 'Wikipedia information not available.';
    
    catDetailsModal.style.display = 'block';
}

// Filter and search functionality
function filterCatBreeds() {
    const searchTerm = searchInput.value.toLowerCase();
    const sizeFilterValue = sizeFilter.value;
    const coatFilterValue = coatFilter.value;

    const filteredBreeds = catBreeds.filter(breed => 
        breed.name.toLowerCase().includes(searchTerm) &&
        (sizeFilterValue === '' || breed.size === sizeFilterValue) &&
        (coatFilterValue === '' || breed.coat === coatFilterValue)
    );

    renderCatBreeds(filteredBreeds);
}

// Modal close functionality
function setupModalClose() {
    const closeModal = () => {
        catDetailsModal.style.display = 'none';
    };

    // Multiple ways to close the modal
    closeModalBtn.addEventListener('click', closeModal);
    
    // Close when clicking outside the modal
    catDetailsModal.addEventListener('click', (event) => {
        if (event.target === catDetailsModal) {
            closeModal();
        }
    });

    // Prevent modal content from closing when clicked
    const modalContent = document.querySelector('.modal-content');
    modalContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Allow Wikipedia link to work without closing modal
    wikipediaLink.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

// Event Listeners
searchInput.addEventListener('input', filterCatBreeds);
sizeFilter.addEventListener('change', filterCatBreeds);
coatFilter.addEventListener('change', filterCatBreeds);

// Existing script content remains the same, adding new functions at the end

const associationStats = [
    { name: 'TICA', breeds: 73, url: 'https://tica.org' },
    { name: 'CFA', breeds: 45, url: 'https://cfa.org' }
];

function displayAssociationStats() {
    const associationStatsContainer = document.getElementById('association-stats');
    associationStatsContainer.innerHTML = associationStats.map(assoc => `
        <div class="association-item">
            <a href="${assoc.url}" target="_blank">
                <strong>${assoc.name}:</strong> ${assoc.breeds} Recognized Breeds
            </a>
        </div>
    `).join('');
}

// Call functions during initial setup
displayAssociationStats();

// Append to existing initial setup
renderCatBreeds(catBreeds);
setupModalClose();
