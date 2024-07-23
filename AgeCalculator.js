
let dateObj = new Date();
let month = String(dateObj.getMonth() + 1).padStart(2, '0');
    document.querySelector(".month span").textContent =month;

let day = String(dateObj.getDate()).padStart(2, '0');
    document.querySelector(".day span").textContent =day;

let year = dateObj.getFullYear();
document.querySelector(".year span").textContent =year;

function ageCalculator() {
    const dobInput = document.getElementById("dob").value;
    const dob = new Date(dobInput);
    const currentDate = new Date();

    const yearDiff = currentDate.getFullYear() - dob.getFullYear();
    let monthDiff = currentDate.getMonth() - dob.getMonth();
    const dayDiff = currentDate.getDate() - dob.getDate();

    // let ageYears = Math.abs(yearDiff);
    // let ageMonths = Math.abs(monthDiff);
    // let ageDays = Math.abs(dayDiff);
    
    let ageYears = yearDiff;
    let ageMonths = monthDiff;
    let ageDays = dayDiff;

    if (dayDiff < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (monthDiff < 0) {
        ageYears--;
        ageMonths += 12;

    }
	
	if(ageMonths<0)
	{
		ageMonths=-1*ageMonths;
	}

    document.querySelector(".year span").textContent = ageYears;
    document.querySelector(".month span").textContent = ageMonths;
    document.querySelector(".day span").textContent = ageDays;
}