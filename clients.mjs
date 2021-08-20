import { ManagementClient } from "auth0";
import * as https from "https";

const main = async () => {
  const req = https.request(
    {
      method: "POST",
      host: process.env.AUTH0_DOMAIN,
      path: "/oauth/token",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    },
    async (res) => {
      const data = [];
      res.on("data", (d) => data.push(d));
      res.on("end", async () => {
        if (res.statusCode > 399)
          throw new Error(Buffer.concat(data).toString());
        const { access_token } = JSON.parse(Buffer.concat(data));

        const management = new ManagementClient({
          token: access_token,
          domain: process.env.AUTH0_DOMAIN,
        });
        const clients = await management.getClients();
        clients
          .filter(({ global }) => global === false)
          .map(({ name, client_id }) =>
            console.log("-", name, `(${client_id})`)
          );
      });
    }
  );

  req.write(
    JSON.stringify({
      client_id: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
      client_secret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
      audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
      grant_type: "client_credentials",
    })
  );

  req.end();
};

main();
