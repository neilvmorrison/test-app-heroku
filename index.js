const Koa = require("Koa");
const logger = require("koa-logger");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const PORT = 4000;

const { testFunction } = require("./functions/testFunction");

router.get("/", (ctx) => {
  ctx.body = "Here is home";
});

router.get("/fuck", (ctx) => {
  ctx.body = "This is fuck";
});

router.get("/test", async (ctx) => {
  ctx.body = await testFunction();
});

app.use(logger());
app.use(router.routes());
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
