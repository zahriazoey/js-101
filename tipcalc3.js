function splitAmount(bill, service, people) {
    if (service === 'bad') {
        totalAmount = bill * .10 + bill
        split = totalAmount / people
        console.log(split)
        
    }

    else if (service === 'fair') {
        totalAmount = bill * .15 + bill 
        split = totalAmount / people
        console.log(split)   
    }
    
    else if (service === 'good') {
        totalAmount = bill * .20 + bill
        split = totalAmount / people
        console.log(split)
    }

        
}
splitAmount(100, 'good', 5);
splitAmount(40, 'fair', 2); 