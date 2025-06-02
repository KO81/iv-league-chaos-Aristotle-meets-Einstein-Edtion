import{b as BtS}from'./binary.switcher.js';
import{a,d,beta,hex,plain,IV,Matrix,randInt,repAll,addEr}from'./json.js';
/*inspired by "Seek the depths, but never the end."*/
let fakeCache=new Map();
class base85{/* credits AlttiRi  */
	#pow2=7225;#pow3=614125;#pow4=52200625;
	getMap(){return this.cTM(d.h);
	}cTM(charset){let ua=new Uint8Array(85),i=0;
		for(i;i<85;i++){ua[i]=charset.charAt(i).charCodeAt(0)}return ua;
	}gRM(mOC){let rMp=new Uint8Array(128);
		for(let [num,charCode] of Object.entries(mOC)){rMp[charCode]=parseInt(num)}return rMp;
	}encode(ua){ua=headUp(ua);
		let cM=this.getMap(),remain=ua.length%4,l5l=remain?remain+1:0,length=Math.ceil(ua.length*5/4),tGt=new Uint8Array(length);
		let dw=new DataView(ua.buffer,ua.byteOffset,ua.byteLength),to=Math.trunc(ua.length/4),i=0,k;
		for(i;i<to;i++){let num=dw.getUint32(4*i);
			for(k=4;k>=0;k--){tGt[k+i*5]=cM[num%85];num=Math.trunc(num/85)}
		}if(remain){
			let lPIndex=Math.trunc(ua.length/4)*4,lP=Uint8Array.from([...ua.slice(lPIndex),0,0,0]);
			let os=tGt.length-l5l-1,dw=new DataView(lP.buffer),num=dw.getUint32(0),vl,ix,i=4;
			for(i;i>=0;i--){vl=cM[num%85];num=Math.trunc(num/85);if(i<l5l){ix=os+i+1;tGt[ix]=vl}}
		}return headDown(tGt);
	}decode(b85){
		let map=this.getMap(),rMp=this.gRM(map),b85ab=headUp(b85),pad=(5-(b85ab.length%5))%5,ints=new Uint8Array((Math.ceil(b85ab.length/5)*4)-pad),dw=new DataView(ints.buffer),i=0;
		for(;i<b85ab.length/5-1;i++){
			let c1=rMp[b85ab[i*5+4]],c2=rMp[b85ab[i*5+3]]*85,c3=rMp[b85ab[i*5+2]]*this.#pow2,c4=rMp[b85ab[i*5+1]]*this.#pow3,c5=rMp[b85ab[i*5]]*this.#pow4;dw.setUint32(i*4,c1+c2+c3+c4+c5);
		}let lCh=map[map.length-1],lP=new Uint8Array([...b85ab.slice(i*5),lCh,lCh,lCh,lCh]);dw=new DataView(lP.buffer);
		let c1=rMp[lP[4]],c2=rMp[lP[3]]*85,c3=rMp[lP[2]]*this.#pow2,c4=rMp[lP[1]]*this.#pow3,c5=rMp[lP[0]]*this.#pow4,j=0;dw.setUint32(0,c1+c2+c3+c4+c5);
		for(j;j<4-pad;j++){ints[i*4+j]=lP[j]}return headDown(ints);
	}
}class NuclearBase64{
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
}function sanity(arr,num,ex=''){
  	if(ex){num=(num^parseInt(ex.slice(0,4),16))%arr.length;
  	}return[new Matrix([...d.b].rotate(num)).build(),new Matrix(arr,Math.round(Math.sqrt(num))).build()];
}function coupler(str,encryptMode=1){
  let separator='|',chunks=[],i=0;
  for(i;i<str.length;i+=4){chunks.push(str.slice(i,i+4));
  }if(encryptMode){// Shuffle: Reverse chunks and join with separator
    return chunks.reverse().join(separator);
  }else{// Deshuffle: Split and reverse back
    return str.split(separator).reverse().join('');
  }
}function getIgnore(phrase){let str,fT;
	if(fakeCache.has(phrase))return fakeCache.get(phrase);
	if(typeof loremEpsum!=='function'){
		fT=["Error: Invalid token. Contact support if this persists.","Session expired. Please re-authenticate.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","404: Data not found. Check your parameters.",
			"System busy. Try again later."];
		str=fT[randInt(0,fT.length)];
	}else{str=loremEpsum(randInt(10,1e2),{wordsPerUnit:randInt(4,12),numbersPerUnit:randInt(0,2)})
	}fakeCache.set(phrase,str);return str;
}function calle(arr,os=14){let a0,a1=[];
	if(!Array.isArray(arr))arr=headUp(JSON.stringify(arr));
	for(a0 of headUp(BtS([...arr].slice(os,os+0x48).join(''))).map(p=>p=p%0x10)){a1.push([...d.d][a0])
	}return a1.join('').substring(0,32)
}function chaotic(g1,ex){
	let a0=ex.match(/.{2}/g).map(b=>parseInt(b,16))||[0xde,0xad],a1=[...g1],a2=[...d.d],a3,a4,a5,d0=g1.length;
	for(d0--;d0>-1;d0-=2){
		a3=[(a0[d0%a0.length]*a0[(d0+1)%a0.length]^0xBEAF)%0x10,a0[d0-1]];a3[1]=(((Math.round(Math.log(a3[0]))||3)^(a0[d0]>>>a3[0])+d0)%g1.length)%0x10;
		a2=a2.rotate(a3[0]+a3[1],!(beta(ex[d0])>>a3[1]));a4=[a1[a3[1]],a1[a3[0]]];a1[a3[0]]=a4[0];a1[a3[1]]=a4[1];a1=a1.rotate(beta(ex[d0])>>a3[0],a3[1]<a3[0])
	}return a1//g1=a1
}async function norm(input){
	async function IO(str){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-512',headUp(str)))).map((q)=>q.toString(16).padStart(2,'0')).join('');
	}if(typeof input==='function'){return await IO(await comp(chaotic(input.toString().split(''),input.toString()).slice(0,32).join('')).join('').padEnd(32,'q'));
    }if(Array.isArray(input)){btoa(headUp(BtS((input.reverse().join('')))).map(p=>((p%67)||(p/3))^5).join('').substring(0,7e2)).substring(0,7e2);
    	return btoa(headUp(BtS(input.reverse().join('')||input.reverse().join(''))).map(p=>((p%67)||(p/3))^5).join('').substring(0,7e2)).substring(0,7e2);
    }if(input===null||input===undefined){return addSmokescreen(IV(512));
    }return await IO(btoa(chaotic(headUp(input.padStart(8,'q').split('')),String(input).padEnd(14,'e')).reverse().join('')));
}function isBase64(str){try{return btoa(atob(str))===str}catch{return false}
}function b64EncUTF16(str){
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,function toSolidBytes(match,p1){return String.fromCharCode('0x'+p1)}));
}function b64DecUTF16(str){
    return decodeURIComponent(atob(str).split('').map(function(c){return '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)}).join(''));
}function headUp(txt){return new TextEncoder().encode(txt);
}function headDown(txt){return new TextDecoder().decode(txt);
}async function comp(str){let chunks=[],chunk;
	try{for await (chunk of new Blob([str]).stream().pipeThrough(new CompressionStream('gzip'))){chunks.push(chunk)}return await cu8a(chunks)
	}catch(er){addEr('comp',er);return headUp(str)}
}async function decomp(str){let chunks=[],chunk;
	try{for await (chunk of new Blob([str]).stream().pipeThrough(new DecompressionStream('gzip'))){chunks.push(chunk)}return headDown(await cu8a(chunks))
	}catch(er){addEr('decomp',er);return headDown(str)}
}async function cu8a(ui8as){return new Uint8Array(await new Blob(ui8as).arrayBuffer());
}function uTtB64(txt){return btoa(headUp(txt).join(' '));
}function uTfB64(txt){return headDown(new Uint8Array(atob(txt).split(' ').map(x=>x=parseInt(x))));
}async function serialize(str){return repAll(await TtStr(new base85().encode(str)),1);
}async function deserialize(str){return new base85().decode(await TfStr(repAll(str,0)));
}async function TtStr(txt){return String.fromCharCode(...await comp(txt));
}async function TfStr(txt){return await decomp(Uint8Array.from(txt,c=>c.charCodeAt(0)));
}async function TtB64utf32(txt){/* utf-32 only advanced usage be carefull */
	try{let a0=await TtStr(NuclearBase64.encode(await TtStr(txt)));
		if(await TfStr(NuclearBase64.decode(await TfStr(a0)))!==txt)a1=true;
		return a0
	}catch(er){addEr('TtB64utf32 =>',er);return NuclearBase64.encode(await TtStr(txt))}
}async function TfB64utf32(txt){/* utf-32 only advanced usage be carefull */
	try{let a0=await TfStr(NuclearBase64.decode(await TfStr(txt)))
		if(await TtStr(NuclearBase64.encode(await TtStr(a0)))!==txt)a1=true;
		return a0
	}catch(er){addEr('TfB64utf32 =>',er);return await TfStr(NuclearBase64.decode(txt))}
}async function TtB64utf16(txt){return b64EncUTF16(await TtStr(txt));/* utf-16 */
}async function TfB64utf16(txt){return await TfStr(b64DecUTF16(txt));/* utf-16 */
}async function TtB64(txt){return b64EncUTF16(txt);
	return btoa(await TtStr(txt));/* utf-8 */
}async function TfB64(txt){return b64DecUTF16(txt)
	return await TfStr(atob(txt));/* utf-8 */
}async function TtB85(txt){return new base85().encode(await TtStr(txt));/* utf-32 */
}async function TfB85(txt){return await TfStr(new base85().decode(txt));/* utf-32 */
}async function TtHex(txt){return plain(await TtStr(txt));/* base10 */
}async function TfHex(txt){return await TfStr(hex(txt));/* base10 */
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
};export{uTtB64,uTfB64,TtStr,TfStr,TtB64utf16,TfB64utf16,TfB64utf32,TtB64utf32,TtB64,TfB64,TtB85,TfB85,TtHex,TfHex,mutateAllArrays,headUp,headDown,tangled,mobius,addSmokescreen,norm,base85,b64DecUTF16,b64EncUTF16,sanity,getIgnore,calle,serialize,deserialize,coupler}
