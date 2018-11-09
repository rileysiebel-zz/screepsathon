


var parameters = {

    parameters: function() {
        return [1/7, 1/7, 1/7, 1/7, 1/7, 1/7, 1/7]
    },

    forwardPropagation: function (inputs, model) {
        //Make one vector of inputs:

        //Load parameters from model:
        var w1 = model['W1'],
            b1 = model['b1'],
            w2 = model['W2'],
            b2 = model['b2'],
            w3 = model['W3'],
            b3 = model['b3'];
        //Do the first Linear step:
        var z1 =  util.add(util.multiply(inputs,w1),b1);
        //Put it through the first activation function:
        var a1 = util.activate(z1);

        //Second linear step
        var z2 = util.add(util.multiply(a1,w2), b2);
        var a2 = util.activate(z3);

        var z3 = util.add(util.multiply(a2,w3), b3);
        var a3 = util.activate(z3);


        var output = softmax(a3)



        return output;

        }






};



module.exports = parameters;
