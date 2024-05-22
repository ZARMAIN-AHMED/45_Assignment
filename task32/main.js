"use strict";
let currentuser = ["saba", 'admin', 'ahmed', 'babar', 'raza'];
let new_user = ['fawad', 'hussain', 'user7', 'admin', 'user9'];
new_user.forEach((new_user) => {
    if (currentuser.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} will need to enter a new usernmae.`);
    }
    else {
        console.log(`${new_user} is available`);
    }
});
