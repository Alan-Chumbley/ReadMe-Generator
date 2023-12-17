// function to generate markdown for README
function generateMarkdown(data)  {
  return `# ${data.Project}

  ## Description 

  ${data.Description}

  ![Screenshot of deployed website](${data.Image})


## Table of Contents

-  Description
-  Stack
-  Details
-  License
-  Support

## Stack

- Built Using: 
-${data.stack}




## Details
- Here you can find some more information about this repository;

- To run this you will need to : ${data.Dependencies}
- To test run this : ${data.tests}

## License
- This Project is Under the License of ${data.License}

## Support
- If you have any concerns please reach out to ${data.GitHubName} at:  ${data.Email}

`;
}

module.exports = generateMarkdown;
