const { subscribeToQueue, getQueueChannel } = require('./util/rabbit-methods')
const options = require('../options')

const doTheThing = async () => {
  const cb = async msg => {
    const channel = await getQueueChannel()
    var seconds = msg.content.toString().split('.').length - 1

    console.log(' [x] Received %s', msg.content.toString())
    setTimeout(async function () {
      if (!options.rabbitSubscribeNoAck) {
        channel.ack(msg)
      }
      console.log(' [x] Done')
    }, seconds * 1000)
  }
  subscribeToQueue(cb)
}

doTheThing()
