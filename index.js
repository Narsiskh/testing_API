"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.get('https://httpbin.org/get', {
    params: {
        id: 123,
        name: 'Narcis',
        email: 'narsiskh.2013@gmail.com'
    },
})
    .then(function (response) {
    var users = response.data;
    console.log(users);
})
    .catch(function (error) {
    console.log(error);
});
