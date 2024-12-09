//Task 01: Iterating with Async/Await//

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(value);
    }
}


iterateWithAsyncAwait([1, 2, 3, 4, 5]);


//Task 02: Awaiting a Call//

async function awaitCall() {
    console.log("Fetching data...");
    const fakeFetch = () =>
        new Promise(resolve => setTimeout(() => resolve("API Response Data"), 2000));

    const data = await fakeFetch(); 
    console.log(data);
}


awaitCall();


//Task 03: Handling Errors with Async/Await//

async function awaitCallWithErrorHandling() {
    console.log("Fetching data...");
    const fakeFetch = () =>
        new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("API Fetch Failed")), 2000)
        );

    try {
        const data = await fakeFetch();
        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}


awaitCallWithErrorHandling();