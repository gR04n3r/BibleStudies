/*THIS SCRIPT SHOWS THE EVENTS OF THE TABLE ONE AFTER ANOTHER AS SOME SORT OF SLIDE SHOW*/

function closeSlideShow() {
	if (showSlideShowArranger.checked == true) {
		showSlideShowArranger.checked = false;
		slideShowListMaster.style.display = 'none';
	} else if (showSlideShowArranger.checked == false) {
		showSlideShowArranger.checked = true;
		slideShowListMaster.style.display = '';
	}
}

var timeMenuLIs = timeMenuListDiv.getElementsByTagName('li');
var timeMenuLIInputs = [];
var timeMenuLILabels;

/*function buildTimeMenuSelectors() {
	var timeMenuLILabels = timeMenuListDiv.querySelectorAll('li > label');
	var numberOfEvents = timeMenuLIs.length;

	for (i = 0; i < timeMenuLIs.length; i++) {
		timeMenuLIInputs = timeMenuListDiv.querySelectorAll('li > input');
		var timeMenuSelect = document.createElement('SELECT');

		for (j = 0; j < (timeMenuLIs.length + 1); j++) {
			var timeMenuSelectOption = document.createElement('OPTION');
			var k = j;
			if (j == 0) {
				k = '-'
			};
			timeMenuSelectOption.value = k;
			timeMenuSelectOption.innerHTML = k;
			timeMenuSelect.appendChild(timeMenuSelectOption);
		}

		var liInput = timeMenuLIs[i].querySelector('input');
		timeMenuLIs[i].insertBefore(timeMenuSelect, liInput)
	}
}*/

function buildTimeMenuSelectors() {
	timeMenuLIInputs = timeMenuListDiv.querySelectorAll('li > input');
	timeMenuLILabels = timeMenuListDiv.querySelectorAll('li > label');
	
	
//	var LILI = timeMenuListDiv.getElementsByTagName('li');
//	console.log(LILI);
//	for (i = 0; i < LILI.length; i++) {
//		timeMenuLIInputs.push(LILI[i].getElementsByTagName('input')[0]);
//		console.log(timeMenuLIInputs);
//	}

	slideShowListContainer.innerHTML = '';
	var timeMenuLILabels = timeMenuListDiv.querySelectorAll('li > label');
	var numberOfEvents = timeMenuLIs.length;

	/*	for (i = 0; i < timeMenuLIs.length; i++) {
			timeMenuLIInputs = timeMenuListDiv.querySelectorAll('li > input');
			var timeMenuSelect = document.createElement('SELECT');
			var slideShowLIDiv = document.createElement('DIV');
			var liContent = timeMenuLIs[i].querySelector('label').innerHTML;
			slideShowLIDiv.innerHTML = liContent;
			
			for (j = 0; j < (timeMenuLIs.length + 1); j++) {
				var timeMenuSelectOption = document.createElement('OPTION');
				var k = j;
				if (j == 0) {
					k = '-'
				};
				timeMenuSelectOption.value = k;
				timeMenuSelectOption.innerHTML = k;
				timeMenuSelect.appendChild(timeMenuSelectOption);
			}

	//		var liInput = timeMenuLIs[i].querySelector('input');
	//		timeMenuLIs[i].insertBefore(timeMenuSelect, liInput);
			slideShowLIDiv.appendChild(timeMenuSelect);
			slideShowListContainer.appendChild(slideShowLIDiv);
		}*/
	var timeMenuOL = timeMenuListDiv.querySelectorAll('ol');
	for (i = 0; i < timeMenuOL.length; i++) {
		slideShowListContainer.appendChild(timeMenuOL[i].cloneNode(true));
	}
	var newLIs = slideShowListContainer.querySelectorAll('li');
	for (i = 0; i < newLIs.length; i++) {
		var timeMenuSelect = document.createElement('SELECT');

		for (j = 0; j < (timeMenuLIs.length + 1); j++) {
			var timeMenuSelectOption = document.createElement('OPTION');
			var k = j;
			if (j == 0) {
				k = '-'
			};
			timeMenuSelectOption.value = j;
			timeMenuSelectOption.innerHTML = k;
			timeMenuSelect.appendChild(timeMenuSelectOption);
		}

		newLIs[i].removeChild(newLIs[i].querySelector('input'));
		newLIs[i].appendChild(timeMenuSelect);
	}

}

buildTimeMenuSelectors();

function columnSlideMenu() {}

var slideMenuArray = [];
var slideMenuArraySource = slideShowListContainer.getElementsByTagName('select');

function slideMenuArrayGenerator() {
	for (i = 0; i < slideMenuArraySource.length; i++) {
		var indexOfSelected = slideMenuArraySource[i].selectedIndex;
		if (indexOfSelected != 0) {
			if (slideMenuArray.indexOf(indexOfSelected) == -1) {
				slideMenuArray.push(indexOfSelected);
			}
		}
	}
	slideMenuArray.sort((a,b)=>a-b);//SORT THE ARRAY IN ASCENDING ORDER
}

var currentSlideMenuArrayIndex = Number(0);

function nextEventShow() {

	if (slideMenuArray != []) {
		if (currentSlideMenuArrayIndex == 0) {
			slideMenuArrayGenerator()
		}

		for (v = 0; v < slideMenuArraySource.length; v++) {
			if (slideMenuArraySource[v].selectedIndex == slideMenuArray[currentSlideMenuArrayIndex]) {
				timeMenuLIInputs[v].click();
			}
		}
		if (currentSlideMenuArrayIndex != slideMenuArray.length) {
			currentSlideMenuArrayIndex = currentSlideMenuArrayIndex + 1;
		}
	}
}

function resetEventShow() {
	currentSlideMenuArrayIndex = Number(0);
}

function prevEventShow() {

	if (slideMenuArray != []) {
		if (currentSlideMenuArrayIndex == 0) {
			slideMenuArrayGenerator()
		}

		for (v = 0; v < slideMenuArraySource.length; v++) {
			if (slideMenuArraySource[v].selectedIndex == slideMenuArray[currentSlideMenuArrayIndex]) {
				timeMenuLIInputs[v].click();
			}
		}
		if (currentSlideMenuArrayIndex != 0) {
			currentSlideMenuArrayIndex = currentSlideMenuArrayIndex - 1;
		}
	}
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if ((e.keyCode == '37')&&(document.querySelector('#nextEventUseKeboard').checked == true)){
		prevEventShow();
       // left arrow
	}
    else if ((e.keyCode == '39') &&(document.querySelector('#nextEventUseKeboard').checked == true)){
		nextEventShow();
       // right arrow
	}
}

/*function prevEventShow() {
	slideMenuArrayGenerator();
		for (i = 0; i < slideMenuArraySource.length; i++) {
			var li2bClicked = slideMenuArraySource[i].selectedIndex == slideMenuArray[currentSlideMenuArrayIndex];

			if (li2bClicked) {
				timeMenuLIInputs[i].click();
				currentSlideMenuArrayIndex = currentSlideMenuArrayIndex - 1;
			}

		}
}*/