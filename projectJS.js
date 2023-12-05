// projectJS.js

function generateMealPlan() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Get values for Monday
    var mondayBreakfast = document.getElementById('mondayBreakfast').value;
    var mondaySnack = document.getElementById('mondaySnack').value;
    var mondayLunch = document.getElementById('mondayLunch').value;
    var mondaySnack2 = document.getElementById('mondaySnack2').value;
    var mondayDinner = document.getElementById('mondayDinner').value;

    // Repeat the pattern for other days and meals

    // Tuesday
    var tuesdayBreakfast = document.getElementById('tuesdayBreakfast').value;
    var tuesdaySnack = document.getElementById('tuesdaySnack').value;
    var tuesdayLunch = document.getElementById('tuesdayLunch').value;
    var tuesdaySnack2 = document.getElementById('tuesdaySnack2').value;
    var tuesdayDinner = document.getElementById('tuesdayDinner').value;

    // Wednesday
    var wednesdayBreakfast = document.getElementById('wednesdayBreakfast').value;
    var wednesdaySnack = document.getElementById('wednesdaySnack').value;
    var wednesdayLunch = document.getElementById('wednesdayLunch').value;
    var wednesdaySnack2 = document.getElementById('wednesdaySnack2').value;
    var wednesdayDinner = document.getElementById('wednesdayDinner').value;

    // Thursday
    var thursdayBreakfast = document.getElementById('thursdayBreakfast').value;
    var thursdaySnack = document.getElementById('thursdaySnack').value;
    var thursdayLunch = document.getElementById('thursdayLunch').value;
    var thursdaySnack2 = document.getElementById('thursdaySnack2').value;
    var thursdayDinner = document.getElementById('thursdayDinner').value;

    // Friday
    var fridayBreakfast = document.getElementById('fridayBreakfast').value;
    var fridaySnack = document.getElementById('fridaySnack').value;
    var fridayLunch = document.getElementById('fridayLunch').value;
    var fridaySnack2 = document.getElementById('fridaySnack2').value;
    var fridayDinner = document.getElementById('fridayDinner').value;

    // Saturday
    var saturdayBreakfast = document.getElementById('saturdayBreakfast').value;
    var saturdaySnack = document.getElementById('saturdaySnack').value;
    var saturdayLunch = document.getElementById('saturdayLunch').value;
    var saturdaySnack2 = document.getElementById('saturdaySnack2').value;
    var saturdayDinner = document.getElementById('saturdayDinner').value;

    // Sunday
    var sundayBreakfast = document.getElementById('sundayBreakfast').value;
    var sundaySnack = document.getElementById('sundaySnack').value;
    var sundayLunch = document.getElementById('sundayLunch').value;
    var sundaySnack2 = document.getElementById('sundaySnack2').value;
    var sundayDinner = document.getElementById('sundayDinner').value;

    mealPlanWindow.document.write('</body></html>');
    mealPlanWindow.document.close();
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
