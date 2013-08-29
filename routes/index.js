
/*
 * GET home page.
 */
var fs = require('fs');

exports.index = function(req, res){

	fs.exists('aboutme/'+req.params.user+'.json', function(exists) {
	  if (exists) {
	    		fs.readFile('aboutme/'+req.params.user+'.json', function (err, data) {
			  	details=JSON.parse(data);
				res.render('index', { 
					title: details.name , 
					name:details.name,
					facebook:details.links.facebook,
					twitter:details.links.twitter,
					linkedin:details.links.linkedin,
					googleplus:details.links.googleplus,
					github:details.links.github,
					location:details.location,
					description:details.description,
					other_links:details.other_links,
					style:{content:details.style.content_style , custom:details.style.custom}
				});
			}); 
	  } else {
	    res.redirect('/pasindu');
	  }
	});

};

