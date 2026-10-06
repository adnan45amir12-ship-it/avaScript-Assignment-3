const ticketForm = document.getElementById("ticketForm");
const ticketOutput = document.getElementById("ticketOutput");

ticketForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const age = Number(document.getElementById("age").value);
    const departure = document.getElementById("departure").value;
    const arrival = document.getElementById("arrival").value;
    const profession = document.getElementById("profession").value;

    let price = 0;

    // Age below 5 or above 65 = free ticket
    if (age < 5 || age > 65) {
        price = 0;
    } else {
        // Normal ticket price
        price = 10000;

        // Students get 50% discount
        if (profession === "Student") {
            price = price * 0.50;
        }
    }

    ticketOutput.innerHTML = `
        <div class="ticket-info">
            <p><strong>Customer Name:</strong> ${customerName}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Departure:</strong> ${departure}</p>
            <p><strong>Arrival:</strong> ${arrival}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p class="price">Ticket Price: Rs. ${price}</p>
        </div>
    `;
});
