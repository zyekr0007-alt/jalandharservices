// Before/after gallery.
//
// ⚠️ Every caption here was written after opening the image and looking at it —
// not from the filename. The source files were a numbered set whose numbers
// group unrelated subjects together (a carved bedstead, a switchboard and a
// veranda all sat inside a "bathroom" run), so the numbers are meaningless.
// If you add an image, open it first.
//
// These are cleaning results only. There are no painting or waterproofing
// photographs yet, and our-work.html says so rather than padding the gallery
// with stock imagery that is not our work.

export const workPairs = [
  {
    slug: 'bathroom-shower',
    before: '/assets/img/work/bathroom-shower-before.webp',
    after: '/assets/img/work/bathroom-shower-after.webp',
    alt: 'Bathroom shower area with heavy hard-water scale and staining on the tiles and floor before cleaning, and the same shower area with the tiles and floor restored to clean',
    caption: 'Bathroom shower area',
    detail: 'Years of hard-water scale and soap build-up on the floor and wall tiles, dissolved and machine-scrubbed.',
    tag: 'Bathroom',
  },
  {
    slug: 'bathroom-wc',
    before: '/assets/img/work/bathroom-wc-before.webp',
    after: '/assets/img/work/bathroom-wc-after.webp',
    alt: 'Bathroom with a stained floor and toilet before cleaning, and the same bathroom with clean floor tiles and a descaled WC',
    caption: 'Bathroom and WC',
    detail: 'Floor tiles and the WC descaled and disinfected, including the grout lines and the floor trap.',
    tag: 'Bathroom',
  },
  {
    slug: 'bathroom-tiles',
    before: '/assets/img/work/bathroom-tiles-before.webp',
    after: '/assets/img/work/bathroom-tiles-after.webp',
    caption: 'Bathroom wall and floor tiles',
    alt: 'Bathroom with discoloured wall tiles and a grimy floor before cleaning, and the same bathroom with the tiles and floor cleaned',
    detail: 'Wall tiles, floor and fittings cleaned through — this is the descaling tier rather than a standard clean.',
    tag: 'Bathroom',
  },
  {
    slug: 'bathroom-wall-tiles',
    before: '/assets/img/work/bathroom-wall-tiles-before.webp',
    after: '/assets/img/work/bathroom-wall-tiles-after.webp',
    caption: 'Bathroom wall tiles and fittings',
    alt: 'Dull stained bathroom wall tiles around taps and a shower fitting before cleaning, and the same wall tiles clean and bright with the chrome polished',
    detail: 'Grime and mineral film removed from the wall tiles, with the chrome fittings polished — never with acid, which strips the plating.',
    tag: 'Bathroom',
  },
  {
    slug: 'wash-basin',
    before: '/assets/img/work/wash-basin-before.webp',
    after: '/assets/img/work/wash-basin-after.webp',
    caption: 'Wash basin and cabinet',
    alt: 'Wash basin and vanity cabinet with dull stained surfaces before cleaning, and the same basin and cabinet cleaned',
    detail: 'Basin, counter and cabinet exterior cleaned; the cabinet interior is a priced extra if you want it.',
    tag: 'Bathroom',
  },
  {
    slug: 'stone-floor',
    before: '/assets/img/work/stone-floor-before.webp',
    after: '/assets/img/work/stone-floor-after.webp',
    caption: 'Dark stone floor',
    alt: 'Dark stone floor covered in a pale film of grime and staining before cleaning, and the same floor restored to a deep even finish',
    detail: 'The most dramatic change in the set — a stone floor that looked permanently stained came back with machine scrubbing and the right chemistry.',
    tag: 'Floors',
  },
  {
    slug: 'marble-floor',
    before: '/assets/img/work/marble-floor-before.webp',
    after: '/assets/img/work/marble-floor-after.webp',
    caption: 'Marble floor',
    alt: 'Dull marble floor with dirt along the skirting before cleaning, and the same marble floor cleaned and brightened',
    detail: 'Marble gets a pH-neutral treatment — acid etches the surface permanently, and the damage appears weeks later.',
    tag: 'Floors',
  },
  {
    slug: 'veranda-floor',
    before: '/assets/img/work/veranda-floor-before.webp',
    after: '/assets/img/work/veranda-floor-after.webp',
    caption: 'Tiled veranda',
    alt: 'Tiled veranda floor with ingrained dirt across the surface before cleaning, and the same veranda floor clean and swept',
    detail: 'Outdoor and semi-outdoor tiled floors hold dust differently from interior floors — they need more dwell time, not more pressure.',
    tag: 'Floors',
  },
  {
    slug: 'tile-floor',
    before: '/assets/img/work/tile-floor-before.webp',
    after: '/assets/img/work/tile-floor-after.webp',
    caption: 'Tile floor',
    alt: 'Tile floor with a dull dirty film before cleaning, and the same tile floor machine scrubbed and clean',
    detail: 'Machine scrubbed through, with the skirting and corners done by hand rather than left to the machine.',
    tag: 'Floors',
  },
  {
    slug: 'sofa',
    before: '/assets/img/work/sofa-before.webp',
    after: '/assets/img/work/sofa-after.webp',
    caption: 'Sofa seat',
    alt: 'Sofa seat with a grubby darkened surface before cleaning, and the same seat cleaned and brightened',
    detail: 'Hot-water extraction rather than surface shampooing — shampoo leaves residue that makes the fabric get dirty faster next time.',
    tag: 'Upholstery',
  },
  {
    slug: 'carved-furniture',
    before: '/assets/img/work/carved-furniture-before.webp',
    after: '/assets/img/work/carved-furniture-after.webp',
    caption: 'Carved wooden furniture',
    alt: 'Carved wooden furniture thick with dust in the crevices before cleaning, and the same furniture with the carving cleaned out',
    detail: 'The carving is the whole job — dust sits in every groove and needs detail work, not a cloth over the top.',
    tag: 'Upholstery',
  },
  {
    slug: 'switchboard',
    before: '/assets/img/work/switchboard-before.webp',
    after: '/assets/img/work/switchboard-after.webp',
    caption: 'Switchboard and switch plates',
    alt: 'Electrical switchboard with yellowed grimy switch plates before cleaning, and the same switchboard with the plates cleaned',
    detail: 'Detailed by hand and kept dry. Worth doing in a deep clean because it is the thing everyone touches and nobody cleans.',
    tag: 'Deep clean',
  },
];

export const workTags = [...new Set(workPairs.map((p) => p.tag))];
