function twosums = ( array, target); {
    const result = [1, 3, 10, 11, 13];
    for (let i=0; i < array.lenght; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if ( array [i] + array [j] === target) {
                result.push(i);
                result.push(j);
        

            }
        }
    }
    return twosums;
    console.log(twosums);
}