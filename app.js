require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const indexRouter = require('./routes/index');
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dev_db_url = `mongodb+srv://${process.env.user_name}:${process.env.password}@cluster0.vndnniu.mongodb.net/${process.env.database}?retryWrites=true&w=majority`;
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

const port = 5000;
app.listen(port, () => {
  console.log(`app is listening at port ${port}`)
})

module.exports = app;
