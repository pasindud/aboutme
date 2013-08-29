#[Aboutme](https://github.com/pasindud/myprofile) 

Creates a aboutme page in geek style using a .json file where all details servered from.

live demo - [http://my-aboutme.herokuapp.com/pasindu](http://my-aboutme.herokuapp.com/pasindu)

Continuous Deployment using [https://drone.io](https://drone.io)

*To add to my-aboutme, create a yourname.json file like the following and commit.

### Sample format for name.json 

```
{
  "name" 		 : "Your Name",
  "location"     : "you location",
  "discription"  : "about u",		
 
  "style":{
  	"content_style":"",  	// styling the container holding all your data
  	"custom": "",  			// all custom styles for your page
    "theme" : "default" 	// theme name		
  },

	
  // Social website links	
  "links": {
    "facebook"	: "your facebook username",
    "linkedin"	: "your linkedin id no",
    "twitter" 	: "you handle",
    "googleplus": "google+ id no",
    "github" 	: "github username"
  },

  // Other links can be personal sites , blogs etc.
  "other_links":[{
	  "url"		  : "your url",
	  "caption"	: "Subject of the url",
	  "icon"	  : "icon to be shown beside the url" 
	}
  ]
}

```

***


####Installation & Setup
This assumes you already have node.js & npm installed.
```
git clone 
cd nodebb
npm install -d
node app
```

Hope to do more work on this.

License - MIT
