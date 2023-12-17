const accountId = 1122
let accountEmail = "siddhartha@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState
// accountId = 2
accountEmail = "sm@sm.com"
accountPassword ="212121"
accountCity="Bengaluru"

console.log(accountId);

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
