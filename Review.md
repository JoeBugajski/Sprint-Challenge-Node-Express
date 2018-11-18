# Review Questions

## What is Node.js?

Node.js is a platform for developing software using JavaScript. It allows us to build powerful JS applications outside of a web browser.

## What is Express?
Express is a framework for Node.js that adds a large number of features for developing API's.

## Mention two parts of Express that you learned about this week.
I learned how to create route handlers, and how to break them up into seperate files. I also learned about req and res, and how to use these objects to sort through data. 

## What is Middleware? 
Middleware is any function code you want to run when a client sends a request. Middleware has access to the req and res objects, and the next function. All of our gets, posts, etc. are examples of middleware. 

## What is a Resource?
Any files or objects that can be identified and used on the web.

## What can the API return to help clients know if a request was successful?
The API can send back a 2xx status code, as well as any custom message you want to send. You can send back html, a json object, anything really. 

## How can we partition our application into sub-applications?
Express has a router feature that lets us break our app into components, similar to react. Then we can route to these files from the top-level app file. 

## What is express.json() and why do we need it?
It returns data in the form of json, which is universally accepted as a way to parse web data. It is an easier format for humans to speak to robots, when dealing with raw data. 

