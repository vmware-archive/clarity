export default {
  copyText(text) {
    const textareaEl = document.createElement('textarea');
    textareaEl.setAttribute('readonly', '');
    textareaEl.classList.add('offscreen-clipboard-textarea');
    textareaEl.value = text;
    document.body.appendChild(textareaEl);
    textareaEl.select();
    document.execCommand('copy');
    document.body.removeChild(textareaEl);
  },
};
