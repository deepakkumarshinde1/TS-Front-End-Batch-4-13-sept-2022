$(function () {
  var userList = [];
  $("#btn-save").on("click", function (event) {
    event.preventDefault(); // prevent form submission
    // if we want to get a input value we need ".val()"
    var data = $("#inputName").val();
    console.log(data);
  });

  // array => collections same or different data types

  var array = []; // length = 0, index = -1
  // index auto inc & start with zero

  // jsObject
  // key:value ==> keys are user define

  var student = {
    name: "deepak",
    age: 31,
    rollNo: 25,
  };

  var studentList = [
    {
      name: "deepak",
      age: 31,
      rollNo: 25,
    },
    {
      name: "suraj",
      age: 30,
      rollNo: 26,
    },
    {
      name: "rupesh",
      age: 29,
      rollNo: 27,
    },
    {
      name: "sandeep",
      age: 25,
      rollNo: 28,
    },
  ]; // array of object
  // JSON array=> Javascript Object Notation
  console.log(studentList);
  // delete => splice
  //studentList.splice(2, 1); //index,delCount

  // add => push
  var newStudent = {
    name: "amar",
    age: 22,
    rollNo: 29,
  };
  studentList.push(newStudent);
  //console.log(studentList);
  // read => forEach
  studentList.forEach(function (value, index) {
    console.log(value);
  });

  // recreate => map
  var newList = studentList.map(function (value, index) {
    return `<li>Mr.${value.name} is a student having roll no ${value.rollNo}</li>`;
  });
  // array to string => join
  $("#userList").html(newList.join(""));
});
