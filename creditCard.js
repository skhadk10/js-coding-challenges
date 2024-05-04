// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(value) {
  if (value.length <= 4) return value;

  let hashRepeat = "#".repeat(value.length - 4);
  let lastFour = value.substr(-4);
  console.log(hashRepeat, lastFour);
  return hashRepeat + lastFour;
}

maskify("45555222333322211111");
