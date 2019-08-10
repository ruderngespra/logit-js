/* eslint-disable */
const express = require('express');
const app = express();
const compression = require('compression');
const csurf = require('csurf');

app.use(require('body-parser').json());

app.use(
    require('cookie-session')({
        secret: 'I am nearly always happy.',
        maxAge: 24 * 60 * 60 * 1000,
    })
);

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie('mytoken', req.csrfToken());
    next();
});

const pwUtils = require('./pwUtils.js');
const dbUtils = require('./dbUtils.js');

app.use(express.static('./public'));

app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/',
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.post('/register', (req, res) => {
    (async function() {
        try {
            let registrationData = req.body;
            const hashedPassword = await pwUtils.hashPassword(
                registrationData.password
            );
            registrationData.password = hashedPassword;
            const user_id = await dbUtils.addRowToUsersAndReturnId(
                registrationData
            );
            req.session = {
                ...req.session,
                user_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            };
            res.json({ success: true });
        } catch (err) {
            console.log('Error in /register: ', err.message);
            res.json({ sucess: false });
        }
    })();
});

/* eslint-enable */
// lg-start

app.post('/login', (req, res) => {
    (async function login() {
        console.log('req.body at /login: ', req.body);
        try {
            let loginData = req.body;
            const { password: passwordUser, mail } = loginData;
            const passwordHash = await dbUtils.getPasswordForSpecificMailInUsers(
                mail
            );
            const passwordIsCorrect = await pwUtils.checkPassword(
                passwordUser,
                passwordHash
            );
            if (passwordIsCorrect) {
                const userInfo = await dbUtils.getfirstNameLastNameIdForSpecificMailInUsers(
                    mail
                );
                req.session = { ...req.session, ...userInfo };
                res.json({ success: true });
            } else {
                return res.json({ sucess: false });
            }
            // lg-end
            /* eslint-disable */
        } catch (err) {
            console.log('Error in /login route: ', err.message);
            return res.json({ success: false });
        }
    })();
});

app.get('/welcome', (req, res) => {
    if (req.session.user_id) {
        res.redirect('/');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.get('*', function(req, res) {
    if (!req.session.user_id) {
        res.redirect('/welcome');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(8080, function() {
    console.log("I'm listening.");
});

/* eslint-enable */
