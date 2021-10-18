import queryString from "query-string";

export const ReplaceUrl = (param, urlParams) => {
  const valueReturn = queryString.stringify(
    { ...urlParams, sortBy: param },
    { arrayFormat: "bracket-separator", arrayFormatSeparator: "|" },
  );
  return valueReturn;
};
