export type Lang = 'en' | 'de';

export const translations = {
  en: {
    meta: {
      title: 'eunoia Quest',
      description: 'Gamified Mental Health Screening Platform on your platform.',
    },
    header: {
      logo: 'eunoia',
      nav: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#features', label: 'Features' },
        { href: '#team', label: 'Team' },
        { href: '#contact', label: 'Contact' },
        { href: '/blog', label: 'Blog' },
      ],
      langSwitcher: { label: 'DE', href: '/de' },
      menuOpenLabel: 'Open menu',
      menuCloseLabel: 'Close menu',
    },
    hero: {
      title: 'Meet eunoia Quest',
      subtitle: 'Gamified mental health screening on your platform.',
      cta: 'Learn More',
    },
    about: {
      heading: 'Our Mission',
      body: "At eunoia Quest, we're revolutionizing mental health assessments through engaging video games. Our mission is to provide accurate, unbiased, and enjoyable screening experiences, making the process less stressful and more insightful for everyone involved.",
      learnMore: 'Learn More',
      imageAlt: 'eunoia Quest platform illustration',
    },
    features: {
      heading: 'Why Choose Eunoia?',
      subheading: 'Discover the advantages of our gamified screening platform.',
      items: [
        {
          title: 'Machine Learning',
          description: 'Pre-diagnose patients through scientifically-validated machine learning algorithms.',
        },
        {
          title: 'Engaging Gameplay',
          description: 'Assessments that feel less like tests and more like playing a game.',
        },
        {
          title: 'Actionable Analytics',
          description: 'Receive clear, comprehensive reports, so mental health professionals can decide easier and faster.',
        },
        {
          title: 'Secure & Private',
          description: 'Your data is protected with industry-standard security measures.',
        },
      ],
    },
    team: {
      heading: 'Meet Our Team',
      subheading: "The minds behind Eunoia's innovative assessment solutions.",
      members: [
        { name: 'Sara Ahmadi Majd', role: 'Co-Founder & Lead Scientist' },
        { name: 'Alex (M.H.) Emami', role: 'Co-Founder & CTO' },
      ],
    },
    contact: {
      heading: 'Get In Touch',
      subheading: "Have questions or want to learn more? We'd love to hear from you.",
      infoHeading: 'Contact Information',
      address: 'Göttingen, 37073, Lower Saxony',
      ctaText: 'Ready to transform your assessments? Reach out to our team directly.',
      ctaButton: 'Email Us',
      mapPlaceholder: 'Map Placeholder',
    },
    blog: {
      title: 'Blog — eunoia Quest',
      description: 'Insights on gamified mental health screening, product updates, and the science behind Eunoia Quest.',
      heading: 'Blog',
      subheading: 'Insights, updates, and stories from the Eunoia Quest team.',
      readMore: 'Read more',
      backToBlog: '← Back to Blog',
      publishedOn: 'Published on',
      by: 'By',
      readInGerman: 'Auf Deutsch lesen',
      readInEnglish: 'Read in English',
    },
    footer: {
      allRightsReserved: 'All rights reserved.',
      address: 'Göttingen, 37073, Lower Saxony',
    },
  },

  de: {
    meta: {
      title: 'eunoia Quest – Spielbasiertes Gesundheitsscreening',
      description: 'Spielbasiertes psychisches Gesundheitsscreening auf Ihrer Plattform.',
    },
    header: {
      logo: 'eunoia',
      nav: [
        { href: '#home', label: 'Startseite' },
        { href: '#about', label: 'Über uns' },
        { href: '#features', label: 'Funktionen' },
        { href: '#team', label: 'Team' },
        { href: '#contact', label: 'Kontakt' },
        { href: '/blog', label: 'Blog' },
      ],
      langSwitcher: { label: 'EN', href: '/' },
      menuOpenLabel: 'Menü öffnen',
      menuCloseLabel: 'Menü schließen',
    },
    hero: {
      title: 'Entdecke eunoia Quest',
      subtitle: 'Spielbasiertes psychisches Gesundheitsscreening auf Ihrer Plattform.',
      cta: 'Mehr erfahren',
    },
    about: {
      heading: 'Unsere Mission',
      body: 'Bei eunoia Quest revolutionieren wir psychische Gesundheitsassessments durch fesselnde Videospiele. Unsere Mission ist es, genaue, vorurteilsfreie und angenehme Screening-Erfahrungen zu bieten, die den Prozess für alle Beteiligten weniger stressig und aufschlussreicher gestalten.',
      learnMore: 'Mehr erfahren',
      imageAlt: 'eunoia Quest Plattform-Illustration',
    },
    features: {
      heading: 'Warum Eunoia wählen?',
      subheading: 'Entdecken Sie die Vorteile unserer spielbasierten Screening-Plattform.',
      items: [
        {
          title: 'Maschinelles Lernen',
          description: 'Vorab-Diagnose von Patienten durch wissenschaftlich validierte Algorithmen für maschinelles Lernen.',
        },
        {
          title: 'Fesselndes Gameplay',
          description: 'Assessments, die sich weniger wie Tests und mehr wie ein Spiel anfühlen.',
        },
        {
          title: 'Umsetzbare Analysen',
          description: 'Erhalten Sie klare, umfassende Berichte, damit Fachkräfte für psychische Gesundheit einfacher und schneller entscheiden können.',
        },
        {
          title: 'Sicher & Privat',
          description: 'Ihre Daten sind durch branchenübliche Sicherheitsmaßnahmen geschützt.',
        },
      ],
    },
    team: {
      heading: 'Unser Team',
      subheading: "Die Köpfe hinter Eunioias innovativen Assessment-Lösungen.",
      members: [
        { name: 'Sara Ahmadi Majd', role: 'Mitgründerin & Leitende Wissenschaftlerin' },
        { name: 'Alex (M.H.) Emami', role: 'Mitgründer & CTO' },
      ],
    },
    contact: {
      heading: 'Kontakt aufnehmen',
      subheading: 'Haben Sie Fragen oder möchten Sie mehr erfahren? Wir freuen uns, von Ihnen zu hören.',
      infoHeading: 'Kontaktinformationen',
      address: 'Göttingen, 37073, Niedersachsen',
      ctaText: 'Bereit, Ihre Assessments zu transformieren? Kontaktieren Sie unser Team direkt.',
      ctaButton: 'E-Mail senden',
      mapPlaceholder: 'Kartenplatzhalter',
    },
    blog: {
      title: 'Blog — eunoia Quest',
      description: 'Einblicke in spielbasiertes psychisches Gesundheitsscreening, Produktupdates und die Wissenschaft hinter Eunoia Quest.',
      heading: 'Blog',
      subheading: 'Einblicke, Updates und Geschichten vom Eunoia Quest Team.',
      readMore: 'Weiterlesen',
      backToBlog: '← Zurück zum Blog',
      publishedOn: 'Veröffentlicht am',
      by: 'Von',
      readInGerman: 'Auf Deutsch lesen',
      readInEnglish: 'Read in English',
    },
    footer: {
      allRightsReserved: 'Alle Rechte vorbehalten.',
      address: 'Göttingen, 37073, Niedersachsen',
    },
  },
} as const;

export type Translations = typeof translations['en'];
