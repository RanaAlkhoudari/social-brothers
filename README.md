# Social-brothers

The project contains 3 pages (routes):

- A Homepage to display all the blogs and for users to create a new blog.

- A Blogpage to display all the blogs and load more pages using the pagination.

- Notfound page


## Getting Started

To get started you can simply clone the repo and install the dependencies in the root folder:

Install ```npm install```

Run ```npm start```


## Libraries/Frameworks

- react: UI library

- react-router-dom: The router components of react

- axios: to make HTTP requests

- react-paginate: to render a pagination


## Api Calls

1. GET- get all the gategories  ``` /categories ```
 
2. POST- add new blog   ```/posts```
 
3. GET- get blogs according to the page number  ``` /posts?page={pageNr}```
 




## Structure

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── BlogPage.css
    ├── HomePage.css
    ├── SBlogo.svg
    ├── components
    │   ├── AddProduct.js
    │   ├── Blog.js
    │   ├── BlogCards.js
    │   ├── BlogImage.js
    │   ├── Error.js
    │   ├── Footer.js
    │   ├── HomeCards.js
    │   ├── HomeImage.js
    │   ├── Pagination.js
    │   └── Wrapper.js
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── BlogPage.js
    │   └── HomePage.js
    ├── reportWebVitals.js
    └── setupTests.js
```
 



Note: The Api gives the data as just 10 blogs according to the page number, so after creating a new blog, the user can't see it in the right corner. 
It is possible to refetch it but the number of all the pages is anonymous, the user can see it by clicking many times on the Meer Laden button.



![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/63319487/138163969-a4161e15-385a-49c1-8b32-0f5d4784292c.gif)

