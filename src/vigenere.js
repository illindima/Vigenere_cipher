const Utils = require('./utils')

let _alphabet = '';
let _encodedAlphabet = {}
let _key = ''

module.exports = class Vigenere{

    static get alphabet() { return _alphabet; }
    static set alphabet(alphabet){ _alphabet = alphabet}

    static get key() { return _key; }
    static set key(key){ _key = key}

    static get encodedAlphabet() { return _encodedAlphabet; }

    static setKeyRightLength(text) { Vigenere.key = Vigenere.key.repeat( Math.floor( text.length / Vigenere.key.length) + 1) }

    static encodeAlphabet(){
        Vigenere.alphabet
            .split('')
            .forEach(
                (letter, number ) => Vigenere.encodedAlphabet[letter] = number
            )
    }
        
    static transpile(text){
        let result = [];

        text.split('').forEach((item) => {
            result.push(Vigenere.encodedAlphabet[item])
        })

       return result;
    }

    static decode(text){
        let result = [];

        text.forEach((i) => {

            for(let c in Vigenere.encodedAlphabet){
                if(i == Vigenere.encodedAlphabet[c]) result.push(c)
            }

        })

        return result.join('');
    }

    static vigenereEncrypt(text,key){
        let encryptedText = [];
        
        for(let i = 0; i < text.length; i++){
            encryptedText.push(
                (( text[i] + key[i] ) % Vigenere.alphabet.length )
            );
        }

        return encryptedText;
    }

    static vigenereDecrypt(text){
        let decryptedText = [],key;
        text = Vigenere.transpile(text);
        key = Vigenere.transpile(Vigenere.key)
   
        for(let i = 0; i < text.length; i++){
           let a = text[i] - key[i];
           let d;
           if (a < 0){
                d = (( text[i] - key[i] ) % Vigenere.alphabet.length)  + Vigenere.alphabet.length
           }
           else{
                d = (( text[i] - key[i] ) % Vigenere.alphabet.length) 
           }
           decryptedText.push(d);
        }
        return decryptedText;
    }

    static encrypt(text){
        console.log("[...] Started encryption")
        console.log("[...] Set right key length")
        Vigenere.setKeyRightLength(text)
        Vigenere.encodeAlphabet()
        console.log("[...] Encoded alphabet")
        let f1 = Vigenere.transpile(text)
        console.log("[...] Transpiled open text")
        let f2 = Vigenere.transpile(Vigenere.key)
        console.log("[...] Transpiled key")
        console.log("[...] Text was encrypted")
        return Vigenere.decode(Vigenere.vigenereEncrypt(f1,f2))   
    }

    static decrypt(text){
        Vigenere.setKeyRightLength(text)
        Vigenere.encodeAlphabet()
        console.log("[...] Text was decrypted ")
        return Vigenere.decode(Vigenere.vigenereDecrypt(text))
    }

}
