//File to load express

import schema from './schemaCompany';
import GraphQLHTTP from 'express-graphql';
var express = require('express');
//var data = require('./data.json');
let app = express();
app.use('/graphql', GraphQLHTTP({      //mounting the endpoint , GraphQLHTTP helper which takes obj with schema as callback
	schema: schema,
	graphiql: true
}));

app.listen(1122); //starting the server
console.log("Server is running");
