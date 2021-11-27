# Sample Express - Mongo REST service

This is a sample REST service with mongodb and express.js. It fetches the filtered records from MongoDB.

# Live Demo
Click to see demo [Sample Express Mongo Heroku Link](https://sample-express-mongo.herokuapp.com/).
# Usage
Build the dockerfile
```docker build . -t sample-express-mongo```
  
Run the container with env variables
```docker run -e NODE_PORT=${NODE_PORT} -e MONGO_URI=${MONGO_URI} -p ${NODE_PORT}:${NODE_PORT} sample-express-mongo ```  
# Formatting
Run linter:  
```npm run lint```  

# Test
Run tests:   
```npm run test```

# API Documentation
```POST /records```   

```
curl --location --request POST 'http://localhost:5000/records' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate":"2012-12-12",
    "endDate":"2022-12-12",
    "minCount":10,
    "maxCount":15
}'
```

Example response:

```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "EreZCUht",
            "createdAt": "2016-10-06T12:42:09.211Z",
            "totalCount": 13
        },
        {
            "key": "LHfUUmrg",
            "createdAt": "2015-11-24T01:57:16.824Z",
            "totalCount": 15
        },
        {
            "key": "AySmigjD",
            "createdAt": "2015-08-03T12:41:08.502Z",
            "totalCount": 13
        },
        {
            "key": "YdKpyxEQ",
            "createdAt": "2015-01-07T16:11:00.140Z",
            "totalCount": 15
        }
    ]
}
```
# Error codes:
```
0: Success
400: Bad request
500: Server error
```