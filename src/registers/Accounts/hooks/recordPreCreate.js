// @flow
module.exports = (args: {
  data: Object
}) => {
  console.log(`recordPreCreate - ${(new Date()).getTime()}`);
  console.log(args.data);
}
