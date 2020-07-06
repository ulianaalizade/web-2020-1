let host = 'http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1';

let select_res = {
	init:function(){
		this.fill_select();
	},
	fill_select:function(){
		let xhr = new XMLHttpRequest();
		xhr.open('GET',host,true);
		xhr.onload = function(){
			let admArea = JSON.parse(xhr.responseText).map(Area => {return Area.admArea;});
			(twin(admArea)).forEach(element => {					
				let admAreaarr = document.createElement('option');
				admAreaarr.innerHTML = `${String(element)}`;
				document.getElementById('ind_adm').append(admAreaarr);
			});
			let district = JSON.parse(xhr.responseText).map(District => {return District.district;});
			(twin(district)).forEach(element => {					
				let districtarr = document.createElement('option');
				districtarr.innerHTML = `${String(element)}`;
				document.getElementById('ind_district').append(districtarr);
			});
			let type = JSON.parse(xhr.responseText).map(Type => {return Type.typeObject;});
			(twin(type)).forEach(element => {					
				let typearr = document.createElement('option');
				typearr.innerHTML = `${String(element)}`;
				document.getElementById('ind_type').append(typearr);
			});
			// let test = admArea;
			// divrItem = document.createElement('div'); //<div class="col-md-2"><p class="card-text" id="card">${String(test.name)}(${String(test.typeObject)})</p></div>
			// divrItem.className = "col-md-2";
			// divrItem.innerHTML =
			// 	`<div>
			// 		<div class="row m-3">
			// 			<div class="form-group col-md-2 p-3 text-md-left">
			// 				<label for="ind_adm">Название</label>
			// 				<p class="card-text" id="card">${String(test.name)}(${String(test.typeObject)})</p>
			// 				<label for="ind_adm">Адрес</label>
			// 				<p class="card-text" id="card">${String(test.name)}(${String(test.typeObject)})</p>
			// 				<button class="btn btn-primary btn-lg" type="button" id="order_shop"">Выбрать</button>
			// 			</div>
			// 		</div>
			// 	</div>`
			//   document.getElementById('rest_list').append(divrItem);
		}
		xhr.send();	
	}
}

select_res.init();

function twin(array){
	let result = [];
  
	for (let str of array){
	  if (!result.includes(str)){
		result.push(str);
	  }
	  delete('null');
	}
	return result;
}




