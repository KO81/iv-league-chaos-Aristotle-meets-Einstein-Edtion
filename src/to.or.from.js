import{IV}from'./json.js';
/*inspired by "Seek the depths, but never the end."*/
function headUp(txt){return new TextEncoder().encode(txt);
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
}async function TtB64(txt){return btoa(String.fromCharCode(...await comp(txt)));
}async function TfB64(txt){return await decomp(Uint8Array.from(atob(txt),c=>c.charCodeAt(0)));
}function mobius(input,max=0x100){/*Apply Möbius transformation in finite field*/
    let a=Math.sinh(input[0]),b=Math.log2(input[1])*a,c=Math.sqrt(input[2])^1,d=Math.round(Math.cos((a^c)+input[3]))*b;
    return input.map(x=>Math.round(Math.pow((a*x+b)/(c*x+d),2))|0xA2%max);
}function addSmokescreen(ct){
	const PUA_START=0xE000;
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
};export{TtB64,uTtB64,TfB64,uTfB64,mutateAllArrays,headUp,tangled,mobius,addSmokescreen}
