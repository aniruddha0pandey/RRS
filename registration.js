var bookmark = {
	from : '',
	to : '',
	array : []
};

var count;

function displayData() {
	from = document.getElementById('from').value;
	to = document.getElementById('to').value;
	bookmark.array.push(from);

	document.getElementById('show').innerHTML +=
'<li class="mdl-list__item">' +
	'<span class="mdl-list__item-primary-content">' +
		'<i class="material-icons mdl-list__item-avatar">person</i>' +
		'<span>' + bookmark.array[count] +'</span>' +
	'</span>' +
	'<span class="mdl-list__item-secondary-content">' +
		'<a id="del" onclick="deleteData(this.id)">' +
			'<i class="material-icons">delete</i>' +
		'</a>' +
	'</span>' +
'</li>';
}

function deleteData(idof) {
	bookmark.array.splice(idof, 1);
}
