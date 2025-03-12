---
title: Tinybird
description: Interact with Tinybird serverless ClickHouse platform
category: Databases
features:
- Database Management
- Data Summarization and Analysis
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/tinybirdco/mcp-tinybird
website_url: https://www.tinybird.co/
license: Apache 2.0
free: true
---

## Overview

The Tinybird MCP server is designed to enable seamless interaction between any Model Context Protocol (MCP) client and a Tinybird Workspace. It acts as a bridge, allowing users to query Tinybird Data Sources, retrieve results from Tinybird API Endpoints, and push Datafiles directly from their MCP client. The server supports both SSE and STDIO modes, offering flexibility for different integration needs.

## Use Cases

Here are a few use cases for the Tinybird MCP server:

- **Data Exploration:** Allows AI agents to explore and analyze data stored in Tinybird Data Sources by running SQL queries via the `run-select-query` tool.
- **API Endpoint Integration:** Enables retrieval of insights from pre-built Tinybird API Endpoints using the `request-pipe-data` tool, making it easy to access and utilize existing analytical pipelines.
- **Data Ingestion:** Facilitates pushing local datafiles into Tinybird using the `push-datafile` tool, allowing for automated data uploads and integration with AI workflows.

## Example

To use the Tinybird MCP server, first follow the installation instructions using `smithery` or `mcp-get` as outlined in the [Github repository](https://github.com/tinybirdco/mcp-tinybird#installation).

After installation, configure Claude Desktop (or your preferred MCP client) as described in the [Configuration](https://github.com/tinybirdco/mcp-tinybird#configuration) section of the README.  Specifically, you will need to set your Tinybird API URL and Admin Token in the `claude_desktop_config.json` file.

Once configured, you can use the `tinybird-default` prompt in your MCP client to interact with your Tinybird workspace. For example, to explore "Bluesky data," you would use a prompt like:

`tinybird-default topic="Bluesky data"`

This prompt leverages the tools provided by the Tinybird MCP server, such as `list-data-sources`, `run-select-query`, and `request-pipe-data`, allowing you to explore your Tinybird data using natural language via your MCP client.
