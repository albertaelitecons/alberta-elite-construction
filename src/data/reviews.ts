export const MIN_GOOGLE_REVIEW_STARS = 4;

export const googleReviewSourceUrl = 'https://maps.app.goo.gl/vVMoMr2XrGZu9CNM6';

/** Official Google Maps listing stats. */
export const googleReviewStats = {
  rating: 5.0,
  count: 5,
} as const;

type GoogleReview = {
  quote: string;
  name: string;
  initials: string;
  stars: number;
};

const rawGoogleReviews: GoogleReview[] = [
  {
    quote:
      'We love how our basement turned out! The whole process was smooth, and the finished space looks fantastic.',
    name: 'Jake Reber',
    initials: 'JR',
    stars: 5,
  },
  {
    quote:
      'Great experience from start to finish. The bathroom renovation turned out beautifully, and the team was professional and easy to work with.',
    name: 'Emma Occleston',
    initials: 'EO',
    stars: 5,
  },
  {
    quote:
      'They did a fantastic job rebuilding our deck. From the design to the final installation, everything was handled professionally and the process was quick and easy. The new deck looks great and we are very pleased with the result. Great team and great service!',
    name: 'Ryan Mouck',
    initials: 'RM',
    stars: 5,
  },
  {
    quote:
      'We used them to remodel our bathrooms and are very happy with the result. We had something a little different in mind and they really helped us bring the idea to life. They listened to what we wanted and made it work. Everything came out beautiful.',
    name: 'Dana Shabun',
    initials: 'DS',
    stars: 5,
  },
  {
    quote:
      'Really happy with the work they did on our legal basement suite. They helped us come up with a great layout, did the design, took care of all the permits, and built everything exactly as we agreed. Communication was easy throughout the project, the quality of the work was great, and they kept everything on schedule. They actually finished about 2 weeks earlier than expected! Overall, great service, good quality work, and very easy to deal with. We are very happy with how everything turned out and would definitely recommend them.',
    name: 'Rima Gegelia',
    initials: 'RG',
    stars: 5,
  },
];

export const googleReviews = rawGoogleReviews.filter(
  (review) => review.stars >= MIN_GOOGLE_REVIEW_STARS,
);
