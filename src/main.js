var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleClaimer = require('role.claimer');
var roleArcher = require('role.archer');
var roleSoldier = require('role.soldier');
var roleHealer = require('role.healer');
var parameters = require('parameters')

module.exports.loop = function() {

  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }

  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  console.log('Harvesters: ' + harvesters.length);


  if (harvesters.length < 2) {
    var newName = roleHarvester.name() + Game.time;
    console.log('Spawning new harvester: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(roleHarvester.parts(), newName,
      { memory: { role: roleHarvester.name() } });
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
    switch(creep.memory.role) {
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
