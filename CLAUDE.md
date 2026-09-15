# CLAUDE.md — Claude Code Instructions & Architecture Guide

> **Important**: This project operates under the **Spec UI System Agentic Blueprint**.
> For full agent operating procedures, specialized roles, standard 4-step workflow, and hard guardrails, see:
> → **[AGENTS.md](AGENTS.md)**

---

## Quick Reference Commands

- **Start Local Documentation Server (Zero Dependencies + Live Reload)**:
  ```bash
  node serve.cjs
  # Or with Bun:
  bun serve.cjs
  # Or via npm:
  npm start
  ```
  Runs on `http://localhost:3300` (port can be overridden with `PORT=3301 node serve.cjs`).
  Live Reload via SSE is enabled by default (disable via `LIVE_RELOAD=false node serve.cjs`).
- **Syntax Check Server**:
  ```bash
  node -c serve.cjs
  ```

---

## Architecture & Project Structure

This workspace is a **Docsify Documentation Portal** configured with Spec UI design tokens and enhanced Mermaid integration:

- `index.html`: Main Docsify portal runner with Mermaid Auto-Sanitizer, Smart Toolbar, Fullscreen Modal (Figma/Miro mode), Tabler Icons, and PrismJS.
- `custom.css`: Spec UI Design Tokens (`#faf7f2`, `#fffdf9`, `#9f3f2a`, `#c65a3a`), Tabler Icons, Callouts, Badges, Tables, and Tabs.
- `_sidebar.md` & `_navbar.md`: Modular multi-page navigation and breadcrumb hierarchy.
- `README.md`: Portal homepage and overview matrix.
- `AGENTS.md`: Master agent orchestration blueprint.
- `AI-SPEC-WRITER-GUIDE.md`: Deep survey and prompt engineering handbook.
- `agents/`:
  - `agents/roles/`: Personas (`codebase-architect.md`, `spec-writer.md`, `mermaid-engineer.md`, `qa-auditor.md`).
  - `agents/skills/`: Executable skills (`codebase-survey`, `spec-authoring`, `mermaid-design`, `docs-verification`).
  - `agents/rules/`: Concrete style & syntax rules (`spec-components.md`, `mermaid-constraints.md`, `design-tokens.md`).

---

## Operating Mode for Claude Code

When tasked with surveying codebases, authoring documentation, or maintaining this repository:

1. **Always refer to [`AGENTS.md`](AGENTS.md)** for persona activation and standard 4-step workflow:
   - `@codebase-architect`: Surveys frameworks, schemas, routes; decomposes into 6–10 Bounded Contexts.
   - `@spec-writer`: Drafts 5-section technical specification markdown files.
   - `@mermaid-engineer`: Creates safe, responsive Mermaid diagrams inside `<div class="diagram-wrapper">`.
   - `@qa-auditor`: Validates links, tags, and local rendering.
2. **Follow Hard Guardrails**:
   - **No Inline Styles (`style=""`)**: Use Spec UI CSS classes from `custom.css`.
   - **Non-AI Aesthetic (No Emojis)**: Never use decorative emojis in headings (H1, H2, H3) or navigation menus. Use Tabler Icons (`<i class="ti ti-..."></i>`) only for functional cues.
   - **Safe Mermaid Syntax**: No reverse arrows (`<-`), always quote special characters in labels (`["..."]`), wrap diagrams in `<div class="diagram-wrapper">`.
   - **Structured 5-Section Layout**: Module Header, Business Logic & Edge Cases, Architecture/Flow Diagram, Technical Matrix, Code Implementation/Migration.
   - **Deep Technical Accuracy**: Uncover real parameters, hidden security logic, performance trade-offs, and failure states.
