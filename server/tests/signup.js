// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../app'

// chai.use(chaiHttp);
// chai.should();

// describe('user test', () => {

// it('should be able to signup', (done) => {
//   const user = {
//     id: 1,
//     firstName: 'NENGO',
//     lastName: 'Ally',
//     email: 'el.ally741@gmail.com',
//     password: 'Aa1234',
//     address: 'kigali',
//     bio: 'Teacher',
//     occupation: 'Developer',
//     expertise: 'Public-speaker',
//     position: 'user'
//   };
//   chai.request(app)
//     .post('/api/v1/signup')
//     .send(user)
//     .end((err, res) => {
//       res.body.status.should.be.equal(400);
//     });
//   done();
// });

// it('should not be able to signup for duplicate', (done) => {
//   const user = {
//     id: 1,
//     firstName: 'NENGO',
//     lastName: 'Ally',
//     email: 'el.ally741@gmail.com',
//     password: 'Aa1234',
//     address: 'kigali',
//     bio: 'Teacher',
//     occupation: 'Developer',
//     expertise: 'Public-speaker',
//     position: 'user'
//   };
//   chai.request(app)
//     .post('/api/v1/signup')
//     .send(user)
//     .end((err, res) => {
//       res.body.status.should.be.equal(400);
//     });
//   done();

// });
// it('should not be able to signup for missing information', (done) => {
//   const user = {
//     firstName:'',
//     lastName: 'Ally',
//     email: 'el.ally741@gmail.com',
//     password: 'Aa1234',
//     address: 'kigali',
//     bio: 'Teacher',
//     occupation: 'Developer',
//     expertise: 'Public-speaker',
//     position: 'user'
//   };
//   chai.request(app)
//     .post('/api/v1/signup')
//     .send(user)
//     .end((err, res) => {
//       res.body.status.should.be.equal(400);
//     });
//   done();
// });


// });