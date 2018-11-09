

var util = require('util');

var parameters = {

    model: function() {
        return [
          'W1' : util.randomArray(20,10),
          'b1' : util.randomArray(20,1),
          'W2' : util.randomArray(15,20),
          'b2' : util.randomArray(15,1),
          'W3' : util.randomArray(7,15),
          'b3' : util.randomArray(7,1)
    },



    forwardPropagation: function (inputs) {
        var model = model()
        //
        //Load parameters from model:
        var w1 = model['W1'],
            b1 = model['b1'],
            w2 = model['W2'],
            b2 = model['b2'],
            w3 = model['W3'],
            b3 = model['b3'];

        //Do the first Linear step:
        var z1 =  util.add(util.multiply(w1,inputs),b1);
        //Put it through the first activation function:
        var a1 = util.activate(z1);

        //Second linear step
        var z2 = util.add(util.multiply(w2,a1), b2);
        var a2 = util.activate(z3);

        var z3 = util.add(util.multiply(w3,a2), b3);
        var a3 = util.activate(z3);

        var output = util.softmax(a3)

        return output;
}






};



module.exports = parameters;
