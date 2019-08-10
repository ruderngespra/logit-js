const { express } = require('express');

console.log('5:0 ', 'express: ', express);
const app = express();
console.log('7:0 ', 'app: ', app);
app.use(express.static('/projects'));
app.listen(8080, () => {
    console.log('10:2 ', 'Listening on 8080.');
});
