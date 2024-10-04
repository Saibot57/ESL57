function toggleSubmenu(element) {
    var submenu = element.querySelector('ul');
    var isExpanded = element.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        submenu.style.display = 'none';
        element.setAttribute('aria-expanded', 'false');
    } else {
        submenu.style.display = 'block';
        element.setAttribute('aria-expanded', 'true');
        updateContent(element);
    }
}

function updateContent(categoryElement) {
    var content = document.getElementById('content');
    var category = categoryElement.firstChild.textContent.trim(); // Get the main category text
    content.innerHTML = `<h1>${category}</h1>`;

    var subCategories = categoryElement.querySelectorAll('ul li'); // Get subcategories under this category

    subCategories.forEach(subCategory => {
        var folder = document.createElement('div');
        folder.className = 'folder';
        folder.innerHTML = `
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/41/folder-304456_960_720.png" alt="Folder">
            <p>${subCategory.textContent}</p>
        `;
        content.appendChild(folder);
    });
}
