
let students = [];

do{
	let userInput = prompt("Имя и фамилия студента: ");
    fullName = userInput;
	if (fullName !==null){
		let fullNameToArray = fullName.split(' ');
	    let a = {firstName:fullNameToArray[0], lastName:fullNameToArray[1]};
		students.push(a);
	}
}while(fullName !== null);

for (i = 0; i< students.length; i++){
	do{
		var notes = prompt("Оценки для студента " +students[i].firstName + " "+students[i].lastName);
		var pattern = /^([0-9] )+[0-9]$/;    
	}
	while (!notes || !pattern.test(notes));

	var notesToArray = notes.split(' ');
	students[i]["notes"] = notesToArray;
    students[i]["average"] = getAverage(notesToArray);
}

function getAverage(notes){
	let average =  notes.map(v => Number(v)).reduce((a, b) => a + b, 0);
	average = average/notes.length;
	return average.toFixed(1);
}

let sortingProperty = prompt("Сортировать таблицу : 1 по имени 2 по фамилии 3 по среднему баллу").trim();

switch(sortingProperty){
	    case '1':
		students.sort(function (a, b) {
            return a.firstName == b.firstName ? 0 : +(a.firstName > b.firstName) || -1;
        });
		case '2':
		students.sort(function (a, b) {
            return a.lastName == b.lastName ? 0 : +(a.lastName > b.lastName) || -1;
         });
		case '3':
		students.sort(function (a, b) {
            return a.average == b.average ? 0 : +(a.average > b.average) || -1;
       });
};

console.log(students);