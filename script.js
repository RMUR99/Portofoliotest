const navLinksElements = document.querySelectorAll('nav-link'); 
const windowPathname = window.location.pathname;


navLinksElements.forEach(navLinkEL => {
    const navLinkPathname = new URL(navLinkEL.href).pathname;
if ( windowPathname === navLinkPathname || (windowPathname === '/index.html' && navLinkPathname === '/' ) ) {

    navLinkEL.classList.add('active'); 

}

     
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

