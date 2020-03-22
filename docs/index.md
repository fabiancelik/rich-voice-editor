---
layout: default
---

[For more information and documentation please visit the GitHub Repo](https://github.com/fabiancelik/rich-voice-editor).

## Live Demo

{% include example.html %}

## HTML/JS for Live Demo

### HTML/JS Fiddle

{% include jsfiddle.html %}

### Sample single HTML file

```html
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <title>Rich Voice Editor - Example</title>
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    </head>
    <body>
        <div id="editor" class="center" style="height: 200px"></div>
        <button id="ssmlToggleBtn">Toggle SSML Tags</button>
        <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/quill-rich-voice-editor@0.2.0/dist/richVoiceEditor.min.js"></script>
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
            let ssmlToggle = true;
            document.getElementById("ssmlToggleBtn").addEventListener("click", () => {
                ssmlToggle = !ssmlToggle;
                document.getElementsByClassName('ql-toolbar')[0].remove();
                var quill = new Quill('#editor', {
                    theme: 'snow',
                    modules: {
                        toolbar: ssmlToggle ? ssmlToolbarOptions : {},
                        'rich-voice-editor': ssmlToggle
                    }
                });
            });
        </script>
    </body>
</html>
```
