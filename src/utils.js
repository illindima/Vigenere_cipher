const fs = require('fs')

module.exports = class Utils{

    static getComplianceIndex(text,alphabet){
        let n = text.length;
        let y = {};
        let m = {};

        alphabet.split('').forEach((item) => y[item] = 0)

        
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



    static crackThatBullShit(text,alphabet){ return Utils.getComplianceIndex(text,alphabet) }

    static getNLetter(text,n,startIndex = 0){
        text = text.split('')
        let result = [];

        for(let i = startIndex; i < text.length; i += n){
            result.push(text[i])
        }

        return result.join('');
    }

    static getMaxFrequentLetter(text,alphabet){
        let y = Utils.getLetterFrequency(text,alphabet)
    
        let max = 0, letter = '';
        
        for(let i in y){
            if(y[i] >= max){
                max = y[i]
                letter = i
            }
        }
        return letter
    }

    static clearText(text,alphabet){
        let result = [];
        text.toLowerCase().split('').forEach((item) => {
            if(alphabet.includes(item)){
                result.push(item)
            }
        })
        return result.join('');
    }

    static getPeriod(text,alphabet){
        for(let i = 2; i < 30; i++){
            let c = Utils.crackThatBullShit(Utils.getNLetter(text,i,i-2),alphabet)
         
            if( c > 0.05 ){
                return i
            }
        }
    }

    static getKey(r,alphabet,text){
        for(let i = 0; i < r; i++){
            fs.writeFileSync(`../text/sample_${i}.txt`,Utils.getNLetter(text,r,i),'utf-8')
        }

        let res = []
        for(let i = 0; i < r; i++){
            let s = fs.readFileSync(`../text/sample_${i}.txt`,'utf-8')
            let freq = Utils.getMaxFrequentLetter(s,alphabet)
            let sdvig = alphabet.indexOf(freq) - alphabet.indexOf('о') % alphabet.length
            if(sdvig < 0){
                sdvig = sdvig + alphabet.length
            }
            res.push(sdvig)
        }
        

        let key = []
        for(let i = 0; i < res.length; i++){
            for(let j = 0; j < alphabet.length; j++){
                if(j == res[i]){
                    key.push(alphabet[j])
                }
            }
        }

        return key.join('')
    }

    static getLetterFrequency(text,alphabet,check = 1){
        let y = {}

        for(let i in alphabet){
            y[alphabet[i]] = 0
        }

        
        for(let i = 0; i < text.length; i += check){
                y[text[i]] += 1 
        }

        return y 

    }
    
}