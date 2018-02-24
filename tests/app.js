const request = require('supertest')
const app = require('../app-o')

describe('GET /index/update ', function () {
  it('test update', function (done) {
    request(app.listen())
            .get('/index/update')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
            	if (res.data === 1) return done(err)
            	done()
            })
  })
})
