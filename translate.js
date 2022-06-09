const fs = require('fs')
const translate = require('translate')

const phrases = fs.readFileSync(`${process.argv[0]}`,"utf8")

const lines = phrases.split("\n");
lines.pop()

translate.engine = 'google'

const getTrans = async (text,lang = "es") => {
    try {
        
    const message = await translate(text,lang);
    return message
    }catch (err){ console.log(err)}
    }

const array = [];

(async () => {
    for(const item of lines){
const mesg1 = await getTrans(item);
 await array.push(mesg1);
        }
        
console.log(`Translation:\n\n`)
    lines.forEach((item,index) => {
console.log(`English: ${item}`)
console.log(`Spanish: ${array[index]}\n`)
})

    })();

//getTrans("Can I help you find something?","es")
