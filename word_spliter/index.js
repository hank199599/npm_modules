var compare_array=require('./compare_list.json');

module.exports.split = (input) => {
	var m=0;var return_array=[];
	var input_array=input.split('');
		for(m=0;m<input_array.length;m++){
			 if(compare_array[input_array[m]+input_array[m+1]+input_array[m+2]+input_array[m+3]]==="true"){
			  return_array.push(input_array[m]+input_array[m+1]+input_array[m+2]+input_array[m+3]);
			  m++;m++;m++;}
			 else if(compare_array[input_array[m]+input_array[m+1]+input_array[m+2]]==="true"){
			  return_array.push(input_array[m]+input_array[m+1]+input_array[m+2]);
			  m++;m++;}
			 else if(compare_array[input_array[m]+input_array[m+1]]==="true"){
			  return_array.push(input_array[m]+input_array[m+1]);
			  m++;}
			  else{return_array.push(input_array[m]);}
		 }
  return x + y;
}		 