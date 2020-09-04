const format = function (value, ...args) {
  if (typeof value !== "string") {
    throw new Error("format can only be used with value values");
  }

  return value.replace(/{(\d+)}/g, (matched, [index]) => {
    return args[index];
  });
};

module.exports = {
  format,
};
