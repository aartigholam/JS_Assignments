/* Program 8- Write a program that creates the below Object.
	Object name - Student
	Property 
		Name
		College Name
		Location
		PinCode
		Teachers details should be teacherName, teacherPhone, teacherSubjects

	Print Student name, teacherName on console.
*/

const Student = {
	Name : 'Aarti',
	CollageName : 'ABC',
	Location : 'Mumbai',
	PinCode : 400057,
	TeachersDetails : {
		teacherName : 'XYZ',
		teacherPhone : 9876543210,
		teacherSubject : 'Software Testing'
	}
};

console.log(Student.Name)
console.log(Student.TeachersDetails.teacherName)

/* ANS : 

Aarti
XYZ

*/