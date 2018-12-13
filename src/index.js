const fs = require('fs')


class Vigenere{
    constructor(text,key,alphabet){
        this.text = text.toLowerCase();
        this.key = key;
        this.alphabet = alphabet;
        this.encoding = {};
    }

    clearText(){
        let result = [];
        this.text.split('').forEach((item) => {
            if(this.alphabet.includes(item)){
                result.push(item)
            }
        })
        this.text = result.join('');
    }

    getComplianceIndex(text){
        let n = text.length;
        let y = {};
        let m = {};

        this.alphabet.split('').forEach((item) => y[item] = 0)

        
        text.split('').forEach((item) => {
            y[item] = y[item] + 1 
        })

        for (let i in y){
            m[i] = ( y[i] * ( y[i] - 1 ) ) / ( n * ( n - 1) )
        }
        
        let x = 0;

        for (let i in m){
            x += m[i];
        }

        return x;


    }
    setKeyRightLength(){
        this.key = this
                   .key
                   .repeat( Math.floor( this.text.length / this.key.length) + 1);
        
        return this.key.length;
        
    }
    encodeAplphabet(){
        this.alphabet.split('').forEach((item, i ) => this.encoding[item] = i)
    }

    transpile(text){
        let result = [];

        text.split('').forEach((item) => {
            result.push(this.encoding[item])
        })

       return result;
    }

    decode(text){
        let result = [];

        text.forEach((i) => {

            for(let c in this.encoding){
                if(i == this.encoding[c]) result.push(c)
            }

        })

        return result.join('');
    }

    vigenereEncrypt(text,key){
        let encryptedText = [];
        
        for(let i = 0; i < text.length; i++){
            encryptedText.push(
                (( text[i] + key[i] ) % this.alphabet.length )
            );
        }

        return encryptedText;
    }

    vigenereDecrypt(text,key){
        let decryptedText = []; 
        text = this.transpile(text);
        key = this.transpile(key)
   
        for(let i = 0; i < text.length; i++){
           let a = text[i] - key[i];
           let d;
           if (a < 0){
                d = (( text[i] - key[i] ) % this.alphabet.length)  + this.alphabet.length
           }
           else{
                d = (( text[i] - key[i] ) % this.alphabet.length) 
           }
           decryptedText.push(d);
        }
        return decryptedText;
    }

    encrypt(){
        console.log("[...] Started encryption")
        this.clearText()
        console.log("[...] Set right key length")
        this.setKeyRightLength()
        this.encodeAplphabet()
        console.log("[...] Encoded alphabet")
        let f1 = this.transpile(this.text)
        console.log("[...] Transpiled open text")
        let f2 = this.transpile(this.key)
        console.log("[...] Transpiled key")
        console.log("[...] Text was encrypted")
        return this.decode(this.vigenereEncrypt(f1,f2))   
    }

    decrypt(text,key){
        key = key.repeat( Math.floor( text.length / key.length) + 1);
        console.log("[...] Text was decrypted ")
        return this.decode(this.vigenereDecrypt(text,key))
    }

}


class App{
    
    static run(){
        console.log('[0] App started...')

        let sample = new Vigenere(
            fs.readFileSync('../text/sample.txt','utf-8').toLowerCase(),
            'wor',
            'abcdefghijklmnopqrstuvwxyz'
        )
    
        let r1,r2;
        r1 = sample.encrypt()
        
        fs.writeFileSync('../text/encrypted.txt',r1,'utf-8')
        r2 = sample.decrypt(r1,'wor')

        fs.writeFileSync('../text/decrypted.txt',r2,'utf-8')

        console.log(sample.getComplianceIndex(r1));
        console.log(sample.getComplianceIndex(r2));

        console.log('[1] App ended...')
    }

}




App.run()