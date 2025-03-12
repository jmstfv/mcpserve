---
title: Qdrant
description: Implement semantic memory layer on top of the Qdrant vector search engine
category: Knowledge & Memory
features:
- Database Management
- Search and Information Retrieval
layout: server
created_at: 2025-03-05
updated_at: 2025-03-12
github_url: https://github.com/qdrant/mcp-server-qdrant
website_url: https://qdrant.tech/
license: Apache 2.0
free: true
---

## Overview

The Qdrant MCP server is a Model Context Protocol (MCP) server that allows AI agents to store and retrieve information from a Qdrant vector search engine. It functions as a semantic memory layer, enabling LLM applications to access and manage memories within a Qdrant database. By using MCP, it standardizes the interaction between AI models and Qdrant for tasks like knowledge retrieval and context enrichment.

## Use Cases

Here are a few use cases for the `mcp-server-qdrant`:

- **Semantic Memory for AI Agents:**  AI agents can use this server to store and retrieve information in a structured and semantically meaningful way using Qdrant. This allows agents to remember past interactions, learned knowledge, or relevant data for context-aware conversations and actions.
- **Code Snippet Retrieval in IDEs:** Integrated with code editors like Cursor or Windsurf, this MCP server can serve as a code search tool. Developers can store code snippets with natural language descriptions and later retrieve them using semantic queries, improving code reuse and discovery.
- **Knowledge Base Augmentation:** Applications can employ this server to connect LLMs to a knowledge base stored in Qdrant. By storing documents or data points in Qdrant and using the `qdrant-find` tool, the LLM can access relevant information to enhance its responses and provide more informed answers.

## Example

To get started with the `mcp-server-qdrant`, you can use `uvx` to run the server directly. Ensure you have `uv` installed as described in the [installation instructions](https://github.com/qdrant/mcp-server-qdrant#installation).

* **Run the MCP server:**

Open your terminal and execute the following command, replacing placeholders with your Qdrant server details and desired collection name:

    QDRANT_URL="http://localhost:6333" \
    COLLECTION_NAME="my-collection" \
    uvx mcp-server-qdrant

This command starts the `mcp-server-qdrant` using `uvx`. It connects to a Qdrant instance running at `http://localhost:6333` and uses a collection named `my-collection`. The server will be accessible via the chosen transport protocol (stdio by default).

* **Using the `qdrant-store` tool:**

The `qdrant-store` tool allows you to store information in the Qdrant database. To use it, you would typically interact with the MCP server through an MCP client (like Cursor or Claude Desktop).  The input for this tool includes:

- `information` (string): The text content you want to store in Qdrant.
- `metadata` (JSON, optional):  Additional data to associate with the information, such as tags or source information.

For example, an AI agent could use this tool to store a piece of information like "The capital of France is Paris." with metadata like `{"source": "geography textbook"}`.

* **Using the `qdrant-find` tool:**

The `qdrant-find` tool retrieves relevant information from the Qdrant database based on a query.  The input is:

- `query` (string): A natural language query to search for similar information in Qdrant.

For example, if you query "French capitals", the tool will search the Qdrant collection for semantically similar information and return relevant entries, such as "The capital of France is Paris." if it was previously stored.
