Template.registerHelper('posts', function(){
  return Posts.find().fetch();
})

Template.registerHelper('getImg', function(picture){
  return Images.findOne(picture).url();
});
