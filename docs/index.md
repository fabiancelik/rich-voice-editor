---
layout: default
---

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5
 <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <div id="editor" class="center"></div>
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/quill-rich-voice-editor@0.1.0/dist/richVoiceEditor.min.js"></script>
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

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
