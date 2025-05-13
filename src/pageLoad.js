export function loadInitialPage() {
    const content = document.getElementById("content");

    // Clear any existing content (optional, if needed)
    content.innerHTML = "";

    // Add a welcome section
    const welcomeSection = document.createElement("section");
    welcomeSection.id = "welcome";
    welcomeSection.innerHTML = `
        <h2>Welcome to House Anole</h2>
        <p> Refined dining experience for anoles and their friends. </p>
        <img src="https://example.com/anole.jpg" alt="Anole" style="width: 300px; height: auto;">
    `;
    content.appendChild(welcomeSection);
}

export function loadMenuSection() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content

    const menuSection = document.createElement("section");
    menuSection.id = "menu";
    menuSection.innerHTML = `
        <h2>Menu</h2>
        <ul>
            <li>Grilled Crickets</li>
            <li>Silkworm Tacos</li>
            <li>Fried Flies</li>
        </ul>
    `;
    content.appendChild(menuSection);
}

export function loadAboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content

    const aboutSection = document.createElement("section");
    aboutSection.id = "about";
    aboutSection.innerHTML = `
        <h2>About Us</h2>
        <p>We are passionate about expanding the culinary potential of the anole community. 
        As a great chef once said, "anyone can cook!"</p>
    `;
    content.appendChild(aboutSection);
}

// New function to load the home page

export function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content

    const homeSection = document.createElement("section");
    homeSection.id = "home";
    homeSection.innerHTML = `
        <h2>Welcome to House Anole</h2>
        <p>Refined dining experience for anoles and their friends.</p>
        <img src="https://example.com/anole.jpg" alt="Anole" style="width: 300px; height: auto;">
    `;
    content.appendChild(homeSection);
}