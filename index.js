var excelParser = require('excel-parser');
excelParser.worksheets({
	inFile: "test.xlsx"
}, function(err, worksheets){
	if(err) {
		console.error(err);
		console.log("Yo, error happened");
	}
	console.log(worksheets);
});

excelParser.parse({
	inFile: 'test.xlsx',
	worksheet: 1,
	skipEmpty: true
}, function(err, records){
	if (err) console.error(err);
	console.log(records);
});