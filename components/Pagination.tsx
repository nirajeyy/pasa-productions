import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  return (
    <nav className="flex justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white bg-zinc-800 rounded-md"
        >
          Previous
        </Link>
      )}
      
      {pages.map((page) => (
        <Link
          key={page}
          href={`${baseUrl}?page=${page}`}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            page === currentPage
              ? 'bg-zinc-700 text-white'
              : 'text-zinc-400 hover:text-white bg-zinc-800'
          }`}
        >
          {page}
        </Link>
      ))}
      
      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white bg-zinc-800 rounded-md"
        >
          Next
        </Link>
      )}
    </nav>
  )
} 