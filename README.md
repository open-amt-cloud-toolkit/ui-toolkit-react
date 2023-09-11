# UI Toolkit React

![CodeQL](https://github.com/open-amt-cloud-toolkit/ui-toolkit-react/actions/workflows/codeql-analysis.yml/badge.svg?branch=main&event=push) 
![Node.js CI](https://github.com/open-amt-cloud-toolkit/sample-web-ui/workflows/Node.js%20CI/badge.svg) 
![codecov.io](https://codecov.io/github/open-amt-cloud-toolkit/ui-toolkit-react/coverage.svg?branch=main) 
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/open-amt-cloud-toolkit/ui-toolkit-react/badge)](https://api.securityscorecards.dev/projects/github.com/open-amt-cloud-toolkit/ui-toolkit-react) 
[![Discord Shield](https://discordapp.com/api/guilds/1063200098680582154/widget.png?style=shield)](https://discord.gg/yrcMp2kDWh)

> Disclaimer: Production viable releases are tagged and listed under 'Releases'.  All other check-ins should be considered 'in-development' and should not be used in production

The UI Toolkit provides prebuilt, React-based components for integrating remote management features such as a keyboard, video, mouse (KVM) control into a web-based management console UI. The controls have a reference UI and layout that can be customized further to seamlessly integrate with existing management console solutions.

<br><br>

**For detailed documentation** about [Getting Started with the UI Toolkit](https://open-amt-cloud-toolkit.github.io/docs/2.0/Tutorials/uitoolkit) or other features of the Open AMT Cloud Toolkit, see the [docs](https://open-amt-cloud-toolkit.github.io/docs/).

<br>

## Prerequisites

To succesfully deploy the UI Toolkit using React, the following software must be installed on your development system:

- [Node.js* LTS 18.x.x or newer](https://nodejs.org/en/)
- [git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/) or any other IDE of choice


## Create a New React App

The React app can be created in any preferred development directory. The MPS can continue to run while creating and running the app.

1. In a Command Prompt or Terminal, go to your preferred development directory. 

2. Run the following commands to create sample React app named `my-app`.

    ``` bash
    npx create-react-app my-app && cd my-app
    ```

## Add UI Toolkit

1. Run the following command to add the UI Toolkit and install the required dependencies:

    ``` bash
    npm install @open-amt-cloud-toolkit/ui-toolkit-react
    ```

2. Run the following commands to start the web UI locally:

    ``` bash
    npm start
    ```

3. By default, React apps run on port `3000`. If port `3000` is already used by the MPS server or any other application, you'll be prompted to use another port. If this happens, enter 'Y'.

    Sample Output:

    ```
    You can now view my-app in the browser.
    Local: http://localhost:3000
    On Your Network: http://172.16.17.4:3000
    ```

<br>

## Additional Resources

- For detailed documentation and Getting Started, [visit the docs site](https://open-amt-cloud-toolkit.github.io/docs).

- Looking to contribute? [Find more information here about contribution guidelines and practices](.\CONTRIBUTING.md).

- Find a bug? Or have ideas for new features? [Open a new Issue](https://github.com/open-amt-cloud-toolkit/ui-toolkit-react/issues).

- Need additional support or want to get the latest news and events about Open AMT? Connect with the team directly through Discord.

    [![Discord Banner 1](https://discordapp.com/api/guilds/1063200098680582154/widget.png?style=banner2)](https://discord.gg/yrcMp2kDWh)

<br>

## License Note

If you are distributing the FortAwesome Icons, please provide attribution to the source per the [CC-by 4.0](https://creativecommons.org/licenses/by/4.0/deed.ast) license obligations.

