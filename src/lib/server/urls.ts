export const urls = {
  // auth
  login: () => '/auth/jwt/login',
  logout: () => '/auth/jwt/logout',

  // quiz
  quiz: () => '/quiz',
  quizCompleted: () => '/quiz/completed/',
  quizCompletedId: (id: string) => `/quiz/completed/${id}/`,
  quizId: (id: string) => `/quiz/${id}`,

  // articles
  articles: () => '/articles',
};
