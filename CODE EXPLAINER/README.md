# Code Explainer

Explain, refactor, and test-drive any code snippet with an attractive, two‑pane UI and streaming responses from a hosted Llama 3.x instruct model. The left pane accepts pasted text or dropped files; the right pane provides chat-style explanations with markdown rendering and live token streaming. 

## Features

- Elegant, glassy UI with Tailwind and shadcn‑inspired components.  
- Paste or drag‑and‑drop code; pick language and select a range to focus explanations.  
- Streaming AI responses for fast, conversational feedback.  
- Markdown rendering with GFM; syntax highlighting via Shiki.  
- Sensible “senior engineer” system prompt for clear, actionable explanations.  

## Tech Stack

- Framework: Next.js App Router with TypeScript.  
- Styling: Tailwind CSS, tailwindcss-animate, custom minimal UI atoms.  
- Rendering: React Markdown + remark-gfm, Shiki highlighting.  
- Icons/UX: lucide-react, sonner toasts.  
- Validation: zod.  
- AI Provider: Hosted Llama 3.x instruct model (example: Replicate; swap for preferred Llama 3 “latest”).  

## Getting Started

1) Prerequisites  
- Node.js 18+  
- A provider key for a Llama 3.x instruct endpoint (example: Replicate)  

2) Clone and install  
- git clone <your-repo-url>  
- cd my-next-app  
- npm install  

3) Environment  
- Create a .env.local file in the project root.  
- Add the API key for the chosen provider:  
  REPLICATE_API_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxx  

4) Dev server  
- npm run dev  
- Open http://localhost:3000  

## Project Structure

- app/  
  - page.tsx: Two‑pane UI (source panel + chat panel).  
  - layout.tsx: Global layout, header, and toast provider.  
  - api/route.ts: Streaming API endpoint that forwards prompts to the Llama 3.x model.  
- component/  
  - ExplainPanel.tsx: Paste/drop code, pick language, selection support, Shiki preview overlay.  
  - ChatPanel.tsx: Chat UI with SSE streaming, markdown render.  
  - ToastProvider.tsx: App‑wide toasts via sonner.  
  - ui/: Minimal shadcn‑style atoms (Button, Textarea, cn helper).  
- app/globals.css: Tailwind + theme styles.  
- next.config.ts, tailwind.config.ts, postcss.config.js: Framework configs.  

## Scripts

- npm run dev — Start local development.  
- npm run build — Production build.  
- npm run start — Start production server.  
- npm run lint — Lint codebase.  

## Configuration

- Model selection: In app/api/route.ts, update the model identifier to the preferred Llama 3 “latest” instruct model from the chosen provider.  
- Runtime: The route is set to run on Node.js by default; switch to Edge only if the provider supports standard fetch + streaming.  
- Token/temperature: Tweak temperature/top_p in the API route for desired creativity.  

## Usage Tips

- Paste code or drag a file onto the left panel.  
- Use the language dropdown to improve highlighting and prompting.  
- Select specific lines to narrow the explanation’s focus.  
- Ask follow‑ups in the chat to refine explanations, request refactors, or generate tests.  

## Production

- Set environment variables in production (e.g., hosting dashboard or secrets manager).  
- Review provider pricing/limits; consider caching or request metering.  
- Add rate‑limiting and basic abuse protection to the API route before public launch.  

## Customize the UI

- Extend component/ui with more atoms (Input, Badge, Sheet, Dialog).  
- Swap theme colors in globals.css and tailwind config.  
- Add page-level sections for “How it works” and “Examples,” or a persistent history panel.  

## Security

- Never expose provider keys to the browser.  
- Validate request bodies (zod is already used).  
- Consider content length caps and file type filtering for uploads.  

## Troubleshooting

- 401/403 from API route: ensure the provider key is present in .env.local and the model ID is correct.  
- No streaming: verify the provider supports SSE/event-stream and that the deployment platform allows streaming responses.  
- Styles not applied: confirm Tailwind content paths include app/** and component/**.  

## Roadmap

- Multi-file context and repository ingestion.  
- Sidebar history with local/session persistence.  
- Inline diff view for refactors and suggested patches.  
- Model switcher and provider abstraction layer.  

## License

- MIT (customize as desired).  

## Acknowledgments

- Next.js App Router and examples.  
- Tailwind and shadcn/ui patterns for clean, composable UI.  
- Hosted Llama 3.x provider(s) for easy access to strong instruct models.

[1](https://github.com/othneildrew/Best-README-Template)
[2](https://www.makeareadme.com)
[3](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
[4](https://www.drupal.org/docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/documenting-your-project/readmemd-template)
[5](https://dev.to/sumonta056/github-readme-template-for-personal-projects-3lka)
[6](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)
[7](https://data.research.cornell.edu/data-management/sharing/writing-readmes-for-research-code-software/)
[8](https://readme.com/documentation)