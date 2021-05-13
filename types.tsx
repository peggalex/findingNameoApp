export enum MainNav {
  FrontPage = "FRONT_PAGE",
  SignInPage = "SIGN_IN",
  LoginPage = "LOGIN_PAGE",
  MainPage = "MAIN_PAGE"
};

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
