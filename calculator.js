

var inputbox = document.getElementById('text');
			
			function print(number) {
				inputbox.value = inputbox.value == "0" ? String(number): inputbox.value + String(number);
			}
			
			function appendDot() {
				inputbox.value += ".";
			}
			
			function reset() {
				inputbox.value = "0";
			}
			
			function add() {
				if(inputbox.value.includes("+")) {
					return;
				}
				
				inputbox.value += " + ";
			}
			
			function subtract() {
				if(inputbox.value.includes("-")) {
					return;
				}
				
				inputbox.value += " - ";
			}
			
			function multiply() {
				if(inputbox.value.includes("*")) {
					return;
				}
				
				inputbox.value += " * ";
			}
			
			function divide() {
				if(inputbox.value.includes("/")) {
					return;
				}
				
				inputbox.value += " / ";
			}
			
			function oneover() {
				inputbox.value = parseFloat(1 / inputbox.value);
			}
			
			function equals() {
				if(inputbox.value.includes("+")) {
					inputbox.value = String(parseFloat(inputboxvalue.split('+')[0].substr(0, inputbox.value.split('+')[0].length)) + parseFloat(inputbox.value.split('+')[1].substr(0, inputbox.value.split('+')[1].length)));
				} else if(inputbox.value.includes("-")) {
					inputbox.value = String(parseFloat(inputbox.value.split('-')[0].substr(0, inputbox.value.split('-')[0].length)) - parseFloat(inputbox.value.split('-')[1].substr(0, inputbox.value.split('-')[1].length)));
				} else if(inputbox.value.includes("*")) {
					inputbox.value = String(parseFloat(inputboxvalue.split('*')[0].substr(0, inputbox.value.split('*')[0].length)) * parseFloat(inputbox.value.split('*')[1].substr(0, inputbox.value.split('*')[1].length)));
				} else if(inputbox.value.includes("/")) {
					inputbox.value = String(parseFloat(inputbox.value.split('/')[0].substr(0, inputbox.value.split('/')[0].length)) / parseFloat(inputbox.value.split('/')[1].substr(0, inputbox.value.split('/')[1].length)));
				}
			}