
const { test, expect } = require('@playwright/test');
//const description = require('../test-data/todoList-details.json');
import { faker } from '@faker-js/faker';


const description = faker.person.firstName()

//test 02
test('Post API of ToDoItems', async ({ request }) => {
    console.log("--------------------Starting test 02 -------------------");
    const response = await request.post(`/api/todoItems`, {
        data: {
            "description": description
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log("Unique id generated for " + description + " is:  " + responseBody);
  
});

//test 03
test('Get API with Params multiple apis', async ({ request }) => {
    console.log("--------------------Starting test 03 -------------------");

    //This API will generate a new UDID
    const response = await request.post(`/api/todoItems`, {
        data: {
            "description": description
        }
    });

    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    const udid = responseBody
    //console.log("udid " + udid);

    //Second API to pull the information based on the UDID
    const updateRequest = await request.get(`/api/todoItems/${udid}`);
    console.log(await updateRequest.json());
    expect(updateRequest.ok()).toBeTruthy();
    expect(updateRequest.status()).toBe(200);
    const updatedResponseBody = await updateRequest.json()
    expect(updatedResponseBody).toHaveProperty("id", udid);
    expect(updatedResponseBody).toHaveProperty("isCompleted", false);

});