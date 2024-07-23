document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        form.reset(); // Limpia el formulario
    });
});
