<img src="docs/rich_voice_editor.png?raw=true" align="right" width="150" height="150">

# rich-voice-editor

Rich Voice Editor: Quill Rich Text Editor Enhancements to support [SSML](https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html) 

With this module you can enhance the Quill Rich Text Editor https://quilljs.com/ to support SSML tags.

![rich-voice-editor-screenshot](docs/rich-voice-editor-screen.png?raw=true)

The following SSML tags / functions are supported: [SSML Tags and Functions](https://github.com/fabiancelik/rich-voice-editor/wiki/SSML-Tags-and-Functions)
The current functionality is optimized for [AWS Polly](https://aws.amazon.com/polly/) with special [Amazon SSML Tags](https://docs.aws.amazon.com/polly/latest/dg/supported-ssml.html)

Live Demo: https://fabiancelik.github.io/rich-voice-editor/

Try on jsfiddle: https://jsfiddle.net/fabiancelik/opa6cbj4/16/

## Installation

Use the CDN link https://cdn.jsdelivr.net/npm/quill-rich-voice-editor@0.4.0/dist/richVoiceEditor.min.js

```html
<script src="https://cdn.jsdelivr.net/npm/quill-rich-voice-editor@0.4.0/dist/richVoiceEditor.min.js"></script>
```

Or use the package manager [npm](https://www.npmjs.com/) to install rich-voice-editor.

```bash
npm install quill-rich-voice-editor
```

```html
<script src="./node_modules/quill-rich-voice-editor/dist/richVoiceEditor.min.js"></script>
```

URL to npm package: https://www.npmjs.com/package/quill-rich-voice-editor


## Usage

1. Please check the official Quill documentation for the basics first: https://quilljs.com/docs/quickstart/

2. Include the richVoiceEditor.min.js via CDN or NPM in a script-tag.

3. Add containters and handlers for every tag/function you want to use.

3. Register the module to the Quill Editor.

4. Set 'rich-voice-editor' in modules to true.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>Rich Voice Editor - Example</title>

    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</head>

<body>
    <div id="editor" class="center"></div>
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/quill-rich-voice-editor@0.4.0/dist/richVoiceEditor.min.js"></script>
    <script>
        var ssmlToolbarOptions = {
            container: [
                ['ssml_speak'], // Add this.
                [{ 'ssml_break': ['weak', 'strong', 'x-strong'] }], // Add this.
                ['ssml_emphasis'], // Add this.
                ['ssml_whispering'], // Add this.
                [{ 'ssml_language': ['en-US', 'en-GB', 'de-DE', 'es-ES', 'fr-FR', 'it-IT', 'nl-NL', 'ru-RU', 'tr-TR'] }], // Add this.
                ['ssml_paragraph'], // Add this.
                [{ 'ssml_sayas': ['spell-out', 'number', 'ordinal', 'digits', 'fraction', 'expletive'] }], // Add this.
                [{ 'ssml_date': ['mdy', 'dmy', 'ymd', 'md', 'dm', 'ym', 'my', 'd', 'm', 'y'] }], // Add this.
                ['ssml_substitute'], // Add this.
                ['ssml_breaths'], // Add this.
                ['ssml_phoneme'], // Add this.
                ['ssml_parse'], // Add this.
                ['ssml_validate'] // Add this.
            ],
            handlers: {
                'ssml_speak': function () { }, // Add this.
                'ssml_break': function () { }, // Add this.
                'ssml_emphasis': function () { }, // Add this.
                'ssml_language': function () { }, // Add this.
                'ssml_paragraph': function () { }, // Add this.
                'ssml_sayas': function () { }, // Add this.
                'ssml_date': function () { }, // Add this.
                'ssml_substitute': function () { }, // Add this.
                'ssml_breaths': function () { }, // Add this.
                'ssml_phoneme': function () { }, // Add this.
                'ssml_whispering': function () { }, // Add this.
                'ssml_parse': function () { }, // Add this.
                'ssml_validate': function () { }// Add this.
            }
        }

        Quill.register({
            'modules/rich-voice-editor': RichVoiceEditor // Add this.
        })

        var quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: ssmlToolbarOptions,
                'rich-voice-editor': true // Add this.
            },
            placeholder: '<speak>Your text here</speak>'
        });
    </script>
</body>

</html>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

To create the production build after changes in /src/index.js please use the following commands:

```shell
npm i 
npm run-script build
```

Please see the Wiki to learn more [how to add more SSML Tags](https://github.com/fabiancelik/rich-voice-editor/wiki/Implement-more-SSML-Tags). I would especially appreciate a better [Amazon Alexa](https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html#ssml-supported) support.

## License

[MIT](https://choosealicense.com/licenses/mit/)
