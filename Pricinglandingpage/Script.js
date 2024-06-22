const prices = {
    basic: { monthly: 5, yearly: 5 * 12 * 0.8 },
    pro: { monthly: 10, yearly: 10 * 12 * 0.8 },
    adva: { monthly: 15, yearly: 15* 12 * 0.8  }
};

function updatePricing() {
    const billingCycle = document.getElementById('billing-cycle').value;
    const currency = document.getElementById('currency').value;

    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        INR: 80
    };

    const currencySymbol = {
        USD: '$',
        EUR: '€',
        INR: '₹'
    };

    document.getElementById('basic-price').innerText = currencySymbol[currency] + (prices.basic[billingCycle] * conversionRates[currency]).toFixed(2) + '/' + billingCycle;
    document.getElementById('pro-price').innerText = currencySymbol[currency] + (prices.pro[billingCycle] * conversionRates[currency]).toFixed(2) + '/' + billingCycle;
    document.getElementById('adva-price').innerText = currencySymbol[currency] + (prices.adva[billingCycle] * conversionRates[currency]).toFixed(2) + '/' + billingCycle;
    
}

// Initial pricing update
updatePricing();