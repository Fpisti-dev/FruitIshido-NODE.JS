// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

//load up data from the API at runtime
app.request.json('http://localhost:3000/top10', function(mydata){ 
  app.data.top10s = mydata ; 
});

//load up data from the API at runtime
app.request.json('http://localhost:3000/allmanuals', function(mydata){ 
  app.data.manuals = mydata ; 
});
 
console.log(app.data);