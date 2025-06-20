const ENV = process.env.ENV || "dev"; // Default to QA if no env is provided
const USER_ROLE = process.env.USER_ROLE || "b2c"; // Default role is admin

const config = {
  dev: {
    baseURL:
      "https://admin:admin@a1490790c1dev-store.occa.ocs.oraclecloud.com/en",
    users: {
      b2c: {
        username: "shalaka.patil@objectedge.com",
        password: "Happy%234",
      },
      b2b: {
        username: "qa_customer",
        password: "qa_customer_pass",
      },
    },
  },
  stage: {
    baseURL: "https://admin:admin@staging1.princessauto.com/en",
    users: {
      b2c: {
        username: "shalaka.patil+1802@objectedge.com",
        password: "Happy%234",
      },
      b2b: {
        username: "qa_customer",
        password: "qa_customer_pass",
      },
    },
  },
  prod: {
    baseURL: "https://www.princessauto.com/",
    users: {
      b2c: {
        username: "shalaka.patil@objectedge.com",
        password: "Happy%234",
      },
      b2b: {
        username: "qa_customer",
        password: "qa_customer_pass",
      },
    },
  },
};

// Export the config based on the selected environment and user role
module.exports = {
  baseURL: config[ENV].baseURL,
  username: config[ENV].users[USER_ROLE].username,
  password: config[ENV].users[USER_ROLE].password,
};