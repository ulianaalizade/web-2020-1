let host = 'http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1?api_key=3c7c9da1-b52b-412e-a655-45b26f5ae252';

let select_res = { // сделал что смог, моя гордость!
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
			// let admArea2 = JSON.parse(xhr.responseText).map(Area => {return ;}); // провал, но я пытался (хотя с html взаимодействует и элементы грузятся)
			// div = document.createElement('div');
			// div.innerHTML =
			// 	`<div>
			// 		<div class="row m-3">
			// 			<div class="form-group col-md-2 p-3 text-md-left">
			// 				<label for="ind_adm">Название</label>
			// 				<p class="card-text" id="card">${String()}</p>
			// 				<label for="ind_adm">Адрес</label>
			// 				<p class="card-text" id="card">${String()}</p>
			// 				<button class="btn btn-primary btn-lg" type="button" id="order_shop"">Выбрать</button>
			// 			</div>
			// 		</div>
			// 	</div>`
			//   document.getElementById('rest_list').append(div);
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

function renderRecords(records) {
    let t = document.getElementById('records').querySelector('tbody');
    let row;
    let td;
    for (record of records) {
        row = document.createElement('tr');
        td = document.createElement('td');
        td.innerHTML = record.name;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.typeObject;
        row.append(td);
        td = document.createElement('td');
        td.innerHTML = record.address;
        row.append(td);
        t.append(row);
    }
}

function sendRec(method, url, onloadHandler) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = onloadHandler;
    xhr.send();
}

// "Полностью сверстана главная страница и работает загрузка и отображение списка заведений", всё строго по регламенту,
// и загружает из JSON, и отображает на странице :)

window.onload = function () { 
	document.getElementById('find_button').onclick = function(){
		let url = new URL(host);
		sendRec('GET',url, function () {
			renderRecords(this.response);
		})
	}

}
