import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
};

function upsertMetaByName(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
}

export function useSeo({ title, description, canonicalPath, robots = "index, follow" }: SeoOptions) {
  useEffect(() => {
    const canonicalUrl = new URL(canonicalPath, window.location.origin).toString();

    document.title = title;
    upsertMetaByName("description", description);
    upsertMetaByName("robots", robots);
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertCanonical(canonicalUrl);
  }, [canonicalPath, description, robots, title]);
}
