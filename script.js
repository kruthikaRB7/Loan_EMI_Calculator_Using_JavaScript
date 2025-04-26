function calculateEMI() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
  
    if (isNaN(amount) || isNaN(rate) || isNaN(tenure)) {
      document.getElementById('result').innerText = "Please fill all fields correctly.";
      return;
    }
  
    const monthlyRate = rate / (12 * 100); // Monthly Interest Rate
    const months = tenure * 12;
  
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
  
    const totalPayment = emi * months;
    const totalInterest = totalPayment - amount;
  
    document.getElementById('result').innerHTML = `
      <p><strong>EMI:</strong> ₹${emi.toFixed(2)}</p>
      <p><strong>Total Payment:</strong> ₹${totalPayment.toFixed(2)}</p>
      <p><strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}</p>
    `;
  }
  