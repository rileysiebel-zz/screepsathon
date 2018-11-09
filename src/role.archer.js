var roleArcher = {

    /** @param {Creep} creep **/
    run: function(creep) {
        const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target) {
            if(creep.rangedAttack(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
    },

    parts: function() {
      return [RANGED_ATTACK, MOVE];
    },

    name: function() {
      return "archer";
    }
};

module.exports = roleArcher;