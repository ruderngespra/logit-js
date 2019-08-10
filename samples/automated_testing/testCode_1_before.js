const { express } = require('hey');
const { sdf } = require('hey');
const { sdafsdfsad } = require('hey');

const app = express();

app.use(express.static('/projects'));

app.listen(8080, () => {
    console.log('Listening on 8080.');
});

function test() {
    var hello = 3;
}

function test2(hey, ho, he) {
    console.log('he :', he);
    console.log('ho :', ho);
    console.log('hey :', hey);
    var hello = 3;
    console.log('hello :', hello);
}

function test3() {
    var hello = 3;
}

function test4() {
    var hello = 3;
}

const gree = (heyse, eh, ehh) => heyse;
