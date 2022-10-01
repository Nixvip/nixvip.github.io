const htmlEditor = document.getElementById("html-editor")
const cssEditor = document.getElementById("css-editor")
const jsEditor = document.getElementById("js-editor")
const resultIFrame = document.getElementById("result").contentWindow.document

document.body.onkeyup = () => {
    resultIFrame.open()
    resultIFrame.writeln(
        `
        ${htmlEditor.value}
        <style>
        ${cssEditor.value}
        </style>
        <script>
        ${jsEditor.value}
        </script>
        `
    )
    resultIFrame.close()
}