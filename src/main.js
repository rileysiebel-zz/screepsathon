var roleArcher = require('role.archer');
var roleBuilder = require('role.builder');
var roleClaimer = require('role.claimer');
var roleHarvester = require('role.harvester');
var roleHealer = require('role.healer');
var roleSoldier = require('role.soldier');
var roleUpgrader = require('role.upgrader');
var parameters = require('parameters');
var util = require('util');

module.exports.loop = function() {

  util.cleanupCreeps();
  var roles = [roleArcher, roleBuilder, roleClaimer, roleHarvester, roleHealer, roleSoldier, roleUpgrader];
  var numCreeps = Object.keys(Game.creeps).length;

  if (numCreeps == 0) {
    var newName = roleHarvester.name() + Game.time;
    console.log('Spawning new creep: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(roleHarvester.parts(), newName,
          { memory: { role: roleHarvester.name() } });
  }

  var currentProportions = [] ;
  for (var role in roles) {
    var actualNumWithRole = _.filter(Game.creeps, (creep) => creep.memory.role == role.name()).length;
    currentProportions.push(actualNumWithRole / Game.creeps.length);
  }

  var desiredProportions = parameters.forwardPropagation(currentProportions);

  // TODO SOMETHING GOES HERE, NOT JUST COMMENTS

  for (var role of roles) {
    var desiredNumWithRole = numCreeps * parameters.parameters()[role.name()];
    var actualNumWithRole = _.filter(Game.creeps, (creep) => creep.memory.role == role.name()).length;
    if (actualNumWithRole < desiredNumWithRole) {
      var newName = role.name() + Game.time;
      console.log('Spawning new creep: ' + newName);
      Game.spawns['Spawn1'].spawnCreep(role.parts(), newName,
        { memory: { role: role.name() } });
      break;
    }
  }

  if (Game.spawns['Spawn1'].spawning) {
    var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
    Game.spawns['Spawn1'].room.visual.text(
      '🛠️' + spawningCreep.memory.role,
      Game.spawns['Spawn1'].pos.x + 1,
      Game.spawns['Spawn1'].pos.y,
      { align: 'left', opacity: 0.8 });
  }

  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    switch (creep.memory.role) {
      case 'upgrader':
        roleUpgrader.run(creep);
        break;
      case 'builder':
        roleBuilder.run(creep);
        break;
      case 'claimer':
        roleClaimer.run(creep);
        break;
      case 'healer':
        roleHealer.run(creep);
        break;
      case 'soldier':
        roleSoldier.run(creep);
        break;
      case 'archer':
        roleArcher.run(creep);
        break;
      case 'harvester':
      default:
        roleHarvester.run(creep);
        break;
    }
  }
}
