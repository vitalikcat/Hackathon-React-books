export const IsAuthenticated = state => state.session.isAuthenticated;

export const getToken = state => state.session.token;

export const getUser = state => state.session.user;

export const haveTraining = state => state.session.user.haveTraining;
