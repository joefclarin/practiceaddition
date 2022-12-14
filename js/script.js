const el_first_number = document.querySelector('.first');
const el_second_number = document.querySelector('.second');
const el_answer = document.querySelector('.answer');
const el_answer_notification = document.querySelector('.answer-notification');
const el_submit_button = document.querySelector('.submit');
const el_next_button = document.querySelector('.next');
const el_result_message = document.querySelector('.result-message');

var first_digit, second_digit, result;
next_equation();

el_submit_button.addEventListener('click', (e) => {
	//console.log(result);
	//console.log(el_answer.value);
	//console.log(e);
	
	process_answer();
});

el_answer.addEventListener('keypress', (e) => {
	if (event.key === "Enter") {
		process_answer();
	}
});

el_next_button.addEventListener('click', (e) => {
	next_equation();
});


function process_answer() {
	if(el_answer.value == '') {
		return;
	} else if(result == el_answer.value) {
		el_answer_notification.innerHTML = 'Correct! Good job!';
		el_submit_button.disabled = true;
		el_next_button.disabled = false;
	} else {
		el_answer_notification.innerHTML = 'Oh, no! Correct answer is ' + result + '.';
		el_submit_button.disabled = true;
		el_next_button.disabled = false;

	}
}


function next_equation() {
	first_digit = Math.floor(Math.random() * 11);
	second_digit = Math.floor(Math.random() * 11);
	result = first_digit + second_digit;

	el_first_number.innerHTML = first_digit;
	el_second_number.innerHTML = second_digit;
	el_answer.value = '';
	el_answer_notification.innerHTML = 'Type your answer';
	el_answer.focus();
	el_next_button.disabled = true;
	el_submit_button.disabled = false;
}


if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
		navigator.serviceWorker
			.register("/serviceWorker.js")
			.then(res => console.log("service worker registered"))
			.catch(err => console.log("service worker not registered", err))
		})
}
