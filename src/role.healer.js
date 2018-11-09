var roleHealer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
            filter: function(object) {
                return object.hits < object.hitsMax;
            }
        });
        if(target) {
            if(creep.heal(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
    },

    parts: function() {
      return [HEAL, MOVE];
    },

    name: function() {
      return "healer";
    }
};

module.exports = roleHealer;