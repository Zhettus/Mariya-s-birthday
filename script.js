document.getElementById('scroll-down').addEventListener('click', function() {
    var infoSection = document.getElementById('info-section');
    infoSection.style.display = 'block';
    infoSection.scrollIntoView({ behavior: 'smooth' });
});
// Function to handle animations when an element enters the viewport
function handleAnimations(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleAnimations, {
    threshold: 0.5, // Adjust this threshold as needed
  });
  
  // Get all elements with the 'animate' class
  const animatedElements = document.querySelectorAll('.animate');
  
  // Observe each animated element
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
  