function evenSizedString(str){
    const size = str.length ;
    console.log(str, size);
    if(size % 2 === 0 ){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size')
        return false;
    }

}

evenSizedString('Tumi Ki Dhaka Thako')
evenSizedString('Hea Ami Dhaka Thaki')






function doubleOrTriple (number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple (60, true))

console.log(doubleOrTriple(30, false))


function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

numberOfElements([12,23,56,,678,34,45,65,34,44,66])




