// Function to validate the form and display the popup with the selected values
function submitForm() {
    // Get form elements
    const form = document.getElementById("surveyForm");

    // Check if the form is valid (i.e., all fields are filled)
    if (form.checkValidity()) {
        // Get values from the form
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = [];
        if (document.getElementById("male").checked) gender.push("Male");
        if (document.getElementById("female").checked) gender.push("Female");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        // Prepare the survey details to show in the popup
        let surveyDetails = `
            <div><strong>First Name:</strong> ${firstName}</div>
            <div><strong>Last Name:</strong> ${lastName}</div>
            <div><strong>Date of Birth:</strong> ${dob}</div>
            <div><strong>Country:</strong> ${country}</div>
            <div><strong>Gender:</strong> ${gender.join(", ")}</div>
            <div><strong>Profession:</strong> ${profession}</div>
            <div><strong>Email:</strong> ${email}</div>
            <div><strong>Mobile Number:</strong> ${mobile}</div>
        `;

        // Display the survey details in the popup
        document.getElementById("surveyDetails").innerHTML = surveyDetails;

        // Show the popup
        document.getElementById("popup").style.display = "flex";
    } else {
        alert("Please fill out all required fields.");
    }
}

// Function to close the popup and reset the form
function closePopup() {
    // Close the popup
    document.getElementById("popup").style.display = "none";

    // Reset the form
    document.getElementById("surveyForm").reset();
}
