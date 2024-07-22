import productOperations from "./product-operations.js";
function initiatePayment(){
    const totalAmount = productOperations.getTotalPrice() * 100; 

var options = {

    "key": "rzp_test_a32lKrcuZYb0qW", // Enter the Key ID generated from the Dashboard
    "amount": totalAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Camillo's Pizzeria", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "handler": function (response){
        alert("Payment Completed");
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Customer Name", //your customer's name
        "email": "customer.mail@gmail.com", 
        "contact": "Customer Phone"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
    alert("Payment Failed")
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').addEventListener('click',function(){
    rzp1.open();
    e.preventDefault();
});
}
export default initiatePayment;
