const accountid=144553;
let accountemail="priyanshu1125kumar@gamil.com";
var accountpassword="1125775";
/* prefer not to use var 
because of issue in block scope and functional scope
 */

accountcity="jaipur";

let accountstate;

// accountid=23;  NOT ALLOWED
accountemail="pk@#gamil.com";
accountpassword="2342";
accountcity="bengluru";

console.log(accountid);
console.table([accountemail,accountpassword,accountcity,accountstate]);