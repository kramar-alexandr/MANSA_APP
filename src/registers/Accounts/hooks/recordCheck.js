// @flow
module.exports = (args: {
  data: Object
}) => {
  console.log(`recordCheck - ${(new Date()).getTime()}`);
  console.log(args.data);
}
