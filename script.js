function holler() {
    console.log('HEY YOU');
}
//function declaration
const whisper = function() {
    console.log('PSST');
}

let arr = [1,2,3];
arr.forEach(function(value, index, array){
    console.log(value);
})

const colors = ['teal', 'cyan', 'peach', 'purple'];

function yell(val, i) {
    const caps = val.toUpperCase();
    console.log(`${val} At index ${i}`);

}


colors.forEach(yell)