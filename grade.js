const { GrAed } = require("react-icons/gr");

const Gread = 79;

if (Gread >= 100 || Gread >= 90){
    console.log('Golden A+')
}
else if (Gread >= 80){
    console.log('A+')
}
else if (Gread >= 70){
    console.log('A')
}
else if (Gread >= 60){
    console.log('B')
}
else if (Gread >= 50){
    console.log('C')
}
else if (Gread >= 40){
    console.log('D')
}
else {
    console.log('F')
}