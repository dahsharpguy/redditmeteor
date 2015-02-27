AutoForm.hooks({
  insertComments: {
    formToDoc: function(doc, ss, formId) {
      doc.posts = Router.current().params._id;
      return doc;
    }
  }
});
