function sum(...numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum;
}

class SomeMath {
    avg(...numbers){
    return sum(...numbers) / numbers.length;
    }

    max(...numbers){
        let max = -Infinity;

        for(let i = 0; i < numbers.length; i++){
            max = numbers[i];
        }

        return max;
    }

    merge(a,b){
        console.log(a);
        
        return {
            ...a,
            ...b
        }
    }
}
 

export default new SomeMath();