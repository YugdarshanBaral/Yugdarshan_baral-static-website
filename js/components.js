class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <a href="index.html" class="logo">Yugdarshan <span>Baral</span></a>
                    <button class="menu-toggle" aria-label="Toggle navigation">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                    <ul class="nav-links">
                        <li><a href="index.html#home">Home</a></li>
                        <li><a href="index.html#about">About</a></li>
                        <li><a href="index.html#skills">Skills</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        `;

        const menuToggle = this.querySelector('.menu-toggle');
        const navLinks = this.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        const links = this.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-info">
                        <h3>Yugdarshan Baral</h3>
                        <p>IT Student & System Administrator</p>
                    </div>
                    <div class="footer-socials">
                        <a href="mailto:contact@example.com" aria-label="Email">Email</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Yugdarshan Baral. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

// Register Custom Elements
customElements.define('custom-navbar', Navbar);
customElements.define('custom-footer', Footer);
