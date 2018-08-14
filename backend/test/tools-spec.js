/*Author: Pratik Shinde */

const chai = require("chai");
const chaiHttp = require("chai-http");

const expect = chai.expect;

const { app } = require("../index");

chai.use(chaiHttp);

describe("LiveSafe News", function() {

  it("Should list all user entries upon GET request", function() {
    return chai
      .request(app)
      .get("/data")
      .then(function(result) {
        expect(result).to.have.status(200);
        expect(result).to.be.json;
      });
  });
});
