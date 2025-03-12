---
title: Obsidian
description: Read and search through your Obsidian vault or any directory containing Markdown notes
category: Knowledge & Memory
features:
- Documentation Search
- Research Tools
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/cyanheads/obsidian-mcp-server
website_url: https://obsidian.md/
license: Apache 2.0
---

## Overview

The Obsidian MCP Server is designed as a Model Context Protocol (MCP) server, enabling Large Language Models (LLMs) to interact with Obsidian vaults. Built using TypeScript, it provides a secure API for AI assistants to manage knowledge bases within Obsidian. It features file operations, search capabilities, and property management, making it a tool for AI-driven knowledge management. It requires the Local REST API plugin in Obsidian to function.

## Use Cases

- **AI-Powered Note Management**: Allows AI agents to read, search, and modify notes within an Obsidian vault, enabling use cases like automated summarization, content generation, and organization of notes.
- **Knowledge Base Integration**: Enables seamless integration of Obsidian vaults as knowledge bases for AI applications. Agents can query and update information in Obsidian, making it a dynamic and accessible repository of knowledge.
- **Automated Workflows**: Facilitates the creation of automated workflows where AI agents can manage notes based on triggers or schedules, such as automatically tagging notes, updating content based on new information, or creating reports from vault content.

## Example

To use the Obsidian MCP server, you first need to install it. Installation instructions are available in the [Github repository](https://github.com/cyanheads/obsidian-mcp-server) README.

1.  **Enable Local REST API plugin in Obsidian**: This plugin is a prerequisite for the Obsidian MCP server.
2.  **Clone and build the server**:
    git clone git@github.com:cyanheads/obsidian-mcp-server.git
    cd obsidian-mcp-server
    npm install
    npm run build

3.  **Configure your MCP client**: Add the server configuration to your MCP client settings file (e.g., `claude_desktop_config.json`). You will need to set environment variables, especially `OBSIDIAN_API_KEY`, which you can obtain from Obsidian's Local REST API plugin settings.

    {
      "mcpServers": {
        "obsidian-mcp-server": {
          "command": "node",
          "args": ["/path/to/obsidian-mcp-server/build/index.js"],
          "env": {
            "OBSIDIAN_API_KEY": "your_api_key_here",
            "VERIFY_SSL": "false",
            "OBSIDIAN_PROTOCOL": "https",
            "OBSIDIAN_HOST": "127.0.0.1",
            "OBSIDIAN_PORT": "27124"
          }
        }
      }
    }

After installation and configuration, your AI agent can use tools like `obsidian_get_file_contents`, `obsidian_find_in_file`, and `obsidian_update_properties` to interact with your Obsidian vault.
