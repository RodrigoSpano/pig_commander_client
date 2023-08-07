'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div>
      <div className="px-6 lg:px-8 select-none">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-gray-900 sm:text-6xl"
            >
              Make the best financial decisions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-lg text-gray-600"
            >
              With Pig Commander, you can track your income, expenses, and balances, create budgets, connect your bank and credit card accounts, and set financial goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/login"
                className="rounded-md bg-gradient-to-r from-regularPink to-boldPink px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-hidden="true"
                >
                  Get started <span>&rarr;</span>
                </motion.span>
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-hidden="true"
                >
                  Learn more <span>→</span>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
