# Pangaea Take Home Assessment

For this challenge we'll be creating a HTTP notification system. A server (or set of servers) will keep track of topics -> subscribers where a topic is a string and a subscriber is an HTTP endpoint. When a message is published on a topic, it should be forwarded to all subscriber endpoints. You may use any frameworks or tools to accomplish this task.

## How to start the application
Requirements ( Nodejs > = version 14.0, MySQL > = version 5.7).

1. Clone repository
2. Create a .env file from the .env.example file and values with your local mysql credentials
3. Run npm install: this will install all the application dependency 
4. Run npm run setup :  this will create and run the Database migrations
5. npm test:  run all tests
6. Start the application by running npm start.

### Next to do
1. Add dockerfile to simplify the application setup.
