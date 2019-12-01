'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
            "mag": 2.7,
            "lng": 40.1537,
            "lat": 38.155,
            "lokasyon": "YATIR-EGIL (DIYARBAKIR)",
            "depth": 16.9,
            "title": "YATIR-EGIL (DIYARBAKIR)",
            "rev": null,
            "timestamp": 1575111911,
            "date": "2019.11.30 14:05:11",
 */

var EarthquakeSchema = new Schema({
  title: {
    type: String,
    //required: 'Kindly enter the name of the task'
  },
  date: {
    type: Date,
    default: Date.now
  },
  depth: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    default: 'Türkiye'
  },
  magnitude: {
    type: Number,
    default: 0.0
  },
  latitude: {
    type: Number,
    default: 0.0
  },
  longitude: {
    type: Number,
    default: 0.0
  }
});

module.exports = mongoose.model('Earthquakes', EarthquakeSchema);