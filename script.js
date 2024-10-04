function toggleSubmenu(element) {
    var submenu = element.querySelector('ul');
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
        updateContent(element.textContent.trim());
    }
}

function updateContent(category) {
    var content = document.getElementById('content');
    content.innerHTML = `<h1>${category}</h1>`;
    
    var subCategories = Array.from(document.querySelectorAll(`#menu li:contains('${category}') ul li`))
                             .map(li => li.textContent);
    
    subCategories.forEach(subCategory => {
        var folder = document.createElement('div');
        folder.className = 'folder';
        folder.innerHTML = `
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/41/folder-304456_960_720.png" alt="Folder">
            <p>${subCategory}</p>
        `;
        content.appendChild(folder);
    });
}

// Helper function to find elements containing text
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};
