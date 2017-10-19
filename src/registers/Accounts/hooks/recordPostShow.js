// @flow
module.exports = (args: { data: Object }) => {
  console.log(`recordPostShow - ${(new Date()).getTime()}`);
  console.log(args.data);
}