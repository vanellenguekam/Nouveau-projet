
function showDestination(type) {
    const resultDiv = document.getElementById('result');
    const image = document.getElementById('destinationImage');
    let destinationText = '';
    let imageUrl = '';

    if(type === 'aventure') {
        destinationText = "🌄 Vous devriez partir au Népal pour un trek inoubliable !";
        imageUrl = "https://images.unsplash.com/photo-1587502536263-05b7b9ed49bb?auto=format&fit=crop&w=600&q=80";
    } else if(type === 'plage') {
        destinationText = "🏖️ Direction les Maldives pour des plages paradisiaques !";
        imageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80";
    } else if(type === 'culture') {
        destinationText = "🏛️ Rome vous attend avec son histoire fascinante !";
        imageUrl = "https://images.unsplash.com/photo-1526481280690-2d2c7f82f2b0?auto=format&fit=crop&w=600&q=80";
    } else if(type === 'gastronomie') {
        destinationText = "🍝 Paris ou Lyon, pour un voyage culinaire délicieux !";
        imageUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80";
    }

    resultDiv.textContent = destinationText;
    image.src = imageUrl;
    image.alt = type;
}


