---
title: Neon
description: Interact with the Neon serverless Postgres platform
category: Databases
features:
- Database Management
- Cloud Services
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/neondatabase/mcp-server-neon
website_url: https://neon.tech/
license: MIT
---

## Overview

The Neon MCP server facilitates interaction between Large Language Models (LLMs) and the Neon serverless Postgres platform using the Model Context Protocol (MCP). This allows users to manage Neon projects, databases, and migrations through natural language commands via MCP clients like Claude Desktop. It provides a standardized way for AI agents to interface with Neon's functionalities.

## Use Cases

- **Natural Language Database Management:** Create, describe, and delete Neon projects and branches using simple natural language commands.
- **Database Interaction:** Retrieve database connection strings, run SQL queries and transactions, and get database table information via natural language.
- **Automated Database Migrations:** Prepare and complete database schema migrations in Neon projects using LLMs, with a safe "start" and "commit" mechanism involving temporary branches for testing.

## Example

To use the Neon MCP server locally, follow these steps. For detailed installation instructions, refer to the [Github repository](https://github.com/neondatabase-labs/mcp-server-neon).

1.  **Install Neon MCP Server:**
    Run the following command in your terminal, replacing `$NEON_API_KEY` with your actual Neon API key, which you can obtain from the [Neon console](https://console.neon.tech/app/settings/api-keys).

    npx @neondatabase/mcp-server-neon init $NEON_API_KEY

2.  **Restart Claude Desktop:** Ensure you restart your Claude Desktop application after initializing the MCP server.

3.  **Test with a simple command:** Once restarted, you should be able to use commands like:

    `List me all my Neon projects`

    This command will instruct Claude to use the Neon MCP server to retrieve and display a list of your Neon projects.
