import { recyclingGuide } from '../data/recyclingGuide.js'

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('vi')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
}

export function findMatches(query) {
  const normalizedQuery = normalizeText(query)
  if (!normalizedQuery) return []

  return recyclingGuide.filter((item) => {
    const searchableTerms = [item.name, item.material, item.group, ...item.keywords]
      .map(normalizeText)

    return searchableTerms.some((term) => term === normalizedQuery || term.includes(normalizedQuery))
  })
}
