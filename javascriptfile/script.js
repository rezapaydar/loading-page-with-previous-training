window.addEventListener('load', () => {
    let textorg = document.getElementById('text-org');
    let textline = document.getElementById('text-line');
    let textpara = document.getElementById('text-para');
    let loadingdiv = document.getElementById('loading-div-timing');
    let loading = document.getElementById('loading-div');
    let logo = document.getElementsByClassName('logo')[0];
    setInterval(() => {
        loading.classList.remove('loading-div');
        loadingdiv.classList.remove('loading-div-timing');

    }, 10000);
    setTimeout(() => {
        setInterval(() => {
            logo.classList.remove('logoimg');
        }, 1500);
        setInterval(() => {
            textorg.classList.remove('junb');
        }, 3000);
        setInterval(() => {
            textline.classList.remove('junb');
        }, 5000);
        setInterval(() => {
            textpara.classList.remove('junb');
        }, 7000);
    }, 10000)
})