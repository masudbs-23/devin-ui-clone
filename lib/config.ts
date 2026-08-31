// Environment configuration with validation

const requiredEnvVars = ['NEXT_PUBLIC_SITE_URL'] as const;

type EnvVar = (typeof requiredEnvVars)[number];

function getEnvVar(key: EnvVar): string {
  const value = process.env[key];
  if (!value) {
    console.warn(`Missing environment variable: ${key}. Using fallback value.`);
  }
  return value || '';
}

export const config = {
  site: {
    url: getEnvVar('NEXT_PUBLIC_SITE_URL') || 'https://puku.dev',
    name: 'Puku',
    description: 'Puku is the all-in-one environment for AI workflows, software development, and design.',
  },
  social: {
    twitter: '@puku',
    linkedin: 'https://linkedin.com/company/puku',
    github: 'https://github.com/puku',
  },
  contact: {
    phone: '+1-555-555-5555',
    email: 'contact@puku.dev',
  },
} as const;

export function validateEnv(): boolean {
  const missing = requiredEnvVars.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    return false;
  }
  return true;
}
