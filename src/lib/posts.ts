import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const POSTS_DIR = join(process.cwd(), 'src/content/blog');

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
};

export type Post = PostMeta & {
  content: string;
};

export function listPostSlugs(): string[] {
  return readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPost(slug: string): Post {
  const fullPath = join(POSTS_DIR, `${slug}.mdx`);
  const file = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    tags: data.tags,
    content,
  };
}

export function listPosts(): PostMeta[] {
  return listPostSlugs()
    .map((slug) => {
      const { content: _content, ...meta } = getPost(slug);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const current = getPost(slug);
  const currentTags = new Set(current.tags ?? []);
  const others = listPosts().filter((p) => p.slug !== slug);

  const scored = others.map((p) => ({
    post: p,
    shared: (p.tags ?? []).filter((t) => currentTags.has(t)).length,
  }));

  scored.sort((a, b) => {
    if (b.shared !== a.shared) return b.shared - a.shared;
    return a.post.date < b.post.date ? 1 : -1;
  });

  return scored.slice(0, limit).map((s) => s.post);
}
