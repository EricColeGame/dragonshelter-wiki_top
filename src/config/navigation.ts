interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "dragons", path: "/dragons", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
