import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'

chai.use(chaiHttp);
chai.should();

describe('getting mentors test', () => {

    it('should be able to signin', (done) => {
        const user = {
            email: 'el.baba741@gmail.com',
            password: 'Aa12345',
        };
        chai.request(app)
            .post('api/v1/signin')
            .send(user)
            .end((error, res) => {
                res.body.status.should.be.equal(200);
            });
        done();
    });


    it('should not be able to signin when there is a wrong email', (done) => {
        const user = {
            email: 'el.babaxyz741gmail.com',
            password: 'Aa12345',
        };
        chai.request(app)
            .post('api/v1/signin')
            .send(user)
            .end((error, res) => {
                res.body.status.should.be.equal(400);
            });
        done();
    });

    it('should not be able to signin when there is a wrong password', (done) => {
        const user = {
            email: 'el.babaxyz741gmail.com',
            password: 'Aa123456',
        };
        chai.request(app)
            .post('api/v1/signin')
            .send(user)
            .end((error, res) => {
                res.body.status.should.be.equal(400);
            });
        done();
    });

    it('should not be able to signin when there is an missing field', (done) => {
        const user = {
            email: 'el.babaxyz741gmail.com',
        };
        chai.request(app)
            .post('api/v1/signin')
            .send(user)
            .end((error, res) => {
                res.body.status.should.be.equal(400);
            });
        done();
    });

    it('should not be able to signin when there is an empty field', (done) => {
        const user = {
            email: '',
            password: 'Aa123456',
        };
        chai.request(app)
            .post('api/v1/signin')
            .send(user)
            .end((error, res) => {
                res.body.status.should.be.equal(400);
            });
        done();
    });
    });