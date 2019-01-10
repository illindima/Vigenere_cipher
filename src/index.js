const fs = require('fs')
const Vigenere = require('./vigenere')
const Utils = require('./utils')

class App{
    
    static run(){
        console.log('[0] App started...')

        Vigenere.alphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя'
        // Vigenere.key = 'пр'


        // let source = fs.readFileSync('../text/sample.txt','utf-8')
        let encrypted = fs.readFileSync('../text/sample2.txt','utf-8')

        // source = Utils.clearText(source,Vigenere.alphabet)
        encrypted = Utils.clearText(encrypted,Vigenere.alphabet)

        // let f1 = Vigenere.encrypt(source)
        // console.log(f1)
        // console.log(Utils.getComplianceIndex(f1,Vigenere.alphabet))

        // let f2 = Vigenere.decrypt(Vigenere.encrypt(source))
        // console.log(f2)
        // console.log(Utils.getComplianceIndex(f2,Vigenere.alphabet))


       
        let period = Utils.getPeriod(encrypted, Vigenere.alphabet)
        console.log(period)
        console.log(Utils.getKey(period,Vigenere.alphabet,encrypted))

        // Vigenere.key = 'возвращениеджинна'
        // let f3 = Vigenere.decrypt(encrypted)
        // fs.writeFileSync('../text/final.txt',f3,'utf-8')

        let decryptedText = fs.readFileSync('../text/final.txt','utf-8')

        
        
        for(let i = 0; i < 17; i++){
            fs.writeFileSync(`../text/final_${i}.txt`,Utils.getNLetter(decryptedText,17,i),'utf-8')
        }

        for(let i = 0; i < 17; i++){
            let encryptedText = fs.readFileSync(`../text/final_${i}.txt`,'utf-8');
            let letterFrequency = Utils.getLetterFrequency(encryptedText,Vigenere.alphabet)
            console.log(letterFrequency)
            console.log(`Key number: ${i + 1}`,Object.keys(letterFrequency)
                .sort((a,b) => letterFrequency[b] - letterFrequency[a])
                .slice(0,5)
            )
            console.log('-----------------')
        }

        console.log('[1] App finished...')
    }

}

App.run()