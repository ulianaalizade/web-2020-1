let host = 'http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1';
let records_path = '/api/data1';

function renderRecords(records){
	let t = document.getElementById('record');
	let row;
	let td;
	let admArea = document.getElementById('admArea');
	let name = document.getElementById('name');
	let district = document.getElementById('district');
	let socialDiscount = document.getElementById('socialDiscount');
	t.innerHTML = '';
	for (record of records){
		row = document.createElement('tr');
		td = document.createElement('td');
		td.innerHTML = record.address;
		row.append(td);
		td = document.createElement('td');
		td.innerHTML = record.typeObject;
		row.append(td);
		td = document.createElement('td');
		td.innerHTML = record.name;
		row.append(td);
		t.append(row);
	}
}

function sendRequest(url, method, onloadHandler){
	let xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.responseType = 'json';
	xhr.onload = onloadHandler;
	xhr.send();
}


window.onload = function(){
	document.getElementById('downloadDataBtn').onclick = function(){
		let url = new URL(records_path, host);
		sendRequest(url, 'GET', function() {
			renderRecords(this.response);
		});
	}
} 
