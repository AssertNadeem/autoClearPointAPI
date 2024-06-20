// @ts-check
const { test, expect } = require('@playwright/test');


//API 01 - Testing to see the response status is 200 and logging the response to console.
test('API to pull all to do items', async ({ request }) => {
    console.log("--------------------Starting test 01 -------------------");
    const response = await request.get(`/api/todoItems`);
    //Below command logs the response json to console
    console.log(await response.json());
    //Checks whether the response is OK
    expect(response.ok()).toBeTruthy();
    //Checks whether the response code is 200
    expect(response.status()).toBe(200);
});