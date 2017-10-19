// @flow
module.exports = (args: {
  data: Object
}) => {
  console.log(`recordPreUpdate - ${(new Date()).getTime()}`);
  console.log(args.data);
}
