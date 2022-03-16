// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## TABLE OF CONTENTS
* [DESCRIPTION](#description)
* [INSTALLATION](#install)
* [USAGE](#usage)
* [CREDITS](#credits)
* [TESTING](#test)

## DESCRIPTION

${data.description}

## INSTALLAION

${data.install}

## USAGE

${data.usage}

## CREDITS

${data.credits}

## TESTING

${data.test}

## LICENSE

${data.license}

## QUESTIONS

<https://github.com/${data.github}>

<${data.email}>

`;
}

module.exports = generateMarkdown;