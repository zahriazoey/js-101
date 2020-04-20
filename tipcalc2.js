function totalAmount(bill, service) {
    if (service === 'bad') {
        console.log(bill * 0.1 + bill);

    }
    else if (service === 'fair') {
        console.log(bill * 0.15 + bill);
    }
    
    else if (service === 'good') {
        console.log(bill * .20 + bill);
    }

        
}

totalAmount(100, 'good');
totalAmount(40, 'fair');