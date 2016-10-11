"use strict";

var firstInfo = [{
    question: "First question:",
    answer1: "<label><input type='radio' class='input_q1' name='q1'>a. This answer is incorrect </label>",
    answer2: "<label><input type='radio' class='input_q1' name='q1'>b. This answer is correct </label>",
    answer3: "<label><input type='radio' class='input_q1' name='q1'>c. This answer is incorrect </label>"
}, {
    question: "Second question:",
    answer1: "<label><input type='radio' class='input_q2' name='q2'>a. This answer is incorrect </label>",
    answer2: "<label><input type='radio' class='input_q2' name='q2'>b. This answer is incorrect </label>",
    answer3: "<label><input type='radio' class='input_q2' name='q2'>c. This answer is correct </label>"
}, {
    question: "Third question:",
    answer1: "<label><input type='radio' class='input_q3' name='q3'>a. This answer is incorrect </label>",
    answer2: "<label><input type='radio' class='input_q3' name='q3'>b. This answer is correct </label>",
    answer3: "<label><input type='radio' class='input_q3' name='q3'>c. This answer is incorrect </label>"
}];
localStorage.setItem('test', JSON.stringify(firstInfo));

var answer = [2, 3, 2];
localStorage.setItem('results', JSON.stringify(answer));

$(function () {
    var html = $('#item_tmpl').html();
    var newInfo = localStorage.getItem('test');
    var myInfo = JSON.parse(newInfo);
    var content = tmpl(html, {
        data: myInfo
    });
    $('ol').append(content);
});

var answers = localStorage.getItem('results');
var correctAnswer = JSON.parse(answers);
var userAnswer = [0, 0, 0];

$(document).ready(function () {
    var checkTest = function checkTest(myClass) {
        var $answersElements = $(myClass);
        for (var i = 1; i <= userAnswer.length; i++) {
            if ($answersElements.eq(i - 1).is(':checked')) {
                return i;
            }
        };
    };
    var checkArreys = function checkArreys(a, b) {
        var newA = JSON.stringify(a);
        var newB = JSON.stringify(b);
        if (newA == newB) {
            $('.result').html("Congrats!!! Everything is correct!");
        } else {
            $('.result').html("Hmmmm... You need to retry!");
        }
    };
    $('input').change(function () {
        var newUserAnswers = [0, 0, 0];
        newUserAnswers[0] = checkTest('.input_q1');
        newUserAnswers[1] = checkTest('.input_q2');
        newUserAnswers[2] = checkTest('.input_q3');
        checkArreys(correctAnswer, newUserAnswers);
    });
    $('.close').on('click', function () {
        $('input:checked').prop('checked', false);
        location.reload();
    });
});
