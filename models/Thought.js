const { Schema, model, trusted } = require("mongoose");



const thoughtSchema = new Schema ({
  thoughtText: {

  },
  createdAt: {

  },
  username: {

  },
  reactions: []
},{
  toJSON: {
    getters: trusted,
  },
  id: false
})

thoughtSchema.virtual("reactionCount").get(function(){
  return this.reactions.length;
})

const Thought = model("Thought", thoughtSchema)

module.exports = Thought;