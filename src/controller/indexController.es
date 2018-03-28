import indexModel from '../models/indexModel'
const indexController = {
    index() {
        return async(ctx, next) => {
            if (ctx.request.header['x-pjax']) {
                ctx.body = '<x-praise class="x-tag"></x-praise>'
            } else {
                ctx.body = await ctx.render('index.html', function() {
                    title: '大拇指点赞'
                })
            }
        }
    },
    star() {
        return async(ctx, next) => {
            if (ctx.request.header['x-pjax']) {
                ctx.body = '<x-star class="x-tag"></x-star>'
            } else {
                ctx.body = await ctx.render('star.html', function() {
                    title: '星星点赞'
                })
            }
        }
    },
    update() {
        return async(ctx, next) => {
            const indexM = new indexModel(ctx)
            ctx.body = await indexM.updateNum()
        }
    }
}
// 导出该方法给 initController.js 文件使用
export default indexController