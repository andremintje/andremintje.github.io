function showLoader() {
    document.getElementById("loader").style.display = "block";
  }


  function hideLoader() {
    document.getElementById("loader").style.display = "none";
  }


  window.addEventListener('beforeunload', function () {
    showLoader();
  });


  window.addEventListener('load', function () {
    hideLoader();
  });