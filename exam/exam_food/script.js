let host = 'http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1';

function unique(arr){
  let result = [];

  for (let str of arr){
    if (!result.includes(str)){
      result.push(str);
	}
	delete('null');
  }
  return result;
}

let select_res = {
	init:function(){
		this.fill_select();
		this.fill_tab();
	},
	fill_select:function(){
		let xhr = new XMLHttpRequest();
		xhr.open('GET',host,true);
		xhr.onload = function(){
			let admArea = JSON.parse(xhr.responseText).map(Area => {return Area.admArea;});
			(unique(admArea)).forEach(element => {					
				let admAreaarr = document.createElement('option');
				admAreaarr.innerHTML = `${String(element)}`;
				document.getElementById('ind_adm').append(admAreaarr);
			});
			let district = JSON.parse(xhr.responseText).map(District => {return District.district;});
			(unique(district)).forEach(element => {					
				let districtarr = document.createElement('option');
				districtarr.innerHTML = `${String(element)}`;
				document.getElementById('ind_district').append(districtarr);
			});
			let type = JSON.parse(xhr.responseText).map(Type => {return Type.typeObject;});
			(unique(type)).forEach(element => {					
				let typearr = document.createElement('option');
				typearr.innerHTML = `${String(element)}`;
				document.getElementById('ind_type').append(typearr);
			});
		}
		xhr.send();
	},
	fill_tab:function(admAreaarr, districtarr, typearr){
		
		divrItem = document.createElement('div');
					divrItem.className = "col-md-3";
					divrItem.innerHTML = 
						``
				  	document.getElementById('print_rest').append(divrItem);
	}
}

select_res.init();




