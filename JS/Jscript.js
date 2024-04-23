function showLoader() {
    document.getElementById("loader").style.display = "block";
  }

  // Function to hide the loading animation
  function hideLoader() {
    document.getElementById("loader").style.display = "none";
  }

  // Event listener to hide the loading animation when the new page is loaded
  window.addEventListener('beforeunload', function () {
    showLoader();
  });

  // Event listener to hide the loading animation when the new page is loaded
  window.addEventListener('load', function () {
    hideLoader();
  });