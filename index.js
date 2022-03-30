// VERSION 1

function so() {
	var total_value = document.querySelector('#availableDOM').textContent;
	var value = Number(total_value.slice(0, total_value.length - 2).replace(",", ""))
	var clock = document.querySelector('#countdownClockBox').querySelectorAll('strong')
	var min = Number(clock[0].textContent)
	var sec = Number(clock[1].textContent)
	var big = Math.round(0.4709 * (value - 10))
	var small = Math.round(0.5291 * (value - 10))
	return [value, min, big, small]
}


function tai(x, y, z, t) {
	if (x > 100000 && y != 0) {
		document.querySelector('#gameGroup1158').click();
		document.querySelector('#resetFastBet').click();
		document.querySelectorAll('.amount_pane')[17].querySelector('input').value=1;
		document.querySelector('.quick-bet-btn').click();
		document.querySelector('#confirmBetBTN').click();
	}
	else {
		return false
	}
	return t	
}

function xiu(x) {
	if (x) {
		document.querySelector('#gameGroup1158').click();
		document.querySelector('#resetFastBet').click();
		document.querySelectorAll('.amount_pane')[18].querySelector('input').value=1;
		document.querySelector('.quick-bet-btn').click();
		document.querySelector('#confirmBetBTN').click();
	}
	else {
		return;
	}
}


a = tai(so()[0],so()[1],so()[2],so()[3])
xiu(a)



// CUOC VERRSION 2

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var total_value = document.querySelector('#availableDOM').textContent;
var value = Number(total_value.slice(0, total_value.length - 2).replace(",", ""))
var clock = document.querySelector('#countdownClockBox').querySelectorAll('strong')
var min = Number(clock[0].textContent)
var sec = Number(clock[1].textContent)
var big = Math.round(0.4709 * (value - 10))
var small = Math.round(0.5291 * (value - 10))

if (value > 90000 && min != 0) {

	document.querySelector('#gameGroup1158').click();
	document.querySelector('#resetFastBet').click();
	document.querySelectorAll('.amount_pane')[17].querySelector('input').value=big;
	document.querySelector('.quick-bet-btn').click();
	document.querySelector('#confirmBetBTN').click();

	await sleep(1000);
	var i = 1;
	while (document.querySelector('.layui-layer-btn0') == null) {
		i = i + 1;
		await sleep(1000)
		console.log(i);
	}
	document.querySelector('.layui-layer-btn0').click()
	await sleep(1000);
	document.querySelector('#gameGroup1158').click();
	document.querySelector('#resetFastBet').click();
	document.querySelectorAll('.amount_pane')[18].querySelector('input').value=small;
	document.querySelector('.quick-bet-btn').click();
	document.querySelector('#confirmBetBTN').click();
	await sleep(1000);
	while (document.querySelector('.layui-layer-btn0') == null) {
		i = i + 1;
		await sleep(1000)
		console.log(i);
	}
	document.querySelector('.layui-layer-btn0').click()
}



// ========== ********* ==========

// KIEM TRA 

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var i = 0;
while (document.querySelectorAll('tbody tr td')[150] == null) {
	i = i + 1;
	await sleep(5000)
	console.log(i);
}
await sleep(1000)

var table = document.querySelectorAll('tbody tr td')

if (table[1].textContent != table[9].textContent) {
	
	table[7].querySelector('a').click();
	await sleep(1000)
	var i = 0;
	while (document.querySelector('#dropOrderBtn') == null) {
		i = i + 1;
		await sleep(5000)
		console.log(i);
		if (i > 5) {
			location.reload()
		}
	}
	
	document.querySelector('#dropOrderBtn').click();
	await sleep(1000)
	var i = 0;
	while (document.querySelector('.layui-layer-btn0') == null) {
		i = i + 1;
		await sleep(5000)
		console.log(i);
	}
	document.querySelector('.layui-layer-btn0').click()
	await sleep(1000)
	document.querySelector('.layui-layer-btn0').click()
}


