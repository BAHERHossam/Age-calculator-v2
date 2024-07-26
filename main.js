const form = document.getElementById('submit');

form.addEventListener('click', function (event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const dayIn = document.getElementById('day');
    const monthIn = document.getElementById('month');
    const yearIn = document.getElementById('year');

    const dayLable = document.getElementById("dayLabel");
    const monthLable = document.getElementById("monthLabel");
    const yearLable = document.getElementById("yearLabel");

    const longError = document.getElementById('dError');

    let dayError = '';
    let monthError = '';
    let yearError = '';

    yearIn.style.borderColor = 'white';
    yearLable.style.color = 'white';
    monthIn.style.borderColor = 'white';
    monthLable.style.color = 'white';
    dayIn.style.borderColor = 'white';
    dayLable.style.color = 'white';

    longError.style.position = "inline"
    longError.style.left = "0px"
    longError.style.wordSpacing = "0px"
    longError.style.letterSpacing = "px"
    longError.style.width="auto"

    if (!day || !month || !year) {

        if (!day) {
            dayError = 'This field is required';
            
            dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
            dayLable.style.color = 'hsl(0, 100%, 67%)';
        }

        if (!month) {
            monthError = 'This field is required';

            monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
            monthLable.style.color = 'hsl(0, 100%, 67%)';
        }

        if (!year && year != 0) {
            yearError = 'This field is required';

            yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
            yearLable.style.color = 'hsl(0, 100%, 67%)';
        }
    }

    if (day < 1 || day > 31 || month < 1 || month > 12 || year > new Date().getFullYear() || year < 0) {
        if (day < 1 || day > 31) {
            dayError = 'Must be a valid day';

            dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
            dayLable.style.color = 'hsl(0, 100%, 67%)';
        }

        if (month < 1 || month > 12) {
            monthError = 'Must be a valid month';

            monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
            monthLable.style.color = 'hsl(0, 100%, 67%)';
        }

        if (year > new Date().getFullYear()) {
            yearError = 'Must be in the past';

            yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
            yearLable.style.color = 'hsl(0, 100%, 67%)';
        }
    }

    if (month === 2 && (day > 29 && day < 32)) {
        dayError = 'Must be a valid date';

        dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
        dayLable.style.color = 'hsl(0, 100%, 67%)';
        monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
        monthLable.style.color = 'hsl(0, 100%, 67%)';
        yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
        yearLable.style.color = 'hsl(0, 100%, 67%)';
        longError.style.position = "relative"
        longError.style.left = "50px"
        longError.style.wordSpacing = "10px"
        longError.style.letterSpacing = "3px"
        longError.style.width="500px"
    }
    if (((month === 4 || month === 6 || month === 9 || month === 11) && (day > 30 && day <32))) {
        dayError = 'Must be a valid date';

        dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
        dayLable.style.color = 'hsl(0, 100%, 67%)';
        monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
        monthLable.style.color = 'hsl(0, 100%, 67%)';
        yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
        yearLable.style.color = 'hsl(0, 100%, 67%)';
        longError.style.position = "relative"
        longError.style.left = "50px"
        longError.style.wordSpacing = "10px"
        longError.style.letterSpacing = "3px"
        longError.style.width="500px"

    }

    document.getElementById('dError').innerText = dayError;
    document.getElementById('mError').innerText = monthError;
    document.getElementById('yError').innerText = yearError;

    if (dayError || monthError || yearError) {
        return;
    }
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days = lastMonth.getDate() - day + today.getDate();
        months--;
    }

    document.getElementById('years').style.display = "none";
    document.getElementById('months').style.display = "none";
    document.getElementById('days').style.display = "none";
    document.getElementById('yearsRes').style.left = "0px";
    document.getElementById('monthsRes').style.left = "0px";
    document.getElementById('daysRes').style.left = "0px";
    document.getElementById('yearsRes').innerText = years;
    document.getElementById('monthsRes').innerText = months;
    document.getElementById('daysRes').innerText = days;
    dayIn.style.borderColor = 'hsl(0, 1%, 44%)';
    dayLable.style.color = 'hsl(0, 0%, 100%)';
    monthIn.style.borderColor = 'hsl(0, 1%, 44%)';
    monthLable.style.color = 'hsl(0, 0%, 100%)';
    yearIn.style.borderColor = 'hsl(0, 1%, 44%)';
    yearLable.style.color = 'hsl(0, 0%, 100%)';
});