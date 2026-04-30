import Link from "next/link"
import { Button } from "./ui/button"
import { Field } from "./ui/field"
import { Input } from "./ui/input"

export default function Footer() {
  return (
    <footer className="p-5 mt-20 border-t border-zinc-200 dark:border-zinc-900">
      <div className="container mx-auto">
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
              className="transition hover:text-black dark:hover:text-white"
              href={"/terms-service"}
            >
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link
              className="transition hover:text-black dark:hover:text-white"
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
