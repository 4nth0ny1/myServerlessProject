const responses = require("../common/API_Responses");

exports.handler = async (event) => {
  console.log("event", event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    return responses._400({ message: "missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    return responses._200(data[ID]);
  }

  return responses._400({ message: "no ID in data" });
};

const data = {
  1234: { name: "Anna Jones", age: 25, job: "journalist" },
  5678: { name: "Chris Smith", age: 52, job: "engineer" },
  9012: { name: "Tom Hague", age: 34, job: "lawyer" },
};
