var roleArcher = require('role.archer');
var roleBuilder = require('role.builder');
var roleClaimer = require('role.claimer');
var roleHarvester = require('role.harvester');
var roleHealer = require('role.healer');
var roleSoldier = require('role.soldier');
var roleUpgrader = require('role.upgrader');

var util = {

    cleanupCreeps: function() {

      for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
          delete Memory.creeps[name];
          console.log('Clearing non-existing creep memory:', name);
        }
       }
    },

    spawnBasicCreeps: function(role, number) {
    if (_.filter(Game.creeps, (creep) => creep.memory.role == role.name()) < number) {
      var newName = role.name() + Game.time;
      console.log('Spawning a ' + role.name() + newName);
      Game.spawns['Spawn1'].spawnCreep(role.parts(), newName,
            { memory: { role: role.name() } });
    }
  },

    multiply: function(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  },

  add: function(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(aNumCols); // initialize the current row
    for (var c = 0; c < aNumCols; ++c) {
      m[r][c] = a[r][c] + b[r][c];             // initialize the current cell

    }
  }
  return m;
},

activate: function(a) {
    var aNumRows = a.length, aNumCols = a[0].length;
      m = new Array(aNumRows);
      for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(aNumCols); // initialize the current row
        for (var c = 0; c < aNumCols; ++c) {
          m[r][c] = a[r][c] + b[r][c];             // initialize the current cell

        }
      }
      return m;
    },

    activate: function(a){
      var aNumRows = a.length, aNumCols = a[0].length;
        m = new Array(aNumRows);
        for (var r = 0; r < aNumRows; ++r) {
          m[r] = new Array(aNumCols); // initialize the current row
          for (var c = 0; c < aNumCols; ++c) {
            m[r][c] = Math.tanh(a[r][c])// initialize the current cell
          }
         }
       return m;
     },

softmax: function(arr) {
         return arr.map(function(value,index) {
           return Math.exp(value) / arr.map( function(y /*value*/){ return Math.exp(y) } ).reduce( function(a,b){ return a+b })
         })
     },

randomArray: function(length, width) {
         return Array.apply(null, Array(length)).map(function() {
             return Array.apply(null, Array(width)).map(function() {
                 return Math.random();
             });
         });
     }

};

module.exports = util;
