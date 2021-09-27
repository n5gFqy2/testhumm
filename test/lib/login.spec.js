
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const sinon = require('sinon');

const axios = require('axios');

const LoginServices = require("../../services/login");

// login
describe('Login OK', () => {
    let axion_res;
    beforeEach(async () => {
        // stub the items
        axion_res = sinon.stub(axios, "post").returns({
            data: {
                token: 'token', 
                status: 200, 
                _id: '_id'
            },
            status: 200
        });
    });
    afterEach(() => {
        axion_res.restore();
    });

    it('check login', async () => {    
        const response = await LoginServices.login("user", "pass");
        response.status.should.equal(200);
    });
});


describe('Login Unauthorized', () => {
    let axion_res;
    beforeEach(async () => {
        // stub the items
        axion_res = sinon.stub(axios, "post").returns({
            data: {
                token: 'token', 
                status: 401, 
                _id: '_id'
            },
            status: 401
        });
      });
      afterEach(() => {
        axion_res.restore();
      });

    it('Login Unauthorized', async () => {   
        const response = await LoginServices.login("user", "pass");
        response.status.should.equal(401);
    });
});