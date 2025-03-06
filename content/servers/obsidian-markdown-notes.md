---
title: Obsidian Markdown Notes
description: Read and search through your Obsidian vault or any directory containing
  Markdown notes
category: Knowledge & Memory
features:
- Documentation Search
- Research Tools
layout: server
created_at: 2025-03-05
github_url: https://github.com/cyanheads/obsidian-mcp-server
website_url: https://obsidian.md/
license: Apache 2.0
---

## Overview

The Obsidian Markdown Notes server is an MCP (Model Context Protocol) server that enables AI models to interact with Obsidian vaults or Markdown directories. It provides a standardized interface for searching, reading, and managing notes, ideal for knowledge management and research.

## Features

* **Documentation Search**: Full-text search with tag and frontmatter filters.
* **Research Tools**: Tools for file management, search, and property updates.
* **File Management**: List, retrieve, and update files.
* **Search Operations**: Text searches, complex queries, and tag retrieval.
* **Property Management**: Manage metadata like titles, tags, and status.

## Installation

### Prerequisites

Enable the Local REST API plugin in Obsidian:

* Open Settings > Community plugins.
* Enable "Local REST API" and note the API key.

### Installation Options

*Option 1: Clone from GitHub*

```bash
git clone https://github.com/cyanheads/obsidian-mcp-server
cd obsidian-mcp-server
npm install
npm run build
node dist/index.js
```

*Option 2: Install via npm*

```bash
npm install obsidian-mcp-server
npx obsidian-mcp-server
```

### Configure MCP Client:

Add the server to your MCP client settings, such as `claude_desktop_config.json` or `cline_mcp_settings.json`, ensuring accessibility.

## Configuration

Set environment variables:

Required:

* `OBSIDIAN_API_KEY`: API key from Obsidian's Local REST API.

Optional:

* `OBSIDIAN_HOST`: Hostname/IP (default: "127.0.0.1").
* `OBSIDIAN_PORT`: Port (default: 27124).
* `RATE_LIMIT_MAX_REQUESTS`: Max requests per window (default: 200).


## Use Cases and Best Practices

The server is ideal for automating note-taking, managing large note sets, and integrating with AI assistants like Claude Desktop. Best practices include:

* Use atomic operations for file management to prevent data corruption.
* Validate inputs and monitor search patterns to optimize performance.
* Respect rate limits to ensure fair usage.
* Keep context size reasonable (default 10 characters for search) to avoid overloading AI models.

## Security and Performance Considerations

The server emphasizes security with API key authentication and rate limiting, which is unexpected for a note management tool but essential for AI integration. Performance is optimized through configurable request limits and timeouts, with best practices including atomic file operations, error handling, and monitoring patterns. Users are advised to backup their Obsidian vault before use, given the server's read and write capabilities.

