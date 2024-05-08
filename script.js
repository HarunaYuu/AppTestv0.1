const navigation = document.querySelector('.navigation');

document.querySelector('.toggle').onclick = function () {
    navigation.classList.toggle('active');
}

function switchContent(content) {
    // Hide all content divs
    document.getElementById('search-content').style.display = 'none';
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('about-content').style.display = 'none';
    document.getElementById('download-content').style.display = 'none';
    document.getElementById('admin-content').style.display = 'none';

    // Show the selected content div
    document.getElementById(content + '-content').style.display = 'block';
}
