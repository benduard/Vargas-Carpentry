import { cn } from "../../lib/utils"
import { TestimonialCard, TestimonialAuthor } from "./testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-white",
      "py-12 sm:py-16 md:py-24",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="relative -mx-4 sm:mx-0">
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-4 sm:space-x-6 py-4">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-4 sm:space-x-6">
                  {testimonials.map((testimonial, i) => (
                    <div key={`${setIndex}-${i}`} className="w-[280px] sm:w-[350px] flex-shrink-0">
                      <TestimonialCard 
                        {...testimonial}
                        className="h-full"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  )
} 