const {
  NEW_RELEASE,
  RELEASE_DATE,
  ALPHABETICAL,
  LOW_TO_HIGH,
  HIGH_TO_LOW,
} = require("../constant/productSortType");

const toSortMongoValue = (value) => {
  switch (value) {
    case NEW_RELEASE.urlValue:
      return NEW_RELEASE.toMongoValue();
    case RELEASE_DATE.urlValue:
      return RELEASE_DATE.toMongoValue();
    case ALPHABETICAL.urlValue:
      return ALPHABETICAL.toMongoValue();
    case LOW_TO_HIGH.urlValue:
      return LOW_TO_HIGH.toMongoValue();
    case HIGH_TO_LOW.urlValue:
      return HIGH_TO_LOW.toMongoValue();
    default:
      return NEW_RELEASE.toMongoValue();
  }
};

module.exports = toSortMongoValue;
