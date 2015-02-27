Post = function(doc) {
  _.extend(this, doc);
}

_.extend(Post.prototype, {
  isOwned: function(){
    return Meteor.userId() == this.owner;
  }
});

Posts = new Mongo.Collection('posts', {
  transform: function(doc) {
    return new Post(doc);
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  },

  url: {
    type: String,
    label: 'URL',
    max: 100
  },
  
   picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: 'Choose file'
  },

  owner: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function(){
      return Meteor.userId();
    }
  }

}));
