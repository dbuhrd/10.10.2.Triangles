function makeLine(size){
  let line = '';
  for (let i=0; i< size; i++){
    line += '#';
  }
  return line;
}  
console.log(makeLine(5));
console.log('E.');

function makeDownwardStairs(height){
  let stairs = [];
  for (let i=0; i < height; i++){
    let stair = makeLine(i + 1);

    stairs.push(stair);
  }
  return stairs.join('\n');
}
console.log(makeDownwardStairs(5));
console.log('E. (Book example)');
function makeDownwardStair(height){
  let stairs = '';
  for (let i=0; i<height; i++){
    stairs += (makeLine(i+1) + '\n');
  }
  return stairs.slice(0,-1);
}  
console.log(makeDownwardStair(5));

