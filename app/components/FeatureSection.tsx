'use client'

import Image from 'next/image'

export type FeatureSectionProps = {
  id?: string
  background?: 'white' | 'gray-50'
  title: string
  paragraphs?: string[]
  bullets?: string[]
  textAfterBullets?: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  bulletStyle?: 'check' | 'number'
  showCTA?: boolean
}

export default function FeatureSection({
  id,
  background = 'gray-50',
  title,
  paragraphs = [],
  bullets = [],
  textAfterBullets,
  imageSrc,
  imageAlt,
  reverse = false,
  bulletStyle = 'check',
  showCTA = false,
}: FeatureSectionProps) {
  return (
    <section id={id} className={`py-20 bg-${background}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? 'lg:[&>div:first-child]:order-2' : ''
          }`}
        >
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>{title}</h2>
            {paragraphs.map((text, idx) => (
              <p
                key={idx}
                className={`text-lg text-gray-600 ${
                  idx === paragraphs.length - 1 ? 'mb-8' : 'mb-6'
                }`}
              >
                {text}
              </p>
            ))}
            {!!bullets.length && (
              <div className='space-y-4 mb-6'>
                {bullets.map((b, i) => (
                  <div key={i} className='flex items-center'>
                    {bulletStyle === 'check' ? (
                      <span className='mr-3 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-amber-300'>
                        <svg
                          className='h-3.5 w-3.5 text-amber-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className='mr-3 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-amber-200 text-amber-700 text-[11px] font-semibold leading-none'>
                        {i + 1}
                      </span>
                    )}
                    <span className='text-gray-700'>{b}</span>
                  </div>
                ))}
              </div>
            )}
            {textAfterBullets && <p className='text-lg text-gray-600'>{textAfterBullets}</p>}
            {showCTA && (
              <div className='mt-8'>
                <a
                  href='https://app.signfa.st'
                  className='bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl block w-full sm:inline-block sm:w-auto text-center'
                >
                  Start For Free
                </a>
              </div>
            )}
          </div>
          <div className='mx-auto w-full max-w-5xl relative aspect-square rounded-2xl shadow-2xl ring-1 ring-gray-200 overflow-hidden'>
            <Image src={imageSrc} alt={imageAlt} fill className='object-cover' priority />
          </div>
        </div>
      </div>
    </section>
  )
}
