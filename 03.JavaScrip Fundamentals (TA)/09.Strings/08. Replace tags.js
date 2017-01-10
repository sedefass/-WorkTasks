function solve(args) {
    function findPartialSubString(str, startStr, endStr) {
        var startIndex = str.indexOf(startStr);

        if (startIndex !== -1) {
            startIndex += startStr.length;
            var endIndex = str.indexOf(endStr, startIndex);
            return str.substring(startIndex, endIndex);
        }

        return undefined;
    }

    function findFullSubString(str, startStr, endStr) {
        var startIndex = str.indexOf(startStr);

        if (startIndex !== -1) {
            var endIndex = str.indexOf(endStr, startIndex) + endStr.length;
            return str.substring(startIndex, endIndex);
        }

        return undefined;
    }

    function replaceFirstLinkTag(string) {
        var result = string;

        var insideLinkTagsText = findFullSubString(string, '<a', '<\/a>');

        var src = findPartialSubString(insideLinkTagsText, 'href="', '"');

        var srcText = findPartialSubString(insideLinkTagsText, '>', '<');

        var replacement = ''.concat('[', srcText, '](', src, ')');
        result = result.replace(insideLinkTagsText, replacement)

        return result;
    }

    function replaceAllLinkTags(string) {
        var result = string;

        var insideLinkTagsText = findFullSubString(string, '<a', '<\/a>');

        while (insideLinkTagsText !== undefined) {
            var src = findPartialSubString(insideLinkTagsText, 'href="', '"');

            var srcText = findPartialSubString(insideLinkTagsText, '>', '<');

            var replacement = ''.concat('[', srcText, '](', src, ')');
            result = result.replace(insideLinkTagsText, replacement)

            insideLinkTagsText = findFullSubString(result, '<a', '<\/a>');
        }

        return result;
    }

    const text = args[0];
    console.log(replaceAllLinkTags(text));
}

var test = ['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'];

solve(test);