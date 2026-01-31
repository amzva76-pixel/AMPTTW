
function enterSite() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
    showSection('home'); 
}

function showSection(id) {

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none');

    
    document.getElementById(id).style.display = 'block';

    
    if (id === 'home') {
        document.body.classList.add('pink-lavender-theme');
    } else {
        document.body.classList.remove('pink-lavender-theme');
        document.body.style.backgroundColor = "#ffffff";
    }
}