import { recyclingGuide } from '../data/recyclingGuide'

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

function editDistance(left, right) {
  const row = Array.from({ length: right.length + 1 }, (_, index) => index)

  for (let i = 1; i <= left.length; i += 1) {
    let diagonal = row[0]
    row[0] = i

    for (let j = 1; j <= right.length; j += 1) {
      const previous = row[j]
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        diagonal + (left[i - 1] === right[j - 1] ? 0 : 1),
      )
      diagonal = previous
    }
  }

  return row[right.length]
}

export function findMatches(query) {
  const normalizedQuery = normalizeText(query)
  if (!normalizedQuery) return []

  return recyclingGuide.filter((item) => {
    const searchableTerms = [item.name, item.material, item.group, ...item.keywords]
      .map(normalizeText)

    return searchableTerms.some((term) => (
      term === normalizedQuery
      || term.includes(normalizedQuery)
      || (normalizedQuery.length > 2 && normalizedQuery.includes(term))
    ))
  })
}

export function findSuggestions(query) {
  const normalizedQuery = normalizeText(query)
  if (normalizedQuery.length < 3) return []

  const rankedItems = recyclingGuide
    .map((item) => {
      const names = [item.name, ...item.keywords].map(normalizeText)
      const terms = [...names, ...names.flatMap((name) => name.split(' '))]
      const distance = Math.min(...terms.map((term) => editDistance(normalizedQuery, term)))
      return { item, distance }
    })
    .filter(({ item, distance }) => (
      distance <= Math.max(1, Math.floor(normalizedQuery.length * 0.24))
        || [item.name, ...item.keywords].some((term) => {
          const normalizedTerm = normalizeText(term)
          return normalizedTerm.startsWith(normalizedQuery) || normalizedQuery.startsWith(normalizedTerm)
        })
    ))
    .sort((left, right) => left.distance - right.distance)

  return [...new Map(rankedItems.map(({ item }) => [item.id, item])).values()].slice(0, 3)
}
