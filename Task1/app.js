
let _array = []


function Enter(array) {
    for (let i = 0; i < 10; i++) {
    let a = Math.round( Math.random() * 100 );
    array.push(a)
}
}



function Print(array) {
    console.log('First');
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
    }
}

function PrintPARA(array) {
    console.log('Second');
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element%2==0){
        console.log(element);
        }
    }
}

function SumElements(array) {
    let sum =0
    console.log('Third');
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]        
    }
    console.log(sum);
}

function MaxElement(array) {
    console.log('Fourth');
    console.log(Math.max.apply(Math,array));
}

function InsetForIndex(array) {
    console.log('Fifth');
    let index =parseInt(prompt(`Enter index`))
    let numb =parseInt(prompt(`Enter number `))
    array.splice(index,0,numb)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);        
    }

}

function RemoveForIndex(array) {
    console.log('Sixth');
    let index = parseInt(prompt(`Enter index`))
    if(index!=-1){
        array.splice(index,1)
    }
    else{
        alert(`ERROR`)
    }
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
    }
}


Enter(_array)
//1
Print(_array)
//2
PrintPARA(_array)
//3
SumElements(_array)
//4
MaxElement(_array)
//5
InsetForIndex(_array)
//6
RemoveForIndex(_array)