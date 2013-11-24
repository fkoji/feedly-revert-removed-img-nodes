document.body.addEventListener("DOMNodeRemoved", function(e)
{
    var el = e.target;

    if (el.nodeType !== 1) return;
    if (el.nodeName.toUpperCase() !== 'IMG') return;

    el.removeAttribute('style');
    el.removeAttribute('data-feedly-blocked');

    setTimeout(function()
    {
        var res = e.relatedNode.appendChild(el);
    }, 1000);
}, false);
