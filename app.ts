
const foam1 = document.getElementById('Foam-Resume') as HTMLFormElement;
const generateResume = document.getElementById('GenerateResume') as HTMLDivElement;

// Handle Foam Submission

foam1.addEventListener('submit', (event: Event) =>{
    event.preventDefault();
    
    // Take input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('Education') as HTMLInputElement).value;
    const experience = (document.getElementById('Experience') as HTMLInputElement).value;
    const skills = (document.getElementById('Skills') as HTMLInputElement).value;

    const resumeHTML = `

        <h2 class="h2"> Resume </h2>
        <h3> Personal Information </h3>
        <p>Name :${name}</p>
        <p>Email :${email}</p>
        <p>Contact :${contact}</p>

        <h3> Education </h3>
        <p> ${education}</p>

        <h3>Experience </h3>
        <p> ${experience}</p>
        
        <h3>Skills </h3>
        <p>${skills}</p>

    `
    // Display Resume  

    if (generateResume) {
        generateResume.innerHTML = resumeHTML;
        
    } else {
        alert('Error: Generate Resume Div is not found');
    }

})