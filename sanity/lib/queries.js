import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"] | order(order asc, _createdAt desc) {
  "slug": slug.current,
  name,
  tags,
  description,
  liveUrl,
  cover,
  gallery,
  order
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  "slug": slug.current,
  name,
  tags,
  description,
  liveUrl,
  cover,
  gallery
}`;

export const postsQuery = groq`*[_type == "post"] | order(date desc) {
  "slug": slug.current,
  title,
  date,
  tags,
  cover,
  intro,
  sections
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  date,
  tags,
  cover,
  intro,
  sections
}`;
