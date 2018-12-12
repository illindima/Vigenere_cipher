class App{
    
    static main(){
        console.log('[0] App started...')
    }
}


class Vigenere{
    constructor(text,key,alphabet){
        this.text = text;
        this.key = key;
        this.alphabet = alphabet;
        this.encoding = {};
    }

    setKeyRightLength(){
        this.key = this
                   .key
                   .repeat( Math.floor( this.text.length / this.key.length ) + 1 );
        
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
                ( text[i] + key[i] ) % this.alphabet.length
            );
        }

        return encryptedText;
    }

    vigenereDecrypt(text,key){
        let decryptedText = [];
        text = this.transpile(text);
        key = this.transpile(key)

        for(let i = 0; i < text.length; i++){
            decryptedText.push(
                ( text[i] - key[i] ) % this.alphabet.length
            );
        }
        
        return decryptedText;
    }

    encrypt(){
        console.log("[...] Started encryption")
        console.log("[...] Set right key length",this.setKeyRightLength())
        this.encodeAplphabet()
        console.log("[...] Encoded alphabet")
        let f1 = this.transpile(this.text)
        console.log("[...] Transpiled open text",f1)
        let f2 = this.transpile(this.key)
        console.log("[...] Transpiled key",f2)
        console.log("[...] Encrypted text =>")
        return this.decode(this.vigenereEncrypt(f1,f2))   
    }

    decrypt(text,key){
        console.log("[...] Decrypted text => ")
        return this.decode(this.vigenereDecrypt(text,key))
    }

}


let sample = new Vigenere('HelloWorld'.toLowerCase(),'ab','abcdefghijklmnopqrstuvwxyz')

let r1,r2;
r1 = sample.encrypt()

console.log(r1)

r2 = sample.decrypt(r1,sample.key)

console.log(r2)






