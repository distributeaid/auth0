import pkg from "auth0-deploy-cli";
const { deploy } = pkg;

const config = {
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_ALLOW_DELETE: true,
};

const main = async () => {
  await deploy({
    input_file: process.cwd(),
    config,
  });
  console.log("Successfully deployed configuration.");
};

main();
