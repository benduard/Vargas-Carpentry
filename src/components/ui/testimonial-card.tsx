import { cn } from "../../lib/utils"
import { Avatar, AvatarImage } from "./avatar"

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
        "p-6 border border-gray-100",
        "hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div>
          <h3 className="font-semibold text-gray-900">
            {author.name}
          </h3>
          <p className="text-sm text-gray-500">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">
        "{text}"
      </p>
    </Card>
  )
} 