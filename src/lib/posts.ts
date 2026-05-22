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
