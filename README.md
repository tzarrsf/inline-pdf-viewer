# Inline PDF Viewer

This is a simple and straightforward example of displaying a PDF inline in a Lightning Web Component.

## ⚠️ Disclaimers

- This collection is provided as-is. It's not officially supported by Salesforce or covered by SLAs.
- API documentation is not provided with the collection. Please refer to the official documentation.
- The documentation for the majority of the approach used here can be found in the [TITLE](LINK).

## What this example is and isn't

- This is a teaching tool and basic example
- This is a basic proof-of-concept demonstrating that having a document such as a PDF inline in a Lightning Web Component is possible
- I did not explore and CSS or dynamic sizing capabilities although it should be possible with CSS or relative sizing parameters or through a combination of both
 - For ease of deployment, I used a static resource. This could easily be adapted to use a CMS resource (either enhanced or non-enhanced). I may add that piece later.

## What's in the resource file?

The resource file was created like this:

- InlinePdfExampleStaticResource
    - Technivorm-Moccamaster-KBG-Select-Manual.pdf

⚠️ *Note*: You will need to supply the rest of the path in the archive for it to work. See the JavaScript example code in the `renderedCallback` function:

```
let renderedUrl = InlinePdfExampleStaticResource + '/Technivorm-Moccamaster-KBG-Select-Manual.pdf';
```

## How Do You Plan to Deploy Your Changes?

For a basic functional test, deploy the component and the static resource:

- lwc/inlinePdfViewer
- lwc/InlinePdfExampleStaticResource

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
