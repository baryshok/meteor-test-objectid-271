import { Meteor } from "meteor/meteor";

Meteor.methods({
  testObjectId() {
    return { oid: new MongoInternals.NpmModule.ObjectID() };
  },
});
