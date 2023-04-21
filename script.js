// added button for each hour 
var saveButtons = document.querySelectorAll(".btn");
console.log(saveButtons);
saveButtons.forEach(function (individualButton) {
  individualButton.addEventListener("click", saveTask);
});

// added local storage for each event 
var hour = "";
var task = "";
var saveTasks = {
  hour: hour,
  task: task,
};

var storedTasks = [];
var storageTask = localStorage.setItem("task", JSON.stringify(saveTasks));

function init() {
  var savedTasks = JSON.parse(localStorage.getItem("task"));
  if (savedTasks !== null) {
    storedTasks.push(savedTasks);
  }
  renderTask();
}

function renderTask() {
  var savedTasks = JSON.parse(localStorage.getItem("task")) || [];
  savedTasks.forEach(function (task) {
    var hourBlock = $(".hour-block[data-hour='" + task.hour + "']");
    hourBlock.find(".description").val(task.description);
  });
}

function saveTask(event) {
  console.log("saveTask() called");
  console.log(event);
  console.log(event.target);
  var targetTextArea = $(event.target)
    .parent()
    .parent()
    .children(".description")
    .val();
  var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  console.log(targetTextArea);

  var task = {
    hour: taskHour,
    description: targetTextArea,
  };

  var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  savedTasks.push(task);

  var taskHour = $(event.target).parent().parent().find("#hour-9").val();
  console.log(taskHour);

}


//  Added code to display the current date in the header of the page.
var currentDate = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDate);
