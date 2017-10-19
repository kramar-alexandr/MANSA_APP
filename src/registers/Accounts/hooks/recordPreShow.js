// @flow
module.exports = (args: {
  data: Object
}) => {
  console.log(`recordPreShow - ${(new Date()).getTime()}`);
  console.log(args.data);
}
