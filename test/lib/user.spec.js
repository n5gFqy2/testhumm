
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const sinon = require('sinon');

const axios = require('axios');

const userServices = require("../../services/user");

// user Create
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
        const response = await userServices.userCreate(obj, token);
        response.status.should.equal(400);
    });
});


// user List

describe('List User OK', () => {
    let axion_res;

    let token = "token";
    let accountId = "accountId";
      
    beforeEach(async () => {
        // stub the items
        axion_res = sinon.stub(axios, "get").returns({
            data: [{"_id":"614c31c9e8b2490030c698ec","profile":{},"favorites":{"assets":[],"accounts":[],"products":[],"users":[],"billings":[],"summaries":[],"disims":[],"esims":[],"imsis":[]},"status":"active","username":"william.rey","email":"william.rey@testemail.com","permissions":[{"roles":["admin"],"_id":"614c31c9e8b2490030c698ed","accountId":"b0f663a1-a235-4d88-8d65-573caaa2c952"}],"created":"2021-09-23T07:50:33.746Z","lastAccess":"2021-09-27T13:21:51.334Z","id":"614c31c9e8b2490030c698ec","favorite":false},{"_id":"6151b83a249c2100301efd96","profile":{},"favorites":{"assets":[],"accounts":[],"products":[],"users":[],"billings":[],"summaries":[],"disims":[],"esims":[],"imsis":[]},"status":"active","username":"123","email":"1@1","permissions":[{"roles":["admin"],"_id":"6151b83a249c2100301efd97","accountId":"b0f663a1-a235-4d88-8d65-573caaa2c952"}],"created":"2021-09-27T12:25:30.670Z","id":"6151b83a249c2100301efd96","favorite":false},{"_id":"6151c070a7a17c00191608c0","profile":{},"favorites":{"assets":[],"accounts":[],"products":[],"users":[],"billings":[],"summaries":[],"disims":[],"esims":[],"imsis":[]},"status":"active","username":"13","email":"3@3","permissions":[{"roles":["admin"],"_id":"6151c070a7a17c00191608c1","accountId":"b0f663a1-a235-4d88-8d65-573caaa2c952"}],"created":"2021-09-27T13:00:32.464Z","id":"6151c070a7a17c00191608c0","favorite":false},{"_id":"6151c19bfa1a0400244ba025","profile":{},"favorites":{"assets":[],"accounts":[],"products":[],"users":[],"billings":[],"summaries":[],"disims":[],"esims":[],"imsis":[]},"status":"active","username":"12","email":"2@2","permissions":[{"roles":["admin"],"_id":"6151c19bfa1a0400244ba026","accountId":"b0f663a1-a235-4d88-8d65-573caaa2c952"}],"created":"2021-09-27T13:05:31.170Z","id":"6151c19bfa1a0400244ba025","favorite":false},{"_id":"6151c20c1481020012f2ba2d","profile":{},"favorites":{"assets":[],"accounts":[],"products":[],"users":[],"billings":[],"summaries":[],"disims":[],"esims":[],"imsis":[]},"status":"active","username":"14","email":"4@4","permissions":[{"roles":["admin"],"_id":"6151c20c1481020012f2ba2e","accountId":"b0f663a1-a235-4d88-8d65-573caaa2c952"}],"created":"2021-09-27T13:07:24.312Z","id":"6151c20c1481020012f2ba2d","favorite":false}],
            status: 200
        });
    });
    afterEach(() => {
        axion_res.restore();
    });

    it('check user', async () => {    
        const response = await userServices.userList(token,accountId);
        response.status.should.equal(200);
    });
});


describe('List User Unauthorized', () => {
    let axion_res;

    let token = "token";
    let accountId = "accountId";

    beforeEach(async () => {
        // stub the items
        axion_res = sinon.stub(axios, "get").returns({
            data: {
                code: "InvalidCredentials",
                message: ""
            },
            status: 401
        });
      });
      afterEach(() => {
        axion_res.restore();
      });

    it('List Unauthorized', async () => {   
        const response = await userServices.userList(token,accountId);
        response.status.should.equal(401);
    });
});