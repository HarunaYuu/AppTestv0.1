function switchContent(content) {
    // Hide all content divs except the one being switched to
    const allContent = document.querySelectorAll('#main-content > div');
    allContent.forEach(item => {
        if (item.id === content + '-content') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function promptPassword() {
    console.log('Prompting for password...'); // Added for debugging
    const password = prompt('Enter the admin password:');
    if (password === 'admin123') {
        switchContent('admin');
    } else {
        alert('Incorrect password. Access denied.');
    }
}


const navigation = document.querySelector('.navigation');

document.querySelector('.toggle').onclick = function () {
    navigation.classList.toggle('active');

    console.log('active');
}
