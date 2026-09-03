// Central, truthful profile data.
// Anything not yet confirmed by Priti is left as an empty string ('') —
// components treat empty values as "placeholder, not yet added" and will
// never fabricate a link, date, or credential.

export const profile = {
  name: 'Priti Alapure',
  role: 'Aspiring Software Engineer | Full Stack Developer | GenAI Enthusiast',
  tagline:
    'Computer Science student who builds full-stack applications, backend systems, and AI-powered solutions — and keeps sharpening problem-solving skills along the way.',
  email: 'pritialapure@gmail.com', // TODO: add real email before launch
  resumeUrl: '', // TODO: add resume PDF link before launch
  location: 'Pune', // optional, add if desired
}
