# Welcome to "FootNews"
You want to always document your code - this includes actual source code in-line documentation, but also API documentation 

## Setup 
This project depends on a few global libraries (listed below). I've included notes on installing them.
### brew 
You will want to install this on your machine to get started - You probably don't have it yet. The best first step, would be to install `brew`. Here is a link on that: [https://brew.sh/](https://brew.sh/). Probably best to install `node` via `brew`.
### node 
Run the following to install `node` via `brew`:
```
brew install node
```
Hopefully that works ;)
### node-dev
This is what we're using as our NPM start script, for now. In production, we would switch the start script to `node index.js`

## Endpoints
These are the endpoints currently available with this app. The app does not yet require authentication. 

### `/example-service`
Here's sample code using the `example-service` endpoint:
```js
GET http://localhost:3500/example-service
// Nothing in the body
{}
```
Here's a sample response:
```js
{
"message": "Hello World!"
}
```