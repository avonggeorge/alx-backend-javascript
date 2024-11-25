

# NodeJS Basics
Node.js is a powerful, lightweight runtime environment that allows you to execute JavaScript code on the server side. It's built on the V8 JavaScript engine, which powers Google Chrome, and it enables developers to build scalable, high-performance applications, especially for I/O-intensive operations like web servers.

Here are the **basics of Node.js** to get you started:
### **1. Core Features of Node.js**

-   **Asynchronous and Event-Driven**: Node.js uses non-blocking I/O, making it ideal for building fast, scalable network applications.
-   **Single-Threaded**: Although single-threaded, it can handle concurrent requests efficiently through its event loop.
-   **NPM (Node Package Manager)**: The largest package registry for JavaScript libraries and frameworks.
Node.js is a powerful, lightweight runtime environment that allows you to execute JavaScript code on the server side. It's built on the V8 JavaScript engine, which powers Google Chrome, and it enables developers to build scalable, high-performance applications, especially for I/O-intensive operations like web servers.

Here are the **basics of Node.js** to get you started:



### **1. Core Features of Node.js**

-   **Asynchronous and Event-Driven**: Node.js uses non-blocking I/O, making it ideal for building fast, scalable network applications.
-   **Single-Threaded**: Although single-threaded, it can handle concurrent requests efficiently through its event loop.
-   **NPM (Node Package Manager)**: The largest package registry for JavaScript libraries and frameworks.



### **2. Installing Node.js**

1.  Download and install Node.js from the [official website](https://nodejs.org/).
2.  Verify installation:
    -   `node -v` (to check Node.js version)
    -   `npm -v` (to check npm version)

### **3. Running JavaScript Code**

-   Create a `.js` file (e.g., `app.js`).
-   Add JavaScript code:
	```
	console.log("Hello, Node.js!");
	```
- Run the file using
	```
	node app.js
	```
### **4. Creating a Simple Web Server**

Node.js makes it easy to create web servers without external libraries:

```
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP Status
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Listen on a port
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```
Run the server and visit `http://localhost:3000` in your browser.

### **5. Working with NPM**

-   **Initialize a project**
	```
	npm init -y
	```
- **Install a package**:
	```
	npm install <package-name>
	```
- Example: Install `express`, a popular framework:
	```
	npm install express
	```
- **Import it in your code**
	```
	const express = require('express');
	const app = express();

	app.get('/', (req, res) => res.send('Hello, Express!'));

	app.listen(3000, () => console.log('Express server running on port 3000'));
	```
### **6. Modules in Node.js**

Node.js uses the CommonJS module system:

-   **Create a module**
	```
	// myModule.js
	const greet = (name) => `Hello, ${name}!`;
	module.exports = greet;
	```
- **Import and use it**
	```
	const greet = require('./myModule');
	console.log(greet('George'));
	```
### **7. File System Module**

Node.js provides the `fs` module for file handling:

-   **Read a file**
	```
	const fs = require('fs');

	fs.readFile('example.txt', 'utf8', (err, data) => {
	  if (err) throw err;
	  console.log(data);
	});
	```
- **Write a file**
	```
	fs.writeFile('example.txt', 'Hello, File System!', (err) => {
	  if (err) throw err;
	  console.log('File written successfully!');
	});
	```

### **8. Event Emitter**

Node.js uses the `events` module to handle events:

```
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
  console.log('Hello, Event!');
});

myEmitter.emit('greet'); // Trigger the event
```
### **9. Working with JSON**

Node.js can easily read and manipulate JSON:
```
const data = {
  name: 'Node.js',
  type: 'runtime environment',
};

console.log(JSON.stringify(data)); // Convert to JSON string
console.log(JSON.parse('{"name":"Node.js"}')); // Parse JSON string
```
### **10. Useful Commands**

-   Run a script: `node filename.js`
-   Install packages: `npm install package-name`
-   Update packages: `npm update`
-   Initialize project: `npm init`

### **Use Cases for Running JavaScript with Node.js**

-   **Web Server**: Build servers that handle requests and responses.
-   **File System Operations**: Read and write files asynchronously.
-   **Command-Line Tools**: Create CLI tools (e.g., task runners, file manipulators).

### **Debugging JavaScript in Node.js**

-   **Basic Debugging**:
    -   Use `console.log()` for inspecting values.
-   **Built-in Debugger**:
    1.  Run the script with `node inspect`
		```
		node inspect filename.js
		```
	   2.  Use `n` (next), `c` (continue), or `repl` (interactive mode) to debug.
-   **VS Code Integration**: Configure a debugger in VS Code for enhanced debugging.



### **Differences Between Running JavaScript in Node.js vs a Browser**


| Feature                    | Node.js                         | Browser                |
|----------------------------|----------------------------------|------------------------|
| Execution Environment      | Server                          | Client                 |
| APIs Available             | Built-in modules (e.g., `fs`)   | DOM, Window, Web APIs  |
| Use Case                   | Server-side apps, scripts       | UI/Client-side logic   |

### **Key Takeaways**


1.  Node.js excels at building scalable, I/O-intensive applications.
2.  Its asynchronous nature makes it non-blocking, enhancing performance.
3.  Modules, events, and the rich npm ecosystem make development efficient.

## How to use process to access command line arguments and the environment
In Node.js, the `process` object is a global object that provides information and control over the current Node.js process. You can use it to access **command-line arguments** and the **environment variables**. Here's how to work with these features:

### **1. Accessing Command-Line Arguments**

Node.js provides `process.argv`, an array that contains all the command-line arguments passed when starting the script.

#### **Structure of `process.argv`**

-   The first element (`process.argv[0]`): Path to the Node.js executable.
-   The second element (`process.argv[1]`): Path to the JavaScript file being executed.
-   Subsequent elements (`process.argv[2]` and beyond): Additional arguments passed to the script.

#### **Example**
```
// script.js
console.log('Command-line arguments:', process.argv);
```
Run the script:
```
node script.js arg1 arg2 arg3
```
Output:
```
Command-line arguments: [
  '/path/to/node',
  '/path/to/script.js',
  'arg1',
  'arg2',
  'arg3'
]
```
#### **Using Command-Line Arguments**

You can extract specific arguments by indexing the array:
```
const args = process.argv.slice(2); // Ignore first two elements
console.log('Arguments:', args);
```
Running `node script.js hello world` outputs:
```
Arguments: [ 'hello', 'world' ]
```
#### **Handling Named Arguments**

Use named arguments for better clarity. For example:

```
node script.js --name=George --age=30
```
Parse them manually:
```
const args = process.argv.slice(2);
const options = {};
args.forEach(arg => {
  const [key, value] = arg.split('=');
  options[key.replace('--', '')] = value;
});
console.log(options); // { name: 'George', age: '30' }
````
### **2. Accessing Environment Variables**

Environment variables are accessed using `process.env`, which is an object containing all the environment variables.

#### **Setting Environment Variables**

Environment variables are often set before running the Node.js script:

```
NODE_ENV=development PORT=3000 node script.js
```
Accessing Environment Variables

```
console.log('Environment Variables:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
```
Output:
```
Environment Variables:
NODE_ENV: development
PORT: 3000
```
#### **Setting Default Values**

Use default values in case an environment variable is undefined:
```
const port = process.env.PORT || 8000; // Fallback to 8000 if PORT is undefined
console.log(`Server will run on port ${port}`);
```
### **3. Combining Command-Line Arguments and Environment Variables**

Use both to make your application configurable:
```
const mode = process.env.MODE || 'production';
const args = process.argv.slice(2);

console.log(`Running in ${mode} mode with arguments:`, args);
```
Run it:
```
MODE=development node script.js --user=George
```
Output:
```
Running in development mode with arguments: [ '--user=George' ]
```
### **4. Practical Applications**

1.  **Dynamic Port Configuration**:
	```
	const port = process.env.PORT || 3000;
	console.log(`Server running on port ${port}`);
	```
	Run with:
	```
	PORT=5000 node script.js
	```
	
2. **Debugging with Command-Line Flags**:
	```
	const debug = process.argv.includes('--debug');
	if (debug) {
	  console.log('Debugging mode enabled');
	}
	```
3. **Loading Configurations**: Pass configurations via command-line arguments or environment variables:
	```
	const config = {
	  mode: process.env.NODE_ENV || 'production',
	  host: process.argv[2] || 'localhost',
	  port: process.argv[3] || 3000,
	};
	console.log('Configuration:', config);
	```
	Run it:
	```
	NODE_ENV=development node script.js 127.0.0.1 4000
	```
	Output:
	```
	Configuration: { mode: 'development', host: '127.0.0.1', port: 4000 }
	```	
### **Key Takeaways**

1.  Use `process.argv` to access command-line arguments, skipping the first two default entries.
2.  Use `process.env` to access environment variables, ensuring flexibility and configurability.
3.  Combine both for creating robust and configurable applications.
4.  Always validate and sanitize inputs for security and reliability.

## How to create a small HTTP server using Node JS

Creating a small HTTP server using Node.js is straightforward, thanks to the built-in `http` module. Below is a step-by-step guide with explanations and examples to help you build a simple HTTP server.



### **Steps to Create a Node.js HTTP Server**

#### **1. Import the `http` Module**

The `http` module provides the functionality needed to create an HTTP server.
```
const http = require('http');
```
#### **2. Create the Server**

Use the `http.createServer()` method to create an HTTP server. This method takes a callback function as an argument. The callback function handles incoming requests and sends responses.
```
const server = http.createServer((req, res) => {
  // This function will handle requests
});
```
#### **3. Handle Incoming Requests**

The `req` (request) object provides information about the HTTP request, such as the URL and method, while the `res` (response) object is used to send a response back to the client.
```
const server = http.createServer((req, res) => {
  // Log the request method and URL
  console.log(`Request received: ${req.method} ${req.url}`);

  // Send a response
  res.statusCode = 200; // HTTP status code
  res.setHeader('Content-Type', 'text/plain'); // Set content type
  res.end('Hello, World!'); // End the response with a message
});
```
#### **4. Listen on a Port**

Start the server using the `server.listen()` method. Provide a port number and a callback function that executes when the server starts.
```
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```
Complete Example
```
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  // Handle routes
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome to the Home Page</h1>');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>About Us</h1>');
  } else {
    // Handle 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404: Page Not Found</h1>');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```
### **Enhancements**

#### **1. Serve JSON Responses**

You can serve JSON data by setting the `Content-Type` to `application/json`:
```
if (req.url === '/api' && req.method === 'GET') {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello, JSON!' }));
}
```
#### **2. Parse Query Parameters**

Use the `url` module to parse query parameters:
```
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse URL
  const name = parsedUrl.query.name || 'Guest';

  if (parsedUrl.pathname === '/greet' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, ${name}!`);
  }
});
```
#### **3. Serve Static Files**

To serve static files like HTML or CSS, use the `fs` module:

```
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('404: File Not Found');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    }
  });
});
```
### **Testing the Server**

1.  Save your script (e.g., `server.js`).
2.  Run the server
	```
	node server.js
	```
3. Open a browser and visit:

-   `http://localhost:3000` for the home page.
-   `http://localhost:3000/about` for the about page.
-   `http://localhost:3000/api` to test a JSON response.

### **Takeaways**

-   **Core Module**: Use the `http` module to build basic HTTP servers.
-   **Request/Response Handling**: Manage routing, HTTP methods, and response codes.
-   **Scalability**: For larger applications, consider frameworks like Express.js, which simplifies server creation and routing.
## How to create a small HTTP server using Express JS
Creating an HTTP server with **Express.js** is simpler and more feature-rich compared to using the core `http` module in Node.js. Express.js is a lightweight framework for building web applications and APIs, providing powerful tools for routing, middleware, and request handling.


### **Steps to Create a Small HTTP Server with Express.js**

#### **1. Install Express.js**

You need to install Express.js using npm (Node Package Manager).
```
npm install express
```
#### **2. Import Express**

Import the `express` module in your JavaScript file.

```
const express = require('express');
```
#### **3. Create an Express Application**

Use the `express()` function to create an instance of an Express application.

```
const app = express();
```
#### **4. Define Routes**

Routes are used to handle incoming HTTP requests for specific paths and methods.

-   `app.get(path, callback)`: Handles GET requests.
-   `app.post(path, callback)`: Handles POST requests.
-   `app.put(path, callback)`: Handles PUT requests.
-   `app.delete(path, callback)`: Handles DELETE requests.

Example:
```
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```
#### **5. Start the Server**

Use the `app.listen(port, callback)` method to start the server.

```
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```
Complete Example

```
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// POST route
app.post('/data', (req, res) => {
  const data = req.body; // Access request body
  res.send({ message: 'Data received', data });
});

// PUT route
app.put('/update', (req, res) => {
  res.send('Update route');
});

// DELETE route
app.delete('/delete', (req, res) => {
  res.send('Delete route');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```
### **Features and Enhancements**

#### **1. Serve Static Files**

You can use `express.static` to serve static files like HTML, CSS, and JavaScript.
```
app.use(express.static('public')); // Serve files from the 'public' directory
```
Place an `index.html` file in the `public` folder, and it will be served automatically at `http://localhost:3000`.


#### **2. Handle Query Parameters**

Access query parameters from the URL using `req.query`.

Example:

```
app.get('/search', (req, res) => {
  const { query } = req.query; // Get 'query' parameter from URL
  res.send(`You searched for: ${query}`);
});
```
Test with: `http://localhost:3000/search?query=express`


#### **3. Handle URL Parameters**

Define dynamic route parameters and access them using `req.params`.

Example:
```
app.get('/user/:id', (req, res) => {
  const { id } = req.params; // Get 'id' from URL
  res.send(`User ID: ${id}`);
});
```
Test with: `http://localhost:3000/user/123`

#### **4. Use Middleware**

Middleware functions modify the request or response objects. They can be applied globally or to specific routes.

Example:
```
// Global middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next(); // Pass control to the next middleware
});

// Route-specific middleware
app.get('/protected', (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === 'secret') {
    next(); // Allow access
  } else {
    res.status(401).send('Unauthorized');
  }
}, (req, res) => {
  res.send('Welcome to the protected route!');
});
```
#### **5. Error Handling**

Express provides an easy way to handle errors using middleware.

Example:
```
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```
### **Testing the Server**

1.  Save your file (e.g., `server.js`).
2.  Start the server
	```
	node server.js
	```
3. Open a browser or use a tool like Postman or `curl` to test:

-   `GET http://localhost:3000/`
-   `POST http://localhost:3000/data` with JSON payload
	```
	{ "name": "John", "age": 30 }
	```
### **Takeaways**

1.  Express simplifies route handling and middleware integration.
2.  Use `express.json()` and `express.urlencoded()` to handle request bodies.
3.  For production-level servers, consider additional tools like **morgan** (logging) and **helmet** (security).

## How to create advanced routes with Express JS

Creating advanced routes in Express.js allows you to handle complex routing needs such as nested routes, parameterized routes, route grouping, middleware application, and response customization. Below are steps and examples to build advanced routes with Express.js.


### **1. Nested Routes Using Routers**

Express provides a `Router` object that helps organize routes into modular components. This is particularly useful for large applications.

#### **Example**
```
const express = require('express');
const app = express();
const userRouter = express.Router();

// Middleware specific to the userRouter
userRouter.use((req, res, next) => {
  console.log('User Router Middleware');
  next();
});

// Routes for userRouter
userRouter.get('/', (req, res) => res.send('User Home'));
userRouter.get('/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Attach the userRouter to the app
app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```
-   `GET /users` → "User Home"
-   `GET /users/123` → "User ID: 123"

### **2. Route Parameters**

Use route parameters to handle dynamic data in URLs. Parameters are defined using `:parameterName`.

#### **Example**

```
app.get('/products/:productId/reviews/:reviewId', (req, res) => {
  const { productId, reviewId } = req.params;
  res.send(`Product ID: ${productId}, Review ID: ${reviewId}`);
});
```
-   `GET /products/42/reviews/101` → "Product ID: 42, Review ID: 101"


### **3. Route Groups**

Use `express.Router()` to group related routes for better organization.

#### **Example**

```
const adminRouter = express.Router();

adminRouter.get('/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});

adminRouter.get('/settings', (req, res) => {
  res.send('Admin Settings');
});

// Apply the router
app.use('/admin', adminRouter);
```

-   `GET /admin/dashboard` → "Admin Dashboard"
-   `GET /admin/settings` → "Admin Settings"

### **4. Applying Middleware to Routes**

You can apply middleware functions to specific routes or route groups.

#### **Example**
```
// Middleware to check authentication
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === 'secret-token') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Apply middleware to a route
app.get('/secure-data', authMiddleware, (req, res) => {
  res.send('This is secured data.');
});
```
-   Request with header `Authorization: secret-token` succeeds.
-   Requests without it receive a 401 Unauthorized response.
### **5. Route Chaining**

Use `app.route()` to chain route methods (GET, POST, etc.) for the same path.

#### **Example**
```
app.route('/profile')
  .get((req, res) => {
    res.send('Profile GET');
  })
  .post((req, res) => {
    res.send('Profile POST');
  })
  .put((req, res) => {
    res.send('Profile PUT');
  });
```
### **6. Query Parameters**

Handle query strings in URLs using `req.query`.

#### **Example**
```
app.get('/search', (req, res) => {
  const { keyword, page } = req.query;
  res.send(`Search results for: ${keyword}, Page: ${page}`);
});
```
-   `GET /search?keyword=nodejs&page=2` → "Search results for: nodejs, Page: 2"
### **7. Redirect Routes**

Use `res.redirect()` to redirect users to another URL.

#### **Example**
```
app.get('/old-page', (req, res) => {
  res.redirect(301, '/new-page');
});

app.get('/new-page', (req, res) => {
  res.send('Welcome to the new page!');
});
```
- `GET /old-page` redirects to `/new-page`.

### **8. Subdomain Routing**

Use third-party middleware like `vhost` to handle subdomain routing.

#### **Example**

```
const vhost = require('vhost');

const app = express();
const apiApp = express();

apiApp.get('/', (req, res) => {
  res.send('API Subdomain Home');
});

app.use(vhost('api.example.com', apiApp));

app.listen(3000, () => {
  console.log('Server running');
});
```
### **9. Error Handling Routes**

Define a centralized error-handling middleware.

#### **Example**
```
app.use((req, res, next) => {
  const error = new Error('Page Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});
```
### **10. Combine All Features**

Here’s how a complete advanced route setup might look:
```
const express = require('express');
const app = express();
app.use(express.json());

// Middleware
const logMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Routers
const apiRouter = express.Router();
const adminRouter = express.Router();

// API Routes
apiRouter.get('/products', (req, res) => {
  res.send('API Products');
});
apiRouter.get('/products/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

// Admin Routes
adminRouter.use(logMiddleware); // Apply middleware
adminRouter.get('/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});
adminRouter.get('/settings', (req, res) => {
  res.send('Admin Settings');
});

// Use Routers
app.use('/api', apiRouter);
app.use('/admin', adminRouter);

// Error Handling
app.use((req, res, next) => {
  res.status(404).send('404: Page Not Found');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```
### **Testing Advanced Routes**

Use tools like Postman, curl, or a browser to test the routes:

-   `GET http://localhost:3000/api/products`
-   `GET http://localhost:3000/api/products/1`
-   `GET http://localhost:3000/admin/dashboard`



### **Takeaways**

1.  Use `express.Router` to organize routes logically.
2.  Apply middleware for route-specific or global operations.
3.  Handle errors gracefully with centralized error-handling middleware.
4.  Use route chaining and parameterized routes for flexibility.
## How to use ES6 with Node JS with Babel-node 

Using ES6 (ECMAScript 2015) syntax in Node.js with Babel-node allows you to take advantage of modern JavaScript features that may not yet be natively supported by Node.js, especially in older versions. Babel is a JavaScript compiler that transforms ES6+ code into a compatible version for current or older JavaScript environments.

Here’s a step-by-step guide to setting up and using ES6 with Node.js via Babel-node:


### **1. Install Babel and Required Packages**

To use Babel, you need to install the required packages via npm.

#### **Commands**

```
npm init -y                           # Initialize a Node.js project
npm install --save-dev @babel/core    # Babel core library
npm install --save-dev @babel/cli     # Babel command-line interface
npm install --save-dev @babel/node    # Babel-node for running ES6 code
npm install --save-dev @babel/preset-env  # Babel preset for ES6+ features
```
### **2. Configure Babel**

Create a Babel configuration file (`babel.config.json`) in the root of your project to specify how Babel should transform your code.

#### **babel.config.json**
```
{
  "presets": ["@babel/preset-env"]
}
```
- **`@babel/preset-env`**: Ensures that Babel transpiles modern JavaScript features based on your target Node.js version or browser environments.
### **3. Write ES6 Code**

You can now write ES6+ code in your project files. Save the code in `.js` files.

#### **Example: `app.js`**
```
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, ES6 with Babel-node!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```
### **4. Run the Code Using Babel-node**

Use `npx babel-node` to execute your ES6+ code directly.

#### **Command**
```
npx babel-node app.js
```
This runs your file with ES6+ syntax support.
### **5. Optional: Transpile to Regular JavaScript**

If you want to convert your ES6+ code into ES5-compatible code (e.g., for deployment), use the `babel` command.

#### **Transpile Command**

```
npx babel app.js --out-file dist/app.js
```

**Run Transpiled Code**
```
node dist/app.js
```

This approach allows you to use ES6 during development while deploying only ES5 code.


### **6. Automate with npm Scripts**

To simplify running or building your project, add scripts to your `package.json`.

#### **package.json**
```
{
  "scripts": {
    "start": "babel-node app.js",
    "build": "babel app.js --out-file dist/app.js",
    "run-built": "node dist/app.js"
  }
}
```
-   **`npm start`**: Runs your ES6+ code with `babel-node`.
-   **`npm run build`**: Transpiles your ES6+ code to ES5.
-   **`npm run run-built`**: Runs the transpiled ES5 code.


### **7. Include `.babelrc` (Optional)**

Instead of `babel.config.json`, you can use a `.babelrc` file for configuration.

#### **.babelrc**
```
{
  "presets": ["@babel/preset-env"]
}
```
### **8. Benefits of Using ES6 with Babel-node**

1.  **Modern Syntax**: Use features like `import/export`, `async/await`, and more.
2.  **Backward Compatibility**: Ensure your code runs in older Node.js versions or browsers.
3.  **Cleaner Code**: ES6+ syntax often leads to more readable and maintainable code.



### **9. Limitations of Babel-node**

-   **Not Recommended for Production**: Babel-node is intended for development only as it adds runtime overhead. Use transpiled ES5 code for production.
-   **Configuration**: Requires some setup before usage.



### **10. Deploying ES6 Code**

For deployment:

1.  Use Babel to transpile your code into ES5.
2.  Bundle all required files into a `dist/` directory.
3.  Run the transpiled code with `node` in production.



### **Final Setup Example**

#### **Project Structure**

project/
├── app.js               # Your ES6+ code
├── dist/                # Transpiled ES5 code
├── package.json         # npm configuration
├── babel.config.json    # Babel configuration

#### **Run Commands**

-   `npm start` → Runs ES6+ code directly.
-   `npm run build` → Transpiles code to `dist/`.
-   `npm run run-built` → Runs transpiled code in production.

### Example project
Here’s how to set up an example project for using ES6 with Babel-node. Follow these steps:

### **Step 1: Create the Project Directory**

Create a new directory for your project and navigate into it.

```
mkdir es6-babel-node-example
cd es6-babel-node-example
```

### **Step 2: Initialize the Project**

Run the following command to create a `package.json` file:
```
npm init -y
```
### **Step 3: Install Dependencies**

Install the required Babel and Express.js dependencies.
```
npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
npm install express
```
### **Step 4: Configure Babel**

Create a Babel configuration file named `babel.config.json` in the root directory.

#### **babel.config.json**

```
{
  "presets": ["@babel/preset-env"]
}
```
### **Step 5: Write ES6+ Code**

Create a file named `app.js` and write some ES6+ code.

#### **app.js**
```
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, ES6 with Babel-node!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```
### **Step 6: Add npm Scripts**

Update your `package.json` file to include the following scripts:

#### **package.json**
```
{
  "name": "es6-babel-node-example",
  "version": "1.0.0",
  "description": "A simple project using ES6 with Babel-node",
  "main": "app.js",
  "scripts": {
    "start": "babel-node app.js",
    "build": "babel app.js --out-file dist/app.js",
    "run-built": "node dist/app.js"
  },
  "devDependencies": {
    "@babel/cli": "^7.22.10",
    "@babel/core": "^7.22.10",
    "@babel/node": "^7.22.10",
    "@babel/preset-env": "^7.22.10"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
### **Step 7: Run the Project**

1.  To run the ES6+ code directly:
	```
	npm start
	```
2. Open your browser and visit `http://localhost:3000`. You should see:
	```
	npm run build
	```
	   This creates a `dist/app.js` file with transpiled ES5 code.
3. To run the transpiled code:
	```
	npm run run-built
	```
### **Step 8: Project Structure**

After completing the setup, your project should look like this:
```
es6-babel-node-example/
├── app.js               # Your ES6+ code
├── dist/                # Directory for transpiled ES5 code
│   └── app.js
├── package.json         # npm configuration
├── babel.config.json    # Babel configuration
├── node_modules/        # Installed dependencies
```
### **Step 9: Next Steps**

-   Add more advanced ES6+ features like `async/await`, `destructuring`, or ES6 modules to your code.
-   Experiment with routes and middleware in Express.js.
-   Use tools like `nodemon` for automatic server restarts during development.
## **Using Nodemon to Speed Up Development**

Nodemon is a development tool for Node.js that automatically restarts your application when file changes in the directory are detected. This eliminates the need to manually stop and restart the server after every code change, significantly speeding up the development process.


### **1. Installing Nodemon**

Install Nodemon as a development dependency or globally:

#### **Local Installation (Recommended)**
```
npm install --save-dev nodemon
```
Global Installation
```
npm install -g nodemon
```
### **2. Running Your Application with Nodemon**

After installing Nodemon, you can use it to run your application instead of `node`.

#### **Example**
```
npx nodemon app.js
```
If you installed Nodemon globally, you can run
```
nodemon app.js
```
### **3. Setting Up npm Scripts**

To avoid typing the command every time, add a script to your `package.json`.

#### **package.json**
```
{
  "scripts": {
    "dev": "nodemon app.js"
  }
}
```
Now, you can simply run:
```
npm run dev
```
### **4. Configuring Nodemon**

You can customize Nodemon's behavior by creating a configuration file named `nodemon.json` in the root directory.

#### **nodemon.json**
```
{
  "watch": ["src"],       // Watch the 'src' folder for changes
  "ext": "js,json",       // File extensions to watch
  "ignore": ["node_modules"],  // Folders to ignore
  "exec": "babel-node src/app.js"  // Command to execute
}
```
-   **`watch`**: Specifies the directories/files to monitor.
-   **`ext`**: Specifies the file extensions to watch for changes.
-   **`ignore`**: Excludes directories/files from being watched.
-   **`exec`**: Specifies the command to execute when changes are detected.
### **5. Use Nodemon with Babel-node**

If you're using Babel-node, update the `exec` option or directly run Nodemon with Babel-node.

#### **Command**

```
npx nodemon --exec babel-node app.js
```
Or add it to the npm script:
```
"scripts": {
  "dev": "nodemon --exec babel-node app.js"
}
```
### **6. Optional: Use Nodemon with Environment Variables**

Combine Nodemon with environment variable management tools like `dotenv`.

#### **Installation**
```
npm install dotenv
```
#### **Usage**

Create a `.env` file in your project:
```
PORT=3000
ENVIRONMENT=development
```
Load the environment variables in your app:
```
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
Run with Nodemon:
```
npx nodemon app.js
```
### **7. Benefits of Nodemon**

-   **Automatic Restarts**: Instantly reflects your changes without restarting the server manually.
-   **Custom Watch Options**: Monitors specific files or directories for changes.
-   **Integration with Tools**: Works seamlessly with Babel-node and other preprocessors.
-   **Error Recovery**: Automatically restarts after fixing runtime errors.

### 8. Common Nodemon Commands



### 9. Best Practices
-   Use `nodemon.json` for complex configurations.
-   Exclude `node_modules` or other large directories to reduce CPU usage.
-   Combine Nodemon with `npm run dev` scripts for a clean workflow.
### **Project Setup Example with Nodemon**

#### **Project Structure**
```
project/
├── src/
│   └── app.js           # Main ES6+ app
├── .env                 # Environment variables
├── nodemon.json         # Nodemon configuration
├── package.json         # npm scripts
```
package.json
```
{
  "scripts": {
    "dev": "nodemon --exec babel-node src/app.js"
  }
}
```
Command
````
npm run dev
````
**Here is a Real World example**
Let's set up a real-world example using **Express.js**, **ES6+ syntax**, and **Nodemon** for a fast development workflow. This setup will allow us to build an Express server, use ES6 features, and automatically restart the server when we make changes to our code.

### **Project Setup**

1.  **Create a New Project Directory**  
    First, create a new directory for your project and navigate into it:
```
mkdir express-es6-nodemon
cd express-es6-nodemon
```
2. **Initialize npm Project**  
Run `npm init -y` to create a `package.json` file with default settings:
	```
	npm init -y
	```
### **Install Dependencies**

3.  **Install Required Packages**  
    We need to install **Express**, **Babel**, and **Nodemon**. Run the following command to install them:


	```
	npm install express
	npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env nodemon
	```

-   **express**: A web framework for Node.js.
-   **@babel/core, @babel/cli, @babel/node, @babel/preset-env**: Babel packages to transpile ES6+ code.
-   **nodemon**: Automatically restarts the server on code changes.
### **Set Up Babel**

4.  **Configure Babel**  
    Create a Babel configuration file called `babel.config.json` in the root of your project directory:

```
{
  "presets": ["@babel/preset-env"]
}
```
This configures Babel to compile modern JavaScript (ES6+).

### **Set Up Nodemon**

5.  **Configure Nodemon**  
    Create a `nodemon.json` file in the root of your project to specify how Nodemon should behave:

```
{
  "watch": ["src"],        // Watch the 'src' folder for changes
  "ext": "js,json",        // Watch for changes to .js and .json files
  "ignore": ["node_modules"],  // Ignore changes in node_modules
  "exec": "babel-node src/app.js"  // Run 'babel-node' on your app.js file
}
```
This configuration tells Nodemon to watch the `src` directory, ignore `node_modules`, and run the code using Babel for ES6+ compatibility.


### **Write the Express App Using ES6+**

6.  **Create the `src` Directory**  
    Create a new `src` directory where you will place your application code.
    ```
    mkdir src
    ```
7. ### 7.  **Create the `app.js` File**  
    Inside the `src` directory, create an `app.js` file and write your Express server using ES6+ syntax:

```
// src/app.js
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route
app.get('/', (req, res) => {
  res.send('Hello, Express with ES6 and Nodemon!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```
-   **import express**: Using ES6 `import` syntax to include Express.
-   **app.listen**: Starts the server on the specified port.


### **Add npm Scripts**

8.  **Update `package.json`**  
    Add a `dev` script to your `package.json` file so that you can run the app with Nodemon:

```
{
  "name": "express-es6-nodemon",
  "version": "1.0.0",
  "description": "Express app with ES6+ and Nodemon",
  "main": "src/app.js",
  "scripts": {
    "dev": "nodemon"
  },
  "devDependencies": {
    "@babel/cli": "^7.22.10",
    "@babel/core": "^7.22.10",
    "@babel/node": "^7.22.10",
    "@babel/preset-env": "^7.22.10",
    "nodemon": "^2.0.20"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
Now, when you run `npm run dev`, Nodemon will automatically run your app with Babel and restart it when changes are detected.


### **Run the App with Nodemon**

9.  **Start the Server in Development Mode**  
    Now, you can run your app using the following command:
```
npm run dev
```

This will start the server and automatically restart it whenever you make changes to the files in the `src` directory.

You should see the following in your terminal:
```
[nodemon] starting `babel-node src/app.js`
Server running on http://localhost:3000
```
### **Test the Application**

10.  **Visit the App in Your Browser**  
    Open your browser and visit `http://localhost:3000`. You should see the message:
```
Hello, Express with ES6 and Nodemon!
```
### **Project Structure**

After following these steps, your project structure will look like this:

```
express-es6-nodemon/
├── src/
│   └── app.js          # Main Express app with ES6 code
├── .babelrc            # Babel config (optional, since we used babel.config.json)
├── nodemon.json        # Nodemon config
├── package.json        # npm scripts and dependencies
├── node_modules/       # Installed dependencies
```
### **Additional Features**

Here are some ways you can extend this project:

1.  **Use More ES6 Features**  
    You can use modern JavaScript features like `async/await`, arrow functions, and destructuring. For example:
```
app.get('/async', async (req, res) => {
  const data = await fetchData();
  res.json(data);
});
```
2.  **Environment Variables**  
    You can use `dotenv` to manage environment variables in development.

Install `dotenv`:

```
npm install dotenv
```
npm install dotenv

```
PORT=4000
```
Then, in your `app.js` 
```
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
```


3. **Add Routes and Middleware**
Add more advanced routing, middleware for error handling, authentication, or logging

### **Summary**

In this setup:

-   You built an **Express.js** app using **ES6** syntax.
-   You used **Babel-node** to support modern JavaScript features.
-   **Nodemon** automatically restarts your server on changes, boosting development speed.