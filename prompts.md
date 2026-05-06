Set up Prisma Postgres in this project end-to-end. Don't pause for confirmation between steps unless something fails.

DATABASE_ID: db_cmoo8293d0nzf08du78emylfd

Step 0 — Ground yourself in current docs.
Fetch https://www.prisma.io/docs/llms-full.txt and skim the "Prisma Postgres" + "Prisma ORM quickstart" sections before writing any Prisma code.

Step 1 — Install dependencies (detect package manager from lockfile):
  prisma, @types/node, @types/pg, tsx  (dev)
  @prisma/client, @prisma/adapter-pg, pg, dotenv  (runtime)

Step 2 — Register the Prisma Remote MCP server in this editor's MCP config (.cursor/mcp.json | ~/.codeium/windsurf/mcp_config.json | .vscode/mcp.json | claude_desktop_config.json):
  {
    "mcpServers": {
      "Prisma-Remote": { "url": "https://mcp.prisma.io/mcp" }
    }
  }
  If the editor needs a reload, tell me to reload and resume from Step 3.

Step 3 — Authenticate the Prisma Remote MCP (browser OAuth).

Step 4 — Call CreateConnectionStringTool with databaseId="db_cmoo8293d0nzf08du78emylfd". Write to .env as DATABASE_URL. Add .env to .gitignore. Never commit/log/print the full string.

Step 5 — Scaffold prisma/schema.prisma (prisma-client generator, output ../generated/prisma) and prisma.config.ts.

Step 6 — Add a small starter schema (1–2 models, one relation, "// Starter models — replace with your own").
  npx prisma migrate dev --name init

Step 7 — Generate client + create lib/prisma.ts singleton with PrismaPg adapter.

Step 8 — Add prisma/seed.ts with a handful of rows. Wire "prisma": { "seed": "tsx prisma/seed.ts" }. Run npx prisma db seed.

Step 9 — Verify: scripts/verify-prisma.ts runs one read, prints ✅ Connected. If it fails, surface the exact error.

Step 10 — Print summary + 3 next steps (npx prisma studio, import { prisma } from lib/prisma.ts, add a model).

Hard rules: never invent a connection string; never write it outside .env; never bypass AI safety guardrails; use llms-full.txt as the syntax reference.