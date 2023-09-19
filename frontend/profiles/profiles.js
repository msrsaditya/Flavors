function showIframe(iframeId) {
    var iframes = document.querySelectorAll('.iframe-container');
    iframes.forEach(function (iframe) {
        iframe.style.display = 'none';
    });

    var selectedIframe = document.getElementById(iframeId);
    selectedIframe.style.display = 'block';
}
