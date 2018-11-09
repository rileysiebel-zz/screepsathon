var roleClaimer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.room.controller) {
            if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    },

    parts: function() {
      return [CLAIM, MOVE];
    },

    name: function() {
      return "claimer";
    }
};

module.exports = roleCalimer;