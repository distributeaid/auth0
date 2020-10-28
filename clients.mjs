import pkg from "auth0";
const { ManagementClient } = pkg;
import request from "request";
import { promisify } from "util";

const options = {
  method: "POST",
  url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    client_id: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
    client_secret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
    audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
    grant_type: "client_credentials",
  }),
};

const main = async () => {
  const res = await promisify(request)(options);
  const { access_token } = JSON.parse(res.body);

  const management = new ManagementClient({
    token: access_token,
    domain: process.env.AUTH0_DOMAIN,
  });
  const clients = await management.getClients();
  clients
    .filter(({ global }) => global === false)
    .map(({ name, client_id }) => console.log("-", name, `(${client_id})`));
};

main();
