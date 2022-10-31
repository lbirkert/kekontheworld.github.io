import { minify } from 'html-minifier-terser';
import type { Handle } from '@sveltejs/kit';

const minification_options = {
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true,
  removeComments: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  sortAttributes: true,
  sortClassName: true
}

export const handle = async function({ event, resolve }) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => minify(html, minification_options)
  })

  return response
} as Handle;