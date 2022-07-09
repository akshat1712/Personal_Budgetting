
# Idea
A Complete Tool to manage your daily & Montly Expenses without any hassle. Personal finance is important part of an individual life and decision we make are consequential. Budgetting your daily expenses is very necessary to get hold of your spending habits. This projects provides the same with an app. (●'◡'●)  

# Deployment 
Check the deployment here: https://personal-budgetting.herokuapp.com/

# Usage
* You can enter your amount & type of transaction and then press 'add transactions' button.
* New transactions will dynamically show in balance, history.
* At the end we have a donut chart to depict spending patterns, which is necessary to curb unnecessary spending.

![4](https://user-images.githubusercontent.com/75127394/177840841-a9959672-f414-4b71-973d-3a46c654d3dc.png)


# Technology Stack
Created Using MERN Stack

1. Front-End: Made an Interactive Front-End with Donut Charts & dynamic changing of balance using Context-API. Styling is done with Vanilla CSS. Our Global State store the transaction as a list, from where we can fetch data using provider function defined in appreducer.js . Updation of states is also done via provider function.

2. Back-End : Made up of MongoDB as Database, I am using MongoDB-Atlas as the database for deployment purpose. Communication with front-End is done via Express.js wiht standard HTTPs requests using axios.Implementation of back-end is done using routers for maintainability of code. 

3. Database: Schema for the database is ['Text','Amount','Date & Time'] with relevant data-types.

# Running in Local Machine
If you want to run/ modify the code in your local machine. then follow given steps.
* Clone the repository into a local folder
* Run **npm install** in root directory of app in terminal
* cd into **client** and run **npm install** also
* Modify the code as you want  
* Come back into root directory and then **npm run dev**
* Check the app on localhost:3000


Do Suggest Some changes for better utlization of the web-app. (❁´◡`❁)
