function openSource() {
    for(let i=1; i<=99; i++) {
        let output;
        if(i%3==0 && i%7==0) {
            output = 'OpenSource';
        } else if(i%3==0) {
            output = 'Open';
        } else if(i%7==0) {
            output = 'Source';
        } else {
            output = i;
        }
        console.log(output);
    }
}

console.log(openSource())