// Create a resolved promise
const resolvedPromise = new Promise((resolve, reject) => {
    resolve({ status: 200, body: 'Success' });
  });
  
  // Create a rejected promise
  const rejectedPromise = new Promise((resolve, reject) => {
    reject(new Error('The fake API is not working currently'));
  });
  
  // Log the promises without consuming them
  console.log(resolvedPromise);
  console.log(rejectedPromise);
  