Comments = new Mongo.Collection('comments');

Comments.attachSchema(new SimpleSchema({
    description: {
        type: String,
        max: 200,
        label: 'What are your thoughts?',
        autoform: {
            rows: 5
        }
    },
    posts: {
        type: String,
        autoform: {
            omit: true
        }
    },
    owner: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            if (this.isInsert){
                return Meteor.userId();
            }
        }
    }
}));
