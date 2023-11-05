document.getElementById('scroll-down').addEventListener('click', function() {
    var infoSection = document.getElementById('info-section');
    infoSection.style.display = 'block';
    infoSection.scrollIntoView({ behavior: 'smooth' });
});
