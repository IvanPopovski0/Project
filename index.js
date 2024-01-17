// Function to handle the intersection of the footer with the viewport
function handleFooterIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      footer.classList.add("show-footer");
    } else {
      footer.classList.remove("show-footer");
    }
  });
}

// Set up the Intersection Observer with the handleFooterIntersection function
const options = {
  threshold: 0.5,
};

const footerObserver = new IntersectionObserver(
  handleFooterIntersection,
  options
);

// Start observing the footer element
footerObserver.observe(footer);
