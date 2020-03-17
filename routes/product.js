const router = require("express").Router();
const fs = require("fs");
let productDatas = JSON.parse(
  fs.readFileSync("./data/products.json").toString()
);
if (!productDatas.data) {
  productDatas.data = [];
}

router.get("/", (req, res) => {
  //列表页面
  res.render("product/list.ejs", productDatas);
});
//新增页面
router.get("/new", (req, res) => {
  res.render("./product/new", {});
});
//form表单post请求 提交数据
router.post("/", (req, res) => {
  productDatas.data.push(req.body);
  fs.writeFileSync("./data/products.json", JSON.stringify(productDatas));
  //重定向,提交之后跳转到列表页面
  res.redirect("/products");
});

module.exports = router;
