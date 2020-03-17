var createError = require("http-errors"); //http请求响应的异常处理
var express = require("express"); //web应用框架
var path = require("path"); //处理路径
var cookieParser = require("cookie-parser"); //cookie解析
var logger = require("morgan"); //日志

var indexRouter = require("./routes/index"); //路由模块的引入
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
//设置视图，用户见到的页面全部在views目录里
//__dirname 表示当前项目的根目录
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//静态资源目录
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter); //如果请求路径为/,会进到indexRouter这个路由里
app.use("/users", usersRouter); //如果请求路径为/users,进到usersRouter里

app.use("/products", require("./routes/product"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
