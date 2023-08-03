import Link from 'next/link';

export default function HeroSection() {
  return (
    <div>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold  text-gray-900 sm:text-6xl">
              Make the best financial decisions
            </h1>
            <p className="mt-6 text-lg  text-gray-600">
              With Pig Commander, you can track your income, expenses, and balances, create budgets, connect your bank and credit card accounts, and set financial goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#"
                className="rounded-md bg-gradient-to-r from-regularPink to-boldPink px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
