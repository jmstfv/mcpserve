---
title: Raygun
description: Interact with your crash reporting and real using monitoring data on
  your Raygun account
category: Monitoring
features:
- Log Management
- Data Summarization and Analysis
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/MindscapeHQ/mcp-server-raygun
website_url: https://raygun.com/
---

## Overview

The Raygun MCP server acts as a bridge between AI agents and Raygun's API V3. It utilizes the Model Context Protocol (MCP) to provide AI agents with access to Raygun's crash reporting and real user monitoring data. This server allows for comprehensive interaction with Raygun's features through a standardized MCP interface.

## Use Cases

The Raygun MCP server enables AI agents to interact with Raygun for various tasks, including:

- **Error Monitoring and Management**: AI agents can use this server to list, inspect, and manage error groups within Raygun, enabling automated error analysis and resolution workflows. For example, an agent could automatically identify and resolve error groups based on predefined criteria.
- **Deployment Tracking**:  Agents can track software deployments by listing, retrieving, updating, and deleting deployment records in Raygun. This can help automate deployment monitoring and analysis, ensuring smooth releases.
- **Source Map Management**:  Developers can automate the management of source maps in Raygun, including uploading new maps, updating existing ones, and deleting outdated maps, streamlining the debugging process for web applications.

## Example

To use the Raygun MCP server with Claude Desktop, you need to configure the `claude_desktop_config.json` file. First, ensure you have the Raygun MCP server installed. You can install it using npm:

    npm install @raygun.io/mcp-server-raygun

Then, locate your `claude_desktop_config.json` file:

- **MacOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

Add the following configuration within the `mcpServers` section, replacing `"your-pat-token-here"` with your actual Raygun Personal Access Token. You can find instructions on how to obtain a PAT token in the [Raygun API documentation](https://raygun.com/documentation/product-guides/raygun-api/):

    {
      "mcpServers": {
        "raygun": {
          "command": "npx",
          "args": ["-y", "@raygun.io/mcp-server-raygun"],
          "env": {
            "RAYGUN_PAT_TOKEN": "your-pat-token-here"
          }
        }
      }
    }

After configuring Claude Desktop, you should be able to interact with Raygun's API through Claude using the tools provided by the Raygun MCP server, such as listing applica
