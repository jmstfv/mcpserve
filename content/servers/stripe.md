---
title: Stripe
description: Integrate with Stripe's APIs
category: Developer Tools
features:
- Business and Commerce
- API Management
layout: server
created_at: 2025-03-06
updated_at: 2025-03-12
featured: true
github_url: https://github.com/stripe/agent-toolkit
website_url: https://stripe.com/
logo: /assets/images/logos/stripe.svg
license: MIT
free: true
---

## Overview

The Stripe Agent Toolkit enables seamless integration of Stripe APIs with popular AI agent frameworks such as OpenAI's Agent SDK, LangChain, CrewAI, Vercel's AI SDK, and Model Context Protocol (MCP). This toolkit, supporting both Python and TypeScript, facilitates the use of Stripe functionalities within AI agents via function calling, without covering the entirety of the Stripe API.  It also includes an MCP server that allows interaction with Stripe through the Model Context Protocol.

## Use Cases

The Stripe MCP server, as part of the Stripe Agent Toolkit, can be used for:

- **Integrating Stripe with AI Agents:** Connect AI agents built on frameworks like LangChain or OpenAI's Agent SDK to Stripe's functionalities for tasks such as payment processing, customer management, and financial reporting.
- **Automating Stripe Tasks:** Use AI agents to automate workflows within Stripe, such as creating customers, generating payment links, managing products and prices, and handling refunds, all through natural language commands interpreted by the agent.
- **Building Conversational Commerce Applications:** Develop AI-powered applications that can handle financial transactions and Stripe-related operations based on user interactions, leveraging the MCP server for standardized communication.

## Example

To quickly start the Stripe MCP server, you can use `npx`. Ensure you have Node.js and npm installed.  This command will run the Stripe MCP server with all tools enabled, using your Stripe secret key for authentication.

    npx -y @stripe/mcp --tools=all --api-key=YOUR_STRIPE_SECRET_KEY

Replace `YOUR_STRIPE_SECRET_KEY` with your actual Stripe secret key from your [Stripe Dashboard](https://dashboard.stripe.com/account/apikeys). Alternatively, you can set the `STRIPE_SECRET_KEY` environment variable to avoid passing it directly in the command.

For more detailed setup and configuration, refer to the [Github repository](https://github.com/stripe/agent-toolkit).
