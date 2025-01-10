// // Selecting form elements
// const form = document.querySelector('form');
// const fullNameInput = document.querySelector('input[placeholder="Full Name"]');
// const emailInput = document.querySelector('input[placeholder="Email"]');
// const phoneInput = document.querySelector('input[placeholder="Phone Number"]');
// const subjectInput = document.querySelector('input[placeholder="Subject"]');
// const messageInput = document.querySelector('textarea');
// const submitBtn = document.querySelector('input[type="submit"]');

// // Event listener for form submission
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Prevents form from refreshing the page

//     // Creating an object to store user data
//     const userQuery = {
//         fullName: fullNameInput.value,
//         email: emailInput.value,
//         phone: phoneInput.value,
//         subject: subjectInput.value,
//         message: messageInput.value,
//     };

//     // Get existing queries from Local Storage or create a new array
//     let queries = JSON.parse(localStorage.getItem('userQueries')) || [];

//     // Add the new query to the array
//     queries.push(userQuery);

//     // Save the updated array back to Local Storage
//     localStorage.setItem('userQueries', JSON.stringify(queries));

//     // Show a success message
//     alert('Your message has been sent successfully!');
    
//     console.log(queries);
    
//     // Clear the form fields
//     fullNameInput.value = '';
//     emailInput.value = '';
//     phoneInput.value = '';
//     subjectInput.value = '';
//     messageInput.value = '';
// });

emailjs.init("service_7xns8dn"); // Replace with your EmailJS public key

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const fullName = form.querySelector('input[placeholder="Full Name"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const phone = form.querySelector('input[placeholder="Phone Number"]').value;
    const subject = form.querySelector('input[placeholder="Subject"]').value;
    const message = form.querySelector('textarea').value;

    // Create an email object
    const templateParams = {
        from_name: fullName,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };

    // Send the email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(response => {
            alert('Message sent successfully!');
            form.reset();
        })
        .catch(error => {
            alert('Failed to send message. Please try again.');
            console.error('Error:', error);
        });
});
