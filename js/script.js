function stopLoader() {
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
}

document.body.onload = function() {
    stopLoader();
}