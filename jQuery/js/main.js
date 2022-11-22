$(function () {
  var userList = [];
  $("#btn-save").on("click", function (event) {
    event.preventDefault(); // prevent form submission
    // if we want to get a input value we need ".val()"
    var data = $("#inputName").val();
    console.log(data);
  });
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
    name: "deepak",
    age: 31,
    rollNo: 25,
  },
  {
    name: "deepak",
    age: 31,
    rollNo: 25,
  },
  {
    name: "deepak",
    age: 31,
    rollNo: 25,
  },
]; // array of object
// JSON array=> Javascript Object Notation

console.log(array);
