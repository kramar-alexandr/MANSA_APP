// @flow
module.exports = (args: { data: Object }) => {
  console.log(`recordPreList - ${(new Date()).getTime()}`);
  console.log(args.data);
}