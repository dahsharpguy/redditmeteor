Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase"
})

Router.route('/', function () {      // Route is the path after the url
  this.render('jumbo');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});


Router.route('/signup', function () {
  this.render('signup');
}, {
  name: 'signup'
});

Router.route('/reddit', function () {
  this.render('reddit');
}, {
  name: 'reddit'
});

Router.route('/comments', function() {
  this.render('comments');
}, {
  name: 'comments'
});
