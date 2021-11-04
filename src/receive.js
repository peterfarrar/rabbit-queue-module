const { subscribeToQueue } = require('./util/rabbit-methods')

const doTheThing = async () => {
  const cb = msg => console.log(" [x] Received %s", msg.content.toString())
  const result = await subscribeToQueue(cb)
  console.log("RESULT:", result)
}

doTheThing()
