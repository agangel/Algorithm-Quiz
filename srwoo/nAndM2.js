const fs = require('fs');
const { listenerCount } = require('process');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = `
5 3
`.toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let arr = [];
let visit = [...Array(n)].fill(false);

const recursive = (depth, start) => {
    if(depth === m){
        console.log(arr.join(' '));
        return;
    }

    for(let i=start; i<=n; i++){
        if(visit[i]) continue;
        
        arr[depth] = i;
        visit[i] = true;
        recursive(depth+1, i);
        visit[i] = false;
    }
}

recursive(0, 1);