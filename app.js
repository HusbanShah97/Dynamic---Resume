var foam1 = document.getElementById('Foam-Resume');
var generateResume = document.getElementById('GenerateResume');
// Handle Foam Submission
foam1.addEventListener('submit', function (event) {
    event.preventDefault();
    // Take input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    var resumeHTML = "\n\n        <h2> Resume </h2>\n        <h3> Personal Information </h3>\n        <p>Name :".concat(name, "</p>\n        <p>Email :").concat(email, "</p>\n        <p>Contact :").concat(contact, "</p>\n\n        <h3> Education </h3>\n        <p> ").concat(education, "</p>\n\n        <h3>Experience </h3>\n        <p> ").concat(experience, "</p>\n        \n        <h3>Skills </h3>\n        <p>").concat(skills, "</p>\n\n    ");
    // Display Resume  
    if (generateResume) {
        generateResume.innerHTML = resumeHTML;
    }
    else {
        alert('Error: Generate Resume Div is not found');
    }
});
