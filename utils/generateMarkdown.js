// function to generate markdown for README
function generateMarkdown(data)  {
  return `# ${data.Project}
${data.GitHubName}
##Table of Contents

##If you have any concerns please reach out to me at:  ${data.Email}
${data.Description}

##This Project is Under the License of ${data.License}
${data.Dependencies}
![](${data.Image})
`;
}

module.exports = generateMarkdown;
