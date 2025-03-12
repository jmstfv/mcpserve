---
title: JetBrains
description: Work on your code with JetBrains IDEs
category: Developer Tools
features:
- Code Execution
- Project Management Tools
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/JetBrains/mcp-jetbrains
website_url: https://www.jetbrains.com/
logo: /assets/images/logos/jetbrains.svg
license: Apache 2.0
free: true
---

## Overview

The JetBrains MCP Proxy Server acts as an intermediary, forwarding requests from clients to JetBrains IDEs like IntelliJ, PyCharm, and WebStorm. This setup facilitates communication between Large Language Models (LLMs) and JetBrains IDEs, allowing AI tools to interact with your development environment. To use this server, you need to install the "MCP Server" plugin from the JetBrains Marketplace.

## Use Cases

The JetBrains MCP Server enables several use cases for developers integrating AI agents with their IDEs:

- **IDE Access for AI Agents:** Allows AI agents like Claude Desktop to access and interact with JetBrains IDEs, leveraging the IDE's context and capabilities.
- **Extending AI Agent Functionality:** Provides tools for AI agents to read the current file, execute terminal commands, set breakpoints, and search project files within the IDE.
- **Custom Tool Implementation:**  Developers can create custom tools for specific workflows by extending the MCP server plugin, tailoring the integration to their needs.
- **Integration with Claude Desktop:** Seamlessly integrates with Claude Desktop by configuring the `claude_desktop_config.json` file, enabling Claude to understand and interact with the IDE context.

## Example

To use the JetBrains MCP Proxy Server with Claude Desktop, you need to modify the `claude_desktop_config.json` file. The configuration below assumes you are using `npx` to run the proxy server.

Installation instructions for the MCP Server plugin can be found on the [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/26071-mcp-server).

Modify your `claude_desktop_config.json` file, typically located at `~/Library/Application\ Support/Claude/claude_desktop_config.json` on macOS or `%APPDATA%/Claude/claude_desktop_config.json` on Windows, and add the following configuration within the `mcpServers` section:

    {
      "mcpServers": {
        "jetbrains": {
          "command": "npx",
          "args": ["-y", "@jetbrains/mcp-proxy"]
        }
      }
    }

This configuration tells Claude Desktop how to start the MCP Proxy Server, which then facilitates the connection to your JetBrains IDE.  Make sure you have the MCP Server plugin installed in your JetBrains IDE for this to work.
