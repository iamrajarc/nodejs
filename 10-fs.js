const {readFileSync,writeFileSync}=require('fs')
// const fs=require('fs');

const first=readFileSync('./content/subfolder/first.txt','utf-8');
const second=readFileSync('./content/subfolder/second.txt','utf-8');

console.log(first,second)

writeFileSync('./content/result-sync.txt',`Here is Our result leader:${first},${second}`,{flag:'a'})