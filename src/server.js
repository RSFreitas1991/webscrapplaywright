require('dotenv').config();
const app = require('./api');
const webScrapRoute = require('./routes/webScrapRoute');


const port = process.env.API_PORT || 3000;

app.use('/webScrap', webScrapRoute);


app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
