import os from "node:os";
import { environment } from "@raycast/api";
import Parser from "rss-parser";
import { Feed } from "./types";

const parser = new Parser({
  headers: {
    "User-Agent": `Hacker News Extension, Raycast/${environment.raycastVersion} (${os.type()} ${os.release()})`,
  },
});

export async function getFeed(feed: Feed | null): Promise<Parser.Item[]> {
  if (!feed) {
    return [];
  }

  const data = await parser.parseURL(feed);

  return data.items ?? [];
}
