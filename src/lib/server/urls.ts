export const urls = {
  // auth
  login: () => '/auth/jwt/login',
  logout: () => '/auth/jwt/logout',

  // quiz
  quiz: () => '/quiz',
  quizCompleted: () => '/quiz/completed/',
  quizId: (id: string) => `/quiz/${id}`,
};
