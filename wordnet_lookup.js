
var natural = require('natural');
var wordnet = new natural.WordNet();


wordnet.lookup('node', function(results) {
    results.forEach(function(result) {
        console.log('------------------------------------');
        console.log("synsetOffset:"+result.synsetOffset);
        console.log("pos:"+result.pos);
        console.log("lemma:"+result.lemma);
        console.log("synonyms:"+result.synonyms);
        console.log("gloss:"+result.gloss);
    });
});
