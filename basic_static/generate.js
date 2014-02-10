var template = '  <header>{letter}</header>\n\
  <ul>\n\
{items}\
  </ul>\n\n'

var itemTemplate = '    <li><p>{content}</p></li>\n'

// Each letter
var content = '';
for (var i = 65; i <= 90; i++) {

	var itemContent = '';
	for (var j = 100; j < 200; j++) {
		itemContent += itemTemplate.replace('{content}', 'Item : ' + j);
	}

	var thisLetter = template.replace('{letter}', String.fromCharCode(i));
	content += thisLetter.replace('{items}', itemContent);
}

console.log(content);