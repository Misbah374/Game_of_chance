console.log("hello world");
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
let fruit1 = ["banana","mango","plum","apple","guava","kiwi","orange"];
let fruit2 = ["banana","mango","plum","apple","guava","kiwi","orange"];

let test1 = [0,0,0,0,0,0,0,0];
let test2 = [0,0,0,0,0,0,0,0];

let score = 0;
let temp0;
let temp1;
let counter = 0;

shuffleArray(fruit1);
const clickA1 = () =>{
    counter = counter+1;
    if(test1[1]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit1[0];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit1[0];
        }
        test1[1] = test1[1]+1;
    }
    let a = document.getElementById('cardA1').innerHTML = fruit1[0];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickA2 = () =>{
    counter = counter+1;
    if(test1[2]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit1[1];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit1[1];
        }
        test1[2] = test1[2]+1;
    }
    let b = document.getElementById('cardA2').innerHTML = fruit1[1];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickA3 = () =>{
    counter = counter+1;
    if(test1[3]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit1[2];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit1[2];
        }
        test1[3] = test1[3]+1;
    }
    let c = document.getElementById('cardA3').innerHTML = fruit1[2];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickA4 = () =>{
    counter = counter+1;
    if(test1[4]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit1[3];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit1[3];
        }
        test1[4] = test1[4]+1;
    }
    let d = document.getElementById('cardA4').innerHTML = fruit1[3];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickA5 = () =>{
    counter = counter+1;
    if(test1[5]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit1[4];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit1[4];
        }
        test1[5] = test1[5]+1;
    }
    let e = document.getElementById('cardA5').innerHTML = fruit1[4];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickA6 = () =>{
    counter = counter+1;
    if(test1[6]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit1[5];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit1[5];
        }
        test1[6] = test1[6]+1;
    }
    let f = document.getElementById('cardA6').innerHTML = fruit1[5];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickA7 = () =>{
    counter = counter+1;
    if(test1[7]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit1[6];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit1[6];
        }
        test1[7] = test1[7]+1;
    }
    let f = document.getElementById('cardA7').innerHTML = fruit1[6];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
/*console.log(fruit1);*/

shuffleArray(fruit2);
const clickB1 = () =>{
    counter = counter+1;
    if(test2[1]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit2[0];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit2[0];
        }
        test2[1] = test2[1]+1;
    }
    let t = document.getElementById('cardB1').innerHTML = fruit2[0];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickB2 = () =>{
    counter = counter+1;
    if(test2[2]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit2[1];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit2[1];
        }
        test2[2] = test2[2]+1;
    }
    let u = document.getElementById('cardB2').innerHTML = fruit2[1];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickB3 = () =>{
    counter = counter+1;
    if(test2[3]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit2[2];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit2[2];
        }
        test2[3] = test2[3]+1;
    }
    let v = document.getElementById('cardB3').innerHTML = fruit2[2];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickB4 = () =>{
    counter = counter+1;
    if(test2[4]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit2[3];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit2[3];
        }
        test2[4] = test2[4]+1;
    }
    let w = document.getElementById('cardB4').innerHTML = fruit2[3];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickB5 = () =>{
    counter = counter+1;
    if(test2[5]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit2[4];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit2[4];
        }
        test2[5] = test2[5]+1;
    }
    let x = document.getElementById('cardB5').innerHTML = fruit2[4];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickB6 = () =>{
    counter = counter+1;
    if(test2[6]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit2[5];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit2[5];
        }
        test2[6] = test2[6]+1;
    }
    let y = document.getElementById('cardB6').innerHTML = fruit2[5];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
const clickB7 = () =>{
    counter = counter+1;
    if(test2[7]==0){
        if(counter%2==0){
            temp1=temp0;
            temp0=fruit2[6];
            if(temp1==temp0){
                score=score+4;
            }else{
                score=score-1;
            }
        }else if(counter%2==1){
            temp0=fruit2[6];
        }
        test2[7] = test2[7]+1;
    }
    let z = document.getElementById('cardB7').innerHTML = fruit2[6];
    document.getElementById('scoreCounter').innerHTML = `Score: ${score}`;
}
/*console.log(fruit2);*/