import { Api } from "@serverless-stack/resources";

export function MyStack({ stack }) {
  // Create an HTTP api
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
