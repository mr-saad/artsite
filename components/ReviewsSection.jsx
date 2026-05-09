"use client"
import { reviews } from "@/lib/data/reviews"
import StarRating from "./StartRating"
import Section from "./ui/section"
import { motion, stagger } from "motion/react"

const gridVariants = {
  visible: { transition: { delayChildren: stagger(0.1) } },
  invisible: {},
}

const childVariants = {
  visible: { opacity: 1, y: 0, transition: { bounce: 0 } },
  invisible: { opacity: 0, y: 10 },
}

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900/30">
      <Section>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl text-black dark:text-white md:text-4xl font-bold tracking-tight mb-4">
            Hear from Our Collectors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Feedback from art lovers across India who have brought our pieces
            into their homes.
          </p>
        </div>

        {/* Masonry-style Grid (CSS Columns) */}
        <motion.div
          variants={gridVariants}
          initial="invisible"
          whileInView={"visible"}
          className="md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {reviews.map((review) => (
            <motion.div
              variants={childVariants}
              key={review.id}
              className="break-inside-avoid bg-gray-50 dark:bg-zinc-900 p-6 sm:p-8 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-semibold text-base">{review.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {review.date}
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs font-medium text-gray-600 dark:text-gray-300">
                  Verified
                </div>
              </div>

              <StarRating rating={review.rating} />

              <h3 className="font-bold text-lg mb-2 leading-tight">
                {review.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed before:text-xl after:text-xl before:content-[open-quote] after:content-[close-quote]">
                {review.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </section>
  )
}
