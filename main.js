//TEACHER PAGE DATA

//variable declaration
let teacherName = 'Liz Lemon';
let departmentName = 'Comedy Writing';
let teacherRating = [3.4, 5.0, 4.0];

//TEACHER FUNCTIONS
const getRatingAvg = ratingsArr => {
    let ratingSum = 0;
    let ratingAvg;
    for (let i = 0; i < ratingsArr.length; i++) {
      ratingSum = ratingSum + ratingsArr[i];
    }
    ratingAvg = ratingSum/ratingsArr.length;
    return ratingAvg.toFixed(1);
}

const addTeacherRating = (ratingsArr, newRating) => {
    ratingsArr.push(newRating);
    return ratingsArr;
}

//TEACHER RATING PROMPT


// let isValidRating = false;
// while (!isValidRating) {
//   let addtlRating = parseFloat(prompt('We would like for you to review . Please enter a rating between 0.0-5.0'));
//   if ((addtlRating >= 0) && (addtlRating <= 5)) {
//     isValidRating = true;
//     let newArrPrompt = addTeacherRating(teacherRating, addtlRating);
//     let newRatingPrompt = getRatingAvg(newArrPrompt);
//     alert(`Thanks for you review! ${teacherName}\'s average rating is now ${newRatingPrompt}.` );
//     break;
//   } else {
//     addtlRating;
//   }
// }


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
let courseList = [['Improv Comedy', 'Comedy Writing'],['Acting 101','Comedy Writing'],['Singing 101','Comedy Writing'],['Dance 101','Comedy Writing'],['Basic HTML','Web Development'],['Intro to CSS','Web Development'],['Killing You with JavaScript','Web Development']];

//COURSE FUNCTIONS

const deptFilter = (courseArr, deptName) => {
  const filtCourseArr = courseArr.filter(course => {
    if (course[1] === deptName) {
      return course;
    }
  })
}


const filtCourseList = () => {
  
}

const getDeptList = courseArr => {
  let deptList = new Set();
  for (let i = 0; i<courseArr.length; i++) {
    deptList.add(courseArr[i][1]);
  }
  return deptList
}

//COURSE FILTER PROMPT

// let isValidDept = false;
// while (!isValidDept) {
//   let searchDept = prompt('Which department are you looking for?');
//   if (getDeptList(courseList).has(searchDept)) {
//     isValidDept = true;
//     alert(`Available courses: ` );
//     break;
//   } else {
//     searchDept;
//   }
// }
