let http = require('http');
export default class DataClient {

  getCompanyDetails (company_id) {
    //var companyPromise = new Promise( this.makeGetServiceCall);
    var companyPromise = new Promise ( (resolve,reject) => {
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
    		  console.log(`problem with request: ${e.message}`);
    	});
    });
    return companyPromise.then((companyInfo) => {return companyInfo})
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
  		  console.log(`problem with request: ${e.message}`);
  	});
  }

  resolveCompanyInfo (response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            var companyInfo = JSON.parse(body);
  					console.log(companyInfo);
  					resolve(companyInfo);
        });
  }
}
