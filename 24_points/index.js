
var i=0;
var j=0;

function tryA(a,b,aa,bb)
{
	var dictionary={};

	dictionary[a+"^"+b]=Math.pow(aa,bb);
	dictionary[b+"^"+a]=Math.pow(bb,aa);
	if(a!==0){dictionary["("+b+"/"+a+")"]=bb/aa}
	if(b!==0){dictionary["("+a+"／"+b+")"]=aa/bb}
	
	dictionary["("+a+"×"+b+")"]=aa*bb;
	dictionary["("+a+"－"+b+")"]=aa-bb;
	dictionary["("+b+"－"+a+")"]=bb-aa;
	dictionary["("+a+"＋"+b+")"]=aa+bb;
	
	return dictionary
}

function tryB(a,b,c)
{
	var data=tryA(a,b,a,b);
	var dictionary={};
	var keys=Object.keys(data);
	
	for(i=0;i<keys.length;i++)
	{
		var try1=tryA(keys[i],c,data[keys[i]],c)
		dictionary= Object.assign(dictionary, try1);
	}

	return dictionary
}


function tryC(a,b,c,d)
{
	var data=tryB(a,b,c);
	var return_array=[];
	var keys=Object.keys(data);
	
	for(i=0;i<keys.length;i++)
	{
		var try2=tryA(keys[i],d,data[keys[i]],d)
		var try_keys=Object.keys(try2);

		for(j=0;j<try_keys.length;j++)
		{ 
			if(try2[try_keys[j]]===24){return_array.push(try_keys[j])}
		}
	}
	return return_array
}

//第二種運算方式： (a, b), (c, d)
function tryD(a,b,c,d)
{
	var temp1=tryA(a,b,a,b);
	var temp2=tryA(c,d,c,d);
	var return_array=[];
	var keys1=Object.keys(temp1);
	var keys2=Object.keys(temp2);
	
	for(i=0;i<keys1.length;i++)
	{
		for(j=0;j<keys2.length;j++)
		{
			var try3=tryA(keys1[i],keys2[j],temp1[keys1[i]],temp2[keys2[j]])
			var try_keys=Object.keys(try3);
				for(k=0;k<try_keys.length;k++)
				{
					if(try3[try_keys[k]]===24){return_array.push(try_keys[k])}
				}
		}
	}
	
	return return_array	
}

function try24(a,b,c,d){
	
	var dictionary=[];

    // (a, b) and (c, d)
    dictionary = dictionary.concat(tryD(a, b, c, d));  
    dictionary =  dictionary.concat(tryD(a, c, b, d));
    dictionary =  dictionary.concat(tryD(a, d, b, c));
    
    // (c, d) and (a, b)
    dictionary =  dictionary.concat(tryD(b, c, a, d));  
    dictionary =  dictionary.concat(tryD(b, d, a, c));
    dictionary =  dictionary.concat(tryD(c, d, a, b));
    
    // (((a, b), c), d)
    dictionary =  dictionary.concat(tryC(a, b, c, d));
    dictionary =  dictionary.concat(tryC(a, c, b, d));
    dictionary =  dictionary.concat(tryC(a, d, b, c));
    dictionary =  dictionary.concat(tryC(b, c, a, d));
    dictionary =  dictionary.concat(tryC(b, d, a, c));    
    dictionary =  dictionary.concat(tryC(c, d, b, a));
    
    // (((a, b), d), c)
    dictionary =  dictionary.concat(tryC(a, b, d, c));
    dictionary =  dictionary.concat(tryC(a, c, d, b));
    dictionary =  dictionary.concat(tryC(a, d, c, b));
    dictionary =  dictionary.concat(tryC(b, c, d, a));
    dictionary =  dictionary.concat(tryC(b, d, c, a));    
    dictionary =  dictionary.concat(tryC(c, d, a, b));
	
    return (dictionary)
  }

function calculator(a,b,c,d){
	 var data={}
  data.input=[a,b,c,d];
	 if ((a > 0) && (b > 0) && (c > 0) && (d > 0)) {
		 data.errorCode=0;
		 var result=try24(a,b,c,d);
		 data.count=result.length;
		 data.result=result;
	 }
	 else{
		 data.errorCode=1;
		 data.count=0;
		 data.result="Invalid Inputs";
	 }

	return data
}

module.exports = {calculator}

