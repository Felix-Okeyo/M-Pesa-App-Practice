// variables
// datatype 
// function
    // arrow function => one_liner
    // parameters and function calls
 // if(condition // true){
    //      WE DO THIS
    // } else if(condition){}
    // else {} 

// OR    



let mpesaPin = [1234,3214,7654,6540,8765,1440]
let paybillList = [888880,247247,220220,324455,887766]
let balance = 1600
let prePaidAirtimeBalance = 200
let postPaidAirtimeBalance = 300

let safaricomMpesa = (param1,param2,param3) => {
     let option1 = prompt('1. Safaricom+\n2. M-PESA') 

    if(option1 == 1 || option1 == "safaricom+" || option1 == 'Safaricom' || option1 == 'Safaricom+'){  
        // safarom options
        let optionSaf = prompt('1. My Account \n2. M-Banking Services')
        if(optionSaf == 1 || optionSaf == "MY ACCOUNT" || optionSaf == "My Account"|| optionSaf == "my account"){
            let myAccountOption = prompt('1. Balance Enquiry \n2.Top-up \n3.Selfcare \n4.Customer Care')
            if (myAccountOption = 1){
                let balanceOption =prompt('1. Prepaid \n2. Postpaid')
                if (balanceOption ==1){
                    alert(`Your airtime balance is equals to ${prePaidAirtimeBalance}`)
                } else if (balanceOption == 2){
                    alert(`Your airtime balance is equals to ${postPaidAirtimeBalance}`)
                }
            }
        } else if (optionSaf ==2 ){
            letBankOption = prompt('1. Barclays Bank \n2. Co-Op Bank \n3. DTB \n4. Ecobank \n5. Equity Bank \n6. Family Bank')

        }

    }else if(option1 == 2 || option1 == 'mpesa'|| option1 == 'MPESA' || option1 == 'm-pesa' || option1=='M-PESA'){
        // m-pesa option
            let mpesaOption = prompt('1. Send money \n2.Withdraw Cash\n3.Lipa na M-PESA')

            if (mpesaOption == 1 || mpesaOption == 2) {

                // add send money
                alert('Platform is under construction. Try again later.')
            }else if (mpesaOption == 3 || mpesaOption == 'lipa na mpesa' || mpesaOption == 'lipa na M-pesa') {
                let lipaOPtion = prompt('1. Paybill\n2.Buy Goods and Services\n3. Pochi la biashara')

                if(lipaOPtion == 1){
                    let businessNumber = parseInt(prompt('Enter business number'))

                    // check if the given number is in our stored list of business numbers
                    if(param2.includes(businessNumber) && businessNumber.toString().length < 6 || businessNumber.toString().length > 5){
                        let accountNumber = prompt('Enter Account Number')
                        let enteredAmount = parseInt(prompt('Enter Amount'))
                        // entered amount cannot be more than the balance
                        // it cannot be less than 0
                        if(enteredAmount > 0 && enteredAmount <= param3){
                            let enteredPin = parseInt(prompt('Enter M-pesa PIN'))
                            // equal to 4. 
                            // it has to exist.
                            if(enteredPin.toString().length === 4 && param1.includes(enteredPin)){
                                let confirmation = confirm('Do you want to proceed with the paymensts')
                                if(confirmation ==true){
                                    alert(`You have successfully made the payments to PayPal number:${businessNumber} for account ${accountNumber}.\n Your new M-PESA balance is ${param3 - enteredAmount}. \n Thank you for banking with m-pesa.`)
                                }else{
                                    alert("Transaction has been cancelled. Please try again.")
                                }
                            }
                        }else{
                            alert('Insufficient funds. Please recharge your account and try again.')
                        }
                    }else{
                        alert('Please enter a valid business number')
                    }

                }else if (lipaOPtion == 2 || lipaOPtion == 3){
                    alert('Platform is under construction. Try again later.') 
                }
            }else{
                alert("Please select one of the above options")
            }

    }else{
        alert("Please select one of the above options")
    }
}

safaricomMpesa(mpesaPin,paybillList,balance)
