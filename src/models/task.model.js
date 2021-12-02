"user strict";
var dbConn = require("./../../config/db.config");

//Employee object create
var Task = function (task) {
  this.title = task.title;
  this.description = task.description;
  this.assigned_to = task.assigned_to;
  this.status = task.status ? task.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Task.createTask = function (newTsk, result) {
  dbConn.query("INSERT INTO tasks set ?", newTsk, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Task.findTaskById = function (id, result) {
  dbConn.query("Select * from tasks where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Task.findAllTasks = function (result) {
  dbConn.query("Select * from tasks", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);
      result(null, res);
    }
  });
};
Task.updateTask = function (id, task, result) {
  dbConn.query(
    "UPDATE tasks SET title=?, description=?, assigned_to=?, status=? WHERE id = ?",
    [task.title, task.description, task.assigned_to, task.status, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Task.deleteTask = function (id, result) {
  dbConn.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Task;
