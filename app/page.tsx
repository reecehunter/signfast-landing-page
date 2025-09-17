'use client'

import Image from 'next/image'
import FeatureSection from './components/FeatureSection'
import TopNav from './components/TopNav'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <TopNav />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-amber-50 to-indigo-100 py-20 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              The First Document Signer
              <span className='block text-amber-500'>for Small Businesses</span>
            </h1>
            <p className='text-xl md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Stop paying $20+ per month for document signing. With SignFast, you only pay for what
              you use - no monthly fees, no contracts, just simple pay-per-signature pricing.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://app.signfa.st'
                className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl'
              >
                Start For Free
              </a>
              <a
                href='#features'
                className='bg-white hover:bg-gray-50 text-amber-500 border-2 border-amber-500 px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:-translate-y-0.5'
              >
                Learn More
              </a>
            </div>
            <p className='text-sm text-gray-500 mt-6'>
              No credit card required • Free to get started • Cancel anytime
            </p>
            <div className='mt-12 -mb-24 sm:-mb-32'>
              <Image
                src='/signfast-dashboard.png'
                alt='SignFast dashboard screenshot'
                width={2400}
                height={1400}
                className='mx-auto w-full max-w-5xl rounded-2xl shadow-2xl ring-1 ring-gray-200 h-auto'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section id='features' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Small Businesses Choose SignFast
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Built specifically for small businesses who need document signing without the overhead
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6'>
              <div className='bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-amber-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Pay-Per-Signature</h3>
              <p className='text-gray-600'>
                Only pay for the documents you actually sign. No monthly subscriptions or hidden
                fees.
              </p>
            </div>

            <div className='text-center p-6'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Lightning Fast</h3>
              <p className='text-gray-600'>
                Get documents signed in minutes, not days. Our streamlined process saves you time.
              </p>
            </div>

            <div className='text-center p-6'>
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-purple-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Legally Binding</h3>
              <p className='text-gray-600'>
                All signatures are legally binding and compliant with e-signature laws worldwide.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Companies Choose SignFast Section */}
      <FeatureSection
        id='about'
        background='gray-50'
        title='Why Companies Choose SignFast'
        paragraphs={[
          "Traditional document signing services charge $20-40 per month, even if you only need to sign a few documents. That's $240-480 per year for something you might use once or twice.",
          "SignFast changes that. We're the first document signing service designed specifically for small businesses who need occasional document signing without the monthly commitment.",
        ]}
        bullets={[
          'No monthly subscriptions',
          'No setup fees or contracts',
          'Start signing in under 2 minutes',
        ]}
        imageSrc='/sign-document-popup.png'
        imageAlt='People saving money'
        showCTA={true}
      />

      {/* Under 2 Minutes Section */}
      <FeatureSection
        id='about'
        background='gray-50'
        title='Start Requesting Signatures In Under 2 Minutes'
        paragraphs={[
          'With SignFast, you can send your first document for signature faster than it takes to make a cup of coffee.',
          "Forget bloated software and costly subscriptions. With SignFast, you're ready to send and sign in minutes.",
        ]}
        bullets={[
          'No learning curve – our simple drag-and-drop signer fields make setup effortless.',
          'Instant access – create your free account and start sending right away.',
          'Lightning-fast turnaround – clients receive your request instantly and can sign from any device.',
        ]}
        imageSrc='/upload-popup.png'
        imageAlt=''
        reverse
        showCTA={true}
      />

      {/* Pricing Section */}
      <FeatureSection
        id='pricing'
        background='gray-50'
        title='Pay Only for What You Use'
        paragraphs={[
          'Why pay $20-40 every month for a tool you might only use once or twice?',
          "With SignFast, you're only charged when you actually send a document for signature.",
          'Stop wasting money on unused subscriptions. With SignFast, you only pay for what you use.',
        ]}
        bullets={[
          '$1 per signature – no minimums, no hidden fees.',
          'Free to start – your first 5 signatures are on us.',
          'Scale as you grow – occasional use or high volume, the choice is yours.',
        ]}
        imageSrc='/billing-usage.png'
        imageAlt='Pricing illustration'
        showCTA={true}
      />

      {/* Built For Section */}
      <FeatureSection
        id='built-for'
        background='white'
        title='Built for Small Businesses & Freelancers'
        paragraphs={[
          'Most e-signature platforms are designed for enterprise customers. That means bloated software, confusing dashboards, and subscription costs that don’t make sense for a small operation.',
          'SignFast was built specifically for:',
        ]}
        bullets={[
          'Freelancers sending contracts and invoices',
          'Small businesses needing occasional HR or client paperwork',
          'Agencies who want quick, no-nonsense client approvals',
          'Landlords managing rental agreements',
        ]}
        textAfterBullets={
          'If you don’t send documents every day, you shouldn’t have to pay like you do.'
        }
        imageSrc='/completed-documents-dashboard.png'
        imageAlt='Use cases illustration'
        reverse
        showCTA={true}
      />

      {/* No Hidden Fees Section */}
      <FeatureSection
        id='no-fees'
        background='gray-50'
        title='No Hidden Fees, No Lock-In'
        paragraphs={["We believe small businesses deserve transparency. That's why SignFast has:"]}
        bullets={['No setup costs', 'No monthly contracts', 'No surprise add-ons']}
        textAfterBullets="Just straightforward pay-per-signature pricing. Use it when you need it, ignore it when you don't."
        imageSrc='/billing-usage-2.png'
        imageAlt='Transparent pricing illustration'
        showCTA={true}
      />

      {/* Security & Compliance Section */}
      <FeatureSection
        id='security'
        background='white'
        title='Secure & Legally Binding Signatures'
        paragraphs={[
          'Just because SignFast is simple doesn’t mean it cuts corners. Every signature you send is:',
          'Your documents are safe, your signatures are enforceable, and your business stays protected.',
        ]}
        bullets={[
          'Legally binding under U.S. ESIGN, UETA, and international eIDAS laws.',
          'Securely encrypted with industry-standard protocols.',
          'Trackable with a full audit trail — proof of who signed and when.',
        ]}
        imageSrc='/signing-confirmation.png'
        imageAlt='Security and compliance illustration'
        showCTA={true}
      />

      {/* How It Works Section */}
      <FeatureSection
        id='how-it-works'
        background='white'
        title='How SignFast Works'
        paragraphs={[
          'Sending a document with SignFast is quick and intuitive:',
          'That’s it. From signup to your first completed signature request in under 2 minutes.',
        ]}
        bullets={[
          'Upload Your Document – PDFs, agreements, contracts, or forms.',
          'Add Signers – Enter names and emails, drag-and-drop where signatures go.',
          'Send & Track – Hit send and watch signatures come back in real time.',
        ]}
        imageSrc='/multiple-signers.png'
        imageAlt='How it works illustration'
        reverse
        bulletStyle='number'
        showCTA={true}
      />

      {/* Start Free Section */}
      <FeatureSection
        id='start-free'
        background='gray-50'
        title='Start Free – Your First 5 Signatures Are On Us'
        paragraphs={[
          'Getting started is risk-free. Create your free account today and send your first 5 signature requests completely free.',
          'Try SignFast today and see how easy document signing can be.',
        ]}
        bullets={['No credit card required', 'No contracts to sign', 'No hidden catches']}
        imageSrc='/documents-dashboard.png'
        imageAlt='Start free illustration'
        showCTA={true}
      />

      {/* Comparison Section */}
      {/* <section id='comparison' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
            Compare Us to the Competition
          </h2>
          <p className='text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto'>
            Here’s how SignFast stacks up against traditional document signing tools:
          </p>

          <div className='overflow-x-auto rounded-2xl border border-gray-200 shadow-sm'>
            <table className='min-w-full divide-y divide-gray-200 bg-white'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-semibold text-gray-700'
                  >
                    Feature
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-semibold text-gray-700'
                  >
                    SignFast
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-semibold text-gray-700'
                  >
                    DocuSign / HelloSign
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-semibold text-gray-700'
                  >
                    Adobe Sign
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 text-sm text-gray-900 font-medium'>Pricing</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>$1 per signature</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>$20–40/month</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>$20–30/month</td>
                </tr>
                <tr className='bg-white'>
                  <td className='px-6 py-4 text-sm text-gray-900 font-medium'>Free Plan</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>5 free signatures</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>Limited trial</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>Limited trial</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 text-sm text-gray-900 font-medium'>Contracts</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>None</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>Required subscription</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>Required subscription</td>
                </tr>
                <tr className='bg-white'>
                  <td className='px-6 py-4 text-sm text-gray-900 font-medium'>Setup Time</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>&lt; 2 minutes</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>1–2 days onboarding</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>1–2 days onboarding</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 text-sm text-gray-900 font-medium'>Designed For</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>
                    Small businesses & freelancers
                  </td>
                  <td className='px-6 py-4 text-sm text-gray-700'>Enterprise users</td>
                  <td className='px-6 py-4 text-sm text-gray-700'>Enterprise users</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-gray-700 mt-10 text-center max-w-3xl mx-auto'>
            Stop overpaying for features you’ll never use. Choose the e-signature tool built for
            businesses like yours.
          </p>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className='py-20 bg-amber-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Ready to Start Signing Documents?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-2xl mx-auto'>
            Join thousands of small businesses who have switched to pay-per-signature document
            signing. No monthly fees, no contracts, just simple pricing.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='https://app.signfa.st'
              className='bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl'
            >
              Start For Free
            </a>
          </div>
          <p className='text-amber-100 text-sm mt-6'>
            No credit card required • Free to get started • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
