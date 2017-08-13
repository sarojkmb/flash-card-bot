'use strict'

var Client = require('node-rest-client').Client;

var client = new Client();

exports.getQuestionService = function () {
    // direct way 
    
    HttpClientRequest();

    
};

function HttpClientRequest(){
    client.get("http://localhost:8080/randomQuestion", function (data, response) {
        var questionString = '';
        // parsed response body as js object 
        console.log("data isssss::: "+data.questionText);
        questionString = data.questionText;
        // raw response 
        console.log("response is ::::::  "+response);

        return questionString;
    });
}