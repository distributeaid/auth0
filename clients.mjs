import pkg from "auth0";
const { ManagementClient } = pkg;

const management = new ManagementClient({
  token: process.env.AUTH0_API_V2_TOKEN,
  domain: process.env.AUTH0_DOMAIN,
});

const main = async () => {
  const clients = await management.getClients();
  clients
    .filter(({ global }) => global === false)
    .map(({ name, client_id }) => console.log("-", name, `(${client_id})`));
};

main();
