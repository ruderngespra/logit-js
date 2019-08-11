const { express } = require('hey');
console.log('express :', express);
const { sdf } = require('hey');
console.log('sdf :', sdf);
const { sdafsdfsad } = require('hey');
console.log('sdafsdfsad :', sdafsdfsad);

const app = express();
console.log('app :', app);

app.use(express.static('/projects'));

app.listen(8080, () => {
    console.log('Listening on 8080.');
});

function test() {
    var hello = 3;
    console.log('hello :', hello);
    hello++;
}

function test2(hey, ho, he) {
    console.log('he :', he);
    console.log('ho :', ho);
    console.log('hey :', hey);
    hello = he + ho;
}

function test3() {
    var hello = 3;
    console.log('hello :', hello);
    function test4() {
        var hello = 3;
        console.log('hello :', hello);
    }
    hello++;
}

const gree = (heyse, eh, ehh) => {
    console.log('ehh :', ehh);
    console.log('eh :', eh);
    console.log('heyse :', heyse);
    return heyse;
};
console.log('gree :', gree);
