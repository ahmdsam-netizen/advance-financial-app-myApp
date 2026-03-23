# Financial Application 

> This is financial application for online transaction with the major features - Transfer money to other account , Credit and Withdrawal of money from your bank .

> This application allows two different kind of user to perform online transaction easily across globe - Customer ][ Merchant

## Customer - Based - Application (NextJS application)

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

- What are disadvantage of using middleware not getServerSession on each page ?
- What should be logic in middleware file ?

### Problem -

- No different signup page - leads to creation of unnecessary new user when user input wrong input -> Solve : signup and signin page are created and signin opens everytime user is not login and is sent to api/auth/signin
- There is no protection of page - if user is not signIn and try to go to any page directly or indirectly it does not redirect to signIn page -> Solve : there is protection
- Transfer and Receive History does not add transfer or receive card instantly it need to be refreshed (state variable not added) -> Solve : upon sending money it re-renders - Balance card and History
- Transfer route does not have locking feature (resolving 1 request per registered user) that could leads to negative balance if user send two simultaneous request for more than amount user holds 
- Not able to reach initial page - don't know the reason
- Web hook is not working properly due to package and tsconfig file - not set properly


### Improvement can be done -
- Add middlewares into your code to protect route : Done
- Add server action for connecting backend from frontend : Learn more
- Input validation : Need to to done
- Different signUp page : Done
- Hashing of the password : Not required until today
- Add Withdraw history : Easy bit
- Add Searching Bar and its result : Easy bit
- Type defining for object or variables using : Is necessary but not explicitly need to learn


### Application 


## Merchant - Based - Application

This part is still in progress 