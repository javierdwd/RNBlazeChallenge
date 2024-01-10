export enum ScreensEnum {
  'Dashboard' = 'DashboardScreen',
  'Settings' = 'SettingsScreen',
}

export type MainNavigatorParamList = {
  [ScreensEnum.Dashboard]: undefined;
  [ScreensEnum.Settings]: undefined;
};
