// @flow
module.exports = (args: { data: Object }) => {
  console.log(`recordPostList - ${(new Date()).getTime()}`);
  console.log(args.data);
}