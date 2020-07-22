
let yearlyLoanPayment = (pct, loanAmount) => {
    const givenRate = .0709;
    const actualRate = (903.87*12)/100000;
    const multiplier = actualRate/givenRate;
    return pct*multiplier*loanAmount;
}

function calcLoanAmount(){
    let dti = document.getElementById("dti");
    dti.innerText = (totalDebt()/totalIncome())
}

function totalDebt() {
    const yearlyMortgage = document.getElementById("mortgage").valueAsNumber*12;
    const yearlyDebtOther = document.getElementById("additional-debt").valueAsNumber*12;
    const loanAmount = document.getElementById("loan-amount").valueAsNumber;
    const percent = document.getElementById("interest-rate").valueAsNumber + .02; //the banks safety number for their DTI calculations is 2 points above their quoted rate
    
    const yealryPayment = yearlyLoanPayment(percent, loanAmount);
    
    const totalDebt = yearlyMortgage + yearlyDebtOther + yealryPayment;
    
    let payment = document.getElementById("payment");
    let totalMonthlyDebt = document.getElementById("monthly-debt");
    let totalYearlyDebt = document.getElementById("yearly-debt");
    let totalYearLoanPayment = document.getElementById("total-year-loan-payment");

    totalYearlyDebt.innerText = totalDebt;
    totalMonthlyDebt.innerText = totalDebt/12;
    payment.innerText = yealryPayment / 12;
    totalYearLoanPayment.innerText = yealryPayment; 
    
    return totalDebt;
}

function totalIncome() {
    const yearlyBaseIncome = document.getElementById("base-income").valueAsNumber;
    const yearlyOtherIncome = document.getElementById("additional-income").valueAsNumber;
    
    let yearlyIncome = document.getElementById("yearly-income");
    let monthlyIncome = document.getElementById("monthly-income");

    const totalIncome = yearlyOtherIncome + yearlyBaseIncome;

    yearlyIncome.innerText = totalIncome;
    monthlyIncome.innerText = totalIncome / 12;

    return totalIncome;
}

let calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click', calcLoanAmount);