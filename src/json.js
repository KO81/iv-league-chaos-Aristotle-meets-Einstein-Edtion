import{c as StB}from'./binary.switcher.js';
/*inspired by "Seek the depths, but never the end."
offset array js by Christian Feilert*/
let error=[];
function getTime(){let a0=new Date(Date.now());
	return [a0.getHours(),a0.getMinutes(),a0.getSeconds()].map(el=>el<10?'0'+el:el).join(':')+'.'+String(a0.getMilliseconds()).padStart(3,'0');
}function ct(a0){return (typeof con!=='undefined'&&con)&&[2,56].indexOf(a0)>-1/* 2 stands for error */
}function cm(...a0){if(ct(a0[0])){a0.shift();console.log(...a0)};
}function erRtn(){error.forEach(el=>{cm(2,...el)});clErr();
}function addEr(name,er){error.push([name+' => '+getTime()+'\n',er])
}function clErr(){error=[];
}function sanitize(phrase){return phrase.replace(/[^\w]/g,(char)=>`_${char.charCodeAt(0)}_`);
}function repAll(str,bool){let b0,b1;
	function a(str,bool){
		let a0=[[[d.i,d.b],[d.b,d.i]][bool?0:1],[[d.g,d.c],[d.c,d.g]][bool?0:1]],a1=0,a2=1,d0;
		for(d0 in a0[bool?0:1]){if(bool){a1=1;a2=0}str=bool?str.replaceAll(a0[a1][d0],'LT'+a0[a2][d0]+'TL'):str.replaceAll('LT'+a0[a2][d0]+'TL',a0[a1][d0])
		}for(d0 in a0[bool?1:0]){if(!bool){a1=1;a2=0}str=bool?str.replaceAll(a0[a1][d0],'L'+a0[a2][d0]):str.replaceAll('L'+a0[a2][d0],a0[a1][d0])
		}return str;
	}function b(str,bool){
		if(bool){for(const [char,escape] of d.j){str=str.replaceAll(char,escape)}return str;
		}else{for(const [char,escape] of d.j.reverse()){str=str.replaceAll(escape,char)}return str;
		}
	}b0=[[a,b],[b,a]][bool?0:1];b1=b0[1](b0[0](str,bool),bool);//console.log(b1);
	return b1;
}function rot(num=1,bool=true){let a0=[...this],d0=0;for(d0;d0<num;d0++){bool?a0.unshift(a0.pop()):a0.push(a0.shift())}return a0
};Object.defineProperty(Array.prototype,'rotate',{value:rot,writable:false});
const a={
	a:[45,51,101,78,2,18,109,17,25,56,95,111,34,4,24,57,14,15,21,32,16,96,94,97,120,117,42,110,54,53,112,98,0,121,85,3,55,127,61,84,108,75,70,35,22,41,113,90,114,33,65,103,72,50,118,48,87,82,46,64,105,59,91,119,9,81,68,5,77,23,92,11,83,12,7,99,1,79,20,102,104,40,30,47,116,124,123,27,115,125,8,100,66,43,107,28,60,31,73,88,74,29,6,69,71,44,13,39,58,89,49,19,126,37,10,122,36,63,86,67,26,93,62,52,76,38,80,106],
	b:[97,44,95,78,76,96,8,71,90,36,39,57,33,98,17,91,20,37,73,113,72,114,2,94,59,18,68,29,112,49,52,108,87,10,27,32,118,21,47,80,40,4,75,48,46,63,120,26,111,43,16,126,24,25,0,88,5,12,123,56,60,23,55,83,28,58,119,106,92,50,109,85,62,14,82,117,84,61,79,6,15,19,67,105,74,100,9,101,3,54,122,69,53,70,102,89,64,127,115,11,30,42,7,34,65,1,31,51,107,124,125,104,110,38,77,45,13,86,99,66,103,41,116,121,93,35,22,81],
	c:[127,123,48,0,56,92,91,72,60,39,116,80,46,16,31,87,82,13,57,99,126,98,7,120,102,64,12,118,30,78,114,3,9,79,117,70,50,15,74,71,85,52,29,19,59,17,27,103,53,18,26,121,34,96,2,86,5,75,38,100,68,113,81,20,4,45,49,66,115,24,33,62,107,37,47,106,108,69,61,28,119,35,124,43,95,1,6,89,41,112,104,76,93,110,11,54,23,101,111,63,55,97,125,109,65,94,10,88,51,73,40,36,58,83,14,32,8,84,105,122,25,21,77,90,67,42,44,22],
	d:[97,75,108,17,74,121,29,39,52,113,114,95,102,2,76,122,71,19,69,22,11,66,59,106,32,78,100,126,62,112,55,27,35,123,42,20,85,26,34,30,14,65,13,72,81,49,25,89,18,118,90,38,88,58,1,111,16,23,61,82,109,36,60,7,24,37,43,8,67,44,47,94,124,127,117,83,54,6,53,86,99,56,50,63,115,21,87,51,33,48,120,105,0,92,5,84,28,12,125,104,119,57,10,46,9,15,64,79,101,77,45,3,91,4,96,70,93,98,73,103,107,68,116,110,40,41,80,31],
	e:[112,23,55,70,120,87,117,97,42,9,37,27,15,18,109,59,124,111,91,68,10,48,50,65,30,71,25,7,64,123,110,28,80,83,118,81,78,46,66,69,90,38,96,94,60,14,61,57,31,5,77,0,52,84,119,1,43,116,63,126,82,4,106,95,98,40,20,2,34,92,19,115,99,79,44,127,75,17,26,33,29,47,76,11,13,8,67,32,36,104,105,93,72,114,54,107,51,12,122,49,113,125,39,24,121,101,6,53,86,108,35,88,74,56,45,103,100,21,22,89,62,85,58,73,41,16,3,102],
	f:[48,78,31,72,113,1,32,99,28,59,18,95,123,77,127,83,2,37,108,56,25,34,92,58,111,109,79,89,5,102,6,7,67,62,84,40,116,42,71,19,44,94,74,73,97,61,105,20,57,43,68,17,24,118,60,9,26,65,70,82,16,80,15,53,104,63,50,10,23,106,47,8,38,21,52,3,126,64,75,12,14,91,39,122,46,121,54,86,11,4,13,114,27,88,100,33,125,101,119,103,107,30,29,0,87,55,22,35,96,110,49,36,90,45,124,41,98,51,117,115,112,69,120,66,93,85,76,81],
	g:[66,2,86,30,120,42,82,77,75,74,65,63,64,48,105,21,119,54,68,70,1,34,127,92,125,16,117,40,104,118,67,38,62,41,84,57,44,126,95,71,85,110,91,15,108,115,60,89,24,4,61,97,101,7,12,8,31,3,109,73,32,13,76,18,25,20,58,50,83,0,11,99,51,69,28,56,46,59,103,102,72,94,14,6,79,111,112,116,122,45,27,81,23,17,26,19,96,114,47,37,93,52,113,35,55,123,5,49,121,10,87,107,33,98,43,78,80,39,124,53,90,106,36,9,88,100,22,29],
	h:[57,12,53,60,23,75,49,22,121,68,37,7,85,4,116,38,107,115,59,27,123,50,44,5,124,30,96,52,101,9,99,20,73,120,40,6,80,34,117,87,112,70,77,13,2,55,97,76,95,21,18,67,43,69,100,82,122,110,86,74,45,16,72,63,66,8,102,94,111,14,35,103,62,119,78,17,3,54,15,51,81,113,89,98,10,56,25,106,41,118,58,1,125,91,61,114,36,126,93,28,19,46,42,64,65,0,24,26,109,90,33,83,108,48,84,29,71,31,88,39,11,127,79,47,92,105,104,32],
	i:[30,66,2,42,9,100,33,88,86,82,113,50,120,17,103,87,46,77,52,114,63,27,56,45,74,48,21,64,72,75,105,83,65,6,29,112,119,38,116,54,99,34,127,51,122,53,68,22,67,80,117,20,19,28,70,25,1,118,37,92,125,98,104,69,40,16,39,102,14,101,49,4,43,3,61,110,85,15,91,5,44,89,106,32,60,78,0,73,55,13,24,23,96,94,58,26,81,57,12,93,126,90,115,18,109,62,36,47,76,41,97,10,95,108,35,84,11,79,121,7,71,31,124,8,123,107,111,59]
},d={
	a:['SHA-256','SHA-384','SHA-512'],
	b:['0000','0001','0010','0100','1001','0011','0110','1100','0101','1010','1110','1011','1101','0111','1111','1000'],
	c:['10101101','10000001','10001101','10001111','10010000','10011101'],
	d:['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'],
	e:['AES-CBC','AES-GCM','AES-CTR'],
	f:[9,0xE,2,0xF,0xC,5,0x10,7,0xD,0xA,0xB,1,3,0x4,0,8],
	g:['"',',','[',']','{','}'],
	h:`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#`,
	i:['\/','\`','\|','\>','\\','\_','\t','\n','\m','\g','\t','\b','\f','\v','\'','\"'],/*	{ "*~@#$%^&*()_+=><?/": "is a valid json" } */
	j:[['\$', '\\$'],['\\', '\\\\'],['"', '\\"'],['\n', '\\n'],['\r', '\\r'],['\t', '\\t'],['\b', '\\b'],['\f', '\\f'],['\/', '\\/'],['\m', '\\m'],['\g', '\\g'],['\v', '\\v'],['\`', '\\`'],['\>', '\\>'],['\|', '\\|'],['\<', '\\<'],['\{', '\\{'],['\}', '\\}'],['\[', '\\['],['\]', '\\]'],["\'", "\\'"],['\%', '\\%'],...Array.from({length:32},(_,i)=>[String.fromCharCode(i),`\\u${i.toString(16).padStart(4,'0')}`]),...Array.from({length:33},(_,i)=>[String.fromCharCode(0x7F+i),`\\u${(0x7F+i).toString(16).padStart(4,'0')}`])],
},beta=(what)=>{if(what==null||what==''){what=0}if(isNaN(what)){what=what.trim().charCodeAt(0);what=String(what).substr(-1)}if(what>=9){what-=2};what=parseInt(what);
	if(isNaN(what)){what=0}return parseInt(String(what).substr(-1))
},irritator=(obj)=>{let a0=[],d;function II(obj){for(d of Object.getOwnPropertyNames(obj)){a0.push(obj[d])}}II(obj);return a0
},gDec=(enc,m=8)=>{let dec='',i=0,r,q;while(i<enc.length){q=0;while(enc[i]==='1'){q+=1;i+=1}i+=1;r=parseInt(enc.substr(i,Math.log2(m)),2);dec+=String.fromCharCode(q*m+r);i+=Math.log2(m)}return dec
},gEnc=(str,m=8)=>{let enc='',c,code,q,r;for(c of str){code=c.charCodeAt(0);q=Math.floor(code/m);r=code%m;enc+='1'.repeat(q)+'0'+r.toString(2).padStart(Math.log2(m),'0')}return enc
},plain=(what)=>{return (what&&what.length)?what.split("").map(c=>c.charCodeAt(0).toString(16).padStart(2,"0")).join(""):'aa';
},hex=(what)=>{let res=null;if(what.length){res=what.match(/.{2}/g)?.map(c=>String.fromCharCode(parseInt(c,16))).join('')||''}return res
},randInt=(min,max)=>Math.floor(Math.random()*(max-min)+min)
,_rotate=(num=0xff,arr=0)=>{let a0=Array.isArray(arr)?[...arr]:[...d.a],a1=[0,2,1],a2,d0=0;
	for(d0;d0<num;d0++){a0=[a0[a1[0]],a0[a1[1]],a0[a1[2]]];Number.isInteger(d/4)?a1.unshift(a1.pop()):a1.push(a1.shift())}return a0
},BsTB=(txt,bool=1)=>{let new_str=StB(txt).match(/.{1,8}/g),result='',str,p=bool?[4,5,6,7,0,1,2,3]:[2,4,6,0,1,3,5,7];
	for(str of new_str){result+=str[p[0]]+str[p[1]]+str[p[2]]+str[p[3]]+str[p[4]]+str[p[5]]+str[p[6]]+str[p[7]];p.push(p.shift())};return result
},SnC=(txt,num=4)=>{let result=[],i=0;for(i;i<txt.length;i+=num){result.push(txt.substr(i,num))}return result
},saturnSplit=(arr)=>{return [...arr.filter((_,i)=>i%2===0).rotate(1),...arr.filter((_,i)=>i%2!==0).rotate(1,0)];
},quantumFlip=(arr,ex)=>{
	let spin=parseInt(ex.slice(0,2),16)%8;
	return arr.map((v,i)=>arr[v^(1<<(spin+i%8))%arr.length]^arr[arr.length-1]);
},galacticNoise=(arr)=>{
	let darkMatter=Array.from({length:arr.length },(_, i)=>Math.floor(Math.sin(i**2)*0xFFFF)&0xFF);
	return arr.map((v,i)=>(v+darkMatter[i])%0x100);
},IV=(num=16)=>Array.from(crypto.getRandomValues(new Uint8Array(num))).map(b=>b.toString(16).padStart(2,'0')).join('');
class Matrix{
	constructor(arr,num=1){this.a=[...arr].reverse();this.b=arr.rotate(num);
	}build(){let a0=[],d0,d1;for(d0 of this.a){for(d1 of this.b)a0.push(d0+d1)}return a0
	}
}class EinsteinHeadspin{#quantum=[];#galactic=[];
	constructor(arr,ex='',func=null){this.arr=arr;this.ex=ex;
	}Emc2Shuffle(){let a0=galacticNoise([...this.arr]),a1=this.arr.length,a2,a3,d0=0;
		for(d0;d0<this.arr.length;d0++){this.#galactic.push(this.arr[d0+a0[d0]%a1])
		}if(this.ex.length){a2=[...a0];a0=quantumFlip([...this.#galactic],this.ex);
			for(d0=0;d0<this.arr.length;d0++){this.#quantum.push(this.#galactic[(d0+a0[d0])&a0.length]);
			}
		}this.arr=this.#quantum.length?this.#quantum:this.#galactic;
		return saturnSplit(this.arr)
	}
};export{a,d,beta,BsTB,irritator,gDec,gEnc,plain,hex,randInt,_rotate,SnC,Matrix,IV,EinsteinHeadspin,repAll,sanitize,addEr,erRtn,clErr,cm,ct,getTime}
