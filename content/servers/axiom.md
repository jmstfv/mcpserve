---
title: Axiom
description: Query and analyze your Axiom logs, traces, and all other event data in
  natural language
category: Cloud Platforms
features:
- Data Summarization and Analysis
- Log Management
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
featured: true
github_url: https://github.com/axiomhq/mcp-server-axiom
website_url: https://axiom.co/
logo: /assets/images/logos/axiom.svg
license: MIT
free: true
---

## Overview

The Axoim MCP server is a Model Context Protocol (MCP) server tailored for Axiom, a log management and observability platform. It allows AI agents to interact with your Axiom datasets using Axiom Processing Language (APL) for data querying and analysis. Currently, it supports integration with the Claude desktop app and implements `queryApl` and `listDatasets` MCP tools.

## Use Cases

The Axiom MCP server enables AI agents to:

- **Query Axiom Datasets:** Execute APL queries to retrieve specific insights and information from your logs and events stored in Axiom.
- **List Available Datasets:** Discover and explore the Axiom datasets accessible for querying, providing context for data analysis.
- **Integrate with Observability Platforms:** Connect AI agents to Axiom's observability data, facilitating AI-driven log analysis, anomaly detection, and performance monitoring.

## Example

To use the Axiom MCP server, first, download the latest binary from the [releases page](https://github.com/axiomhq/axiom-mcp/releases) or install it from source using Go:

    go install github.com/axiomhq/axiom-mcp@latest

After installation, configure the server using a config file, command-line flags, or environment variables. For example, create a `config.txt` file:


    token xaat-your-token
    url https://api.axiom.co
    query-rate 1
    query-burst 1
    datasets-rate 1
    datasets-burst 1


Then, configure the Claude app to use the Axiom MCP server by editing the `claude_desktop_config.json` file:


    {
      "mcpServers": {
        "axiom": {
          "command": "/path/to/your/axiom-mcp-binary",
          "args" : ["--config", "/path/to/your/config.txt"],
          "env": {
            "AXIOM_TOKEN": "xaat-your-token",
            "AXIOM_URL": "https://api.axiom.co",
            "AXIOM_ORG_ID": "your-org-id"
          }
        }
      }
    }

