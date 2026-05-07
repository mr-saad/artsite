import Link from "next/link"
import { Button } from "./ui/button"
import { Field } from "./ui/field"
import { Input } from "./ui/input"
import Section from "./ui/section"
import { categories } from "@/lib/data/products"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-900">
      <Section
        className={
          "grid grid-cols-[repeat(auto-fit,minmax(min(15rem,100%),1fr))] gap-5"
        }
      >
        {categories.slice(0, 4).map((ct) => {
          return (
            <div key={ct.id}>
              <p className="text-black dark:text-white text-xl font-serif font-bold">
                {ct.title}
              </p>
              <ul>
                {ct.subCategories.map((sb) => {
                  return (
                    <li key={sb.id} className="leading-7">
                      <Link
                        href={"/c/" + sb.id}
                        className="transition focus-visible:text-black hover:text-black dark:focus-visible:text-white dark:hover:text-white"
                      >
                        {sb.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </Section>
      <Section>
        <div className="flex flex-wrap justify-between gap-5">
          <div>
            <h1 className="text-3xl font-serif text-black dark:text-white">
              ArtSite
            </h1>
            <p>Where Silence meets Serenity</p>
          </div>
          <div>
            <p className="mb-2">Subscribe to our newsletter to stay updated.</p>
            <form className="flex gap-2">
              <Field>
                <Input placeholder="caseycook23@gmail.com" />
              </Field>
              <Button type="button">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-between mt-5">
          <p>
            Copyright &copy; {new Date().getFullYear()} ArtSite. All rights
            reserved.
          </p>
          <div>
            <Link
              className="transition hover:text-black dark:hover:text-white mr-3"
              href={"/terms-service"}
            >
              Terms of Service
            </Link>
            <Link
              className="transition hover:text-black dark:hover:text-white"
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Section>
    </footer>
  )
}
