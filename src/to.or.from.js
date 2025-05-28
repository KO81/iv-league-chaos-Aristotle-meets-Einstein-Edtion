import{b as BtS}from'./binary.switcher.js';
import{a,d,beta,irritator,IV,plain,hex,gDec,gEnc}from'./json.js';
/*inspired by "Seek the depths, but never the end."*/
/*inspired by "Seek the depths, but never the end."*/
class NuclearBase64{
	static #BOM=new Uint8Array([0xFF,0xFE,0x00,0x00]);
	static encodeBOMsave(str){return btoa(String.fromCharCode(...new Uint8Array([...this.#BOM,...this.stringToUTF32Bytes(str)])));
    }static decodeBOMsave(str){
        let bytes=Uint8Array.from(atob(str),c=>c.charCodeAt(0));
        if(!this.#validateBOM(bytes)){throw new Error("Invalid UTF-32 BOM");
        }return this.bytesToStringUTF32(bytes.subarray(4));
    }static encode(str){return btoa(String.fromCharCode(...this.stringToUTF32Bytes(str)));
    }static decode(str){return this.bytesToStringUTF32(Uint8Array.from(atob(str),c=>c.charCodeAt(0)));
    }static #validateBOM(bytes){return bytes.length>=4&&bytes[0]===0xFF&&bytes[1]===0xFE&&bytes[2]===0x00&&bytes[3]===0x00;
    }static stringToUTF32Bytes(str,littleEndian=false){/* credits Simon Buchan */
        let cp=Array.from(str,c=>c.codePointAt(0)),bytes=new Uint8Array(cp.length*4),vw=new DataView(bytes.buffer);
        cp.forEach((cp,i)=>vw.setUint32(i*4,cp,littleEndian));
        return bytes;
    }static bytesToStringUTF32(bytes,littleEndian=false){/* credits Simon Buchan */
        let vw=new DataView(bytes.buffer),cp=new Array(bytes.length/4),i=0;
        for(i;i<cp.length;i++){cp[i]=vw.getUint32(i*4,littleEndian);
        }return String.fromCodePoint(...cp);
    }
}function chaotic(g1,ex){
	let a0=ex.match(/.{2}/g).map(b=>parseInt(b,16))||[0xde,0xad],a1=[...g1],a2=[...d.d],a3,a4,a5,d0=g1.length;
	for(d0--;d0>-1;d0-=2){
		a3=[(a0[d0%a0.length]*a0[(d0+1)%a0.length]^0xBEAF)%0x10,a0[d0-1]];a3[1]=(((Math.round(Math.log(a3[0]))||3)^(a0[d0]>>>a3[0])+d0)%g1.length)%0x10;
		a2=a2.rotate(a3[0]+a3[1],!(beta(ex[d0])>>a3[1]));a4=[a1[a3[1]],a1[a3[0]]];a1[a3[0]]=a4[0];a1[a3[1]]=a4[1];a1=a1.rotate(beta(ex[d0])>>a3[0],a3[1]<a3[0])
	}return a1//g1=a1
}async function norm(input){
    if(typeof input==='function'){return await comp(chaotic(input.toString().split(''),input.toString()).slice(0,32).join('')).join('').padEnd(32,'q');
    }if(Array.isArray(input)){btoa(headUp(BtS((input.reverse().join('')))).map(p=>((p%67)||(p/3))^5).join('').substring(0,7e2)).substring(0,7e2);
    	return btoa(headUp(BtS((input.reverse().join('')))).map(p=>((p%67)||(p/3))^5).join('').substring(0,7e2)).substring(0,7e2);
    }if(input===null||input===undefined){return addSmokescreen(IV(512));
    }btoa(chaotic(headUp(input.padStart(8,'q').split('')),String(input).padEnd(14,'e')).reverse().join(''));
    return btoa(chaotic(headUp(input.padStart(8,'q').split('')),String(input).padEnd(14,'e')).reverse().join(''));
}function isBase64(str){try{return btoa(atob(str))===str}catch{return false}
}function b64EncUTF16(str){
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,function toSolidBytes(match,p1){return String.fromCharCode('0x'+p1)}));
}function b64DecUTF16(str){
    return decodeURIComponent(atob(str).split('').map(function(c){return '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)}).join(''));
}function headUp(txt){return new TextEncoder().encode(txt);
}async function comp(str){let chunks=[],chunk;
	try{for await (chunk of new Blob([str]).stream().pipeThrough(new CompressionStream('gzip'))){chunks.push(chunk)
		}return await cu8a(chunks)
	}catch(er){return new TextEncoder().encode(str)}
}async function decomp(str){let chunks=[],chunk;
	try{for await (chunk of new Blob([str]).stream().pipeThrough(new DecompressionStream('gzip'))){chunks.push(chunk)
  		}return new TextDecoder().decode(await cu8a(chunks))
	}catch(er){return new TextDecoder().decode(str)}
}async function cu8a(ui8as){return new Uint8Array(await new Blob(ui8as).arrayBuffer());
}function uTtB64(txt){return btoa(headUp(txt).join(' '));
}function uTfB64(txt){return new TextDecoder().decode(new Uint8Array(atob(txt).split(' ').map(x=>x=parseInt(x))));
}async function TtStr(txt){return String.fromCharCode(...await comp(txt));
}async function TfStr(txt){return await decomp(Uint8Array.from(txt,c=>c.charCodeAt(0)));
}async function TtB64utf32(txt){/* utf-32 */
	try{let a0=await TtStr(NuclearBase64.encode(await TtStr(txt)));
		if(await TfStr(NuclearBase64.decode(await TfStr(a0)))!==txt)a1=true;
		return a0
	}catch{return NuclearBase64.encode(await TtStr(txt))}
}async function TfB64utf32(txt){/* utf-32 */
	try{let a0=await TfStr(NuclearBase64.decode(await TfStr(txt)))
		if(await TtStr(NuclearBase64.encode(await TtStr(a0)))!==txt)a1=true;
		return a0
	}catch{return await TfStr(NuclearBase64.decode(txt))}
}async function TtB64utf16(txt){return b64EncUTF16(await TtStr(txt));/* utf-16 */
}async function TfB64utf16(txt){return await TfStr(b64DecUTF16(txt));/* utf-16 */
}async function TtB64(txt){return btoa(await TtStr(txt));/* utf-8 */
}async function TfB64(txt){return await TfStr(atob(txt));/* utf-8 */
}async function TtHex(txt){return plain(await TtStr(txt));
}async function TfHex(txt){return await TfStr(hex(txt));
}function mobius(input,max=0x100){/*Apply Möbius transformation in finite field*/
    let a=Math.sinh(input[0]),b=Math.log2(input[1])*a,c=Math.sqrt(input[2])^1,d=Math.round(Math.cos((a^c)+input[3]))*b;
    return input.map(x=>Math.round(Math.pow((a*x+b)/(c*x+d),2))|0xA2%max);
}function addSmokescreen(ct){
	let PUA_START=0xE000;
	return ct+String.fromCodePoint(PUA_START+Math.floor(Math.random()*100));
}function obfuscate(ct){let output=[],i=0;
	for(i;i<ct.length;i+=10){output.push(ct.slice(i,i+10),String.fromCharCode(Math.floor(Math.random()*32)));
	}return output.join('');
}function warpArray(arr,ex,seed=0){let a0=parseInt(ex.slice(seed*4,(seed+1)*4),16)||0xDEAD,a1;
	return arr.map((val,i)=>{a1=(i^a0)%arr.length;return(val*0x9E3B9+a1)^(a0>>(i%16))});
}function crossContaminate(a,ex){let a0=ex.match(/.{2}/g).map(b=>parseInt(b,16)),a1;
	Object.keys(a).forEach((key,i)=>{a1=Object.keys(a)[(i+a0[i%a0.length])%9];a[key]=a[key].map((v,j)=>v^a[a1][j%a[a1].length]|i%16)});
}function algebraicFold(arr,ex,depth=0){let a0,a1;
	if(depth>=3)return arr;
	a0=parseInt(ex.slice(depth*2,(depth+1)*2),16)%arr.length;
	a1=[...arr.slice(a0).map((v,i)=>v+arr[i%a0]),...arr.slice(0,a0).map((v,i)=>v-arr[(i+a0)%arr.length]^0xDEAD*i)];
	return algebraicFold(a1,ex,depth+1);
}function mutateAllArrays(a,ex){let b0=new Object();
	Object.keys(a).forEach((key,i)=>{b0[key]=warpArray(a[key],ex,i)});crossContaminate(b0,ex);
	Object.keys(a).forEach(key=>{b0[key]=algebraicFold(a[key],ex)});
	Object.keys(b0).forEach(key=>{b0[key].rotate(parseInt(ex.slice(0,2),16))
	});return b0
}function quantum(phrase){
    let a0=[...IV(32)].join('').slice(2);
    try{return[...headUp(phrase||a0.reverse().join(''))]}catch{return[...a0].toReversed()}
}function nucted(str){
    try{return typeof str==='string'?str.split(''):Array.isArray(str)?[...str]:str===null||str===undefined?['']:Object.prototype.toString.call(str)==='[object Object]'?Object.values(str).flatMap(x=>nucted(x)):[String(str)];
    }catch{return ['']}
}async function enx(str,phrase){str=nucted(str);
    let a0/**/,a1=quantum(phrase),a2=a1.reduce((sum,el)=>sum+el,0),a3=[],d0=0,d1;
    str.push(...Array((4-(str.length%4))%4).fill(' '))
    for(d0;d0<str.length;d0+=4){a3=str.slice(d0,d0+4).reverse();
        if(!a3.length)break;
        for(d1=0;d1<a3.length;d1++){str[d0+d1]=a3[d1]}
    }return str=str.rotate(a2%Math.abs(str.length-a1.length));
}async function dex(str,phrase){str=nucted(str);
    let a0/**/,a1=quantum(phrase),a2=a1.reduce((sum,el)=>sum+el,0),a3=[],d0=0,d1;
    str.push(...Array((4-(str.length%4))%4).fill(' '))
    str=str.rotate(a2%Math.abs(str.length-a1.length),false)
    for(d0=str.length;d0>-1;d0-=4){a3=str.slice(d0-4,d0).reverse();
    	for(d1=0;d1<4;d1++){str[d0+d1]=a3[d1]}
    }return str
}class tangled{
	constructor(str,phrase){this.str=str;this.phrase=phrase;
	}entangle(){return enx(this.str,this.phrase)
	}detangle(){return dex(this.str,this.phrase)}
};export{uTtB64,uTfB64,TtStr,TfStr,TtB64utf16,TfB64utf16,TfB64utf32,TtB64utf32,TtB64,TfB64,TtHex,TfHex,mutateAllArrays,headUp,tangled,mobius,addSmokescreen,norm}
