document.getElementById("streamForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Optionally, collect form data here (e.g., name, stream, etc.)
    const name = document.getElementById("name").value;
    const stream = document.getElementById("stream").value;
    const guidance = document.getElementById("guidance").value;

    console.log("Form submitted with the following data:");
    console.log(`Name: ${name}`);
    console.log(`Stream: ${stream}`);
    console.log(`Guidance: ${guidance}`);

    // Show the thank-you message
    document.getElementById("formResponse").style.display = "block";

    // Optionally, hide the form after submission
    document.getElementById("streamForm").style.display = "none";
});
