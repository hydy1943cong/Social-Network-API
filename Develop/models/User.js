const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create User model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    thoughts: [
        {
      type: Schema.Types.ObjectId,
      ref:'Thought'
    }
],
    friends: [
        {type: Schema.Types.OjbectId,
        ref: 'User'}
    ]
  },

  {
    toJSON: {
        virtuals: true,
    },
    id: false
  });

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
const User = model('User', UserSchema);

module.exports = User;
