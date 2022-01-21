const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserInfoSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    userID: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    position: {
      longitude: {
        type: Number,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
    },
    origin: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);
module.exports = UserInfo;
