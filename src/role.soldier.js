var util = require('util');

var roleSoldier = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.building) {
            var targets = creep.room.find(FIND_HOSTILE_CREEPS);
            if(targets.length) {
                if(creep.rangedAttack(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                util.randomMove(creep);
            }
        } else {
            util.randomMove(creep);
        }
    },

    parts: function() {
      return [MOVE, ATTACK];
    },

    name: function() {
      return "soldier";
    }
};

module.exports = roleSoldier;