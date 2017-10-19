// @flow
module.exports = (args: { data: Object }) => {
  console.log(`recordPreRemove - ${(new Date()).getTime()}`);
  console.log(args.data);
}
