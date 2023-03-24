
import axios from 'axios'

// export const answers = hehe.questions;
// export const dapandung = hehe.answers;


//  export const answers = getdata('http://localhost:5000/api/question').questions;
//  export const dapandung = getdata('http://localhost:5000/api/question').answers;
export const answers = [
    {
        id: 1,
        question: "Javascript is an _______ language",
        options: [
            'Object-Oriented',
            'Object-Based',
            'Procedural',
        ]
    },
    {
        id: 2,
        question: "Following methods can be used to display data in some form using Javascript",
        options: [
            'document.write()',
            'console.log()',
            'window.alert()',
        ]
    },
    {
        id: 3,
        question: "When an operator value is NULL, the typeof returned by the unary operator is:",
        options: [
            'Boolean',
            'Undefined',
            'Object',
        ]
    },
    {
        id: 4,
        question: "What does the toString() method return?",
        options: [
            'Return Object',
            'Return String',
            'Return Integer'
        ]
    },
    {
        id: 5,
        question: "Which function is used to serialize an object into a JSON string?",
        options: [
            'stringify()',
            'parse()',
            'convert()',
        ]
    }
];
export const dapandung = [0, 1, 2, 1, 0]