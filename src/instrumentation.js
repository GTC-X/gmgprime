/**
 * Node 22+ exposes a broken global `localStorage` when `--localstorage-file`
 * has no valid path. Dependencies (e.g. debug) then call getItem during SSR
 * and crash. Real storage is browser-only; remove the broken global on the server.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") {
    return;
  }

  const ls = globalThis.localStorage;
  if (ls != null && typeof ls.getItem !== "function") {
    delete globalThis.localStorage;
  }
}
