
 import {
   GraphQLObjectType,
   GraphQLSchema,
   GraphQLString,
 } from 'graphql';
import DataClient from './dataClient';
import {companyInfoType} from './company'



let schema = new GraphQLSchema ({
  query: new GraphQLObjectType ({
    name: 'Query',
    fields: {
      companyInfo: {
        type: companyInfoType,
        args: {
          id: {type: GraphQLString}
        },
        resolve: (_,args) => {
            let dataClient = new DataClient();
            return dataClient.getCompanyDetails("1234567");
        }
      }
}
})
});



export default schema;
