import loadSettings from "../../settings/load";

export default () => {
  const settings = loadSettings();
  const databases = settings?.config?.databases || [];
  const usersDatabase = databases.find((database) => !!database.users);
  return usersDatabase && usersDatabase.provider;
};
