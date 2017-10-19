// @flow
module.exports = (args: {
  data: Object
}) => {
  console.log(`recordPostUpdate - ${(new Date()).getTime()}`);
  console.log(args.data); //undefined here...
}
