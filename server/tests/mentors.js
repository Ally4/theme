import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'

chai.use(chaiHttp);
chai.should();

describe('user test', () => {

let token_user = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiTXVnaXNoYSIsImxhc3ROYW1lIjoiQm9yaXMiLCJlbWFpbCI6ImJvbmhldXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkYTRQeUhzb2dQenowZnRwUjFSRnNGdXFBUXYwbXRiSVNjZlRGU2c5OUFTS0NFSlRaNjQxRk8iLCJiaW8iOiJUZWFjaGVyIiwib2NjdXBhdGlvbiI6IkRldmVsb3BlciIsImV4cGVydGlzZSI6IlB1YmxpYy1zcGVha2VyIiwiYWRkcmVzcyI6IlJ3YW5kYSIsInBvc2l0aW9uIjoiVXNlciIsImlhdCI6MTU2NjU1NjA3NH0.l0rULzkQlyaC3RKPRvvghmKLGVl1T6kmH867-OotASM'
let token_mentor = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJQYXRyaWNrIiwibGFzdE5hbWUiOiJSZW55IiwiZW1haWwiOiJwYXRvc0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRhNFB5SHNvZ1B6ejBmdHBSMVJGc0Z1cUFRdjBtdGJJU2NmVEZTZzk5QVNLQ0VKVFo2NDFGTyIsImJpbyI6IlRlYWNoZXIiLCJvY2N1cGF0aW9uIjoiZGV2ZWxvcGVyIiwiZXhwZXJ0aXNlIjoiUHVibGljLXNwZWFrZXIiLCJhZGRyZXNzIjoiUndhbmRhIiwicG9zaXRpb24iOiJVc2VyIiwiaWF0IjoxNTY2NTU1OTIxfQ.B3UXGSlTr6KMAAvNaUlX7VEy4gx6QQYO8Y6GiCphiNw'
let token_admin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGE0UHlIc29nUHp6MGZ0cFIxUkZzRnVxQVF2MG10YklTY2ZURlNnOTlBU0tDRUpUWjY0MUZPIiwicG9zaXRpb24iOiJVc2VyIiwiaWF0IjoxNTY2NTU2MTQzfQ.c5AaLyiTaYPVJIDioakFOZomcezk7Q8w2tPI9ximxZw'
 
it('should be able to get all mentors if the position is user', (done) => {
    chai.request(app)
      .patch('/api/v1/mentors')
      .set('token_user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwb3NpdGlvbiI6IkFkbWluIiwiaWF0IjoxNTY2NDc3MjU4fQ.noz6MTFgpCEE-gWuJwGl-3BzBRQmRHDRicIrLyorOEs')
      .end((err, res) => {
        res.body.status.should.be.equal(200);
      });
    done();
  });


  it('should not be able to get all mentors if the position is admin', (done) => {
    chai.request(app)
      .patch('/api/v1/mentors')
      .set('token_admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGE0UHlIc29nUHp6MGZ0cFIxUkZzRnVxQVF2MG10YklTY2ZURlNnOTlBU0tDRUpUWjY0MUZPIiwicG9zaXRpb24iOiJVc2VyIiwiaWF0IjoxNTY2NTU2MTQzfQ.c5AaLyiTaYPVJIDioakFOZomcezk7Q8w2tPI9ximxZw')
      .end((err, res) => {
        res.body.status.should.be.equal(404);
      });
    done();
  });

  it('should not be able to get all mentors if the position is admin', (done) => {
    chai.request(app)
      .patch('/api/v1/mentors')
      .set('token_admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiTkVOR08iLCJsYXN0TmFtZSI6IkFsbHkiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGE0UHlIc29nUHp6MGZ0cFIxUkZzRnVxQVF2MG10YklTY2ZURlNnOTlBU0tDRUpUWjY0MUZPIiwicG9zaXRpb24iOiJVc2VyIiwiaWF0IjoxNTY2NTU2MTQzfQ.c5AaLyiTaYPVJIDioakFOZomcezk7Q8w2tPI9ximxZw')
      .end((err, res) => {
        res.body.status.should.be.equal(403);
      });
    done();
  });

});