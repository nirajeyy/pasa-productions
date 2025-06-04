'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams?.get('search') || '')
  
  const debouncedSearch = useDebounce((value: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '')
    
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    
    // Reset to first page when searching
    params.set('page', '1')
    
    router.push(`/projects?${params.toString()}`)
  }, 300)
  
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    debouncedSearch(value)
  }, [debouncedSearch])
  
  return (
    <div className="relative flex-1">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search"
        className="w-full px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-900/50 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-700 placeholder:text-zinc-500 transition-colors hover:border-zinc-700"
      />
    </div>
  )
} 