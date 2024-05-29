import { getStyles } from '@enhance/arc-plugin-styles'

export default function Head(state) {
  const { store = {} } = state

  // pageTitle is set in /app/preflight.mjs
  const { pageTitle = '' } = store

  return `
    <!doctype html>
    <html lang="en-ca">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="color-scheme" content="dark light">
      <title>${pageTitle}</title>
    </head>
`
}
