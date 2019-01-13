//TEACHER PAGE DATA

//variable declaration
let teacherName = 'Liz Lemon';
let departmentName = 'Comedy Writing';
let teacherRating = [3.4, 5.0, 4.0];

//TEACHER FUNCTIONS
const getRatingAvg = ratingsArr => {
    var ratingSum = 0;
    var ratingAvg;
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
let courseList = [['Improv Comedy', 'Comedy Writing'],
['Acting 101','Comedy Writing'],
['Singing 101','Comedy Writing'],
['Dance 101','Comedy Writing'],
['Basic HTML','Web Development'],
['Intro to CSS','Web Development'],
['Killing You with JavaScript','Web Development']];

//COURSE FUNCTIONS

const deptFilter = (courseArr, deptName) => {
  const filtCourseArr = courseArr.filter(course => {
    if (course[1] === deptName) {
      return course;
    }
  })
  return filtCourseArr;
}

const filtCourseList = filteredCourses => {
    var newCourseList = [];
    for (var i = 0; i < filteredCourses.length; i++) {
      newCourseList.push(filteredCourses[i][0]);
    }
    return newCourseList;
}

const getDeptList = courseArr => {
  var deptList = [];
  for (var i = 0; i<courseArr.length; i++) {
    deptList.push(courseArr[i][1]);
  }
  return deptList;
}

//COURSE FILTER PROMPT

// let isValidDept = false;
// while (!isValidDept) {
//   var searchDept = prompt('Which department are you looking for?');
//   if (getDeptList(courseList).includes(searchDept)) {
//     var availCourse = filtCourseList(deptFilter(courseList, searchDept));
//     isValidDept = true;
//     alert(`Available courses: ` + availCourse);
//     console.log(availCourse);
//     break;
//   } else {
//     searchDept;
//   }
// }

// STEP 3: WELCOMING SOME STUDENTS

let welcomeCollegeStudent = function(collegeClass) {
  alert(`Welcome ${collegeClass}!`);
}

let welcomeHsStudent = function(hsClass) {
  alert(`You're still a ${hsClass} in High School!`);
}

//BEGINNING OF CLASS/GRADE FUNCTION
  let isValidYear = false;
  let currentDate = new Date();
  while (!isValidYear) {
    var passedYear = prompt('Please provide the year of your college graduation.');
    if ((passedYear >= currentDate.getFullYear()) && (typeof parseInt(passedYear) === 'number')) {
      isValidYear = true;
      if (passedYear <= (currentDate.getFullYear() + 4)) {
        welcomeCollegeStudent('Freshman');
      } else {
        welcomeHsStudent('Freshman');
      }
      let isValidMonth = false;
      while (!isValidMonth) {
        var passedMonth = prompt('Please provide anticipated month of your college graduation. (Abbreviations will not be accepted)');
        if ((passedMonth.toLowerCase() === 'may')|| (passedMonth.toLowerCase() === 'december')) {
          isValidMonth = true;
          break;
        } else {
          passedMonth;
        }
      }
      break;
    } else {
      passedYear;
    }
  }
