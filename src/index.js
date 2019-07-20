// get module form quill to extend
import Quill from 'quill'
const Module = Quill.import('core/module');

// extrend module class from quill
class RichVoiceEditor extends Module {
    constructor(quill, options) {
        super(quill, options)
        this.quill = quill
        // fetch the toolbar to add handlers
        const toolbar = quill.getModule('toolbar')

        // add semantic ui icons to html for own buttons
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css")
        document.getElementsByTagName("head")[0].appendChild(fileref)

        // SSML speak tag
        // --------------
        // style toolbar button with icon
        document.querySelector('.ql-ssml_speak').innerHTML = '<i class="comment outline icon" title="Speak"></i>';
        function ssml_speak_handler() {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</speak>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<speak>')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + 15);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_speak', ssml_speak_handler.bind(this));

        // SSML break tag
        // --------------
        // load texts for dropdown items
        const breakPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-ssml_break .ql-picker-item'));
        breakPickerItems.forEach(item => item.textContent = item.dataset.value);
        // style toolbar button with icon and keep dropdown values
        document.querySelector('.ql-ssml_break .ql-picker-label').innerHTML = '<i class="pause icon" title="Break"></i>' + document.querySelector('.ql-ssml_break .ql-picker-label').innerHTML;
        // fix withd and padding problem in quill toolbar for dropdowns
        document.querySelector('.ql-ssml_break').style.width = '45px';
        document.querySelector('.ql-ssml_break').style.padding = '4px 0 0 0';
        function ssml_break_handler(value) {
            // only if a position is currently selected
            if (value) {
                // get the current position idndex
                const cursorPosition = this.quill.getSelection().index;
                // insert the single tag
                this.quill.insertText(cursorPosition, '<break strength="' + value + '"/>');
                // set cursor position to the end of new tag
                this.quill.setSelection(cursorPosition + value.length + 20);
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_break', ssml_break_handler.bind(this));

        // SSML emphasis tag
        // -----------------
        // style toolbar button with icon
        document.querySelector('.ql-ssml_emphasis').innerHTML = '<i class="volume up icon" title="Emphasis"></i>';
        function ssml_emphasis_handler() {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</emphasis>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<emphasis level="strong">')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + 36);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_emphasis', ssml_emphasis_handler.bind(this));

        // SSML whispered tag (amazon:effect)
        // ----------------------------------
        // style toolbar button with icon
        document.querySelector('.ql-ssml_whispering').innerHTML = '<i class="volume down icon" title="Whispering"></i>';
        function ssml_whispering_handler() {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</amazon:effect>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<amazon:effect name="whispered">')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + 48);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_whispering', ssml_whispering_handler.bind(this));

        // SSML lang tag
        // -------------
        // load texts for dropdown items
        const languagePickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-ssml_language .ql-picker-item'));
        languagePickerItems.forEach(item => item.textContent = item.dataset.value);
        // style toolbar button with icon and keep dropdown values
        document.querySelector('.ql-ssml_language .ql-picker-label').innerHTML = '<i class="language icon" title="Language"></i>' + document.querySelector('.ql-ssml_language .ql-picker-label').innerHTML;
        // fix withd and padding problem in quill toolbar for dropdowns
        document.querySelector('.ql-ssml_language').style.width = '45px';
        document.querySelector('.ql-ssml_language').style.padding = '4px 0 0 0';
        function ssml_language_handler(value) {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</lang>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<lang xml:lang="' + value + '">')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + value.length + 25);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_language', ssml_language_handler.bind(this));

        // SSML paragraph tag
        // ------------------
        // style toolbar button with icon
        document.querySelector('.ql-ssml_paragraph').innerHTML = '<i class="paragraph icon" title="Paragraph"></i>';
        function ssml_paragraph_handler() {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</p>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<p>')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + 7);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_paragraph', ssml_paragraph_handler.bind(this));

        // SSML say-as tag
        // ---------------
        // load texts for dropdown items
        const sayasPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-ssml_sayas .ql-picker-item'));
        sayasPickerItems.forEach(item => item.textContent = item.dataset.value);
        // style toolbar button with icon and keep dropdown values
        document.querySelector('.ql-ssml_sayas .ql-picker-label').innerHTML = '<i class="keyboard outline icon" title="Say-as"></i>' + document.querySelector('.ql-ssml_sayas .ql-picker-label').innerHTML;
        // fix withd and padding problem in quill toolbar for dropdowns
        document.querySelector('.ql-ssml_sayas').style.width = '45px';
        document.querySelector('.ql-ssml_sayas').style.padding = '4px 0 0 0';
        function ssml_sayas_handler(value) {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</say-as>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<say-as interpret-as="' + value + '">')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + value.length + 33);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_sayas', ssml_sayas_handler.bind(this));

        // SSML say-as (date) tag
        // ----------------------
        // load texts for dropdown items
        const datePickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-ssml_date .ql-picker-item'));
        datePickerItems.forEach(item => item.textContent = item.dataset.value);
        // style toolbar button with icon and keep dropdown values
        document.querySelector('.ql-ssml_date .ql-picker-label').innerHTML = '<i class="calendar alternate outline icon" title="Date"></i>' + document.querySelector('.ql-ssml_date .ql-picker-label').innerHTML;
        // fix withd and padding problem in quill toolbar for dropdowns
        document.querySelector('.ql-ssml_date').style.width = '45px';
        document.querySelector('.ql-ssml_date').style.padding = '4px 0 0 0';
        function ssml_date_handler(value) {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</say-as>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<say-as interpret-as="date" format="' + value + '">')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + value.length + 47);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_date', ssml_date_handler.bind(this));

        // SSML sub tag
        // ------------
        // style toolbar button with icon
        document.querySelector('.ql-ssml_substitute').innerHTML = '<i class="edit outline icon" title="Substitute"></i>';
        function ssml_substitute_handler() {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</sub>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<sub alias="Enter Substitute Text Here">')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + 46);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_substitute', ssml_substitute_handler.bind(this));

        // SSML auto-breaths tag (amazon)
        // ------------------------------
        // style toolbar button with icon
        document.querySelector('.ql-ssml_breaths').innerHTML = '<i class="podcast icon" title="Breaths"></i>';
        function ssml_breaths_handler() {
            // get current selected text as range
            var range = quill.getSelection();
            // only if range is currently selected
            if (range) {
                // only if it is a range and not a position
                if (range.length > 0) {
                    // add tag at the end of the selected range
                    this.quill.insertText(range.index + range.length, '</amazon:auto-breaths>')
                    // add tag at the beginning of the selected range
                    this.quill.insertText(range.index, '<amazon:auto-breaths>')
                    // set cursor position to the end of new tag
                    this.quill.setSelection(range.index + range.length + 43);
                }
            }
        }
        // add tag handler to quill toolbar
        toolbar.addHandler('ssml_breaths', ssml_breaths_handler.bind(this));

        // SSML parsing function
        // ---------------------
        // style toolbar button with icon
        document.querySelector('.ql-ssml_parse').innerHTML = '<i class="code icon" title="Parse"></i>';
        function ssml_parse_handler() {
            // get content in blocks with formatting
            var editorContent = quill.getContents().ops;
            // loop blocks, change in formatting causes new block
            editorContent.forEach(function (block) {
                // if formatting is bold emphasis text
                if (block.attributes && block.attributes.bold) {
                    block.insert = '<emphasis level="strong">' + block.insert + '</emphasis>'
                }
                // if formatting is underline emphasis text
                if (block.attributes && block.attributes.underline) {
                    block.insert = '<emphasis level="strong">' + block.insert + '</emphasis>'
                }
                // add breaks before linebreaks for better timing
                block.insert = block.insert.replace(/(?:\r\n|\r|\n)/g, '<break strength="x-strong"/>\n');
            });
            // add <speak> text at the beginning
            editorContent.unshift({ insert: '<speak>\n' });
            // add </speak> text at the end
            editorContent.push({ insert: '</speak>' });
            // update editor with parsed SSML text
            quill.setContents(editorContent);
        }
        // add function handler to quill toolbar
        toolbar.addHandler('ssml_parse', ssml_parse_handler.bind(this));

        // SSML validation function
        // ------------------------
        // style toolbar button with icon
        document.querySelector('.ql-ssml_validate').innerHTML = '<i class="check icon" title="Validate"></i>';
        function ssml_validate_handler() {
            // get text w/o formatting from editor
            var editorText = quill.getText(0);
            // remove amazon namespace before dom parser
            editorText = editorText.replace(/amazon:/g, '');
            // basic validation if text starts with <speak>
            if (editorText.startsWith("<speak>")) {
                // use browser dom parster to validate XML
                var oParser = new DOMParser();
                var oDOM = oParser.parseFromString(editorText, "application/xml");
                // if error found in parsing result
                if (oDOM.getElementsByTagName("parsererror").length > 0) {
                    // get error element and extract relevant information
                    alert("Invalid SSML: " + oDOM.getElementsByTagName("parsererror")[0].childNodes[1].innerHTML);
                } else {
                    alert("Valid SSML!");
                }
            } else {
                alert("Invalid SSML: Missing <speak> tag");
            }
        }
        // add function handler to quill toolbar
        toolbar.addHandler('ssml_validate', ssml_validate_handler.bind(this));
    }
}

module.exports = RichVoiceEditor
