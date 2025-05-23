import { cn } from "../../lib/utils"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col bg-white rounded-lg shadow-lg",
        "p-4 sm:p-6 border border-gray-100",
        "hover:shadow-xl transition-shadow duration-300",
        "touch-manipulation",
        className
      )}
    >
      <div className="mb-3 sm:mb-4">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
          {author.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          {author.handle}
        </p>
      </div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        "{text}"
      </p>
    </Card>
  )
} 