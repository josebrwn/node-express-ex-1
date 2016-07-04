# node express restful api example

Basic REST API server written in node/express:

 * node server listens on assigned port
 * fully configurable end points (routes) 
 * JSON body parser
 * automatic logging

I've included all the necessary npm modules, which are installed as follows :+1::

```bat
npm install express -- save
npm install morgan --save
pm install body-parser --save
```

TODO:

 * add swagger-node: automagic generation of endpoint code via Swagger YAML file
 * add a127: further support for advanced features including caching and Oauth2
 

Inspiration for this project comes from  [coursera](http://coursera.org/)'s specialization, "Responsive Website Design".

### Stuff used to make this:

 * [node.js] (https://nodejs.org/en/) the node.js server
 * [express] (http://expressjs.com/) node express framework
 * [morgan] (https://github.com/expressjs/morgan) for logging
 * [body-parser] (https://github.com/expressjs/body-parser) for parsing JSON body data
 * [swagger-node] (https://github.com/swagger-api/swagger-node) for interactive documentation 
 * [a127] (https://github.com/apigee-127) for caching, oauth2 
