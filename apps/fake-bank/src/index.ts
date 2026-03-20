import express from "express"

const app = express() ;

app.get("/credit" , async ( req , res ) => {
    const paymentDetail = {
        amount : req.body.amount ,
        accountDetail : req.body.userId
    }

    return res.status(200).json({
        token : "something" , 
        url : "some-url"
    })
})

app.put("/some-url" , async (req , res) => {

    // verify and validate user input

    const bankResponse = await fetch("http://localhost:3002/bankHit" , {
        method : "PUT" , 
        headers : {
            "Content-Type" : "application/json" 
        } ,
        body : JSON.stringify({
            // it will be getting all these from somewhere else
            token : req.body.token , 
            userId : req.body.userId ,
            amount : req.body.amount
        })
    }) ;
    const data = await bankResponse.json() ;

    return res.json({
        got : data
    })
})

app.listen(3003) ;


/*

Banking api will receive a request from the payent gateway application - (which it need to verify that it received that from the payment gateway application )

-- user detail of payment app are sent to bank mainly amount
after receiving it will send payment application a special url that with some token that will application show it to frontend (ui) 
-- bank return a token created of user to application which is used to create a onRampTransaction for user 

and the request from the payment application ends with creation of onRampTransaction and returning a bank api to frontend

-- user will enter his bank detail so that bank can verify user 
user will enter her details in the web page and when user finish the task of filling the page bank verfiy it and it send a request to webhook server to update user credit or withdraw - 

and upon webhook response transaction is completed 

*/