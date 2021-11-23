const LocalStrategy = require('passport-local').Strategy


module.exports = new LocalStrategy({
        usernameField: 'usn',
        passwordField: 'pw',
        session: false
    },
    (username, password, done) => {
        if (username === 'admin' && password === '123')
            done(null, {id: 1, username: 'admin', fullName: 'ABC'});
        else
            done(null, false);


        // User.findOne({ username: username }, function (err, user) {
        //     if (err) { return done(err); }
        //     if (!user) { return done(null, false); }
        //     if (!user.verifyPassword(password)) { return done(null, false); }
        //     return done(null, user);
        // });
    });