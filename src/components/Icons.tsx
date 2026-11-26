import React from 'react';

export type SiteIconName =
  | 'poisson'
  | 'alevin'
  | 'croissance'
  | 'sante'
  | 'goutte'
  | 'labo'
  | 'graine'
  | 'equipe'
  | 'bouclier'
  | 'bassin'
  | 'whatsapp'
  | 'facebook'
  | 'gmail'
  | 'phone'
  | 'repere';

interface SiteIconProps {
  name: SiteIconName;
  className?: string;
}

export const SiteIcon: React.FC<SiteIconProps> = ({ name, className }) => {
  switch (name) {
    case 'poisson':
      return (
        <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M2 20c8-13 22-18 33-18 9 0 16 4 21 9l6-7v32l-6-7c-5 5-12 9-21 9C24 38 10 33 2 20Z"
            opacity=".9"
          />
          <circle cx="42" cy="16" r="2.4" fill="#fff" />
        </svg>
      );
    case 'alevin':
      return (
        <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M6 20c7-8 16-11 24-11 7 0 12 2 16 6l10-6v22l-10-6c-4 4-9 6-16 6-8 0-17-3-24-11Z"
          />
          <circle cx="36" cy="17" r="2" fill="#fff" />
        </svg>
      );
    case 'croissance':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 17l5-6 4 3 5-7M21 6h-4M21 6v4M4 21h16"
          />
        </svg>
      );
    case 'sante':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            d="M12 21C7 17.5 3.5 14.6 3.5 10.6 3.5 7.5 6 5.5 8.6 5.5c1.6 0 3 .8 3.4 2 .4-1.2 1.8-2 3.4-2 2.6 0 5.1 2 5.1 5.1 0 4-3.5 6.9-8.5 10.4Z"
          />
        </svg>
      );
    case 'goutte':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            d="M12 3s6 6.4 6 10.4A6 6 0 0 1 6 13.4C6 9.4 12 3 12 3Z"
          />
        </svg>
      );
    case 'labo':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 3v6L4.6 18a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3L14 9V3M9 3h6M8.5 14h7"
          />
        </svg>
      );
    case 'graine':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            d="M12 21c0-6 3-10 9-11 0 6-3 10-9 11ZM12 21C12 15 9 11 3 10c0 6 3 10 9 11ZM12 21v-4"
          />
        </svg>
      );
    case 'equipe':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            d="M8 11a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 8 11Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 14.7c2.8.2 5 2.2 5 4.8"
          />
        </svg>
      );
    case 'bouclier':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            d="M12 3l7.5 3v5.6c0 4.3-3 7.7-7.5 9.4-4.5-1.7-7.5-5.1-7.5-9.4V6L12 3Zm-3 9l2.2 2.2L15.5 10"
          />
        </svg>
      );
    case 'bassin':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            d="M3 8h18v11H3zM3 8l3-4h12l3 4M7 12.5c1.6-1.4 3.4-1.4 5 0s3.4 1.4 5 0"
          />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
          />
        </svg>
      );
    case 'gmail':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          />
        </svg>
      );
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
          />
        </svg>
      );
    case 'repere':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </g>
        </svg>
      );
  }
};
