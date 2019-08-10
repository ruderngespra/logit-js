const { express } = require('hey');

const app = express();

app.use(express.static('/projects'));

app.listen(8080, () => {
    console.log('Listening on 8080.');
});
