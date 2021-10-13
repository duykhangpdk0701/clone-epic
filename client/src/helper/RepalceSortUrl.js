import queryString from "query-string";

export const ReplaceUrtUrl = (param, history, urlParams) => {
  history.replace({
    pathname: "/store/browse",
    search: queryString.stringify(
      { ...urlParams, sortBy: param },
      { arrayFormat: "bracket-separator", arrayFormatSeparator: "|" },
    ),
  });
};
