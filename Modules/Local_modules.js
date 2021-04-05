const getName = () => 'Md Abdullah Fardus';
const getDOB = () => '08/08/1993';

exports.presentAddress = () => 'Sufia Vila/1st Floor/B3, Puratan Controlmore, North Patenga, Chattogram-4222';

exports.name = getName;
exports.age = getDOB;

/* 
    This is another method to export modules.
    Here this code comment out because both exports does not run at a time.
    It shows error when both export are active at the same path/file
*/
// const fatherName = 'Md Olliullah Anshari';
// const motherName = 'Jannatul Fardus';

// module.exports = {
//     fatherName,
//     motherName
// }
