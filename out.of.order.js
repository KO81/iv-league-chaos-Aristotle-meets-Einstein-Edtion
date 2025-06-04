import{b as BtS,c as StB}from'./src/binary.switcher.js';
import{a,d,beta,irritator,SnC,BsTB,IV,plain,EinsteinHeadspin}from'/src/json.js';
import{mutateAllArrays,headUp,calle,chaotic}from'/src/to.or.from.js';/*
author: Christian Feilert
version: 1.d.a
type: expanded/beta
date started: 7/1-2024
date last modified by author: 15/5-2025  */ // only utf-8 support
let hold,g1,fakeCache=new Map();
function arr_rst(){hold=[...d.a];g1=[...d.b]
}function hr_rtn(){hold=hold.rotate(1)
	return hold[0];
}async function h_get(str){
	let a0=await crypto.subtle.digest(hr_rtn(),headUp(str));
	return Array.from(new Uint8Array(a0)).map((q)=>q.toString(16).padStart(2,'0')).join('')
}async function hr(str,phrase){let b0=0,b1=Math.abs(str.length+phrase.length+parseInt(String(plain(str)|plain(phrase)^0xDEAD).slice(0,2),16)),b2=0,b3=0,b4,a0,a1,a2,a3,a4=[];
	while(b0++!=b1){
		hold=hold.rotate(Math.abs(Math.log(b0*b1+b1)),(parseInt(plain(str.length+phrase+b0/Math.sqrt(Math.abs(b0*b1)))))>>>0x9E3B95<=0x30f?0:1);
		g1.unshift(g1.pop());
	}a0=new TextEncoder().encode(await h_get(str));a1=new TextEncoder().encode(await h_get(phrase));
	a2=[...irritator(mutateAllArrays(new Object(a),String(await h_get(phrase+str)).substring(0,16)))];
	for(b4=a2.length-1;b4>-1;b4--){
		for(b2;b2<a2[b4].length;b2+=Math.abs(parseInt(a2.slice(0,1),16)%3+1^1)||1){
			for(b0=0;b0<a0.length;b0++){
				a2[b4][b2]-=(b0+b3-b2*b4+b3<<b2-b4+b0+b3);
				a2[b4][b2]=Math.round(a2[b4][b2]>>>a0[b2%a0.length]|Math.sqrt(Math.abs(a2[b4][b2]<<a0[b2%a0.length])))
			}for(b3=0;b3<a1.length;b3++){a2[b4][b2]+=a0[b3%a0.length]<<a1[b0%a1.length]^0xDEAD+(b2-b4+b0+b3);
				a4.push(a2[b4][b2])
		}}
	}return new TextDecoder().decode(new Uint8Array(a2.slice(2,3)[0][Math.abs(parseInt(a2.slice(0,1),16)%0x80+1^1)||1]>0?a4.map((v,i)=>i%2?v^0xBEEF:v^0xCAFE).map(p=>p=p%0xff):a4.map(p=>p=p%0xff)))
}async function gather(arg){arr_rst();hold=hold.rotate(arg.length+beta(arg.substring(-1)));
	let b0=headUp(arg),b1=chaotic([Math.max(...b0),Math.min(...b0),b0.reduce((sum,el)=>sum+el,0),arg.length],calle(plain(arg.padEnd(32,'d'))));
	let a0=a.i,a1=await h_get(chaotic([...b0,...b1],calle(plain(headUp(arg).reverse().join('')))).map(p=>p%0x100).rotate(beta(arg[arg.length-2])^3,beta(arg[arg.length-1])).join('').padStart(0x80,a0[plain(arg[1])])),a2,a3,a4,a5,a6,a7=BsTB,a8=arg.length,a9;
	if(a8<=3){arg=IV(randInt(32,58))};a2=await hr(a1,arg);a1=headUp(a2.substring(4,20));
	a3=a1[beta(a2[a1[Math.sqrt(beta(a2[2])**a1[4])|0xF5%a1.length]%a2.length])|0xBEAF%a1.length]^beta(a2[1]);
	a4=a1[Math.sqrt(Math.sinh(a1[1]**beta(arg[3])))&a1.length]^13;
	a5=a1[(beta(a2[a2.length-2])*Math.sinh(a1[beta(a2[0])%a1.length])>>>a1[Math.sin(beta(arg[0])**a4)&a1.length]|0xBEAF)%a1.length]^3;
	a6=a1[Math.abs(a1[beta(arg[a8-3%a1.length%arg.length])]<<Math.sin(a3**a4)|3)%a1.length]^2;
	if(a5<0x71){a2=a2.replaceAll(a2[(a1[4]<<a6)&a2.length],a0[(a3**a4)&a0.length])};
	if(!Number.isInteger(Math.round(Math.sqrt(a8>>a1[7]<<(a6+a3)*Math.PI.toFixed(5))<<a1[0])/Math.floor(Math.sin(a5**2)^0xFEAD*0xCAFE)&0x7f)){a7=StB
	}a9=a7(a2.replaceAll(a2[a3%a2.length],a0[a4<<a6&a0.length]));
	if(beta(a2[3])<=3){a9=a9.split('').reverse().join('')
	}a1=a1.map((v,i)=>(v+[...Array.from({length:a1.length},(_, i)=>Math.floor(Math.sin(i**2)*0xFFFF)&0xFF)][i])%0x100)
	return[BsTB([...new EinsteinHeadspin(SnC(a9),calle(a2)).Emc2Shuffle()].join(''),a1[4]<0x80),BsTB(a9,a1[6]<0x80),a1[0]<0x80][(a1[1]^a1[3]|a1[2]<a1[5])<0x7f?0:1];
}async function bellReset(){return BtS(await gather('FreedomToThePeople'));
}async function reorder(str='hello',phrase='world',salt=''){if(Array.isArray(phrase))await bellReset();
	let a0=SnC(StB(str)),a1=Array.isArray(phrase)?phrase:SnC(await gather(phrase+salt)).reverse(),a2=0,a3,a4,a5=[],a6=a1.length,result='';
	for(a2;a2<a0.length;a2++){a3=a1[a1.indexOf(a1[a2+31%a6])*a1.indexOf(a1[a2%a6])%a6];a4=a0[a2].split('');
		switch(a3){
			case g1[0]:a5.push([a4[0],a4[3],a4[2],a4[1]]);break;
			case g1[1]:a5.push([a4[3],a4[2],a4[1],a4[0]]);break;
			case g1[5]:a5.push([a4[2],a4[1],a4[0],a4[3]]);break;
			case g1[8]:a5.push([a4[1],a4[0],a4[3],a4[2]]);break;
			case g1[14]:a5.push(a4);break;
			case g1[6]:a5.push([a4[1],a4[2],a4[3],a4[0]]);break;
			case g1[15]:a5.push(a4.reverse());break;
			case g1[2]:a5.push([a4[3],a4[0],a4[1],a4[2]]);break;
			case g1[12]:a5.push([a4[2],a4[0],a4[1],a4[3]]);break;
			case g1[3]:a5.push([a4[0],a4[1],a4[3],a4[2]]);break;
			case g1[7]:a5.push([a4[1],a4[3],a4[2],a4[0]]);break;
			case g1[4]:a5.push([a4[3],a4[2],a4[0],a4[1]]);break;
			case g1[9]:a5.push([a4[1],a4[3],a4[0],a4[2]]);break;
			case g1[13]:a5.push([a4[3],a4[0],a4[2],a4[1]]);break;
			case g1[11]:a5.push([a4[0],a4[2],a4[1],a4[3]]);break;
			case g1[10]:a5.push(a4.reverse());break;
			default:break
		}
	}while(a5.length!=0){result=a5.pop().join('')+result
	}return BtS(result)
}async function disorder(str='hello',phrase='world',salt=''){if(Array.isArray(phrase))await bellReset();
	let a0=SnC(StB(str)),a1=Array.isArray(phrase)?phrase:SnC(await gather(phrase+salt)).reverse(),a2=0,a3,a4,a5=[],a6=a1.length,result='';
	for(a2;a2<a0.length;a2++){a3=a1[a1.indexOf(a1[a2+31%a6])*a1.indexOf(a1[a2%a6])%a6];a4=a0[a2].split('');
		switch(a3){
			case g1[0]:a5.push([a4[0],a4[3],a4[2],a4[1]]);break;
			case g1[1]:a5.push([a4[3],a4[2],a4[1],a4[0]]);break;
			case g1[5]:a5.push([a4[2],a4[1],a4[0],a4[3]]);break;
			case g1[8]:a5.push([a4[1],a4[0],a4[3],a4[2]]);break;
			case g1[14]:a5.push(a4);break;
			case g1[6]:a5.push([a4[3],a4[0],a4[1],a4[2]]);break;
			case g1[15]:a5.push(a4.reverse());break;
			case g1[2]:a5.push([a4[1],a4[2],a4[3],a4[0]]);break;
			case g1[12]:a5.push([a4[1],a4[2],a4[0],a4[3]]);break;
			case g1[3]:a5.push([a4[0],a4[1],a4[3],a4[2]]);break;
			case g1[7]:a5.push([a4[3],a4[0],a4[2],a4[1]]);break;
			case g1[4]:a5.push([a4[2],a4[3],a4[1],a4[0]]);break;
			case g1[9]:a5.push([a4[2],a4[0],a4[3],a4[1]]);break;
			case g1[13]:a5.push([a4[1],a4[3],a4[2],a4[0]]);break;
			case g1[11]:a5.push([a4[0],a4[2],a4[1],a4[3]]);break;
			case g1[10]:a5.push(a4.reverse());break;
			default:break
		}
	}while(a5.length!=0){result+=a5.shift().join('')
	}return BtS(result)
};export{reorder,disorder}
