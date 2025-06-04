'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

interface CategoryFilterProps {
  categories: string[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams?.get('category') || ''
  
  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams?.toString() || '')
    
    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }
    
    // Reset to first page when changing category
    params.set('page', '1')
    
    router.push(`/projects?${params.toString()}`)
  }
  
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <select
          value={currentCategory}
          onChange={(e) => handleCategoryChange(e.target.value || null)}
          className="appearance-none w-full px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-900/50 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-700 placeholder:text-zinc-500 transition-colors hover:border-zinc-700"
        >
          <option value="" className="bg-zinc-900 text-zinc-200">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category} className="bg-zinc-900 text-zinc-200">
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
} 