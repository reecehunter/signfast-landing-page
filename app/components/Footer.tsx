import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
          <div className='flex-1'>
            <h3 className='text-2xl font-bold mb-4 flex items-center'>
              <Image
                src='/logo.png'
                alt='SignFast logo'
                width={28}
                height={28}
                className='mr-2 h-7 w-7'
              />
              SignFast
            </h3>
            <p className='text-gray-400'>
              The first document signer built specifically for small businesses. Pay only for what
              you use.
            </p>
          </div>
          <div className='flex-shrink-0'>
            <a
              href='https://app.signfa.st'
              className='bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:-translate-y-0.5 inline-block'
            >
              Start For Free
            </a>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p className='text-gray-400'>© 2025 SignFast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
