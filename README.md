This project serves as a starting template for using typescript natively in nodejs to leverage its faster code executions and scalability features.

The project has been setup to run express server natively in nodejs. It also allows using nodemon to reload server as it detects changes. It has support for packing dependencies for web browsers using webpack

To get started, create an app.ts file under src. Keep any client side codes in the same folder. Add certificate and key for running https server from your side.
On running the server, the esrun package runs the ts files directly from node. It also rebuilds the bundle.js file for web. You can change the name based on your requirement.
