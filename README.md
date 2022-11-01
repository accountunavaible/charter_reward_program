# Reward program designed by lewis zhu

## tools used

- react
- react-router-dom
- react-testing-library + jest
- express JS for fake data
- cors

## links

- /
  - home for description
- /login
  - login page
- /user
  - user page, differnet user has different points data
- /admin
  - for admin to see all users' points

## default account

- user1 123456
- user2 123456
- admin 123456

## quick notes

1. all the users data are store in memory for simple authentication, so if you refresh the page, it would be gone
2. all data are from express JS server, it is all mock data
3. not recommended for real application, since this is just to display the work
4. since we have the simple authentication, when user try to bypass using url, we will redirect them back to the login page

## how to run the project

1. cd fake_server

- enter `npm run start`
- which will lanuch the backend server with nodemon

2. open a new terminal

- enter `npm run start`
- which will lanuch the front end application

# Video


https://user-images.githubusercontent.com/46508156/199357072-f219b377-84ba-4439-84b2-37d9c0782f31.mp4



https://user-images.githubusercontent.com/46508156/199357080-cb73b97a-46ec-4cd3-825f-9919f6ae7270.mp4


