'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit email')
      }

      setIsSubmitted(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4'>
      <div className='max-w-2xl mx-auto text-center'>
        <div className='mb-8'>
          <h1 className='text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            SignFast
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>
            Pay-per-signature document signing coming soon
          </p>
          <p className='text-lg text-gray-500 dark:text-gray-400 mb-12'>
            Stop spending $20 per month just to get a few documents signed each month.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                required
                disabled={isLoading}
                className='flex-1 px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed'
              />
              <button
                type='submit'
                disabled={isLoading}
                className='px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              >
                {isLoading ? 'Submitting...' : 'Notify Me'}
              </button>
            </div>
            {error && (
              <div className='mt-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg'>
                <p className='text-sm'>{error}</p>
              </div>
            )}
          </form>
        ) : (
          <div className='max-w-md mx-auto'>
            <div className='bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-6 py-4 rounded-lg'>
              <p className='font-semibold'>Thank you!</p>
              <p>We&apos;ll notify you when SignFast launches.</p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setError('')
              }}
              className='mt-4 text-blue-600 dark:text-blue-400 hover:underline'
            >
              Submit another email
            </button>
          </div>
        )}

        <div className='mt-16 text-sm text-gray-500 dark:text-gray-400'>
          <p>Be the first to know when we launch and get early access to our platform.</p>
        </div>
      </div>
    </div>
  )
}
