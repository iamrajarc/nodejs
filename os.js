const os=require('os')
// console.log('built in module',os)

console.log(os.userInfo())
// i'm just console logging the uptime of the system

console.log(`This is the system uptime ${os.uptime()}`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOs)