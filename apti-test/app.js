// connecting to the database:
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/dbPractise');



var QuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required: true
    },
    option1:{
        type:String
    },
    option2:{
        type:String
    },
    option3:{
        type:String
    },
    option4:{
        type:String
    }
});

var TestSchema = new mongoose.Schema({
    name:{
        type:String
    },
    questions: [QuestionSchema]
})

var User = new mongoose.Schema({
    name:{
        type:String,
        minlength:2
    },
    tests: [
        TestSchema
    ]
});

var Test = mongoose.model('Apti', User);

UserBody = {
    name:"Abhishek",
    tests: [
        {
            name:"Aptitude Maths",
            questions:[
                {
                    question:"What is 2+2?",
                    option1: "1",
                    option2: "2",
                    option3: "3",
                    option4: "4"
                },
                {
                    question:"What is 3+2?",
                    option1: "1",
                    option2: "5",
                    option3: "3",
                    option4: "4"
                },
                {
                    question:"What is 10+2?",
                    option1: "1",
                    option2: "12",
                    option3: "3",
                    option4: "4"
                }
            ]
        }
    ]
}

// var user = new Test(UserBody);

// console.log(`Username: ${user.name}`);

// var generateTestLink = (user) => {
//     test = user.tests;
//     id = test[0]._id;
//     console.log(`http://crackloophole.com/testid:${id}`);

// }

// user.save().then((user) => {
//     generateTestLink(user);
// });

Test.findOne({name:"Chinmay"}).then((user) => {
    console.log(`Username is: ${user.name}`);
    console.log(`Name of test: ${user.tests[0].name}`);
    testss = user.tests;
    // questions = user.tests[0].questions;
    // questions.forEach(function(question) {
    //     console.log(`Questoin: ${question.question}`);
    //     console.log(`Option 1: ${question.option1}`);
    //     console.log(`Option 2: ${question.option2}`);
    //     console.log(`Option 3: ${question.option3}`);
    //     console.log(`Option 4: ${question.option4}`);
    // });
    testss.forEach(function(test) {
        // console.log(`List of test: ${test.name}`);
        id = test._id;
        console.log("List of tests along with their URL's:");
        console.log(`${test.name}: http://crackloophole.com/testid:${id}`);

    });
});

