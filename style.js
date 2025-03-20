document.getElementById("streamForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const stream = document.getElementById("stream").value;
    const guidance = document.getElementById("guidance").value;

    console.log("Form submitted with the following data:");
    console.log(`Name: ${name}`);
    console.log(`Stream: ${stream}`);
    console.log(`Guidance: ${guidance}`);

    // Send data to Google Analytics (Event Tracking)
    gtag('event', 'submit_form', {
        'event_category': 'Stream Selection',
        'event_label': `Stream: ${stream}`,
        'name': name,
        'guidance': guidance
    });

    // Show the thank-you message
    document.getElementById("formResponse").style.display = "block";

    // Optionally, hide the form after submission
    document.getElementById("streamForm").style.display = "none";
});
