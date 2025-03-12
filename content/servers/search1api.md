---
title: Search1API
description: A Model Context Protocol (MCP) server by Search1API that provides search, crawl, and content extraction functionality.
category: Search
features:
- Search and Information Retrieval
- Web Scraping and Automation
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/fatwang2/search1api-mcp
website_url: https://search1api.com/
free: true
---

## Overview

The Search1API MCP server is a Model Context Protocol (MCP) server that utilizes the Search1API service to provide web search, news search, content extraction, and sitemap retrieval functionalities to AI agents. It enables seamless integration with platforms like Claude Desktop, Cursor, and Windsurf, expanding the capabilities of AI models by giving them access to real-time information and web content.

## Use Cases

Here are a few use cases for the Search1API MCP server:

- **Enhanced Web Search within AI Agents:** Allows AI agents to perform comprehensive web searches using the `search` tool, going beyond standard knowledge cut-offs. Agents can specify queries, limit results, and choose search services, enabling more informed and context-aware responses.
- **News Monitoring and Analysis:** By using the `news` tool, AI agents can stay updated on current events, track news trends, and perform real-time analysis of news articles based on specific queries.
- **Content Extraction and Web Scraping:** The `crawl` tool empowers AI agents to extract text content from URLs, which is useful for content analysis, summarization, and data gathering from specific web pages.
- **Website Structure Discovery:** The `sitemap` tool allows AI agents to understand the link structure of a website, aiding in tasks like SEO analysis, content discovery within a domain, and identifying relevant pages for deeper crawling or analysis.
- **Reasoning and Problem Solving:** The `reasoning` tool, powered by DeepSeek R1 model, enables AI agents to perform complex reasoning tasks with web search integration, facilitating deep thinking and problem-solving capabilities within AI workflows.

## Example

To use the Search1API MCP server with Cursor, follow these steps based on the [installation instructions](https://github.com/fatwang2/search1api-mcp#setup-guide) from the GitHub repository:

1. **Get Search1API Key**: Register at [Search1API](https://www.search1api.com) to obtain an API key and free credits.
2. **Configure Cursor**: Open Cursor settings and add a new MCP server named `search1api`. Use the following command, replacing `YOUR_SEARCH1API_KEY` with your actual API key:

    env SEARCH1API_KEY=YOUR_SEARCH1API_KEY npx -y search1api-mcp

Alternatively, for a safer approach:

1.  Copy the `run.template.sh` file from the repository to a local path and rename it to `run.sh`.
2.  Edit `run.sh` and add your Search1API key.
3.  In Cursor settings, add the `search1api` MCP server with the command:

    sh ./your_file_path/run.sh

Once configured, you can use the tools provided by the Search1API MCP server within Cursor by mentioning the tool name or describing its function in your prompts. For example, to search for the latest news about AI, you might prompt: *"Use the new
