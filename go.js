const money = 50 ;

if (money > 80){
    console.log('Go For lunch')
}
else {
    if(money > 80 || money >= 60){
        console.log('Batter Luck Next Time')
    }
    else {
        if (money > 60 || money >= 40){
            console.log('Unsen your friend message')
        }
        else{
            if(money < 40){
                console.log('Block your friend')
            }
        }
    }
}