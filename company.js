import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

let employeeType = new GraphQLObjectType ({
  name: "employees",
  fields: {
    name: {type: GraphQLString},
    id: {type: GraphQLString}
  }
})
let addressType = new GraphQLObjectType ({
  name: 'address',
  fields: {
    city: {type: GraphQLString},
    streetAddress: {type: GraphQLString},
    region: {type: GraphQLString},
    county: {type: GraphQLString},
    postalCode: {type: GraphQLString},
    country: {type: GraphQLString},
    active: {type: GraphQLString},
    employees: {type: new GraphQLList (employeeType)}
  }
});

export let companyInfoType = new GraphQLObjectType ({
  name: 'company',
  fields: {
    id: {type: GraphQLString},
    companyName: {type: GraphQLString},
    addresses: {type: new GraphQLList(addressType)}
  }
});
