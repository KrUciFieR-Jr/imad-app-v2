var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles{ 
    'articleone'= {
    
  title : 'Article One',
  heading : 'Article One',
  date : 'March 11 2017',
  content :`<p>This is Karthik Nair and i study in DJ Sanghvi College of Enginneering.</p>
        
        <p>Field - Computer Science</p>
        
        <p>Year - 2nd Year </p>
        
        <p>CGPA - 8.7</p>`
    
},
  'articletwo' = {
    
  title : 'Article One ',
  heading : 'Article One',
  date : 'March 11 2017',
  content :`<p>This is Karthik Nair and i study in DJ Sanghvi College of Enginneering.</p>
        
        <p>Field - Computer Science</p>
        
        <p>Year - 2nd Year </p>
        
        <p>CGPA - 8.7</p>`
    
},
  'articlethree' = {
    
  title : 'Article One ',
  heading : 'Article One',
  date : 'March 11 2017',
  content :`<p>This is Karthik Nair and i study in DJ Sanghvi College of Enginneering.</p>
        
        <p>Field - Computer Science</p>
        
        <p>Year - 2nd Year </p>
        
        <p>CGPA - 8.7</p>`
    
}
    
};

function createTemplate(data){
var title = data.title;
var content = data.content;
var date = data.date;
var heading = data.heading;

var htmlTemplate = `<html>

<head>
    <title>${title}</title>
    <meta name = "viewport" content = "width-device-width,intial-scale = 1" />
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div>
        
        <a href="/">Home</a>
    </div>
    <hr/>
    <h3>${heading}</h3>
    <div>
        ${date}
    </div>
    <div>
        ${content}
    </div>
    
    </div>
</body>

</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone', function (req, res) {
  res.send(createTemplate(articles[articleone]));
});
app.get('/articletwo', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
   res.send(createTemplate(articles[articletwo]));
});
app.get('/articlethree', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
   res.send(createTemplate(articles[articlethree]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
