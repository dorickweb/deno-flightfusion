/// <reference lib="deno.ns" />
// 
// main.ts
import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req: unknown) => serveDir((req), { fsRoot: "./dist", showDirListing: true }));