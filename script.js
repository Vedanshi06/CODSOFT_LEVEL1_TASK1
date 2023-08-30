document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const journeyDate = document.getElementById("journey-date").value;
    const budget = document.getElementById("budget").value;

    // You can perform further processing or validation here
    // For now, let's just log the collected data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Age:", age);
    console.log("Journey Date:", journeyDate);
    console.log("Budget:", budget);
});
