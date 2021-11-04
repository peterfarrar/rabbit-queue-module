const amqp = require('amqplib')
const options = require('../../options')

const queue = options.rabbitQueue
let connection = null
let channel = null

const getQueueConnection = async () => {
  if (connection === null) {
    connection = await amqp.connect(options.rabbitUrl)
  }

  return connection
}

const getQueueChannel = async () => {
  if (connection === null) {
    connection = await getQueueConnection()
  }

  if (channel === null) {
    channel = await connection.createChannel()
    channel.assertQueue(queue, { durable: options.rabbitQueueDurable })
  }

  return channel
}

const subscribeToQueue = async cb => {
  const channel = await getQueueChannel()
  if (options.rabbitChannelPrefetch) {
    channel.prefetch(parseInt(options.rabbitChannelPrefetch))
  }

  let response
  try {
    response = await channel.consume(queue, cb, { noAck: options.rabbitSubscribeNoAck })
  } catch (err) {
    throw err
  }

  return response
}

const publishToQueue = async payload => {
  const channel = await getQueueChannel()
  let response
  try {
    response = await channel.sendToQueue(queue, Buffer.from(payload), {
      persistent: options.rabbitQueuePersist
    })
  } catch (err) {
    throw err
  }

  return response
}

const closeConnection = async () => {
  if (connection) {
    return connection.close()
  }
  return false
}

module.exports = {
  getQueueChannel,
  getQueueConnection,
  publishToQueue,
  subscribeToQueue,
  closeConnection
}
