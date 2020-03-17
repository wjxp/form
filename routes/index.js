var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  //res.render(参数1,参数2) 参数1对应视图（views）目录里的文件名，参数2是表示传给参数1对应的模板的数据
  res.render("index", {
    title: "NZ-1905",
    schoolName: ["BK", "DL", "HZ"],
    richHTML: "<h1>这是一个富文本内容</h1>"
  });
});

module.exports = router;
