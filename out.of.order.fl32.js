import{b as BtS,c as StB}from'./src/binary.switcher.js';
import{TtB64,uTtB64,TfB64,uTfB64,mutateAllArrays,headUp,tangled,mobius,addSmokescreen}from'./src/to.or.from.js';
import{a,d,beta,BsTB,irritator,_rotate,SnC,randInt,hex,plain,Matrix,IV,EinsteinHeadspin}from'./src/json.js';
"use strict";/*inspired by "Seek the depths, but never the end."
author: Christian Feilert
version: 1.e.7
type: expanded/alpha
date started: 18/1-2024
date last modified by author: 18/5-2025  */
let hold,g1,fakeCache=new Map();
function arr_rst(){hold=[...d.a];g1=[...d.b];
}function hr_rtn(){let z=hold.pop();hold.unshift(z);
	return z;
}async function h_get(str){
	let a0=await crypto.subtle.digest(hr_rtn(),headUp(str));
	return Array.from(new Uint8Array(a0)).map((q)=>q.toString(16).padStart(2,'0')).join('')
}async function hr(str,phrase){
	let b0=0,b1=Math.abs(str.length+phrase.length+parseInt(String(plain(str)|plain(phrase)^0xDEAD).slice(0,2),16)),b2=0,b3=0,b4,a0,a1,a2,a3,a4=[];
	while(b0++!=b1){
		hold=hold.rotate(Math.abs(Math.log(b0*b1+b1)),((parseInt(plain(str.length+phrase+b0/Math.sqrt(Math.abs(b0*b1)))))>>>0x9E3B95)<=0x30f?0:1);
		g1.unshift(g1.pop());
	}a0=headUp(await h_get(str));a1=headUp(await h_get(phrase));
	a2=[...irritator(mutateAllArrays(new Object(a),String(await h_get(phrase+str)).substring(0,16)))];
	for(b4=a2.length-1;b4>-1;b4--){
		for(b2;b2<a2[b4].length;b2+=Math.abs(parseInt(a2.slice(0,1),16)%3+1^1)||1){
			for(b0=0;b0<a0.length;b0++){
				a2[b4][b2]-=(b0+b3-b2*b4+b3<<b2-b4+b0+b3);
				a2[b4][b2]=Math.round(a2[b4][b2]>>>a0[b2%a0.length]|Math.sqrt(Math.abs(a2[b4][b2]<<a0[b2%a0.length])))
			}for(b3=0;b3<a1.length;b3++){
				a2[b4][b2]+=a0[b3%a0.length]<<a1[b0%a1.length]^0xDEAD+(b2-b4+b0+b3);
				a4.push(a2[b4][b2])
		}}
	}return new TextDecoder().decode(new Uint8Array(a2.slice(2,3)[0][Math.abs(parseInt(a2.slice(0,1),16)%0x80+1^1)||1]>0?a4.map((v,i)=>i%2?v^0xBEEF:v^0xCAFE).map(p=>p=p%0xff):a4.map(p=>p=p%0xff)))
}async function gather(arg){arr_rst();hold=_rotate(arg.length+beta(arg.substring(-1)));
	let a0=a.i,a1=await h_get([...headUp(arg.padStart(3,'e'))].rotate(beta(arg[arg.length-2])^3,beta(arg[arg.length-1])).join('').padStart(0x80,a0[plain(arg[1])[0]])),a2,a3,a4,a5,a6,a7=BsTB,a8=arg.length,a9;
	if(a8<=3){arg=IV(32)};a2=await hr(a1,arg);a1=headUp(a2.substring(3,18));
	a3=a1[beta(a2[a1[Math.sqrt(beta(a2[2])**a1[4])|0xF5%a1.length]%a2.length])|0xBEAF%a1.length]^beta(a2[1]);
	a4=a1[Math.sqrt(Math.sinh(a1[1]**beta(arg[3])))&a1.length]^13;
	a5=a1[(beta(a2[a2.length-2])*Math.sinh(a1[beta(a2[0])%a1.length])>>>a1[Math.sin(beta(arg[0])**a4)&a1.length]|0xBEAF)%a1.length]^3;
	a6=a1[Math.abs(a1[beta(arg[a8-3%a1.length%arg.length])]<<Math.sin(a3**a4)|3)%a1.length]^2;
	if(a5<0x70){a2=a2.replaceAll(a2[(a1[4]<<a6)&a2.length],a0[(a3**a4)&a0.length])};
	if(!Number.isInteger(Math.round(Math.sqrt(a8>>a1[7]<<(a6+a3)*Math.PI.toFixed(5))<<a1[0])/Math.floor(Math.sin(a5**2)^0xFEAD*0xCAFE)&0x7f)){a7=StB
	}a9=a7(a2.replaceAll(a2[a3%a2.length],a0[a4<<a6&a0.length]));
	if(beta(a2[3])<=3){a9=a9.split('').reverse().join('')
	}a1=a1.map((v,i)=>(v+[...Array.from({length:a1.length},(_, i)=>Math.floor(Math.sin(i**2)*0xFFFF)&0xFF)][i])%0x100)
	return[BsTB(a9,a1[6]<0x80),BsTB([...new EinsteinHeadspin(SnC(a9),calle(a2)).Emc2Shuffle()].join(''),a1[7]<0x80)][(a1[4]^a1[3]|a1[2]<a1[5])>0x7f?0:1];
}async function pwprime(phrase){let a0=SnC(await gather(phrase));arr_rst()
	return a0
}function bell(str){str=str.toLowerCase()
  let a0=d.d,a1=[...a0].reverse(),a2=str.split(''),d0=a2.length;
  for(d0;d0>0;d0--){a2[d0]=a1[a0.indexOf(a2[d0])]
  }return a2.join('')
}async function bellMath(n0,n1,bool){
	if(!n0.length)n0=bell(addSmokescreen(IV(32)));if(!n1.length)n1=bell(IV(128));
	let a0=[...d.d],a1,a2='',a3,a4,a5=[...headUp(n0)],a6=[...d.f],a7,a8,c0,c1,c2,d0=0;n0=n0.split('');n1=n1.split('');
	try{c0=[mobius(a5,0x10),mobius([...n0].map(p=>parseInt(p)),0x10)];c1=String(await h_get(c0[0].join('')+n0.join(''))).match(/.{1,34}/g).map(t=>t.padStart(34,n0[((parseInt(n0[4])*parseInt(n0[5]))|0xD)^0xFE%n0.length]));
		c1.forEach(async(el)=>{
			el=await h_get(el);
			c0[0]=chaoticG1(c0[0].rotate(c0[0][4],c0[0][3]<c0[0][7]),el);c0[1]=chaoticG1(c0[1].reverse(),el);
			hold=hold.rotate(c0[1][4],c0[1][3]>c0[1][2]);el=await h_get(el);
			a0=chaoticG1(a0,el);el=await h_get(el);a6=chaoticG1(a6,el);
		});
		do{/*timer reset*/BtS(await gather(c1[0]))}while(c1.length<0)
	}catch(er){a8=er}if(a8)return addSmokescreen(IV(256));
	let b0=new Uint8Array(bool?n1.length:headUp(n1.join('')));
	for(d0;d0<n1.length;d0++){a3=a0.indexOf(n0[d0%n0.length]);a4=a0.indexOf(n1[d0]);
		a7=a6[(c0[0][d0%c0[0].length]*c0[1][d0%c0[1].length])%a6.length];
		if(bool){b0[d0]=0x10+a4+a3+a7
		}else{a2+=a0[Math.abs(b0[d0]-0x10-a3-a7)]}
	}return bool?new TextDecoder().decode(b0):atob(hex(a2))
}async function useLess(phrase,str,bool){
	arr_rst();hold=_rotate(Math.round(Math.sqrt(phrase.length))+beta(phrase[0x3].substring(-2)),beta(phrase[0x2]));
	return await bellMath(plain(bell(await h_get(phrase))),bool?plain(btoa(str)):str,bool);
}function getIgnore(phrase){let str,fT;
	if(fakeCache.has(phrase))return fakeCache.get(phrase);
	if(typeof loremEpsum!=='function'){
		fT=["Error: Invalid token. Contact support if this persists.","Session expired. Please re-authenticate.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","404: Data not found. Check your parameters.",
			"System busy. Try again later."];
		str=fT[randInt(0,fT.length)];
	}else{str=loremEpsum(randInt(10,1e2),{wordsPerUnit:randInt(4,12),numbersPerUnit:randInt(0,2)})
	}fakeCache.set(phrase,str);return str;
}async function isSigned(phrase,signed,bool,salt=''){let a0={iv:salt,ct:''},er;
	if(bool){a0.ct=signed;signed=await useLess(phrase,JSON.stringify(a0),1)
	}else{try{a0=JSON.parse(await useLess(phrase,signed,0));signed=a0
		}catch(e){}finally{if(typeof er!=='undefined'){signed=null}}
	}return signed
}function calle(arr,os=14){let a0,a1=[];
	for(a0 of headUp(BtS([...arr].slice(os,os+0x48).join(''))).map(p=>p=p%0x10)){a1.push([...d.d][a0])
	}return a1.join('').substring(0,32)
}function chaoticG1(g1,ex){
	let a0=ex.match(/.{2}/g).map(b=>parseInt(b,16))||[0xde,0xad],a1=[...g1],a2=[...d.d],a3,a4,a5,d0=g1.length;
	for(d0--;d0>-1;d0-=2){
		a3=[(a0[d0%a0.length]*a0[(d0+1)%a0.length]^0xBEEF)%0x10,a0[d0-1]];a3[1]=(((Math.round(Math.log(a3[0]))||3)^(a0[d0]>>>a3[0])+d0)%g1.length)%0x10;
		a2=a2.rotate(a3[0]+a3[1],!(beta(ex[d0])>>a3[1]));a4=[a1[a3[1]],a1[a3[0]]];a1[a3[0]]=a4[0];a1[a3[1]]=a4[1];
		a1=a1.rotate(beta(ex[d0])>>a3[0],a3[1]<a3[0])
	}return g1=a1
}function sanity(arr,num,ex=''){
  	if(ex){num=(num^parseInt(ex.slice(0,4),16))%arr.length;
  	}return[new Matrix([...d.b].rotate(num)).build(),new Matrix(arr,Math.round(Math.sqrt(num))).build()];
}async function lagrange(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
	let iv='',obj=sign?await isSigned(phrase,str,0):str,a5=typeof obj==='object',a0=Array.isArray(phrase)?phrase:await pwprime(phrase+salt+(a5?obj.iv:iv)),a1=SnC(StB(a5?obj.ct:obj)),a2=chaoticG1(g1,calle(a0)),a3/**/,a4,a6=a0.length,a7,a8=[...a0],a9=[],result=[],d0=0;
	if(typeof phrase==='function'){phrase=chaoticG1(a2,phrase.toString()).slice(0,32)
	}if(Array.isArray(phrase))a3=calle(phrase,Math.round(Math.sqrt(a6/a2.indexOf(phrase[0xff])^(a6/a2.indexOf(phrase[0xf])))+a2.indexOf(phrase[a6-0xa])));
	if(salt.length){a2=chaoticG1(a2,calle(plain(salt.padStart(32,'q'))))
	}if(a5&&obj.iv.length){a2=chaoticG1(a2,obj.iv)
	}a0=new EinsteinHeadspin(a0.rotate(a2.indexOf(a0[a0.length-4])*a2.indexOf(a0[a0.length-2])^(a2.indexOf(a0[a0[5]])/Math.ceil(Math.log(a2.indexOf(a0[a0.length-3])))),a2.indexOf(a0[a0.length-1])<0x7?1:0),a5?obj.iv:iv).Emc2Shuffle();
	for(d0;d0<a1.length;d0++){a7=a8[a8.indexOf(a8[d0+5%a6])*a8.indexOf(a8[d0%a6])%a6];a4=a1[d0].split('');
	    if(a7==g1[0]){a9.push([a4[0],a4[3],a4[2],a4[1]].join(''))
	    }if(a7==g1[1]){a9.push([a4[3],a4[2],a4[1],a4[0]].join(''))
	    }if(a7==g1[5]){a9.push([a4[2],a4[1],a4[0],a4[3]].join(''))
	    }if(a7==g1[8]){a9.push([a4[1],a4[0],a4[3],a4[2]].join(''))
	    }if(a7==g1[14]){a9.push(a4.join(''))
	    }if(a7==g1[6]){a9.push([a4[1],a4[2],a4[3],a4[0]].join(''))
	    }if(a7==g1[15]){a9.push(a4.reverse().join(''))
	    }if(a7==g1[2]){a9.push([a4[3],a4[0],a4[1],a4[2]].join(''))
	    }if(a7==g1[12]){a9.push([a4[2],a4[0],a4[1],a4[3]].join(''))
	    }if(a7==g1[3]){a9.push([a4[0],a4[1],a4[3],a4[2]].join(''))
	    }if(a7==g1[7]){a9.push([a4[1],a4[3],a4[2],a4[0]].join(''))
	    }if(a7==g1[4]){a9.push([a4[3],a4[2],a4[0],a4[1]].join(''))
	    }if(a7==g1[9]){a9.push([a4[1],a4[3],a4[0],a4[2]].join(''))
	    }if(a7==g1[13]){a9.push([a4[3],a4[0],a4[2],a4[1]].join(''))
	    }if(a7==g1[11]){a9.push([a4[0],a4[2],a4[1],a4[3]].join(''))
	    }if(a7==g1[10]){a9.push(a4.reverse().join(''))
	    }
	}while(a9.length!=0){result=a9.pop()+result
	}a1=SnC(result,8);result=[];
	a7=sanity(a2.rotate((Math.log2(parseInt(plain(salt+(a3?a3:phrase)+(a5?obj.iv:'')))||3)^0xDE)|0xDEAF&0xf6,a2.indexOf(a0[a0.length-4])>0x7?0:1),a6,a5?obj.iv:phrase);
	for(d0=0;d0<a1.length;d0++){
		result.push(a7[1][a7[1].indexOf(a7[0][a7[0].indexOf(a1[d0])])-(a7[0].indexOf(a0[d0%a6]+a0[(d0+a2.indexOf(a0[d0%a6]))%a6]))&0xff])
	}return [...await new tangled(await TfB64(BtS(result.join(''))).catch(er=>{return getIgnore(phrase+str.substring(str.length-10))}).finally(res=>{return res}),Array.isArray(phrase)?BtS(phrase.join('')):phrase).detangle()].join('').trim()
}async function aristotle(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
	str=[...await new tangled(str,Array.isArray(phrase)?BtS(phrase.join('')):phrase).entangle()].join('')
	let iv=sign?IV():'',a0=Array.isArray(phrase)?phrase:await pwprime(phrase+salt+iv),a1=SnC(StB(await TtB64(str)),8),a2=chaoticG1(g1,calle(a0)),a3/**/,a4,a5=[],a6=a0.length,a7,a8=[...a0],result=[],d0=0;
	if(typeof phrase==='function'){phrase=chaoticG1(a2,phrase.toString()).slice(0,32)
	}if(Array.isArray(phrase))a3=calle(phrase,Math.round(Math.sqrt(a6/a2.indexOf(phrase[0xff])^(a6/a2.indexOf(phrase[0xf])))+a2.indexOf(phrase[a6-0xa])));
	if(salt.length){a2=chaoticG1(a2,calle(plain(salt.padStart(32,'q'))))
	}if(iv.length){a2=chaoticG1(a2,iv)
	}a0=new EinsteinHeadspin(a0.rotate(a2.indexOf(a0[a0.length-4])*a2.indexOf(a0[a0.length-2])^(a2.indexOf(a0[a0[5]])/Math.ceil(Math.log(a2.indexOf(a0[a0.length-3])))),a2.indexOf(a0[a0.length-1])<0x7?1:0),iv).Emc2Shuffle();
	a7=sanity(a2.rotate((Math.log2(parseInt(plain(salt+(a3?a3:phrase)+iv))||3)^0xDE)|0xDEAF&0xf6,a2.indexOf(a0[a0.length-4])>0x7?0:1),a6,sign?iv:phrase);
	for(d0;d0<a1.length;d0++){
		result.push(a7[1][a7[1].indexOf(a7[0][a7[0].indexOf(a1[d0])])+(a7[0].indexOf(a0[d0%a6]+a0[(d0+a2.indexOf(a0[d0%a6]))%a6]))&0xff])
	}a1=SnC(result.join(''));result='';
	for(d0=0;d0<a1.length;d0++){a7=a8[a8.indexOf(a8[d0+5%a6])*a8.indexOf(a8[d0%a6])%a6];a4=a1[d0].split('');
	    if(a7==g1[0]){a5.push([a4[0],a4[3],a4[2],a4[1]].join(''))
	    }if(a7==g1[1]){a5.push([a4[3],a4[2],a4[1],a4[0]].join(''))
	    }if(a7==g1[5]){a5.push([a4[2],a4[1],a4[0],a4[3]].join(''))
	    }if(a7==g1[8]){a5.push([a4[1],a4[0],a4[3],a4[2]].join(''))
	    }if(a7==g1[14]){a5.push(a4.join(''))
	    }if(a7==g1[6]){a5.push([a4[3],a4[0],a4[1],a4[2]].join(''))
	    }if(a7==g1[15]){a5.push(a4.reverse().join(''))
	    }if(a7==g1[2]){a5.push([a4[1],a4[2],a4[3],a4[0]].join(''))
	    }if(a7==g1[12]){a5.push([a4[1],a4[2],a4[0],a4[3]].join(''))
	    }if(a7==g1[3]){a5.push([a4[0],a4[1],a4[3],a4[2]].join(''))
	    }if(a7==g1[7]){a5.push([a4[3],a4[0],a4[2],a4[1]].join(''))
	    }if(a7==g1[4]){a5.push([a4[2],a4[3],a4[1],a4[0]].join(''))
	    }if(a7==g1[9]){a5.push([a4[2],a4[0],a4[3],a4[1]].join(''))
	    }if(a7==g1[13]){a5.push([a4[1],a4[3],a4[2],a4[0]].join(''))
	    }if(a7==g1[11]){a5.push([a4[0],a4[2],a4[1],a4[3]].join(''))
	    }if(a7==g1[10]){a5.push(a4.reverse().join(''))
	    }
	}while(a5.length!=0){result+=a5.shift()
	}return sign?await isSigned(phrase,BtS(result),1,iv):BtS(result)
}async function reorder1(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
	let iv='',obj=sign?await isSigned(phrase,str,0):str,a5=typeof obj==='object',a0=Array.isArray(phrase)?phrase:await pwprime(phrase+salt+(a5?obj.iv:iv)),a1=SnC(StB(a5?obj.ct:obj),8),a2=chaoticG1(g1,calle(a0)),a3/**/,a4,a6=a0.length,a7,result=[],d0=0;
	if(typeof phrase==='function'){phrase=chaoticG1(a2,phrase.toString()).slice(0,32)
	}if(Array.isArray(phrase))a3=calle(phrase,Math.round(Math.sqrt(a6/a2.indexOf(phrase[0xff])^(a6/a2.indexOf(phrase[0xf])))+a2.indexOf(phrase[a6-0xa])));
	if(salt.length){a2=chaoticG1(a2,calle(plain(salt.padStart(32,'q'))))
	}if(a5&&obj.iv.length){a2=chaoticG1(a2,obj.iv)
	}a0=new EinsteinHeadspin(a0.rotate(a2.indexOf(a0[a0.length-4])*a2.indexOf(a0[a0.length-2])^(a2.indexOf(a0[a0[5]])/Math.ceil(Math.log(a2.indexOf(a0[a0.length-3])))),a2.indexOf(a0[a0.length-1])<0x7?1:0),a5?obj.iv:iv).Emc2Shuffle();
	a7=sanity(a2.rotate((Math.log2(parseInt(plain(salt+(a3?a3:phrase)+(a5?obj.iv:'')))||4)^0xDE)|0xDEAF&0xf6,a2.indexOf(a0[a0.length-4])>0x7?0:1),a6,a5?obj.iv:phrase);
	for(d0;d0<a1.length;d0++){
		result.push(a7[1][a7[1].indexOf(a7[0][a7[0].indexOf(a1[d0])])-(a7[0].indexOf(a0[d0%a6]+a0[(d0+a2.indexOf(a0[d0%a6]))%a6]))&0xff])
	}return [...await new tangled(await TfB64(BtS(result.join(''))).catch(er=>{return getIgnore(phrase+str.substring(str.length-10))}).finally(res=>{return res}),Array.isArray(phrase)?BtS(phrase.join('')):phrase).detangle()].join('').trim()
}async function disorder1(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
	str=[...await new tangled(str,Array.isArray(phrase)?BtS(phrase.join('')):phrase).entangle()].join('')
	let iv=sign?IV():'',a0=Array.isArray(phrase)?phrase:await pwprime(phrase+salt+iv),a1=SnC(StB(await TtB64(str)),8),a2=chaoticG1(g1,calle(a0)),a3/**/,a4,a5,a6=a0.length,a7,result=[],d0=0;
	if(typeof phrase==='function'){phrase=chaoticG1(a2,phrase.toString()).slice(0,32)
	}if(Array.isArray(phrase))a3=calle(phrase,Math.round(Math.sqrt(a6/a2.indexOf(phrase[0xff])^(a6/a2.indexOf(phrase[0xf])))+a2.indexOf(phrase[a6-0xa])));
	if(salt.length){a2=chaoticG1(a2,calle(plain(salt.padStart(32,'q'))))
	}if(iv.length){a2=chaoticG1(a2,iv)
	}a0=new EinsteinHeadspin(a0.rotate(a2.indexOf(a0[a0.length-4])*a2.indexOf(a0[a0.length-2])^(a2.indexOf(a0[a0[5]])/Math.ceil(Math.log(a2.indexOf(a0[a0.length-3])))),a2.indexOf(a0[a0.length-1])<0x7?1:0),iv).Emc2Shuffle();
	a7=sanity(a2.rotate((Math.log2(parseInt(plain(salt+(a3?a3:phrase)+iv))||4)^0xDE)|0xDEAF&0xf6,a2.indexOf(a0[a0.length-4])>0x7?0:1),a6,sign?iv:phrase);
	for(d0;d0<a1.length;d0++){
		result.push(a7[1][a7[1].indexOf(a7[0][a7[0].indexOf(a1[d0])])+(a7[0].indexOf(a0[d0%a6]+a0[(d0+a2.indexOf(a0[d0%a6]))%a6]))&0xff])
	}return sign?await isSigned(phrase,BtS(result.join('')),1,iv):BtS(result.join(''))
}async function reorder(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
	let iv='',obj=sign?await isSigned(phrase,str,0):str,a0=SnC(StB(typeof obj==='object'?obj.ct:obj)),a1=Array.isArray(phrase)?phrase:[...await pwprime(phrase+(typeof obj==='object'?obj.iv:iv)+salt)].reverse(),a2=0,a3,a4,a5=[],a6=a1.length,result='';
	if(salt.length){g1=chaoticG1(g1,calle(plain(salt.padEnd(32,'e'))))
	}if(typeof obj==='object'&&obj.iv.length){g1=chaoticG1(g1,obj.iv)
	}for(a2;a2<a0.length;a2++){a3=a1[a1.indexOf(a1[a2+3%a6])*a1.indexOf(a1[a2%a6])%a6];a4=a0[a2].split('');
		if(a3==g1[0]){a5.push([a4[0],a4[3],a4[2],a4[1]].join(''))
		}if(a3==g1[1]){a5.push([a4[3],a4[2],a4[1],a4[0]].join(''))
		}if(a3==g1[5]){a5.push([a4[2],a4[1],a4[0],a4[3]].join(''))
		}if(a3==g1[8]){a5.push([a4[1],a4[0],a4[3],a4[2]].join(''))
		}if(a3==g1[14]){a5.push(a4.join(''))
		}if(a3==g1[6]){a5.push([a4[1],a4[2],a4[3],a4[0]].join(''))
		}if(a3==g1[15]){a5.push(a4.reverse().join(''))
		}if(a3==g1[2]){a5.push([a4[3],a4[0],a4[1],a4[2]].join(''))
		}if(a3==g1[12]){a5.push([a4[2],a4[0],a4[1],a4[3]].join(''))
		}if(a3==g1[3]){a5.push([a4[0],a4[1],a4[3],a4[2]].join(''))
		}if(a3==g1[7]){a5.push([a4[1],a4[3],a4[2],a4[0]].join(''))
		}if(a3==g1[4]){a5.push([a4[3],a4[2],a4[0],a4[1]].join(''))
		}if(a3==g1[9]){a5.push([a4[1],a4[3],a4[0],a4[2]].join(''))
		}if(a3==g1[13]){a5.push([a4[3],a4[0],a4[2],a4[1]].join(''))
		}if(a3==g1[11]){a5.push([a4[0],a4[2],a4[1],a4[3]].join(''))
		}if(a3==g1[10]){a5.push(a4.reverse().join(''))
		}
	}while(a5.length!=0){result=a5.pop()+result
	}return await TfB64(BtS(result)).catch(er=>{return getIgnore(phrase+str.substring(str.length-10))
	}).finally(res=>{return res});
}async function disorder(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;/* if(con)void testPhase(str,phrase,salt,sign); */
	let iv=sign?IV():'',a0=SnC(StB(await TtB64(str))),a1=Array.isArray(phrase)?phrase:[...await pwprime(phrase+iv+salt)].reverse(),a2=0,a3,a4,a5=[],a6=a1.length,result='';
	if(salt.length){g1=chaoticG1(g1,calle(plain(salt.padEnd(32,'e'))))
	}if(iv.length){g1=chaoticG1(g1,iv)
	}for(a2;a2<a0.length;a2++){a3=a1[a1.indexOf(a1[a2+3%a6])*a1.indexOf(a1[a2%a6])%a6];a4=a0[a2].split('');
		if(a3==g1[0]){a5.push([a4[0],a4[3],a4[2],a4[1]].join(''))
		}if(a3==g1[1]){a5.push([a4[3],a4[2],a4[1],a4[0]].join(''))
		}if(a3==g1[5]){a5.push([a4[2],a4[1],a4[0],a4[3]].join(''))
		}if(a3==g1[8]){a5.push([a4[1],a4[0],a4[3],a4[2]].join(''))
		}if(a3==g1[14]){a5.push(a4.join(''))
		}if(a3==g1[6]){a5.push([a4[3],a4[0],a4[1],a4[2]].join(''))
		}if(a3==g1[15]){a5.push(a4.reverse().join(''))
		}if(a3==g1[2]){a5.push([a4[1],a4[2],a4[3],a4[0]].join(''))
		}if(a3==g1[12]){a5.push([a4[1],a4[2],a4[0],a4[3]].join(''))
		}if(a3==g1[3]){a5.push([a4[0],a4[1],a4[3],a4[2]].join(''))
		}if(a3==g1[7]){a5.push([a4[3],a4[0],a4[2],a4[1]].join(''))
		}if(a3==g1[4]){a5.push([a4[2],a4[3],a4[1],a4[0]].join(''))
		}if(a3==g1[9]){a5.push([a4[2],a4[0],a4[3],a4[1]].join(''))
		}if(a3==g1[13]){a5.push([a4[1],a4[3],a4[2],a4[0]].join(''))
		}if(a3==g1[11]){a5.push([a4[0],a4[2],a4[1],a4[3]].join(''))
		}if(a3==g1[10]){a5.push(a4.reverse().join(''))
		}
	}while(a5.length!=0){result+=a5.shift()
	}return sign?await isSigned(phrase,BtS(result),1,iv):BtS(result)
}async function testPhase(str,phrase,salt='',sign=0){let b0,b1,b2=phrase,b3,b4,c0;return null
	setTimeout(async()=>{
		//console.clear();
		//b2=await pwprime(phrase);
		c0=[[disorder1,reorder1],[aristotle,lagrange],[disorder,reorder]][1]
		try{let b0=await c0[0](str,b2,salt,sign),b1=await c0[1](b0,b2,salt,sign);
	        setTimeout(()=>{
	        	console.log(b0,'\n',b0.length,'\n',b1,'\n',b1.length,'\n'/*,...window.ar0,'\n',...window.ar1,'\n',phrase,'\n',salt*/)
	        },5e2)
	        setTimeout(async()=>{let text="hello world, it's nice out there ?!. 01234 + - * / test end";
	        	b3=await new tangled(text.split(''),phrase).entangle();
	        	console.log(b3.join(''),'\n',b3?.length,'\n\tthe end')
	        	queueMicrotask(async()=>{
		        	b4=await new tangled(b3,phrase).detangle()
		        	//console.log('\t',b3.join(''),'\n\t',b3.length,'\n\t',b4?.join(''),'\n\t',b4?.length,'\n\tthe end')
		        	console.log(b4.join(''),'\n',b4?.length,'\n\tthe end')
		        })
	        },6e2)
	    }catch(er){console.log('tryout =>\n',er)
	    }
	},7e2);
};export{reorder,disorder,reorder1,disorder1,lagrange,aristotle,pwprime}
