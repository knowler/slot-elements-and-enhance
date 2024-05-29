export default async function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path)
  }
}

function getPageTitle(path) {
  const titleMap = {
    '/': 'Slot elements and Enhance'
  }

  return titleMap[path]
}
