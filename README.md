# Google Books

## View Application:
[https://mrkrog.github.io/googleBooks/](https://mrkrog.github.io/googleBooks/)

## Overview:

Google Book is a take home challenge from 8th Light. This web app allows you to search for books from googles api and then save and view all of them together. The requirements for this project were:

- Type in a query and display a list of 5 books matching that query.
- Each item in the list should include the book's author, title, and publishing company.
- A user should be able to select a book from the five displayed to save to a “Reading List”
- View a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books’s account features.

## Preview:

Home Page Search           |  View Saved Books
:-------------------------:|:-------------------------:
<img src="src/media/Home.jpg" alt="Home Page">  |  <img src="src/media/Favorite.jpg" alt="Favorite">

## Project Workflow:

Below was the workflow that I followed in creating this application.
1. I initially started by finding the Google Books API and the correct URI to allow for search queries. From here I started to map out the JSON response from the data you would get back.
2. After this I decided to use react to visually interact and display a users results. I quickly setup a project, additionally I setup Redux as a way of holding state through different components. From this point I built my underlying component/container structure of my app. I knew App would be my main Class that would house my BookDisplay, Search, Books and favorited reading list.
3. App would be the place where I would want to make my fetch call to the Google Books API, which would then store the retrieved query into Redux state.
4. I then built a search controlled form to allow for dynamic searches by a user that would initiate the fetch call living in App to fetch and then store the searched queries.
5. Next I built out the BookDisplay component that would house all the Book components from the users searched query. After the fetch call had successfully completed and stored all results into an array in Redux, I had the BookDisplay component map over the saved array and pass down respective props to individual Books.
6. This lead me to flush out my Book component that would display each individual book onto the  DOM. Additionally I added a method here that would allow the user to save the book into their "reading lists", which could then be viewed later. Also I built out the functionality to save and unsave any book displayed here into the savedBooks array in Redux. I wanted the ability for a user to query a different search of books and still have access to any saved book from earlier. So from here I knew I needed two different types of actions ("setSaveBook" and "setRemoveBook"), one for saving the book and another if they wanted to unsave any book from their reading list. After testing this idea, I noticed that if a user favorited a book, and then made a new search, if they came back to the original search where they favorited their book, it would no longer show the correct status. I decided to make another action called "updateBookDisplay" that would check the id for each book from the search query and cross reference that to any user saved book. If a book from the search matched an already saved book, then it would correctly display the favorited status.
7. Next I needed to build the component that would display to the user all their favorited books from their searches. I started by building a button that would only be displayed to the user if the the savedBooks array in redux had a length greater than 0. Next I built an onClick method that would then trigger a boolean change to modal state connected stored in App. When clicked, it would turn modal to true, which would display the actual Modal component that would display their "reading list". The next part was pretty simple and the same as earlier when having BookDisplay map over all the books. For the Modal display, I instead mapped over all the saved books in redux and pass down the props to the same Book component. This allowed the user have the same functionality with any book in both the Modal display and BookDisplay.
8. While building out each component I would style and setup testing for each component.

## Getting Started:

These instructions will get a copy of the project up and running on your local machine for usage and testing purposes. You can also use the live application here: [https://mrkrog.github.io/googleBooks/](https://mrkrog.github.io/googleBooks/)

### Frontend
clone down the repo: ```$ git clone https://github.com/MRKrog/GoogleBook```

cd into directory and run npm install: ```$ npm install```

Start up in your terminal: ```$ npm start ```


### Technologies Used
Google Book was built using:
- [React.js](https://reactjs.org/)
- [Redux.js](https://redux.js.org/)
- [SCSS](https://sass-lang.com/)
- [Google Book API](https://developers.google.com/maps/documentation/)

And tested using:
- [Enzyme](https://airbnb.io/enzyme/) & [Jest](https://airbnb.io/enzyme/docs/guides/jest.html)

## Contributors
- [Michael Krog](https://github.com/MRKrog)

---
**[Back to top](https://github.com/MRKrog/googleBooks/blob/master/README.md)**
