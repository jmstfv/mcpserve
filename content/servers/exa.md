---
title: Exa
description: Connect your AI assistants to Exa's powerful search engine via Model Context Protocol (MCP). Enable web search information retrieval, and web scraping capabilities.
category: Search
features:
- Search and Information Retrieval
- Web Scraping and Automation
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/exa-labs/exa-mcp-server
website_url: https://exa.ai/
logo: /assets/images/logos/exa.jpg
free: true
---

## Overview

The Exa MCP server enables AI assistants like Claude to utilize the Exa AI Search API for conducting web searches. Functioning as a bridge, it facilitates AI models in accessing real-time web information in a secure and controlled manner. The Model Context Protocol (MCP) establishes a standardized method for AI applications to interface with external tools and data sources safely.

## Use Cases

The Exa MCP server offers the following capabilities:

- **Web Search for AI Assistants**: Allows AI assistants such as Claude to perform web searches using natural language queries via the Exa AI Search API.
- **Structured Search Results**: Delivers formatted search results, including titles, URLs, and content snippets, to AI assistants.
- **Error Handling**: Manages API errors and rate limits, ensuring stable and reliable search functionality.

## Example

To use the Exa MCP server, first, follow the installation instructions provided in the [Github repository](https://github.com/exa-labs/exa-mcp-server#installation-).

Install the server using npm:

    npm install -g exa-mcp-server

Next, configure Claude Desktop to recognize the Exa MCP server. Edit the `claude_desktop_config.json` file as described in the README and add the following configuration, replacing `"your-api-key-here"` with your actual Exa API key:


    {
      "mcpServers": {
        "exa": {
          "command": "npx",
          "args": ["/path/to/exa-mcp-server/build/index.js"],
          "env": {
            "EXA_API_KEY": "your-api-key-here"
          }
        }
      }
    }


After restarting Claude Desktop and verifying that the Exa server is connected (indicated by the 🔌 icon), you can ask Claude to perform web searches using prompts such as:

```
Can you search for recent developments in quantum computing?
```

```
Search for and summarize the latest news about artificial intelligence startups in new york.
```
