//TEACHER PAGE DATA

//variable declaration
let teacherName = 'Liz Lemon';
let departmentName = 'Comedy Writing';
let teacherRating = [3.4, 5.0, 4.0];

//TEACHER FUNCTIONS
const getRatingAvg = teacherRating => {
    let ratingSum = 0;
    let ratingAvg;
    for (let i = 0; i < teacherRating.length; i++) {
      ratingSum = ratingSum + teacherRating[i];
    }
    ratingAvg = ratingSum/teacherRating.length;
    return ratingAvg.toFixed(2);
}



//STUDENT PAGE DATA

//variable declaration
let studentName = 'Aldous Snow';
let studentEmail = 'snow@aldoussnow.com';
let studentGPA = '3.2';
let studentMajor = 'Music Performance';

//COURSE PAGE DATA

//variable declaration
let semester = 'Spring 2019';
let courseName = 'Improv Comedy';
