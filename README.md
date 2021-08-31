# Fitt
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

## Introduction

Fitt is a multi-page progressive web application made with Create React App. Its main features include light/dark theme toggling, image toggling, filtering and user authentication. It is responsive on mobile, tablet and desktop devices.

## Demo

https://fitt-83b46.web.app/

## Design

https://www.figma.com/file/lOCgcKa2wN9KKvVP1cNtyo/Exercise-App?node-id=0%3A1

## Components and Functionality

### Navbar.js

<div>
  <img width="100" alt="Screenshot 2021-08-31 at 09 05 47" src="https://user-images.githubusercontent.com/38283239/131466342-f62ba4bd-23a6-43b2-a58b-de2b285a5390.png">
<img width="100" alt="Screenshot 2021-08-31 at 09 05 59" src="https://user-images.githubusercontent.com/38283239/131466357-0319f7d7-6703-4a32-8c73-2a32a8cdc765.png">
</div>

The navbar is rendered on every page. It always renders **ThemeToggle.js** which displays a toggle for the user to switch between light and dark themes, the state of which persists as the user navigates through the site. It has the logo with a link to take the user back to the index and a link to log out. When a user is logged in, Home.js will render and the logout link will be displayed. When there is no user logged in, Landing.js will render and both the logout link and logo link will be visually hidden in the navbar.

### Landing.js

<div>
  <img width="100" alt="Screenshot 2021-08-31 at 08 47 10" src="https://user-images.githubusercontent.com/38283239/131463856-8bee812b-525a-4c1b-8aed-8bd26b348abf.png">
  <img width="100" alt="Screenshot 2021-08-31 at 08 47 25" src="https://user-images.githubusercontent.com/38283239/131463882-2078d77d-09b1-4fad-8d05-18e8041de4d7.png">
</div>

The user can sign in or log in. This page only renders when a user is logged out.

### Login.js

<div>
  <img width="100" alt="Screenshot 2021-08-31 at 08 55 21" src="https://user-images.githubusercontent.com/38283239/131466633-1c5cc962-7a6f-4dc3-9a48-5f7c1647665a.png">
  <img width="100" alt="Screenshot 2021-08-31 at 08 55 57" src="https://user-images.githubusercontent.com/38283239/131466629-b6a76a93-8479-4f3f-957f-866b950c7344.png">
  <img width="100" alt="Screenshot 2021-08-31 at 08 55 03" src="https://user-images.githubusercontent.com/38283239/131466635-0abcde76-ecab-4bc1-af17-769b081b5bae.png">
  <img width="100" alt="Screenshot 2021-08-31 at 08 56 13" src="https://user-images.githubusercontent.com/38283239/131466640-8cff6f25-c32a-492e-8c5f-1b442f3a5278.png">
</div>

This page allows the user to log in or, alternitavely, they can go back to the landing page or go to the sign up page or forgot password page.

When a user doesn't have an account, or they enter the wrong password an error message is shown.

**To improve:** 
*To improve the user experience, I will add a more detailed message for each case so that the user knows whether they need to sign up or if they have entered the wrong password.*

### Signup.js

<div>
  <img width="100" alt="Screenshot 2021-08-31 at 10 05 02" src="https://user-images.githubusercontent.com/38283239/131475648-b1196b82-2169-439d-a30b-a5a326a4bccb.png">
  <img width="100" alt="Screenshot 2021-08-31 at 09 55 47" src="https://user-images.githubusercontent.com/38283239/131475697-948d14e4-4792-431c-8c0e-40d076eaf383.png">
  <img width="100" alt="Screenshot 2021-08-31 at 09 56 23" src="https://user-images.githubusercontent.com/38283239/131475748-2e3591d2-43f6-4493-ac94-e21c7f8840ef.png">
  <img width="100" alt="Screenshot 2021-08-31 at 10 04 52" src="https://user-images.githubusercontent.com/38283239/131475656-733245d7-3ebc-4e13-9079-9986f453a3ee.png">
  <img width="100" alt="Screenshot 2021-08-31 at 09 55 57" src="https://user-images.githubusercontent.com/38283239/131475714-253ac946-490a-4bc3-badf-3f35a278bf7c.png">
  <img width="100" alt="Screenshot 2021-08-31 at 09 56 16" src="https://user-images.githubusercontent.com/38283239/131475783-46c41bd3-99f1-40a4-9daa-630071080154.png">
</div>

Here the user can sign up if they don't have an account (or link back to the log in page if they do). If sign up is successful, the user will automatically be logged in and will be able to see the home page rendered. If sign up is unsuccessful, this can be for one of two reasons: the passwords entered do not match or an there is an existing account associated with the email entered.

### ForgotPassword.js

<div>
  <img width="100" alt="Screenshot 2021-08-31 at 09 58 40" src="https://user-images.githubusercontent.com/38283239/131474006-62c33377-2557-4af2-92a1-6710bbeadaac.png">
   <img width="100" alt="Screenshot 2021-08-31 at 09 57 01" src="https://user-images.githubusercontent.com/38283239/131473946-6649a8e2-b5da-4694-bd1a-fc9f023a5ade.png">
  <img width="100" alt="Screenshot 2021-08-31 at 09 57 49" src="https://user-images.githubusercontent.com/38283239/131474368-b498dd9c-f363-4ef9-8275-fcbc4d3bb17b.png">
  <img width="100" alt="Screenshot 2021-08-31 at 09 58 47" src="https://user-images.githubusercontent.com/38283239/131474027-fb75bfb6-7f51-4315-aefe-529b32fa3531.png">
  <img width="100" alt="Screenshot 2021-08-31 at 09 57 10" src="https://user-images.githubusercontent.com/38283239/131474113-f623c0a8-6467-4422-941e-994ac5d16e0d.png">
  <img width="100" alt="Screenshot 2021-08-31 at 09 57 40" src="https://user-images.githubusercontent.com/38283239/131474398-604d3cce-cb13-441b-8eb0-2cfdb2b43cc9.png">
</div>

If the user has an account, they can get an email sent to them which contains a link to change their password.

### Home.js

<div>
  <img width="100" alt="Screenshot 2021-08-31 at 10 14 54" src="https://user-images.githubusercontent.com/38283239/131476683-2552c7ca-1ec1-41aa-bd6f-ab1845e46408.png">
  <img width="100" alt="Screenshot 2021-08-31 at 10 15 04" src="https://user-images.githubusercontent.com/38283239/131476707-32c9f8fa-8179-4371-8850-3efd7e2c4afc.png">
  <img width="100" alt="Screenshot 2021-08-31 at 10 15 51" src="https://user-images.githubusercontent.com/38283239/131476725-5ca6f89c-e8cd-4803-be39-78a8a2f13e4a.png">
  <img width="100" alt="Screenshot 2021-08-31 at 10 15 28" src="https://user-images.githubusercontent.com/38283239/131476696-99528973-3289-4683-9ed2-1f46284f6811.png">
</div>

Here the user can choose from a list of exercises fetched from an API. Eight exercises are displayed by default and eight more can be loaded with each click of the load more button until no more exercises are available - at which point the 'load more' button is disabled. Each time a user loads more, the window scrolls to the point where the new exercises are rendered.

The user can also filter which exercises are rendered by body area. Each time a filter is applied or if the user clicks on the logo in the navbar, we go back to the initial state and render only eight exercises.

**To improve:**
*As there can be a lot of exercises, I will make the navbar sticky so that the user can scroll back to the top of the page to change the filters more easily. I would also like to allow multiple filters to be active at a time.*

### ImageToggle.js

<div>
  <img width="285" alt="Screenshot 2021-08-31 at 10 21 36" src="https://user-images.githubusercontent.com/38283239/131477466-7ee22dcb-1ca7-4d1f-8e2d-2641034d8dbc.png">
<img width="284" alt="Screenshot 2021-08-31 at 10 21 42" src="https://user-images.githubusercontent.com/38283239/131477473-9295e3f0-c794-4fa7-86be-313f70787930.png">

</div>

An inclusive part of the design for this application is the image toggle, which allows the user to switch between male and female images by clicking the icon displayed in the bottom right corner of each image (both in the home page and details pages).

In the homepage I had to add a function to fix the first image returned from the API because the source for the female image was incorrect.

**To improve:**
*I plan to use the event.target from each of the gender icons, when clicked, to change the image only for the card that holds the icons, not all cards. I would also like to create a user profile page, where the user can toggle a setting to fix the gender of every image in the site - I would also like to add a check a box for the user to be able to choose that no gender should be specified (I will enabled this by default), in which case the images will be random and will feature both men and women - ensuring that one gender is never default.*

### Details.js

<div>
  <img width="100" alt="Screenshot 2021-08-31 at 10 18 27" src="https://user-images.githubusercontent.com/38283239/131477037-740f30ce-f2ce-4852-96d3-d0f5a345c0f8.png">
  <img width="100" alt="Screenshot 2021-08-31 at 10 18 50" src="https://user-images.githubusercontent.com/38283239/131477043-12f15dc4-1110-47f1-bc1b-6c5f8a8d1cac.png">
</div>

These pages have dynamic routes for each exercise, and a more detailed view of the exercise is displayed when a user links to it from the home page. To avoid fetching the data again for this componenet, I passed the excercise data as a prop with the link, along with the state of the image toggle so that if a female image is displayed on the home page when a user follows a link to a details page, the same image is show in the details page.

**To improve:**
*Going back to the home page from the details page (following the link in the navbar), I want the state of the image source (male or female) to be persisted. To do this, I plan to pass the state as a prop in **Navbar.js** using the location. Also, to ensure that the navbar is always visible for the user, I would like to either only allow scrolling in the text container in mobile (in desktop this is already enabled) or make the navbar sticky.*
