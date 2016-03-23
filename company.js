import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

let employeeType = new GraphQLObjectType ({
  name: "employeeType",
  fields: {
    name: {type: GraphQLString},
    id: {type: GraphQLString}
  }
})

let addressType = new GraphQLObjectType ({
  name: 'address',
  fields: {
    country: {type: GraphQLString},
    region: {type: GraphQLString},
    city: {type: GraphQLString},
    streetAddress: {type: GraphQLString},
    county: {type: GraphQLString},
    postalCode: {type: GraphQLString},
  }
});

let contactType = new GraphQLObjectType ({
  name: 'contactType',
  fields: {
    workPhone: {type: GraphQLString}
  }
})

let workLocationsType = new GraphQLObjectType ({
  name: 'workLocationsType',
  fields: {
    id: {type: GraphQLString},
    address: {type: addressType}
  }
})

export let companyInfoType = new GraphQLObjectType ({
  name: 'company',
  fields: {
    businessName: {type: GraphQLString},
    businessAddress: {type: addressType},
    contact: {type: contactType},
    workLocation: {type: new GraphQLList(workLocationsType)}
  }
});
