"use strict";

let firstInfo = [
        {
            question: "First question:",
            answer1: "<label><input type='radio' class='input_q1' name='q1'>a. This answer is incorrect </label>",
            answer2: "<label><input type='radio' class='input_q1' name='q1'>b. This answer is correct </label>",
            answer3: "<label><input type='radio' class='input_q1' name='q1'>c. This answer is incorrect </label>"
        },
         {
            question: "Second question:",
            answer1: "<label><input type='radio' class='input_q2' name='q2'>a. This answer is incorrect </label>",
            answer2: "<label><input type='radio' class='input_q2' name='q2'>b. This answer is incorrect </label>",
            answer3: "<label><input type='radio' class='input_q2' name='q2'>c. This answer is correct </label>"
        },
         {
            question: "Third question:",
            answer1: "<label><input type='radio' class='input_q3' name='q3'>a. This answer is incorrect </label>",
            answer2: "<label><input type='radio' class='input_q3' name='q3'>b. This answer is correct </label>",
            answer3: "<label><input type='radio' class='input_q3' name='q3'>c. This answer is incorrect </label>"
        }];
localStorage.setItem('test', JSON.stringify(firstInfo));

let answer = [2, 3, 2];
localStorage.setItem('results', JSON.stringify(answer));

$(() => {
    let html = $('#item_tmpl').html();
    let newInfo = localStorage.getItem('test');
    let myInfo = JSON.parse(newInfo);
    let content = tmpl(html, {
        data: myInfo
    });
    $('ol').append(content);
});

let answers = localStorage.getItem('results');
let correctAnswer = JSON.parse(answers);
let userAnswer = [0, 0, 0];

$(document).ready(() => {
    let checkTest = (myClass) => {
        let $answersElements = $(myClass);
        for (let i = 1; i <= userAnswer.length; i++) {
            if ($answersElements.eq(i-1).is(':checked')) {
                return i;
            }
        };  
    };
    let checkArreys = (a, b) => {
        let newA = JSON.stringify(a);
        let newB = JSON.stringify(b);
            if (newA == newB) {
               $('.result').html("Congrats!!! Everything is correct!");
            } else {
               $('.result').html("Hmmmm... You need to retry!");
            } 
    }
    $('input').change(() => {
        let newUserAnswers = [0, 0, 0];
        newUserAnswers[0] = checkTest('.input_q1');
        newUserAnswers[1] = checkTest('.input_q2');
        newUserAnswers[2] = checkTest('.input_q3');
        checkArreys(correctAnswer, newUserAnswers);
    });
    $('.close').on('click', () => {
        $('input:checked').prop('checked', false);   
        location.reload();
    });
});