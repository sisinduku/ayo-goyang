const mocha = require('mocha')
var chai = require('chai')
, expect = chai.expect
, should = chai.should();
const chaiHttp = require('chai-http')
const app = require("../app")
chai.use(chaiHttp)
// FIND ALL DATA
describe('get all score data', function () {
  it('should return the all score data from table', function (done) {
    chai.request(app)
    .get('/score')
    .end(function (err, response) {
      response.status.should.be.equal(200)
      response.body.should.be.an('array')
      done()
    })
  })
})
//FIND BY ID
describe('get score data', function () {
  it('should return one object ', function (done) {
    chai.request(app)
    .get('/score/59f9b460f060084c5c38df73')
    .end(function (err, response) {
      response.status.should.be.equal(200)
      response.body.should.be.an('object')
      done()
    })
  })
})
//POST DATA
describe('post record score player data', function () {
  it('should return the complate data after saved to the database', function (done) {
    chai.request(app)
    .post('/score')
    .type('form')
    .send({ 
      name: "Nathan",
      score: 10, 
      createdAt: "2017/12/10"
    })
    .end(function (err, response) {
      response.status.should.be.equal(200)
      response.body.should.be.an('object')
      response.body.should.have.property('_id')
      response.body.should.have.property('name')
      response.body.should.have.property('score')
      response.body.should.have.property('createdAt')
      done()
    })
  })
})
