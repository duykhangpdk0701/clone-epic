exports.NEW_RELEASE = {
  urlValue: "NewRelease",
  // cannot return an empty object then leave it a field has no relate with schema
  toMongoValue: () => ({ empty: 1 }),
};

exports.RELEASE_DATE = {
  urlValue: "ReleaseDate",
  toMongoValue: () => ({ createdAt: -1, _id: 1 }),
};

exports.ALPHABETICAL = {
  urlValue: "Alphabetical",
  toMongoValue: () => ({ name: 1, _id: 1 }),
};

exports.LOW_TO_HIGH = {
  urlValue: "LowToHigh",
  toMongoValue: () => ({ price: 1, _id: 1 }),
};

exports.HIGH_TO_LOW = {
  urlValue: "HighToLow",
  toMongoValue: () => ({ price: -1, _id: 1 }),
};
