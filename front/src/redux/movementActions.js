const tweetActions = {
  storeTweets: function (data) {
    return { type: "STORE_MOVEMENT", payload: data };
  },
  create: function (data) {
    return { type: "CREATE", payload: data };
  },
  remove: function (data) {
    return { type: "REMOVE", payload: data };
  },

  update: function (data) {
    return { type: "UPDATE", payload: data };
  },
};

export default tweetActions;
