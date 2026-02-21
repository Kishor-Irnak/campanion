import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAssetPath = (path: string) => {
  const isGithubActions = process.env.GITHUB_ACTIONS === "true";
  const basePath = isGithubActions ? "/campanion" : "";

  // If the path already has the base path or is external, return as is
  if (path.startsWith("http") || (basePath && path.startsWith(basePath))) {
    return path;
  }

  // Ensure we don't have double slashes
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
