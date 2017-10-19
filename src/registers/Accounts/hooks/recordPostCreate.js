// @flow
module.exports = (args: { data: Object }) => {
  console.log(`recordPostCreate - ${(new Date()).getTime()}`);
  console.log(args.data);
}
