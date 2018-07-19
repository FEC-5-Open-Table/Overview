const starters = ['the', 'a'];
const adjectives = ['adroit', 'animistic', 'antic', 'arcadian', 'baleful',
  'bellicose', 'bilious', 'boorish', 'calamitous', 'caustic', 'cerulean', 'concomitant',
  'contumacious', 'corpulent', 'crapulous','didactic', 'dilatory', 'dowdy',
  'efficacious', 'effulgent', 'egregious', 'endemic', 'equanimous','fastidious',
  'feckless', 'fecund', 'friable', 'fulsome', 'garrulous', 'guileless', 'gustatory',
  'histrionic', 'hubristic', 'incendiary', 'insidious', 'insolent', 'intransigent',
  'invidious','jejune', 'jocular', 'judicious', 'lachrymose', 'limpid', 'loquacious',
  'luminous', 'mannered', 'mendacious', 'meretricious', 'minatory', 'munificent',
  'obtuse', 'parsimonious', 'pendulous', 'pernicious', 'pervasive', 'petulant',
  'platitudinous', 'precipitate', 'propitious', 'querulous', 'quiescent', 'rebarbative',
  'recalcitant', 'redolent', 'risible', 'ruminative', 'sagacious', 'salubrious',
  'sartorial', 'sclerotic', 'serpentine', 'spasmodic', 'strident', 'taciturn', 'tenacious',
  'tremulous', 'turbulent', 'turgid', 'ubiquitous', 'uxorious', 'verdant', 'voluble',
  'voracious', 'wheedling', 'withering', 'zealous'];

const nouns = [ 'ninja', 'chair', 'pancake', 'statue', 'unicorn', 'rainbows', 'laser',
'senor', 'bunny', 'captain', 'nibblets', 'cupcake', 'carrot', 'gnomes', 'glitter',
'potato', 'salad', 'toejam', 'curtains', 'beets', 'toilet', 'exorcism', 'stick figures',
'mermaid eggs', 'sea barnacles', 'dragons', 'jellybeans', 'snakes', 'dolls', 'bushes',
'cookies', 'apples', 'ice cream', 'ukulele', 'kazoo', 'banjo', 'opera singer', 'circus',
'trampoline', 'carousel', 'carnival', 'locomotive', 'hot air balloon', 'praying mantis',
'animator', 'artisan', 'artist', 'colorist', 'inker', 'coppersmith', 'director', 'designer',
'flatter', 'stylist', 'leadman', 'limner', 'make-up artist', 'model', 'musician', 'penciller',
'producer', 'scenographer', 'set decorator', 'silversmith', 'teacher', 'auto mechanic',
'beader', 'bobbin boy', 'clerk of the chapel', 'filling station attendant', 'foreman',
'maintenance engineering', 'mechanic', 'miller', 'moldmaker', 'panel beater', 'patternmaker',
'plant operator', 'sawfiler', 'soaper', 'stationary engineer', 'wheelwright', 'woodworkers'];

const randomEl = function(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

const getRandomName = function() {
  return randomEl(starters) + ' ' + randomEl(adjectives) + ' ' + randomEl(nouns);
}
const getRandomBoolean = function() {
  const bools = [true, false];
  return randomEl(bools);
}
