//TAYLOR CHANGES: 
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const passportJWT = require('passport-jwt');
// const ExtractJwt = passportJWT.ExtractJwt;
// const JWTStrategy = passportJWT.Strategy;
// const bcrypt = require('bcrypt');
// const User = require("../models/user");
// const keys = require("./keys");

// passport.use(new LocalStrategy({
//   usernameField: "email"
// }, async (email, password, done) => {
//   try {
//     const user = await User.findOne({ email });
//     // Check if user exists
//     if (!user) {
//       return done('Incorrect Username / Password');
//     }
//         // Check password
//     const isMatch = await bcrypt.compare(password, user.password)
//     if (isMatch) {
//       return done(null, user)
//     } else {
//       return done('Incorrect Username / Password');
//     }
//   } catch (error) {
//     done(error);
//   }
// }));

// passport.use(new JWTStrategy({
//     jwtFromRequest: req => req.cookies.jwt,
//     secretOrKey: keys.secretOrKey,
//   },
//   (jwtPayload, done) => {
//     if (Date.now() > jwtPayload.expires) {
//       return done('jwt expired');
//     }

//     return done(null, jwtPayload);
//   }
// ));

// passport.serializeUser(function(user, cb) {
//   console.log('serialize USER!', user);
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   console.log('deserialize OBJ!', obj);
//   cb(null, obj);
// });

// module.exports = passport;
// // OLD VALUES:
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//if it doesn't work ExtractJwt.fromHeader("authorization")
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
 passport.use(
   new JwtStrategy(opts, (jwt_payload, done) => {
     User.findById(jwt_payload.id)
       .then(user => {
         if (user) {
           return done(null, user);
         }
         return done(null, false);
       })
       .catch(err => console.log(err));
   })
 );
};