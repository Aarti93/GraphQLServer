//File to load express
require("babel-polyfill");
import cors from 'cors';
import schema from './schemaCompany';
import graphQLHTTP from 'express-graphql';
import fs from 'fs';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import https from 'https';
var express = require('express');

const GRAPHQL_PORT = 1122;

var path = require('path');

// Expose a GraphQL endpoint
var graphQLServer = express();

var ALLOWED_ORIGIN_REGEX = /^.*\/\/(.*\.)?(qbo|localhost)(\.|\..*\.)intuit\.com(:\d+)?$/;
var ALLOWED_ORIGIN_REGEX = /localhost/;

var corsOptions = {
    origin: function(origin, callback) {
        var originIsAllowed = ALLOWED_ORIGIN_REGEX.test(origin);
				console.log("origin:" +origin + "   regex:" +ALLOWED_ORIGIN_REGEX  );
        callback(null, true); // TODO: check why origin is coming null
    },
    credentials: true
};

graphQLServer.use(cors(corsOptions));
graphQLServer.options("*", cors(corsOptions)); // enable pre-flight request

graphQLServer.use('/', graphQLHTTP(request => {
    return {
        graphiql: true,
        pretty: true,
        schema: schema,
        // rootValue: { context: request.context, dataClient: request.dataClientInstance
				// }
    };
}));
graphQLServer.listen(GRAPHQL_PORT);
//generating schema json to use for babel relay plugin
(async () => {
	let json = await graphql(schema, introspectionQuery);
	fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2),err =>{
		if (err) throw err;
		console.log("JSON schema created");
	});
})();
