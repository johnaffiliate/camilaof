let swiper = new Swiper(".mySwiper", {
    speed: 400,
    initialSlide: 0,
    autoHeight: false,
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    autoplayStopOnLast: false,
    pagination: '.swiper-pagination',
    paginationType: "bullets",
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows : false,
    },
    spaceBetween: -1,
    slidesPerView: 2,
    centeredSlides: true,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: -1
        }
    }
});



// Fetch the user's location from an IP Geolocation API
fetch('https://ipapi.co/json?token=9cb45b59aa02f1')
.then(response => response.json())
.then(data => {
    const location = `${data.city}, ${data.country_name}`;
    const city = data.city;
    updateLocation(location, city);
})
.catch(error => {
    console.error('Error fetching location:', error);
});

// Update the user's location on the page
function updateLocation(location, city) {
    const locationElement = document.getElementById('userLocation');
    const nearbyCityElement = document.getElementById('nearbyCity');
    locationElement.textContent = `📍 ${location} ❤️ 18 years old 💘 ♊ Gemini`;
    nearbyCityElement.textContent = city;
}
