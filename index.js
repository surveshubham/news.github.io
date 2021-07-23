console.log("This is my index js file");

// Grab the news container
let card = document.getElementById('card');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', "http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=6ef903b0b4a5495a8599f237a874370b", true);


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let article =  json.articles;
        console.log(article);

        let CHtml = "";
        article.forEach(function(element, index) {
          // console.log(element, index)
          let news = `
          <div class="card" >
                <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                 <div class="card-body">
                  <h5 class="card-title">${element["title"]}</h5>   
                  <p class="card-text">${element["description"]}</p>
                <a href="${element["url"]}" class="btn btn-primary">read more</a>
                 </div>
            </div>
          `;
  
          CHtml += news;
      });
      card.innerHTML = CHtml;
    }
        else{
            console.error("error appear")
        }
 }
     



xhr.send()



console.log("This is my index js file");

// Grab the news container
let cards = document.getElementById('cards');

// Create an ajax get request
const xhrs = new XMLHttpRequest();
xhrs.open('GET', "https://newsapi.org/v2/top-headlines?country=in&apiKey=6ef903b0b4a5495a8599f237a874370b", true);


// What to do when response is ready
xhrs.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let article =  json.articles;
        console.log(article);

        let CHtml = "";
        article.forEach(function(element, index) {
          // console.log(element, index)
          let news = `
          <div class="card" >
                <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                 <div class="card-body">
                  <h5 class="card-title">${element["title"]}</h5>   
                  <p class="card-text">${element["description"]}</p>
                <a href="${element["url"]}" class="btn btn-primary">read more</a>
                 </div>
            </div>
          `;
  
          CHtml += news;
      });
      cards.innerHTML = CHtml;
    }
        else{
            console.error("error appear")
        }
 }
     
xhrs.send()












