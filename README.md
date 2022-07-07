
A Complete Tool to manage your daily & Montly Expenses without any hassle. (●'◡'●)  

Check the deployment here: https://personal-budgetting.herokuapp.com/

Just Enter the Transaction and get a breakdown of expenses in form of a Donut Chart and get remaining balance easily.

![4](https://user-images.githubusercontent.com/75127394/177840841-a9959672-f414-4b71-973d-3a46c654d3dc.png)



Created Using MERN Stack

1. Front-End: Made an Interactive Front-End with Donut Charts & dynamic changing of balance using Context-API. Styling is done with Vanilla CSS. Our Global State store the transaction as a list, from where we can fetch data using provider function defined in appreducer.js . Updation of states is also done via provider function.

2. Back-End : Made up of MongoDB as Database, I am using MongoDB-Atlas as the database for deployment purpose. Communication with front-End is done via Express.js wiht standard HTTPs requests using axios.Implementation of back-end is done using routers for maintainability of code. 

3. Database: Schema for the database is ['Text','Amount','Date & Time'] with relevant data-types.

Do Suggest Some changes for better utlization of the web-app. (❁´◡`❁)
