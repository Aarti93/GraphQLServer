let http = require('http');
export default class DataClient {

  getCompanyDetails () {
    return new Promise( this.makeGetServiceCall).then((companyInfo) => {return companyInfo})
    	.catch(function(reason) {
    		console.log('Handle rejected promise ('+reason+') here.');
    	});
  }

  makeGetServiceCall(resolve,reject) {
  	var req = http.get({
  	      host: '127.0.0.1',
  	      path: '/getJsonData',
  				port: 2222
  	  }, function (response) {
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                var companyInfo = JSON.parse(body);
      					console.log(companyInfo);
      					resolve(companyInfo);
            });
  		});
  	req.on('error', (e) => {
  		  console.log(`problem with request (Maybe server is not on): ${e.message}`);
  	});
  }

}
