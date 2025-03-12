---
title: Metoro
description: Query and interact with Kubernetes environments monitored by Metoro
category: Monitoring
features:
- Cloud Services
- Log Management
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/metoro-io/metoro-mcp-server
website_url: https://metoro.io/
logo: /assets/images/logos/metoro.svg
license: MIT
free: true
---

## Overview

The Metoro MCP server enables interaction with Kubernetes clusters through the Claude Desktop App, leveraging the Model Context Protocol (MCP). MCP is an open standard that facilitates seamless integration between Large Language Models (LLMs) and external data sources, allowing AI applications to access necessary context. Metoro MCP server, built upon the Metoro observability platform, exposes Kubernetes cluster data to LLMs for intelligent queries and analysis.

## Use Cases

- **Kubernetes Cluster Monitoring and Observability:** By connecting to Metoro, an observability platform for Kubernetes, the MCP server allows users to ask questions about their cluster's health, performance, and resource utilization in natural language via Claude.
- **Troubleshooting and Diagnostics:** Developers can use the Metoro MCP server to diagnose issues within their Kubernetes clusters by querying logs, metrics, and events through the Claude Desktop App, streamlining troubleshooting workflows.

## Example

To use the Metoro MCP server, follow these steps after installing the Claude Desktop App and Golang, as detailed in the [Github repository](https://github.com/metoro-io/metoro-mcp-server):

1. Clone the repository:

    git clone https://github.com/metoro-io/metoro-mcp-server.git

2. Navigate to the repository directory:

    cd metoro-mcp-server

3. Build the server executable:

    go build -o metoro-mcp-server

4. Configure Claude Desktop App by creating or modifying the `claude_desktop_config.json` file in `~/Library/Application Support/Claude/` with your Metoro auth token or the demo token provided in the repository's README. Replace `<your path to Metoro MCP server go executable>` and `<your auth token>` with your actual path and token.

If you have a Metoro account:

    {
      "mcpServers": {
        "metoro-mcp-server": {
          "command": "<your path to Metoro MCP server go executable>/metoro-mcp-server",
          "args": [],
          "env": {
              "METORO_AUTH_TOKEN" : "<your auth token>",
              "METORO_API_URL": "https://us-east.metoro.io"
          }
        }
      }
    }


If you don't have a Metoro account (using the demo token):

    {
      "mcpServers": {
        "metoro-mcp-server": {
          "command": "<your path to Metoro MCP server go executable>/metoro-mcp-server",
          "args": [],
          "env": {
              "METORO_AUTH_TOKEN" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiOThlZDU1M2QtYzY4ZC00MDRhLWFhZjItNDM2ODllNWJiMGUzIiwiZW1haWwiOiJ0ZXN0QGNocmlzYmF0dGFyYmVlLmNvbSIsImV4cCI6MTgyMTI0NzIzN30.7G6alDpcZh_OThYj293Jce5rjeOBqAhOlANR_Fl5auw",
              "METORO_API_URL": "https://demo.us-east.metoro.io"
          }
        }
      }
    }

5. Restart the Claude Desktop app. You can then select "metoro-mcp-server" from the MCP Servers dropdown in the Claude Desktop App and start interacting with your Kubernetes cluster.
