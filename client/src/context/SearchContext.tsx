import { createContext } from "react"

type SearchContextType = {
  search: string
  setSearch: (value: string) => void
}

export const SearchContext = createContext<SearchContextType | null>(null)
