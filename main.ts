import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    }
]);
    if (pinAnswer.pin===myPin){
    console.log("Correct Pin Code");

    let operationAns=await inquirer.prompt([
        {
            name:"operation",
            message: "Please Select Option",
            type: "list",
            choices: [ "withdraw","fast cash", "check Balance",]
        }
    ]);
       if (operationAns.operation = "withdraw") {
           let amountAns = await inquirer.prompt([{

                name: "amount",
                message: "Enter Your Amonut",
                type: "number",
           }])
           if (amountAns.amount > myBalance){
            console.log("Insufficent Balance");
            
           }
              else { myBalance -= amountAns.amount;

               console.log("Your Remaining Balance is:" + myBalance);}} 


else if (operationAns.operation = "fast cash"){
    let fast= await inquirer.prompt([{

        name: "fastcash",
        message: "Please select amount for withdraw",
        type: "list",
        choices: [1000,3000,5000,10000],
    }]);

}

       else if (operationAns.operation === "check Balance") {
        console.log("your remaining balance is:" + myBalance);
        
       
       
       
};

}