const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/kirandevihosur74/portfolio.git";
ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
    clean: true,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);