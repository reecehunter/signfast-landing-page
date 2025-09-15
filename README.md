# Landing page for signfa.st pre-release

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file in the root directory with:

   ```
   RESEND_API_KEY=re_your_api_key_here
   NOTIFICATION_EMAIL=your-email@example.com
   ```

3. Get your Resend API key:

   - Sign up at [resend.com](https://resend.com)
   - Go to API Keys section
   - Create a new API key
   - Add it to your `.env.local` file

4. Update the sender email in `/app/api/submit-email/route.ts`:

   - Replace `onboarding@resend.dev` with your verified domain email
   - Or use a verified email address from your Resend account

5. Run the development server:
   ```bash
   npm run dev
   ```

## Features

- Email collection form with Resend integration
- Form submissions are sent to your email with subject "SignFast email submission"
- Loading states and error handling
- Responsive design with dark mode support
