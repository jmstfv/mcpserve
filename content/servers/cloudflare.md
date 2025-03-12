---
title: Cloudflare
description: Deploy, configure, and query your resources on the Cloudflare developer platform, such as Workers/KV/R2/D1.
category: Cloud Platforms
features:
- Cloud Services
- API Management
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
featured: true
github_url: https://github.com/cloudflare/mcp-server-cloudflare
website_url: https://www.cloudflare.com/
logo: /assets/images/logos/cloudflare.svg
license: Apache 2.0
free: true
---

## Overview

The Cloudflare MCP server acts as a bridge between Large Language Models (LLMs) and Cloudflare's API. Leveraging the Model Context Protocol (MCP), it enables users to manage their Cloudflare account using natural language commands through MCP clients like Claude Desktop. This simplifies tasks such as deploying Workers, querying D1 databases, and managing KV namespaces and R2 buckets.

## Use Cases

The Cloudflare MCP server provides a set of tools to interact with various Cloudflare services:

- **Cloudflare Workers Management:** Create, retrieve, update, and delete Cloudflare Workers, allowing for programmatic control over serverless functions.
- **KV Store Management:** Manage Cloudflare KV namespaces, including listing namespaces, getting, putting, listing, and deleting keys and values.
- **R2 Storage Management:** Handle Cloudflare R2 buckets and objects, with functionalities for listing, creating, deleting buckets, and listing, getting, putting, and deleting objects.
- **D1 Database Management:** Interact with Cloudflare D1 databases, enabling listing, creating, and deleting databases, as well as executing SQL queries.
- **Analytics Retrieval:** Obtain analytics data for Cloudflare domains, covering metrics like requests, bandwidth, threats, and page views within specified date ranges.

## Example

To use the Cloudflare MCP server, first install it by running the following command in your terminal. For installation details, please refer to the [Github repository](https://github.com/cloudflare/mcp-server-cloudflare).

    npx @cloudflare/mcp-server-cloudflare init

After installation and restarting Claude Desktop, you can use natural language commands to interact with your Cloudflare account. For example, to list your Cloudflare Workers, you can use a prompt like:

`List all my Cloudflare Workers`

This command will be interpreted by Claude Desktop and translated into calls to the Cloudflare MCP server, which in turn interacts with the Cloudflare API to retrieve and display the worker list. Similar natural language commands can be used for other supported operations like managing KV, R2, D1, and retrieving analytics.
