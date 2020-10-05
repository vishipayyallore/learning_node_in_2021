'use strict';

const grpc = require("grpc");

const calculation = require("../protos/generated/calculations_pb");
var calculationService = require("../protos/generated/calculations_grpc_pb");

function addNumbers(caller, callback) {
    
    var addResponse = new calculation.AddResponse();

    addResponse.setSum(
        caller.request.getValue1() + caller.request.getValue1()
    );

    callback(null, addResponse);
}

const serverPort = "127.0.0.1:6002";

const main = () => {

    const gRPCServer = new grpc.Server();

    gRPCServer.addService(calculationService.CalculationServiceService, {addNumbers: addNumbers});
    gRPCServer.bind(serverPort, grpc.ServerCredentials.createInsecure());
    gRPCServer.start();

    console.log(`Server running on http://${serverPort}`);
}

// Invoking the main method
main();