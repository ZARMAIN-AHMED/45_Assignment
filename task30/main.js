"use strict";
let users = ['sana', 'babar', 'saba', 'taha', 'admin'];
for (let user of users) {
    if (user === "admin") {
        console.log("hello admin, would you like to see a status report?");
    }
    else {
        console.log(`hello ${user}, 'thanks for logging again...!'`);
    }
}
