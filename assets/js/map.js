document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() =>{
        document.querySelector("#load-iframe-map").innerHTML = `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.9598068333414!2d-0.3803473303409281!3d39.47296063345738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4e7e35bead%3A0x3b8250f4ee29fff5!2sC.%20de%20las%20Calabazas%2C%2051%2C%20Ciutat%20Vella%2C%2046001%20Valencia!5e0!3m2!1ses-419!2ses!4v1702622149317!5m2!1ses-419!2ses" ></iframe>
        `;
    }, 
    500);
   
});