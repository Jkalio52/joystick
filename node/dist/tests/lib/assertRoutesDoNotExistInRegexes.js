var assertRoutesDoNotExistInRegexes_default = (routeRegexes = [], routes = []) => {
  routes.forEach((route) => {
    const hasMatch = routeRegexes.some((routeRegex) => !!route.match(routeRegex));
    expect(hasMatch).toBe(false);
  });
};
export {
  assertRoutesDoNotExistInRegexes_default as default
};
