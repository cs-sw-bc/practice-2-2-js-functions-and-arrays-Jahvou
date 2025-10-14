/* =============================================================
     🎯 ASSIGNMENT: TIP & BILL SPLIT CALCULATOR
     -------------------------------------------------------------
     GOAL: Practice variables, arithmetic operations, conditionals & functions.
     -------------------------------------------------------------

     📝 INSTRUCTIONS:

     0️⃣ STEP ZERO: Connect script file TO HTML
        
     1️⃣ Create a function named generateMoodMessage() that:
         - Reads the bill amount and number of people.
         - Displays a fun message based on values entered:
             • If bill < 20 → "Budget-friendly meal 👌"
             • If bill > 200 and people > 4 → "Party vibes 🥳"
             • If people === 1 → "Solo dining! Self-care mode on 🍲"
             • Otherwise → "Casual dinner night 🍽️"
         - This shows how JavaScript reacts differently based on conditions.

     2️⃣ Create a function named calculateTip() that:
         - Reads the bill amount and tip percentage.
         - Calculates the total tip (bill * tip / 100).
         - Returns the total tip.
         - Shows an alert: "Your tip amount is $10."

     3️⃣ Create a function named splitBill() that:
         - Calls calculateTip() to reuse its return value.
         - Calculates total amount = bill + tip.
         - Divides total by number of people.
         - Shows an alert message:
             - Example: "Each person should pay $55."
         - If the per person amount > 100, show: "Whoa, that’s pricey! 💸"
           Otherwise show: "Nice, that’s affordable! 😄"

     ✅ BONUS TASK:
     - Round all currency values to 2 decimal places using toFixed(2).
     - Use creative alert messages to personalize the experience.

     -------------------------------------------------------------
     💡 Example alert messages:
     - "Solo dining! Self-care mode on 🍲"
     - "Your tip amount is $12.50."
     - "Each person should pay $56.25. Nice, that’s affordable! 😄"
     -------------------------------------------------------------

     🔗 Button connections:
     - Generate Mood button → generateMoodMessage()
     - Calculate Tip button → calculateTip()
     - Split Bill button → splitBill()
  ============================================================= */
 

console.log("Script.js file is connected!");

const $ = (id) => document.getElementById(id);
const money = (n) => isFinite(n) ? `$${number(n).toFixed(2)}` : "-";

window.onload = function () {
    $("btnMood").addEventListener("click", generateMoodMessage);
    $("btnTip").addEventListener("click", calculateTip);
    $("btnSplit").addEventListener("click", splitBill);
}

function readInputs() {
    return {
    bill: number($("bill").value),
    tipPct: number($("tip").value),
    people: number($("people").value)
    };
}

function generateMoodMessage() {
    const { bill, people } = readInputs();
    if (!isFinite(bill) || !isFinite(people) || bill <= 0 || people <= 0) {
        $("moodMessage").textContent = "please enter valid bill and people numbers.";
        return;
    }
    let message = "";
    if (bill < 20) message = "Budget friendly meal";
    else if (bill > 200 && people > 4) message= "party vibes";
    else if (people === 1) message = "Self care mode on.";
    else message = "casual dinner night";

    $("moodMessage").textContent = message;
    

}

function calculateTip() {
   
}

function splitBill() {
    //take bill amount, tip percentage and number of people
    const bill = number(document.getElementById("bill"));
    const tipPercentage = number(document.getElementById("tip"));
    const people = number(document.getElementById("people"));

    //use calculateTip() to find tip amount
    const tipAmount = (bill * tipPercentage) / 100;

    //calculate total cost and per person cost
    const total = bill + tipAmount;
    const perPerson = total / people;

    //Display message
    alert(`each person should pay $${perPerson.toFixed(2)}`);

    //fun feedback
    if (perPerson > 100) {
        alert("Whoa, thats pricey! ");
    }
    else {
        alert("Nice, that's affordable!");
    }
}

document.getElementById("btnMood").addEventListener("click", generateMoodMessage);
document.getElementById("btnTip").addEventListener("click", calculateTip);
document.getElementById("btnSplit").addEventListener("click", splitBill);
