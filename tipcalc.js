// Part 1 

function tipAmount(bill, service) {
    if (service === 'bad') {
        tip = bill * 0.1;
        return tip; 
    }

    else if (service === 'fair') {
        tip = bill * 0.15;
        return tip;    
    }

    else if (service === 'good') {
        tip = bill * 0.2;
        return tip;     
    } 

}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));


// Part 2 

function totalAmount(bill, service) {
    return tipAmount(bill, service) + bill;
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

// Part 3 

function splitAmount(bill, service, people) {
    return totalAmount (bill, service) / people
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair, 2'));