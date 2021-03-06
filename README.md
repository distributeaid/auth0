# Distribute Aid auth0 configuration

![Deploy auth0 configuration](https://github.com/distributeaid/auth0/workflows/Deploy%20auth0%20configuration/badge.svg?branch=saga)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://dashboard.mergify.io/badges/distributeaid/auth0&style=flat)](https://mergify.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

auth0 configuration for Distribute Aid.

> Auth0 supports continuous integration and deployment (CI/CD) of Auth0 tenants
> through their source control extensions, and integration into existing CI/CD
> pipelines using the
> [Deploy CLI tool](https://auth0.com/docs/extensions/deploy-cli-tool).

See
[auth0-deploy-cli / examples](https://github.com/auth0/auth0-deploy-cli/tree/master/examples/directory)
for available configuration options.

## Domain

The auth0 domain is `distributeaid.eu.auth0.com`.

## Client IDs

After a successfull deployment, the client IDs will be printed by the GitHub
action.

## Adding a new client

You can either make a copy of one of the existing configurations in [clients](./clients) or use the auth0 web UI to configure a new client and the run [export.mjs](./export.mjs) to export the configuration to file and commit.
