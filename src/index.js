const fs = require('fs')
const Vigenere = require('./vigenere')
const Utils = require('./utils')

class App{
    
    static run(){
        console.log('[0] App started...')

        Vigenere.alphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя'
        Vigenere.key = 'пример'


        let source = fs.readFileSync('../text/sample.txt','utf-8')

        source = Utils.clearText(source,Vigenere.alphabet)

        console.log(Vigenere.encrypt(source))
        console.log(Vigenere.decrypt(Vigenere.encrypt(source)))
       
        let period = Utils.getPeriod(source, Vigenere.alphabet)
        console.log(Utils.getKey(period,Vigenere.alphabet,source))

        console.log('[1] App finished...')
    }

}

App.run()