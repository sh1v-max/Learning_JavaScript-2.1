function userExample(){}
//remove parenthesis and function keyword and add class keyword

class CreateUser {

}
// CreateUser will return:
// class CreateUser {
//
// }
// typeof CreateUser is function
// class also contains constructor method and prototype methods
//^ class is not hoisted
//^ you cannot call a class without new keyword
// it would give an error saying, cannot be invoked without 'new'
// new CreateUser() will return an object with the properties defined in the constructor
// output: CreateUser {}