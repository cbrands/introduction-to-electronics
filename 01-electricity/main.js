import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/sky.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

const deck = new Reveal()
deck.initialize({ 
    hash: true, 
    slideNumber: false,
    controls: false,
    progress: false,
		markdown: { smartypants: true },
    plugins: [ Markdown ]
})
