
const { test, expect } = require('@playwright/test');
var udid = "5d1b40a0-e09c-4c06-a65b-8ffc00dbe4ca";
import { faker } from '@faker-js/faker';


const description = faker.person.firstName()

//test 04
test('Put API of ToDoItems', async ({ request }) => {

    udid.replace(/["']/g, "");
    console.log("UDID " + udid);
    console.log("--------------------Starting test 04 -------------------");
    const putresponse = await request.put(`/api/todoItems/${udid}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: {
            "id": udid,
            "description": description,
            "isCompleted": true
        }
    });

    //const responseBody = await putresponse.json();
   // console.log(responseBody);
    //expect(putresponse.status()).toBe(204);
  //  console.log( "Description value : " + description + " is changed.");
  
});
