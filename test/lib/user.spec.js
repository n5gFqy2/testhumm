
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const sinon = require('sinon');

const axios = require('axios');

const userServices = require("../../services/user");

// user
describe('Create User OK', () => {
    let axion_res;

    let token = "token";
    let obj = {
        accountId: "b0f663a1-a235-4d88-8d65-573caaa2c952",
        username: "13",
        password: "13",
        email: "3@3",
        status: "active",
        permissions: [
          {
            accountId: "b0f663a1-a235-4d88-8d65-573caaa2c952",
            roles: [
              "admin"
            ]
          }
        ]
      };

      
    beforeEach(async () => {
        // stub the items
        axion_res = sinon.stub(axios, "post").returns({
            data: {
                    profile: {},
                    favorites: {
                        assets: [],
                        accounts: [],
                        products: [],
                        users: [],
                        billings: [],
                        summaries: [],
                        disims: [],
                        esims: [],
                        imsis: []
                    },
                    status: "active",
                    _id: "6151c070a7a17c00191608c0",
                    username: "13",
                    email: "3@3",
                    permissions: [
                        {
                            roles: [
                                "admin"
                            ],
                            accountId: "b0f663a1-a235-4d88-8d65-573caaa2c952"
                        }
                    ],
                    setup: {},
                    devices: []
            },
            status: 200
        });
    });
    afterEach(() => {
        axion_res.restore();
    });

    it('check user', async () => {    
        const response = await userServices.userCreate(obj, token);
        response.status.should.equal(200);
    });
});


describe('user Unauthorized', () => {
    let axion_res;

    let token = "token";
    let obj = {
        accountId: "b0f663a1-a235-4d88-8d65-573caaa2c952",
        username: "13",
        password: "13",
        email: "3@3",
        status: "active",
        permissions: [
          {
            accountId: "b0f663a1-a235-4d88-8d65-573caaa2c952",
            roles: [
              "admin"
            ]
          }
        ]
      };


    beforeEach(async () => {
        // stub the items
        axion_res = sinon.stub(axios, "post").returns({
            data: {
                code: "BadRequest",
                message: "JWT not found"
            },
            status: 400
        });
      });
      afterEach(() => {
        axion_res.restore();
      });

    it('user Unauthorized', async () => {   
        try { 
            await userServices.userCreate(obj, token);
        } catch(e) {
            e.status.should.equal(400);
        }
    });
});