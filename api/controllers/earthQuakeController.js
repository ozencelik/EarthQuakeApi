'use strict';


const http = require('http');
var mongoose = require('mongoose'),
    EQ = mongoose.model('Earthquakes');

exports.home = function(req, res) {
  console.log('Geldi');
};

exports.listAllEarthquakes = function(req, res) {

    console.log('Geldi');

    http.get('http://www.koeri.boun.edu.tr/scripts/sondepremler.asp', (resp) => {
      let data = '';
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        //console.log(JSON.parse(data).explanation);
        console.log(data.getElementsByTagName('pre')[0].innerHTML);
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });


    /*
    EQ.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });*/




};



/*
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};*/