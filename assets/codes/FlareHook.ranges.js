const getNote = () => {
  let diff = (new Date() - new Date(1560959789454)) / 1000;
  const hours = Math.floor(diff / (60 * 60));
  diff -= hours * 60 * 60;
  const minutes = Math.floor(diff / 60);
  diff -= minutes * 60;
  return `${hours} hours and ${minutes} minutes ago Dominic has openned this PR (Actually it differs a little bit with our example)`;
};
module.exports = [
  {
    loc: [0, 14],
    title: 'Flare hooks',
    get note() {
      return getNote();
    }
  },
  { loc: [1, 2], title: 'useHover hook' },
  {
    loc: [5, 8],
    title: 'Hover event module',
    note:
      'There should be a hover module in the branch which hook has been used'
  },
  { loc: [9, 10], title: 'Showing/Styling component conditionaly' },
  {
    loc: [0, 14],
    title: 'Flare hooks',
    get note() {
      return getNote();
    }
  }
];
