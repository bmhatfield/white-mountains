

function Pass() {

// Read elevation gain and distance
// parseFloat ensures that the values are treated as numbers

miles = parseFloat(document.forms[1].elements[0].value)
feet = parseFloat(document.forms[0].elements[0].value)

if (feet < 0) {
   alert ("Negative elevation gain will be changed to zero")
   feet = 0
}

// Output book time

document.forms[3].elements[0].value = Compute(feet, miles)

}

// Compute book time

function Compute(feet, miles) {
        btime = (0.0005 * feet) + (.5 * miles)
	hour = Math.floor(btime)
	minute = 60*(btime-hour)
	if (minute > 57.5) {
	   hour++
	   minute = 0
	}
	else {
	   minute = 5*(Math.round(minute/5))
	}
	result=(hour+":"+(minute<10?"0"+minute:minute))
        return result
}
