# Financial Application 

> This is financial application for online transaction with the major features - Transfer money to other account , Credit and Withdrawal of money from your bank .

> This application allows two different kind of user to perform online transaction easily across globe - Customer ][ Merchant

## Customer - Based - Application 

### Implementation -

#### Initial Page 

> Upon visiting website if user is not signIn - user is sent to /api/auth/signIn page where - upon entering credentials user is able to login . If password is wrong signIn fails and if wrong user name is entered new user is created

#### Home Page

> Upon signIn user is redirected to Home Page 



#### Transfer Page

> This page consist of 3 different cards -->  ***_SentMoney , Balance , Transfer & Receive History_***

* Sent Money card is used to transfer money from user account to other registered user account 
* Balance card shows real time balance of account
* Transfer & Receive History shows recent amount transferred or received in the user account

#### Transaction Page

> This page consists of two button - ***_Deposit and Withdraw_***

 * [***Deposit***]
>> This page consists of 3 cards - ***_AddMoney , Balance , History_***

- Add Money card sent request to fake bank api and create a onRampTransaction whose status is _Processing_ until bank hits the wehook endpoint .
- Balance and History are similar to Transfer Page - balance and history card

* [***Withdraw***]
>> This page consists of 2 cards - ***WithdrawMoney , Balance***

- Withdraw Money card card work similar to Add Money card .



#### Account Page


#### Other things to mention --
- Transfer route uses transaction to rollback if at any stage implementation fails
- Web hook ( Backend ) - that deals banks request and update user database according and send response to back [written in express]

### Problem -

- No different signup page - leads to creation of unnecessary new user when user input wrong input 
- Using redirect on initial page to redirect user to either signIn page or home-page but every time user goes to initial page it is redirected to signIn page . Why ?
- There is no protection of page - if user is not signIn and try to go to any page directly or indirectly it does not redirect to signIn page
- Balance doesn't update instantly upon receiving amount 
- Transfer and Receive History does not add transfer or receive card instantly it need to be refreshed (state variable not added)
- Transfer route does not have locking feature (resolving 1 request per registered user) that could leads to negative balance if user send two simultaneous request for more than amount user holds 


### Improvement can be done -
- Input validation
- Different signUp page
- Hashing of the password
- Add Withdraw history
- Add Searching Bar and its result
- Type defining for object or variables using 


### Application 


## Merchant - Based - Application

This part is still in progress 