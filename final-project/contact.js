 const publicKey = "1kisPTniN2b-Wl3Bo";
 const serviceID = "service_usige3m";
 const templateID = "template_s2hykqy";

 emailjs.init(publicKey);

var btn = document.getElementById('btn');
	btn.addEventListener('click', function(e) {
		e.preventDefault()
		var	name = document.getElementById('name');
		var email = document.getElementById('email');
		var subject = document.getElementById('subject');
		var message = document.getElementById('message');
		const inputFields = {
			to_name: "Paul",
			from_name: name.value,
			reply_to: email.value,
			message: message.value,
			subject: subject
		};
		emailjs.send(serviceID, templateID, inputFields)
		.then(() => {
			btn.innerText = "Message Sent Successfully!";
			name.value = "";
			email.value = "";
			message.value = "";
			subject.value = '';
		}, (error) => {
			console.log(error);
			btn.innerText = "Something went wrong...";
		});
	});




