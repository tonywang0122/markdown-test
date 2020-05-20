const Koa = require('koa');
const app = new Koa();

const matter = require('gray-matter');
const marked = require('marked');

const result = matter.read('./posts/test.md');
const html = marked(result.content)

console.log(result.data);

app.use(async ctx => {
    ctx.body = html;
});

app.listen(3000);

console.log('start at http://localhost:3000');