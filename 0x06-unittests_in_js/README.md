
# Unittests in JS
Unit tests in JavaScript are essential for ensuring the functionality of individual components or units of your code. They help identify bugs early, provide documentation, and enable confident refactoring. Here's an overview of unit testing in JavaScript:
### **What is Unit Testing?**

Unit testing involves testing small, isolated parts of your code, such as functions or classes, to verify they work as expected.
### **Common Tools for Unit Testing in JavaScript**

1.  **Testing Frameworks:**
    
    -   **Jest:** A comprehensive framework by Facebook, ideal for React applications but versatile for all JS projects.
    -   **Mocha:** Flexible and widely used, often paired with assertion libraries like Chai.
    -   **Jasmine:** A behavior-driven testing framework with a built-in assertion library.
2.  **Assertion Libraries:**
    
    -   **Chai:** Offers powerful assertions, including BDD (should, expect) and TDD (assert) styles.
    -   **Expect (built into Jest):** A lightweight assertion library for writing tests.
3.  **Utilities for Mocking:**
    
    -   **Sinon.js:** Used for mocking, spying, and stubbing functions.
### **Steps to Write Unit Tests**

1.  **Set Up Your Environment:** Install a testing framework, e.g., for Jest:
```
npm install jest --save-dev
```
2.   **Write Test Cases:** Create a test file, usually named `filename.test.js` or `filename.spec.js`.
    
   **Organize Tests:**
    -   Group tests using `describe()`.
    -   Use individual test cases with `it()` or `test()`.
-   **Run Tests:** Execute tests with the framework's CLI, e.g., for Jest:
```
npx jest
```
### **Example**

Here’s a simple example using Jest:

**Code to Test (`sum.js`):**

```
function sum(a, b) {
    return a + b;
}
module.exports = sum;
```
**Unit Test (`sum.test.js`):**
```
const sum = require('./sum');

describe('sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 0 + 0 to equal 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
});
```
**Run the Tests:**
```
npx jest
```
### **Best Practices**

1.  **Write Small, Focused Tests:** Test one behavior or feature per test case.
    
2.  **Use Meaningful Test Names:** Clearly describe what the test verifies.
    
3.  **Mock External Dependencies:** Use mocking libraries to isolate the unit of code.
    
4.  **Automate Testing:** Integrate tests into your CI/CD pipeline.
    
5.  **Strive for Coverage, But Don’t Overdo It:** Aim for good code coverage but focus on critical logic.
    

----------

### **When to Use Unit Testing**

-   During development to verify code correctness.
-   Before refactoring to ensure changes don’t break existing functionality.
-   To identify regressions in future updates.

By consistently writing unit tests, you ensure maintainable, robust code for your JavaScript projects.


## ---> How to use Mocha to write a test suite

Using **Mocha** to write a test suite is a straightforward process. Mocha is a feature-rich JavaScript testing framework that runs on Node.js and in the browser, making it highly flexible for various use cases. Here's a detailed guide:



### **Step 1: Install Mocha**

1.  Open your terminal.
2.  Install Mocha as a development dependency
```
npm install mocha --save-dev
```
### **Step 2: Set Up Mocha**

1.  Create a directory for your tests, commonly named `test`.
2.  Configure your `package.json` file to include a test script:
```
"scripts": {
    "test": "mocha"
}
```

### **Step 3: Write Your Code**

Create the code you want to test, for example:

**File: `math.js`**
```
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```
### **Step 4: Write a Test Suite**

A test suite in Mocha groups related tests. Create a test file in the `test` directory, e.g., `math.test.js`.

**File: `test/math.test.js`**
```
const { expect } = require('chai'); // Assertion library
const { add, subtract } = require('../math'); // Import the functions to test

describe('Math Functions', () => {
    describe('add()', () => {
        it('should return the sum of two numbers', () => {
            expect(add(2, 3)).to.equal(5);
        });

        it('should return a negative number when summing two negatives', () => {
            expect(add(-2, -3)).to.equal(-5);
        });
    });

    describe('subtract()', () => {
        it('should return the difference of two numbers', () => {
            expect(subtract(10, 5)).to.equal(5);
        });

        it('should handle negative numbers correctly', () => {
            expect(subtract(-10, -5)).to.equal(-5);
        });
    });
});
```
### **Step 5: Run Tests**

Run the test suite using the `npm test` script:
```
npm test
```
Mocha will automatically detect the `test` folder and run all `.js` files within it.
### **Explanation of Test Suite Structure**

1.  **`describe` Block:** Groups related test cases. You can nest `describe` blocks to create hierarchical test structures.
    
    -   In this case, the `describe('Math Functions')` groups tests for `add` and `subtract`.
2.  **`it` Block:** Defines individual test cases.
    
    -   For example, `it('should return the sum of two numbers')` describes a specific behavior of the `add` function.
3.  **Assertions with Chai:** Use Chai's `expect` API to write human-readable assertions.
    
    -   `expect(add(2, 3)).to.equal(5);` verifies the output of `add`.



### **Step 6: Add More Features**

#### **Mocking/Spying with Sinon**

You can use Sinon.js with Mocha for mocking and spying:

```
npm install sinon --save-dev
```
Example:
```
const sinon = require('sinon');

describe('Logger', () => {
    it('should call console.log once', () => {
        const logSpy = sinon.spy(console, 'log');
        console.log('Hello, Mocha!');
        expect(logSpy.calledOnce).to.be.true;
        logSpy.restore();
    });
});
```
#### **Handling Asynchronous Code**

To test asynchronous functions, use `done` or return a Promise:
```
describe('Async Functions', () => {
    it('should resolve a promise', async () => {
        const data = await Promise.resolve('Resolved!');
        expect(data).to.equal('Resolved!');
    });
});
```
### **Step 7: Advanced Configuration**

You can configure Mocha using a `.mocharc.json` file for options like:
```
{
  "spec": "test/**/*.test.js", 
  "timeout": 5000, 
  "reporter": "spec"
}
```
Run with:
```
npx mocha
```
### **Best Practices**

1.  Use descriptive names for `describe` and `it` blocks.
2.  Keep tests isolated and avoid dependencies between them.
3.  Test edge cases and error conditions.
4.  Mock external dependencies when testing integrations.

Mocha is highly flexible, and with tools like Chai and Sinon, you can create robust test suites for any JavaScript project. Let me know if you’d like help setting up a specific test case or feature!


## --->    How to use different assertion libraries (Node or Chai)

In JavaScript testing, assertion libraries are used to compare the expected and actual outputs in your tests. Mocha itself does not provide assertions, so libraries like **Chai** or **Node.js Assert** are commonly paired with it. Here's how to use **Node.js Assert** and **Chai** with examples:

### **1. Node.js Assert**

The `assert` module is built into Node.js and provides a set of straightforward assertion methods.

### **Setup**

No additional installation is required as `assert` is built into Node.js.

### **Basic Usage**

Here's how you can use it in your test suite:
```
const assert = require('assert');

describe('Node.js Assert Example', () => {
    it('should add two numbers correctly', () => {
        const result = 2 + 3;
        assert.strictEqual(result, 5); // Strict equality check
    });

    it('should throw an error for invalid operations', () => {
        assert.throws(() => {
            throw new Error('Invalid operation');
        }, Error);
    });
});
```
### **Common Methods**

-   `assert.strictEqual(actual, expected)`  
    Asserts that `actual === expected`.
-   `assert.notStrictEqual(actual, expected)`  
    Asserts that `actual !== expected`.
-   `assert.deepStrictEqual(actual, expected)`  
    Asserts that two objects or arrays are deeply equal.
-   `assert.throws(fn, error)`  
    Verifies that a function throws an error.



### **2. Chai**

Chai is a popular assertion library with a flexible syntax supporting **BDD (Behavior-Driven Development)** and **TDD (Test-Driven Development)** styles. It must be installed as a dependency.

### **Setup**

Install Chai:

```
npm install chai --save-dev
```
### **Using Chai**

**BDD Style:**  
The `expect` and `should` APIs allow you to write tests in a more natural language style.
```
const { expect } = require('chai');

describe('Chai Example with BDD', () => {
    it('should add two numbers correctly', () => {
        const result = 2 + 3;
        expect(result).to.equal(5);
    });

    it('should handle arrays correctly', () => {
        const arr = [1, 2, 3];
        expect(arr).to.be.an('array').that.includes(2);
    });
});
```

**TDD Style:**  
The `assert` API is similar to Node.js's built-in `assert`.
```
const { assert } = require('chai');

describe('Chai Example with TDD', () => {
    it('should add two numbers correctly', () => {
        const result = 2 + 3;
        assert.strictEqual(result, 5);
    });

    it('should handle object properties', () => {
        const obj = { name: 'George', age: 25 };
        assert.property(obj, 'name');
        assert.propertyVal(obj, 'age', 25);
    });
});
```
### **Common Chai Assertions**

#### **For `expect` or `should`:**

-   `expect(value).to.equal(expected)`  
    Asserts equality.
-   `expect(value).to.be.a(type)`  
    Asserts type (e.g., `string`, `array`).
-   `expect(array).to.include(item)`  
    Checks for an item's presence in an array or string.
-   `expect(object).to.have.property(name, value)`  
    Checks for an object property.
-   `expect(function).to.throw(Error)`  
    Verifies a function throws an error.

#### **For `assert`:**

-   `assert.isTrue(value)`  
    Checks if the value is `true`.
-   `assert.typeOf(value, type)`  
    Verifies the type of a value.
-   `assert.lengthOf(array, length)`  
    Asserts an array's length.



### **Example: Testing a Function with Chai**

**Code to Test:**
```
function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

module.exports = divide;
```
Test Suits:
```
const { expect, assert } = require('chai');
const divide = require('../divide');

describe('Divide Function', () => {
    it('should return the correct quotient', () => {
        expect(divide(10, 2)).to.equal(5);
    });

    it('should throw an error when dividing by zero', () => {
        assert.throws(() => divide(10, 0), Error, 'Division by zero');
    });
});
```

**Choosing Between Node.js Assert and Chai**
| **Feature**               | **Node.js Assert**                 | **Chai**                           |
|---------------------------|-------------------------------------|-------------------------------------|
| Built-in or External?     | Built-in                           | Requires installation (`chai`)      |
| Syntax                    | Procedural (`assert.strictEqual`)  | BDD (`expect(value).to.equal()`)    |
| Flexibility               | Basic assertions                   | Rich, expressive assertions         |
| Use Case                  | Lightweight testing                | Detailed, user-friendly testing     |


**Integration with Mocha**

Both libraries integrate seamlessly with Mocha, which provides the `describe` and `it` blocks.



### **Conclusion**

-   Use **Node.js Assert** if you prefer simplicity and don't want extra dependencies.
-   Use **Chai** if you want expressive and flexible assertions for more readable tests.


## --->   How to present long test suites

When dealing with long test suites in JavaScript (or any other language), it is crucial to maintain readability, manageability, and organization. Here are strategies to effectively present long test suites:



### **1. Use Descriptive Hierarchies**

Break your test suite into **logical groups** using descriptive `describe` and `it` blocks. Nest `describe` blocks to represent the hierarchy of functionality.

### **Example: Organized Test Suite**

```
const { expect } = require('chai');
const myFunction = require('../myFunction');

describe('MyFunction', () => {
    describe('Addition functionality', () => {
        it('should return the correct sum for positive numbers', () => {
            expect(myFunction.add(2, 3)).to.equal(5);
        });

        it('should handle negative numbers correctly', () => {
            expect(myFunction.add(-2, -3)).to.equal(-5);
        });
    });

    describe('Division functionality', () => {
        it('should return the correct quotient', () => {
            expect(myFunction.divide(6, 2)).to.equal(3);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => myFunction.divide(6, 0)).to.throw('Division by zero');
        });
    });
});
```

This structure makes it easier to locate and understand specific tests.
### **2. Modularize Your Tests**

Split long test suites into multiple files based on functionality or modules being tested. Use a dedicated directory for tests and organize them logically.

### **Example: Directory Structure**
```
project/
├── src/
│   ├── myFunction.js
│   └── otherModule.js
├── test/
│   ├── myFunction.test.js
│   └── otherModule.test.js
```

Each test file focuses on a single module or feature. You can run all tests together using tools like Mocha.
### **3. Use Utility Functions**

For repeated test setups or assertions, create utility functions to reduce redundancy.

### **Example: Test Utility**
```
// test/utils.js
function testAddition(fn, a, b, expected) {
    expect(fn.add(a, b)).to.equal(expected);
}

module.exports = { testAddition };
```
```
// test/myFunction.test.js
const { testAddition } = require('./utils');
const myFunction = require('../myFunction');

describe('MyFunction', () => {
    it('should return correct sums', () => {
        testAddition(myFunction, 1, 2, 3);
        testAddition(myFunction, -1, -1, -2);
    });
});
```
This approach keeps your tests concise and easier to maintain.
### **4. Parametrize Tests**

Use parametrized tests to avoid duplicating similar test cases. Mocha does not natively support parametrization, but you can use libraries like `mocha-each` or create loops to generate tests dynamically.

### **Example: Parametrized Tests**
```
const { expect } = require('chai');

const testCases = [
    { a: 1, b: 2, expected: 3 },
    { a: -1, b: -1, expected: -2 },
    { a: 0, b: 0, expected: 0 },
];

describe('Addition Tests', () => {
    testCases.forEach(({ a, b, expected }) => {
        it(`should return ${expected} for inputs ${a} and ${b}`, () => {
            expect(a + b).to.equal(expected);
        });
    });
});
```
This method avoids repetitive test code and ensures consistency.
## **5. Use Hooks for Setup and Teardown**

For long test suites that share common setups (e.g., database connections, mock APIs), use Mocha hooks like `before`, `beforeEach`, `after`, and `afterEach`.

### **Example: Using Hooks**
```
const { expect } = require('chai');
let data;

describe('MyFunction', () => {
    before(() => {
        // One-time setup
        data = [1, 2, 3];
    });

    after(() => {
        // One-time teardown
        data = null;
    });

    beforeEach(() => {
        // Prepare environment for each test
    });

    afterEach(() => {
        // Clean up after each test
    });

    it('should process data correctly', () => {
        expect(data).to.include(2);
    });
});
```
Hooks help reduce repetitive setup code and make tests more maintainable.

### **6. Use Descriptive Test Titles**

Write meaningful test descriptions that clearly state the expected behavior. Avoid vague titles like "Test 1."

### **Example: Descriptive Titles**
```
it('should return the correct sum for two positive integers', () => {
    expect(2 + 3).to.equal(5);
});
```
### **7. Test Coverage and Reporting**

Integrate tools like `nyc` or `istanbul` to measure test coverage. This ensures all code paths are tested and helps identify missing cases.

### **Setup Example with NYC**

```
npm install nyc --save-dev
```
Run test with:
```
npx nyc mocha
```
You’ll get a detailed coverage report that highlights uncovered lines.
### **8. Use Descriptive Comments**

For complex test cases, add comments to explain the purpose of each test.

### **Example: Comments in Tests**

```
describe('Division functionality', () => {
    it('should throw an error when dividing by zero', () => {
        // This test ensures that division by zero is correctly handled
        expect(() => divide(6, 0)).to.throw('Division by zero');
    });
});
```
### **9. Output Test Results**

Use Mocha reporters like `spec` or `dot` to summarize test results. For CI pipelines, integrate reporters like `mochawesome` for detailed output.

### **Install and Use Mocha Reporters**

```
npm install mochawesome --save-dev
```
Run the test with:
```
mocha --reporter mochawesome
```
### **10. Categorize Tests by Priority**

Use tagging or folder structures to separate:

-   **Unit Tests:** Focus on isolated components.
-   **Integration Tests:** Test interaction between modules.
-   **End-to-End Tests (E2E):** Test the application as a whole.

### **Example: Tags or Comments**
```
describe('Unit Tests: MyFunction', () => {
    // Test individual functions
});

describe('Integration Tests: MyFunction with Other Modules', () => {
    // Test module interactions
});
```
### **Summary Checklist for Long Test Suites**

1.  Use nested `describe` blocks for organization.
2.  Split tests into separate files by functionality.
3.  Use utility functions for repetitive setups.
4.  Parametrize tests where possible.
5.  Leverage Mocha hooks for setup and teardown.
6.  Write clear and descriptive test titles.
7.  Integrate test coverage tools.
8.  Add comments for complex cases.
9.  Use reporters to visualize results.
10.  Separate unit, integration, and E2E tests logically.

By following these best practices, your long test suites will remain clean, organized, and maintainable.

## --->   When and how to use spies
### **Spies in Testing: When and How to Use Them**

Spies are tools used in testing to monitor the behavior of functions, including how they are called, the arguments they receive, and the values they return (or throw). They are particularly useful in testing interactions between components or modules without modifying the underlying implementation.


### **When to Use Spies**

1.  **Monitor Dependencies Without Calling Them**  
    Use spies when you need to check if a function was called (or not) without executing its real implementation, which might have side effects or is unnecessary for the test.  
    **Example:** Ensuring a callback is triggered on a button click.
    
2.  **Verify Interactions**  
    When you want to ensure that a function was called a specific number of times or with specific arguments.  
    **Example:** Checking that an API call function receives the correct parameters.
    
3.  **Mock External Behavior**  
    Spies are useful for simulating external systems or dependencies in your application, especially for things like network requests, database queries, or external libraries.  
    **Example:** Spying on a method that sends email notifications.
    
4.  **Test Complex Logic or State**  
    Spies can help validate that internal functions or methods within your code are being executed correctly during complex workflows.  
    **Example:** Testing private methods indirectly by observing calls from public methods.
    

### **How to Use Spies**

#### **1. Using Spies with a Testing Library**

Libraries like **Sinon.js** or built-in features of frameworks (e.g., Jest) provide built-in tools for creating spies.

#### **2. Common Operations with Spies**

-   **Create a Spy**: Replace a real function with a spy to track calls and arguments.
-   **Attach a Spy**: Add a spy to an existing object or method.
-   **Analyze the Spy**: Verify call count, arguments, return values, and behavior.


### **Example Using Sinon.js**

#### **Setup and Installation**

```
npm install sinon --save-dev
```
**Basic Spy Example**
```
const sinon = require('sinon');

// Function to test
function greet(callback) {
    callback('Hello');
}

// Test
describe('greet', () => {
    it('should call the callback with "Hello"', () => {
        const spy = sinon.spy();
        
        greet(spy);
        
        // Verify the spy
        sinon.assert.calledOnce(spy); // Called exactly once
        sinon.assert.calledWith(spy, 'Hello'); // Called with 'Hello'
    });
});
```
**Spying on Object Methods**
```
const sinon = require('sinon');

const userService = {
    fetchUser: () => 'John Doe',
};

// Test
describe('fetchUser', () => {
    it('should track method calls', () => {
        const spy = sinon.spy(userService, 'fetchUser');
        
        userService.fetchUser();
        
        // Verify spy
        sinon.assert.calledOnce(spy); // Method called once
        spy.restore(); // Clean up after spying
    });
});
```
### **Example Using Jest**

Jest has built-in spy functionality (`jest.fn()`).

#### **Basic Jest Spy**
```
function greet(callback) {
    callback('Hello');
}

test('calls callback with "Hello"', () => {
    const callback = jest.fn();
    
    greet(callback);
    
    expect(callback).toHaveBeenCalledTimes(1); // Verify call count
    expect(callback).toHaveBeenCalledWith('Hello'); // Verify arguments
});
```
**Spying on Methods**
```
const userService = {
    fetchUser: () => 'John Doe',
};

test('should track method calls', () => {
    const spy = jest.spyOn(userService, 'fetchUser');
    
    userService.fetchUser();
    
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore(); // Clean up
});
```
### **Advanced Use Cases for Spies**

#### **1. Simulating Behavior**

Use spies to simulate specific return values or errors.
```
const sinon = require('sinon');

const service = {
    fetchData: () => Promise.resolve('data'),
};

it('should simulate an error', async () => {
    const spy = sinon.stub(service, 'fetchData').rejects(new Error('Network error'));
    
    try {
        await service.fetchData();
    } catch (error) {
        expect(error.message).to.equal('Network error');
    }
    
    spy.restore();
});
```
#### **2. Verifying Order of Calls**

Spies can track the sequence of calls, which is useful for state-dependent operations.
```
const sinon = require('sinon');

function processSteps(step1, step2) {
    step1();
    step2();
}

it('should call steps in order', () => {
    const step1 = sinon.spy();
    const step2 = sinon.spy();
    
    processSteps(step1, step2);
    
    sinon.assert.callOrder(step1, step2);
});
```
### **Best Practices**

1.  **Restore Spies**: Always restore the original functionality after the test to avoid side effects.
    
    -   Sinon: Use `spy.restore()`.
    -   Jest: Use `spy.mockRestore()`.
2.  **Combine with Stubs**: Use spies in conjunction with stubs to control method behavior.
    
    -   **Spy**: Tracks calls and arguments.
    -   **Stub**: Simulates a specific behavior (e.g., return a fixed value).
3.  **Avoid Over-Spying**: Only spy on what is necessary for the test. Overusing spies can make tests harder to maintain.
    
4.  **Document Intent**: Clearly document why you are using a spy in a test for maintainability.

**Spies vs. Mocks vs. Stubs**
| **Aspect**         | **Spy**                                             | **Stub**                                  | **Mock**                                   |
|---------------------|-----------------------------------------------------|-------------------------------------------|-------------------------------------------|
| **Purpose**         | Tracks calls, arguments, and return values          | Replaces a function with controlled behavior | Pre-defined behavior + strict expectations |
| **Behavior**        | Executes original function by default               | Can replace behavior entirely             | Fully replaces with strict conditions      |
| **Common Use Case** | Verify interactions and arguments                   | Simulate network calls, errors, or values | Mock APIs or highly-dependent components   |

Spies are invaluable for tracking interactions in your code and ensuring smooth integration between components.

## --->   When and how to use stubs

### **Stubs in Testing: When and How to Use Them**

Stubs are test doubles used to replace a function with a controlled implementation during testing. Unlike spies (which only observe), stubs allow you to define the behavior of the function. This makes them particularly useful when testing components that interact with external systems or other complex parts of the codebase.


### **When to Use Stubs**

1.  **Replace External Dependencies**  
    Use stubs when your code depends on external systems, such as databases, APIs, or third-party libraries, to avoid unnecessary dependencies during tests.  
    **Example:** Stubbing a function that makes network calls.
    
2.  **Simulate Edge Cases**  
    When testing error handling or specific scenarios, stubs allow you to simulate unusual or rare conditions.  
    **Example:** Forcing a function to throw an error to test error-handling logic.
    
3.  **Control Unpredictable Behavior**  
    If a function relies on randomness, time, or user input, stubs can replace these with predictable values to ensure consistent test outcomes.  
    **Example:** Stubbing a random number generator.
    
4.  **Improve Test Speed**  
    Replace slow functions, such as those involving heavy computations or network delays, with stubs to speed up the test suite.  
    **Example:** Stubbing a function that processes large datasets.
    
5.  **Isolate Unit Tests**  
    Stubs are useful for isolating the unit under test by removing dependencies on other modules or services.  
    **Example:** Stubbing a method of another module that your function interacts with.
    



### **How to Use Stubs**

#### **1. Using a Stubbing Library**

Libraries like **Sinon.js** provide a powerful API for creating and managing stubs.

#### **2. Common Stubbing Operations**

-   **Create a Stub**: Replace a function with a stubbed implementation.
-   **Define Behavior**: Specify the return value, error, or other behavior of the stub.
-   **Restore Original Function**: Revert the stubbed function after the test.


### **Examples Using Sinon.js**

#### **Setup and Installation**

```
npm install sinon --save-dev
```
#### **1. Basic Stubbing**

Replace a function and specify its return value:
```
const sinon = require('sinon');

const userService = {
    fetchUser: () => 'Original User',
};

describe('Stubbing Example', () => {
    it('should replace fetchUser with a stub', () => {
        const stub = sinon.stub(userService, 'fetchUser').returns('Stubbed User');

        const result = userService.fetchUser();

        // Assert that the stubbed value is returned
        console.log(result); // Output: "Stubbed User"
        stub.restore(); // Restore the original function
    });
});
```
#### **2. Stubbing Methods to Simulate Errors**

Force a function to throw an error:
```
const sinon = require('sinon');

const service = {
    fetchData: () => Promise.resolve('data'),
};

it('should simulate a network error', async () => {
    const stub = sinon.stub(service, 'fetchData').rejects(new Error('Network Error'));

    try {
        await service.fetchData();
    } catch (error) {
        console.log(error.message); // Output: "Network Error"
    }

    stub.restore();
});
```
#### **3. Combining Stubs with Behavior**

Control the behavior of a function for different scenarios:
```
const sinon = require('sinon');

const calculator = {
    add: (a, b) => a + b,
};

it('should return different values based on input', () => {
    const stub = sinon.stub(calculator, 'add');
    stub.withArgs(2, 3).returns(10);
    stub.withArgs(4, 5).returns(20);

    console.log(calculator.add(2, 3)); // Output: 10
    console.log(calculator.add(4, 5)); // Output: 20
    console.log(calculator.add(1, 1)); // Output: undefined

    stub.restore();
});
```

### **Examples Using Jest**

#### **1. Basic Stubbing with `jest.fn()`**

Use Jest's built-in mocking capabilities:
```
const fetchData = jest.fn().mockResolvedValue('Stubbed Data');

test('should return stubbed data', async () => {
    const result = await fetchData();
    expect(result).toBe('Stubbed Data');
});
```
#### **2. Mocking Specific Methods**

Stub methods of objects with `jest.spyOn`:
```
const userService = {
    fetchUser: () => 'Original User',
};

test('should stub fetchUser method', () => {
    const stub = jest.spyOn(userService, 'fetchUser').mockReturnValue('Stubbed User');

    expect(userService.fetchUser()).toBe('Stubbed User');

    stub.mockRestore(); // Restore the original method
});
```
### **Best Practices for Using Stubs**

1.  **Restore After Tests**  
    Always restore the original function to avoid affecting other tests.
    
    -   Sinon: Use `stub.restore()`.
    -   Jest: Use `stub.mockRestore()`.
2.  **Stub Only What You Need**  
    Avoid stubbing unnecessary functions to keep tests focused and clear.
    
3.  **Combine with Assertions**  
    Use assertions to verify that the stubbed function was called as expected:
	   ```
	    sinon.assert.calledOnce(stub);
	sinon.assert.calledWith(stub, 'expectedArg');
	```
4.  **Use in Isolation**  
    Stubs should focus only on replacing the behavior of the function under test. If the test becomes too complex, consider breaking it into smaller units.
    
2.  **Document Behavior**  
    Clearly document why you’re stubbing a particular function and its intended behavior.
    
**Stubs vs. Spies**
| **Aspect**          | **Stub**                                    | **Spy**                               |
|----------------------|---------------------------------------------|---------------------------------------|
| **Purpose**          | Replace a function with controlled behavior | Monitor calls and arguments           |
| **Default Behavior** | Does not call the original function         | Calls the original function by default |
| **Common Use Case**  | Simulate external systems, edge cases       | Verify interaction without modifying  |


## --->   What are hooks and when to use them
### **Hooks in Testing: What Are They and When to Use Them**

**Hooks** in testing are special functions provided by testing frameworks like Mocha or Jest. They allow you to execute specific code **before** or **after** test cases or test suites. Hooks are essential for setting up preconditions or cleaning up after tests, ensuring that tests are isolated and reliable.



### **Types of Hooks**

1.  **Before All (`before` / `beforeAll`)**
    
    -   Runs **once** before all tests in a suite.
    -   Used for setting up shared resources or initial configurations.
2.  **After All (`after` / `afterAll`)**
    
    -   Runs **once** after all tests in a suite.
    -   Used for cleaning up shared resources.
3.  **Before Each (`beforeEach`)**
    
    -   Runs **before each test case** in a suite.
    -   Used to set up or reset resources specific to individual tests.
4.  **After Each (`afterEach`)**
    
    -   Runs **after each test case** in a suite.
    -   Used to clean up resources or reset states specific to individual tests.



### **When to Use Hooks**

#### **1. Setting Up Test Environments**

-   Use `before` or `beforeEach` to initialize required states, variables, or configurations.  
    **Example:** Connecting to a database or loading mock data.

#### **2. Cleaning Up After Tests**

-   Use `after` or `afterEach` to tear down environments or remove temporary data.  
    **Example:** Disconnecting from a database or clearing caches.

#### **3. Avoiding Repeated Code**

-   If multiple test cases require the same setup or teardown logic, hooks help avoid duplicating code in each test.  
    **Example:** Creating a new instance of an object before each test.

#### **4. Managing Asynchronous Operations**

-   Hooks can handle asynchronous setup or cleanup using `async/await` or callbacks.  
    **Example:** Fetching external data before running tests.

#### **5. Ensuring Test Isolation**

-   Use `beforeEach` and `afterEach` to reset states or mock environments so that each test runs independently.  
    **Example:** Resetting a mocked API or clearing data from memory.



### **Examples**

#### **Using Hooks in Mocha**

```
const assert = require('assert');

let sharedResource;

describe('Hooks Example', () => {
    // Runs once before all tests
    before(() => {
        sharedResource = [];
        console.log('Before All: Initialize shared resource');
    });

    // Runs before each test
    beforeEach(() => {
        sharedResource.push('Test Data');
        console.log('Before Each: Add test data');
    });

    // Runs after each test
    afterEach(() => {
        sharedResource.pop();
        console.log('After Each: Remove test data');
    });

    // Runs once after all tests
    after(() => {
        sharedResource = null;
        console.log('After All: Clean up shared resource');
    });

    it('Test 1', () => {
        assert.strictEqual(sharedResource.length, 1);
    });

    it('Test 2', () => {
        assert.strictEqual(sharedResource.length, 1);
    });
});
```
Output:
```
Before All: Initialize shared resource
Before Each: Add test data
After Each: Remove test data
Before Each: Add test data
After Each: Remove test data
After All: Clean up shared resource
```
Using Hooks in Jest
```
let sharedResource;

beforeAll(() => {
    sharedResource = [];
    console.log('Before All: Initialize shared resource');
});

beforeEach(() => {
    sharedResource.push('Test Data');
    console.log('Before Each: Add test data');
});

afterEach(() => {
    sharedResource.pop();
    console.log('After Each: Remove test data');
});

afterAll(() => {
    sharedResource = null;
    console.log('After All: Clean up shared resource');
});

test('Test 1', () => {
    expect(sharedResource.length).toBe(1);
});

test('Test 2', () => {
    expect(sharedResource.length).toBe(1);
});
```
### **Best Practices for Using Hooks**

1.  **Keep Hooks Lightweight**
    
    -   Avoid putting complex logic in hooks. They should primarily manage setup and teardown.
2.  **Use Descriptive Logs or Comments**
    
    -   Log or comment what the hook is setting up or tearing down for clarity.
3.  **Avoid Dependencies Between Hooks**
    
    -   Ensure hooks are independent and do not rely on other hooks' execution.
4.  **Restore Mocks and Spies**
    
    -   Use `afterEach` to reset mocks, stubs, or spies to ensure test isolation.
5.  **Use Asynchronous Hooks Properly**
    
    -   Use `async/await` or return promises to handle asynchronous setup or cleanup.
6.  **Minimize `before` and `after`**
    
    -   Prefer `beforeEach` and `afterEach` to ensure tests remain independent and isolated.



### **Common Mistakes to Avoid**

1.  **Relying on Shared State**
    
    -   Modifying shared state in a hook can lead to flaky tests if not reset properly.
2.  **Skipping Cleanup**
    
    -   Not cleaning up in `afterEach` or `after` can cause interference between tests.
3.  **Mismanaging Asynchronous Hooks**
    
    -   Failing to properly handle async operations in hooks can result in timeout errors or unhandled promises.
4.  **Overusing Hooks**
    
    -   Avoid using hooks for logic unrelated to setup or teardown, as this can make tests harder to understand.
## ---> Unit testing with Async functions

### **Unit Testing with Async Functions**

Unit testing **async functions** introduces some complexities due to their asynchronous nature. Unlike synchronous code, where you can immediately assert values, async functions often involve promises, callbacks, or time delays, making them more challenging to test. However, most testing frameworks, like Mocha, Jest, and others, have built-in utilities to handle asynchronous code efficiently.



### **Key Concepts for Unit Testing Async Functions**

#### **1. Understanding Async Functions in JavaScript**

Async functions are functions that return a **promise**. They allow you to write asynchronous code in a way that looks synchronous, using the `await` keyword.

Example of an async function:
```
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    return response.json();
}
```
Since async functions return a promise, you need to test the promise behavior (resolve/reject) rather than the function itself.



### **Strategies for Unit Testing Async Functions**

#### **1. Returning a Promise**

If a test involves async code, you can return a **promise** directly from the test. The testing framework will wait for the promise to resolve or reject before continuing.

**Example with Mocha:**
```
const assert = require('assert');

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    return response.json();
}

describe('Async function test', () => {
    it('should fetch data correctly', () => {
        return fetchData().then((data) => {
            assert(data);
            assert(data.id === 1);
        });
    });
});
```
In this case, `return fetchData()` ensures Mocha waits for the promise to resolve before completing the test.



#### **2. Using `async`/`await` in Tests**

In modern JavaScript testing frameworks, you can use `async/await` in your test functions for cleaner and more readable code.

**Example with Jest:**
```
const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};

test('should fetch data correctly', async () => {
    const data = await fetchData();
    expect(data.id).toBe(1);
});
```
Here, `async` allows the test function to use `await` to wait for the promise to resolve before making assertions.


#### **3. Handling Errors in Async Functions**

You may also need to test how your async function handles **errors**. You can use `try/catch` blocks within `async` functions or rely on promise rejection handling.

**Example of handling rejection:**
```
const fetchData = async () => {
    const response = await fetch('https://api.example.com/error');
    if (!response.ok) {
        throw new Error('Data fetch failed');
    }
    return response.json();
};

test('should throw error when fetch fails', async () => {
    expect.assertions(1); // Ensures an assertion is called
    try {
        await fetchData();
    } catch (error) {
        expect(error.message).toBe('Data fetch failed');
    }
});
```
In this example, the test will catch the rejection and assert that the error message matches what we expect.



### **Testing Async Functions with `done` Callback**

In cases where you don't want to return a promise or use `async/await`, some testing frameworks like Mocha allow you to pass a `done` callback to signal that the async function has finished. This is an older approach but still valid.

**Example with Mocha using `done`:**
```
const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};

describe('Async test with done', () => {
    it('should fetch data', (done) => {
        fetchData().then((data) => {
            assert(data.id === 1);
            done(); // Calling done() tells Mocha the test is finished
        });
    });
});
```
If you forget to call `done()`, Mocha will consider the test as hanging and fail it.

### **Common Pitfalls When Testing Async Functions**

1.  **Forgetting to Handle Rejections**:
    
    -   Ensure you always handle rejected promises to avoid unhandled promise rejections. Use `catch()` or `try/catch` blocks.
    
    **Example:**
	   ```
	    async function fetchData() {
	    throw new Error('Something went wrong');
	}

	test('should throw an error', async () => {
	    await expect(fetchData()).rejects.toThrow('Something went wrong');
	});
	```

2. **Not Using `await` Properly**:

	-   If you don’t `await` the promise, the test might finish before the async code runs.

	**Wrong:**

	```
	test('should fetch data', () => {
	    fetchData(); // Test completes before fetchData is done
	    expect(data.id).toBe(1); // This could fail
	});
	```
	**Right**
	
	```
	test('should fetch data', async () => {
	    const data = await fetchData(); // Correctly wait for fetchData to finish
	    expect(data.id).toBe(1);
	});
	```
	
3. **Test Timeout Issues**:

	-   Async tests might take longer than expected, causing timeouts. Increase timeout limits if necessary.

	**Example in Mocha:**
	```
		it('should fetch data in under 2 seconds', function(done) {
	    this.timeout(2000); // Sets the test timeout to 2 seconds
	    fetchData().then((data) => {
	        assert(data);
	        done();
	    });
	});
	```

4. **Handling Multiple Async Calls**:

	-   When testing multiple async calls, use `Promise.all()` or multiple `await` statements to ensure all promises resolve.

	**Example:**
	```
		test('should fetch multiple pieces of data', async () => {
	    const data1 = await fetchData();
	    const data2 = await fetchData();
	    expect(data1).toBeDefined();
	    expect(data2).toBeDefined();
	});
	```
	### **Tools for Testing Async Functions**

1.  **Mocha**: Provides native support for async functions and promises using `done` or returning promises.
    
2.  **Jest**: Supports async testing with `async/await` out of the box and provides additional utilities like `expect(...).resolves` and `expect(...).rejects`.
    
3.  **Chai (with Mocha)**: If you're using Chai for assertions, you can use `.resolves` or `.rejects` for easier testing of promises.
    
    **Example with Chai:**
	   ```
	    const chai = require('chai');
	const expect = chai.expect;

	async function fetchData() {
	    const response = await fetch('https://api.example.com/data');
	    return response.json();
	}

	it('should fetch data', async () => {
	    const data = await fetchData();
	    expect(data.id).to.equal(1);
	});
	```
### **Conclusion**

Testing async functions requires understanding how promises work and using the right strategies to handle them. You can choose between returning promises, using `async/await`, or utilizing callback functions to wait for async operations to finish before making assertions. Always ensure proper error handling and test isolation to avoid flaky tests, and consider using appropriate test utilities provided by frameworks like Mocha or Jest.

## -->   **How to Write Integration Tests with a Small Node Server**

Integration tests ensure that different parts of a system (such as APIs, databases, and services) work together as expected. For a Node.js server, you can write integration tests to verify that your routes, controllers, and external dependencies are properly integrated.

This guide will show you how to write integration tests for a small Node.js server using popular libraries like **Mocha**, **Chai**, and **supertest**.

----------

### **Tools and Libraries**

1.  **Mocha**: A popular testing framework for running tests and organizing them.
2.  **Chai**: An assertion library for Node.js and browsers, used to make assertions in tests.
3.  **Supertest**: A library for testing HTTP servers in Node.js. It provides a high-level API for making HTTP requests and verifying responses.

----------

### **Steps for Writing Integration Tests for a Node Server**

#### **1. Set up a Basic Node.js Server**

To begin, let's create a small Express-based Node server.

**Install required dependencies:**

```
npm init -y
npm install express
npm install --save-dev mocha chai supertest
```
Create a simple `server.js` file:
```
// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
});

app.get('/users', (req, res) => {
    res.status(200).json([{ id: 1, name: 'John Doe' }]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Export the app for testing
```
This creates a simple server with two routes:

-   `/` (returns "Hello, World!")
-   `/users` (returns a list of users)



#### **2. Write Your Integration Tests**

Now, create a test file for integration tests.

**Create a `test` folder and inside it, a `server.test.js` file:**

```
mkdir test
touch test/server.test.js
```
Write the integration test in `server.test.js`:

```
// test/server.test.js
const request = require('supertest');
const app = require('../server'); // Import the app from server.js
const chai = require('chai');
const expect = chai.expect;

describe('Integration Tests for Node Server', () => {

    it('should return "Hello, World!" on the root route', (done) => {
        request(app)
            .get('/') // HTTP GET request to the root route
            .expect(200) // Expect a 200 OK status code
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Hello, World!');
                done(); // End the test
            });
    });

    it('should return a list of users from the /users route', (done) => {
        request(app)
            .get('/users') // HTTP GET request to the /users route
            .expect(200) // Expect a 200 OK status code
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(1);
                expect(res.body[0].id).to.equal(1);
                expect(res.body[0].name).to.equal('John Doe');
                done();
            });
    });

});
```
#### **Key Points:**

-   **Supertest**: Used to simulate HTTP requests to the server. You make GET, POST, or other requests to your app and check the responses.
-   **Chai**: Used to make assertions about the response (e.g., checking the status code, response body, headers).
-   **done callback**: Used to signal the completion of an asynchronous test.



#### **3. Run the Tests**

Add a script to your `package.json` to run the tests with Mocha:
```
"scripts": {
    "test": "mocha"
}
```
Now run the tests:
```
npm test
```
This should output something like:
```
Integration Tests for Node Server
    √ should return "Hello, World!" on the root route (150ms)
    √ should return a list of users from the /users route (40ms)

  2 passing (250ms)
```
### **4. Testing Error Cases and Edge Conditions**

To fully test your Node server, you should also handle error cases, such as invalid routes or server errors.

**Example of an error case test:**
```
it('should return 404 for an invalid route', (done) => {
    request(app)
        .get('/invalid-route') // A route that doesn't exist
        .expect(404) // Expect a 404 Not Found status
        .end(done); // End the test
});
```
### **5. Testing with External Databases**

If your server interacts with a database (e.g., MongoDB, PostgreSQL), you may need to set up an in-memory or mock database for your tests to avoid manipulating real data.

For example, using **MongoDB in-memory** for MongoDB integration tests:

1.  Install the necessary packages:
```
npm install --save-dev mongodb-memory-server
```
2. Use it in your test:
```
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

before(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

after(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

it('should create a new user in the database', async () => {
    const user = await User.create({ name: 'Jane Doe' });
    const foundUser = await User.findById(user._id);
    expect(foundUser.name).to.equal('Jane Doe');
});
```

### **6. Organizing Integration Tests**

For a larger project, you may want to organize your tests more effectively:

-   **Separate tests by feature** (e.g., `auth.test.js`, `user.test.js`, `product.test.js`).
-   Use **before** and **after** hooks to set up and tear down resources (e.g., database connections, mock services).

Example:
```
beforeEach(() => {
    // Set up test data before each test
});

afterEach(() => {
    // Clean up after each test
});
```
### **7. Continuous Integration (CI) and Running Tests in CI/CD**

To ensure that your server’s integration tests run correctly in different environments, you can set up continuous integration (CI) with services like **GitHub Actions**, **Travis CI**, or **Jenkins**.

-   **GitHub Actions**: You can configure it to run your tests on every push or pull request.
-   **Travis CI**: Add a `.travis.yml` file to run tests on different environments (e.g., Node.js versions, OS).

Example `.travis.yml` configuration:
```
language: node_js
node_js:
  - "14"
before_script:
  - npm install
script:
  - npm test
```
### **Conclusion**

Writing integration tests for a small Node.js server involves:

1.  Setting up your Node server using a framework like Express.
2.  Using tools like **Mocha**, **Chai**, and **Supertest** to write and execute tests.
3.  Organizing tests for different API routes and edge cases.
4.  Handling external dependencies such as databases, APIs, or third-party services.

These tests ensure that all components of your application interact as expected and help catch potential issues early in the development process.