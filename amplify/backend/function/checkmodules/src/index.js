

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { v4: uuidv4 } = require('uuid');
exports.handler = async (event) => {
    console.log('summar');
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body:  uuidv4()
    };
};
