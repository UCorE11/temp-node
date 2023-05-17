/*
readFileSync() is synchronous and blocks execution 
until finished. These return their results as return 
values. readFile() are asynchronous and return 
immediately while they function in the background. 
You pass a callback function which gets called when 
they finish.
*/

const {readFile,writeFile}=require('fs')
console.log('start')
readFile('./7-fs/content/subfolder/text.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./7-fs/content/subfolder/text1.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const second=result
        writeFile('./7-fs/content/subfolder/result-async.txt',
        `Here is the result : ${first},${second}`,
         (err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        console.log('done with this task')
    }
    )
    })
    
})
console.log('starting next task')