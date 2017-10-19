// @flow
module.exports = (args: { data: Object }) => {
  console.log(`recordPostRemove - ${(new Date()).getTime()}`);
  console.log(args.data);
}
