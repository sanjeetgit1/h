// // RazorpayButton.js

// import React, { useState } from 'react';

// const RazorpayButton = () => {
//   const [amount, setAmount] = useState(100); // Default amount in smallest currency unit (e.g., paise)

//   const loadRazorpay = () => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => openRazorpay();
//     document.body.appendChild(script);
//   };

//   const openRazorpay = () => {
//     const options = {
//       key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
//       amount: amount * 100, // Razorpay expects the amount in the smallest currency unit (e.g., paise)
//       currency: 'INR',
//       name: 'Your Company',
//       description: 'Test Payment',
//       image: 'https://your-logo-url.com/logo.png', // Optional logo URL
//       handler: function (response) {
//         alert('Payment successful!');
//         console.log(response); // Handle the response as needed
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         contact: '9876543210',
//       },
//       notes: {
//         address: 'Razorpay Corporate Office',
//       },
//       theme: {
//         color: '#F37254', // Button color
//       },
//     };
//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div>
//       <button onClick={loadRazorpay}>Proceed to Payment</button>
//     </div>
//   );
// };

// export default RazorpayButton;
