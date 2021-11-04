# Rabbit Queue Module

## This is based on the 1st and 2nd tutorials on rabbitmq.com
I took the callback approach they presented and translated it into promises.  Then I built out a module with methods to implement them.  I hope the result is easy to use.  There is plenty of room to grow.

### Setup:
```
docker run -d -p 5672:5672 rabbitmq:latest
```
```
npm i amqplib
```
### Configuration
the `/config/local.sample.sh` file has good examples of how to set up your environment.  Copy these into a `/config/local.sh` file for these values to be pulled into option.js file.

In it's current state, the values in there are probably all you need, though you can play with them and see.  As it grows, there may need to be more added, and more variations for those already there.

### Commands
The `package.json` file contains four commands right now.  Two to publish a message to a queue.  Two to listen.  They are divided into two pairs; one for the basic queue and one for a distributed work queue.  These files are samples.  Play with them as you like!

#### For a basic queue:
```
npm run send
npm run receive
```
#### For a work queue:
```
npm run new_task
npm run worker
```