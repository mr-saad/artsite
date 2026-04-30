export const categories = [
  {
    id: "paintings",
    title: "Paintings",
    baseRoute: "/c/paintings",
    subCategories: [
      { id: "fine-art-prints", title: "Fine Art Prints", href: "/c/paintings/fine-art-prints" },
      { id: "original-paintings", title: "Original Paintings", href: "/c/paintings/original-paintings" },
      { id: "nature-paintings", title: "Nature Paintings", href: "/c/paintings/nature-paintings" },
      { id: "city-paintings", title: "Cityscape Paintings", href: "/c/paintings/city-paintings" },
      { id: "flower-paintings", title: "Flower Paintings", href: "/c/paintings/flower-paintings" },
    ],
  },
  {
    id: "art-plates",
    title: "Art Plates",
    baseRoute: "/c/art-plates",
    subCategories: [
      { id: "ceramic-art-plates", title: "Ceramic Art Plates", href: "/c/art-plates/ceramic-art-plates" },
      { id: "glass-painted-plates", title: "Hand-Painted Glass Plates", href: "/c/art-plates/glass-painted-plates" },
      { id: "vintage-porcelain-plates", title: "Vintage Porcelain Plates", href: "/c/art-plates/vintage-porcelain-plates" },
      { id: "metal-embossed-plates", title: "Metal Embossed Plates", href: "/c/art-plates/metal-embossed-plates" },
      { id: "custom-portrait-plates", title: "Custom Portrait Plates", href: "/c/art-plates/custom-portrait-plates" },
    ],
  },
  {
    id: "mud-work",
    title: "Mud Work",
    baseRoute: "/c/mud-work",
    subCategories: [
      { id: "lippan-art-mirror-work", title: "Lippan Art (Mud & Mirror)", href: "/c/mud-work/lippan-art-mirror-work" },
      { id: "terracotta-murals", title: "Terracotta Murals", href: "/c/mud-work/terracotta-murals" },
      { id: "clay-relief-paintings", title: "Clay Relief Paintings", href: "/c/mud-work/clay-relief-paintings" },
      { id: "kutch-mud-work", title: "Traditional Kutch Mud Work", href: "/c/mud-work/kutch-mud-work" },
      { id: "textured-wall-panels", title: "Organic Textured Wall Panels", href: "/c/mud-work/textured-wall-panels" },
    ],
  },
  {
    id: "canvas",
    title: "Canvas Arts",
    baseRoute: "/c/canvas",
    subCategories: [
      { id: "abstract-acrylic-canvas", title: "Abstract Acrylic Canvas", href: "/c/canvas/abstract-acrylic-canvas" },
      { id: "oil-painting-portraits", title: "Oil Painting Portraits", href: "/c/canvas/oil-painting-portraits" },
      { id: "mixed-media-canvas", title: "Mixed Media Canvas", href: "/c/canvas/mixed-media-canvas" },
      { id: "oversized-wall-canvas", title: "Oversized Wall Canvas", href: "/c/canvas/oversized-wall-canvas" },
      { id: "palette-knife-art", title: "Textured Palette Knife Art", href: "/c/canvas/palette-knife-art" },
    ],
  },
  {
    id: "pots",
    title: "Pots",
    baseRoute: "/c/pots",
    subCategories: [
      { id: "hand-painted-terracotta", title: "Hand-Painted Terracotta Pots", href: "/c/pots/hand-painted-terracotta" },
      { id: "glazed-ceramic-planters", title: "Glazed Ceramic Planters", href: "/c/pots/glazed-ceramic-planters" },
      { id: "indoor-decorative-vases", title: "Indoor Decorative Vases", href: "/c/pots/indoor-decorative-vases" },
      { id: "bohemian-patterned-pots", title: "Bohemian Patterned Pots", href: "/c/pots/bohemian-patterned-pots" },
      { id: "traditional-warli-pots", title: "Traditional Warli Painted Pots", href: "/c/pots/traditional-warli-pots" },
    ],
  },
];

export const globalProducts = [
  // ==========================================
  // 1. PAINTINGS (/c/paintings)
  // ==========================================

  // ---> Nature Paintings
  { id: "np-001", category: "/c/paintings/nature-paintings", slug: "whispering-pines", title: "Whispering Pines", description: "A serene depiction of a pine forest shrouded in early morning mist, perfect for a calming living room aesthetic.", price: 200, discountedPrice: 160, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/nature-whispering-pines.jpg" },
  { id: "np-002", category: "/c/paintings/nature-paintings", slug: "autumn-canopy", title: "Autumn Canopy", description: "Vibrant hues of orange, red, and gold capture the essence of fall in this breathtaking landscape.", price: 150, discountedPrice: 120, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/nature-autumn-canopy.jpg" },
  { id: "np-003", category: "/c/paintings/nature-paintings", slug: "serene-waterfall", title: "Serene Waterfall", description: "A hyper-realistic painting of a hidden forest waterfall, bringing the tranquility of nature indoors.", price: 300, discountedPrice: 240, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/nature-waterfall.jpg" },
  { id: "np-004", category: "/c/paintings/nature-paintings", slug: "misty-mountain-morning", title: "Misty Mountain Morning", description: "Minimalist watercolor tones highlight the majestic peaks of a distant mountain range.", price: 120, discountedPrice: 90, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/nature-misty-mountain.jpg" },
  { id: "np-005", category: "/c/paintings/nature-paintings", slug: "golden-hour-meadow", title: "Golden Hour Meadow", description: "Warm sunlight washes over a field of wildflowers in this stunning countryside portrayal.", price: 250, discountedPrice: 200, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/nature-golden-meadow.jpg" },
  { id: "np-006", category: "/c/paintings/nature-paintings", slug: "ocean-breeze", title: "Ocean Breeze", description: "Crisp blues and whites dominate this refreshing seascape, featuring gentle waves on a sandy shore.", price: 180, discountedPrice: 135, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/nature-ocean-breeze.jpg" },
  { id: "np-007", category: "/c/paintings/nature-paintings", slug: "forest-path", title: "Forest Path", description: "An inviting, sun-dappled trail winding through ancient oaks and lush green undergrowth.", price: 220, discountedPrice: 198, discountPercent: 10, image: "https://dessineart.com/cdn/shop/files/nature-forest-path.jpg" },
  { id: "np-008", category: "/c/paintings/nature-paintings", slug: "desert-bloom", title: "Desert Bloom", description: "A rare and beautiful scene of cacti flowers blooming against a warm, terracotta desert sunset.", price: 140, discountedPrice: 105, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/nature-desert-bloom.jpg" },
  { id: "np-009", category: "/c/paintings/nature-paintings", slug: "spring-valley", title: "Spring Valley", description: "Lush rolling hills and blooming cherry blossoms capture the vibrant rebirth of spring.", price: 280, discountedPrice: 238, discountPercent: 15, image: "https://dessineart.com/cdn/shop/files/nature-spring-valley.jpg" },
  { id: "np-010", category: "/c/paintings/nature-paintings", slug: "winter-wonderland", title: "Winter Wonderland", description: "A stark, beautiful contrast of snow-covered pines against a crisp, clear blue winter sky.", price: 200, discountedPrice: 150, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/nature-winter-snow.jpg" },

  // ---> Fine Art Prints
  { id: "fap-001", category: "/c/paintings/fine-art-prints", slug: "vintage-botanical", title: "Vintage Botanical", description: "Classic botanical print on archival museum-quality paper.", price: 60, discountedPrice: 48, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/fap-botanical.jpg" },
  { id: "fap-002", category: "/c/paintings/fine-art-prints", slug: "monet-water-lilies-reproduction", title: "Monet Water Lilies Reprint", description: "High-resolution fine art print of Monet's classic masterpiece.", price: 80, discountedPrice: 60, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/fap-monet.jpg" },
  { id: "fap-003", category: "/c/paintings/fine-art-prints", slug: "geometric-bauhaus", title: "Geometric Bauhaus", description: "Bold, primary colors and sharp shapes defining the Bauhaus movement.", price: 50, discountedPrice: 40, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/fap-bauhaus.jpg" },
  { id: "fap-004", category: "/c/paintings/fine-art-prints", slug: "japanese-wave", title: "The Great Wave Print", description: "Iconic Japanese ukiyo-e woodblock print reproduction.", price: 70, discountedPrice: 56, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/fap-wave.jpg" },
  { id: "fap-005", category: "/c/paintings/fine-art-prints", slug: "charcoal-figure", title: "Charcoal Figure Study", description: "A moody, highly detailed print of an original charcoal sketch.", price: 45, discountedPrice: 36, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/fap-charcoal.jpg" },

  // ---> Original Paintings
  { id: "op-001", category: "/c/paintings/original-paintings", slug: "midnight-jazz", title: "Midnight Jazz", description: "One-of-a-kind original acrylic painting capturing the essence of a 1920s jazz club.", price: 1200, discountedPrice: 960, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/op-jazz.jpg" },
  { id: "op-002", category: "/c/paintings/original-paintings", slug: "coastal-solitude", title: "Coastal Solitude", description: "Original oil on canvas depicting a lone lighthouse against a stormy sea.", price: 1500, discountedPrice: 1200, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/op-coastal.jpg" },
  { id: "op-003", category: "/c/paintings/original-paintings", slug: "vibrant-chaos", title: "Vibrant Chaos", description: "An explosive expressionist original using heavy impasto techniques.", price: 900, discountedPrice: 765, discountPercent: 15, image: "https://dessineart.com/cdn/shop/files/op-chaos.jpg" },
  { id: "op-004", category: "/c/paintings/original-paintings", slug: "serengeti-sunset", title: "Serengeti Sunset", description: "Warm, rich tones hand-painted on stretched linen canvas.", price: 1100, discountedPrice: 880, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/op-serengeti.jpg" },
  { id: "op-005", category: "/c/paintings/original-paintings", slug: "ethereal-dancer", title: "Ethereal Dancer", description: "Original watercolor capturing the fluid motion of a ballet dancer.", price: 650, discountedPrice: 520, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/op-dancer.jpg" },

  // ---> Cityscape Paintings
  { id: "cp-001", category: "/c/paintings/city-paintings", slug: "new-york-rain", title: "New York Rain", description: "Reflective, rainy streets of NYC painted in a neo-noir style.", price: 250, discountedPrice: 200, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cp-ny-rain.jpg" },
  { id: "cp-002", category: "/c/paintings/city-paintings", slug: "paris-cafe", title: "Paris Cafe Night", description: "Warm, inviting tones of a bustling Parisian street corner.", price: 280, discountedPrice: 224, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cp-paris.jpg" },
  { id: "cp-003", category: "/c/paintings/city-paintings", slug: "tokyo-neon", title: "Tokyo Neon Nights", description: "Cyberpunk-inspired bright neon colors contrasting deep city shadows.", price: 300, discountedPrice: 240, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cp-tokyo.jpg" },
  { id: "cp-004", category: "/c/paintings/city-paintings", slug: "london-fog", title: "London Fog", description: "A moody, grey-scale painting of the Thames and Big Ben.", price: 220, discountedPrice: 176, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cp-london.jpg" },
  { id: "cp-005", category: "/c/paintings/city-paintings", slug: "venetian-canal", title: "Venetian Canal", description: "Romantic gondolas floating through the historic waterways of Italy.", price: 260, discountedPrice: 195, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/cp-venice.jpg" },

  // ---> Flower Paintings
  { id: "fp-001", category: "/c/paintings/flower-paintings", slug: "sunflower-field", title: "Sunflower Field", description: "Bright, textural yellows bringing warmth to any interior.", price: 180, discountedPrice: 144, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/fp-sunflowers.jpg" },
  { id: "fp-002", category: "/c/paintings/flower-paintings", slug: "cherry-blossom-branch", title: "Cherry Blossom Branch", description: "Delicate pink and white watercolor strokes of Sakura blossoms.", price: 150, discountedPrice: 120, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/fp-cherry.jpg" },
  { id: "fp-003", category: "/c/paintings/flower-paintings", slug: "midnight-roses", title: "Midnight Roses", description: "Deep red roses painted against a striking black background.", price: 210, discountedPrice: 168, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/fp-roses.jpg" },
  { id: "fp-004", category: "/c/paintings/flower-paintings", slug: "wild-lavender", title: "Wild Lavender", description: "Impressionistic strokes of purple sweeping across a countryside canvas.", price: 170, discountedPrice: 136, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/fp-lavender.jpg" },
  { id: "fp-005", category: "/c/paintings/flower-paintings", slug: "abstract-peonies", title: "Abstract Peonies", description: "Modern, stylized floral shapes breaking traditional boundaries.", price: 200, discountedPrice: 150, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/fp-peonies.jpg" },


  // ==========================================
  // 2. ART PLATES (/c/art-plates)
  // ==========================================

  // ---> Vintage Porcelain Plates
  { id: "vpp-001", category: "/c/art-plates/vintage-porcelain-plates", slug: "royal-blue-willow", title: "Royal Blue Willow", description: "A classic oriental landscape design rendered in deep cobalt blue on pristine white porcelain.", price: 80, discountedPrice: 60, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/plate-blue-willow.jpg" },
  { id: "vpp-002", category: "/c/art-plates/vintage-porcelain-plates", slug: "victorian-rose-crest", title: "Victorian Rose Crest", description: "Delicate pink roses and an intricate gold-leaf border define this elegant Victorian-era replica.", price: 110, discountedPrice: 88, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/plate-victorian-rose.jpg" },
  { id: "vpp-003", category: "/c/art-plates/vintage-porcelain-plates", slug: "antique-delftware", title: "Antique Delftware", description: "Authentic Dutch-style blue and white plate featuring traditional windmill and canal motifs.", price: 95, discountedPrice: 76, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/plate-delftware.jpg" },
  { id: "vpp-004", category: "/c/art-plates/vintage-porcelain-plates", slug: "french-countryside", title: "French Countryside", description: "A rustic yet refined porcelain plate depicting a serene pastoral scene from rural France.", price: 70, discountedPrice: 63, discountPercent: 10, image: "https://dessineart.com/cdn/shop/files/plate-french-country.jpg" },
  { id: "vpp-005", category: "/c/art-plates/vintage-porcelain-plates", slug: "empress-peony", title: "Empress Peony", description: "Vibrant, oversized peony blossoms painted on a dark, contrasting vintage porcelain background.", price: 130, discountedPrice: 104, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/plate-empress-peony.jpg" },
  { id: "vpp-006", category: "/c/art-plates/vintage-porcelain-plates", slug: "classic-greek-key", title: "Classic Greek Key", description: "Minimalist vintage design featuring the iconic geometric Greek key pattern along the rim.", price: 60, discountedPrice: 45, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/plate-greek-key.jpg" },
  { id: "vpp-007", category: "/c/art-plates/vintage-porcelain-plates", slug: "regal-pheasant", title: "Regal Pheasant", description: "An intricately detailed illustration of a golden pheasant surrounded by autumn foliage.", price: 150, discountedPrice: 120, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/plate-regal-pheasant.jpg" },
  { id: "vpp-008", category: "/c/art-plates/vintage-porcelain-plates", slug: "heritage-monogram", title: "Heritage Monogram", description: "A vintage-inspired plate featuring classic typography and subtle scrolling vine accents.", price: 85, discountedPrice: 68, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/plate-heritage-monogram.jpg" },
  { id: "vpp-009", category: "/c/art-plates/vintage-porcelain-plates", slug: "ivory-lace-plate", title: "Ivory Lace Plate", description: "Stunning porcelain work featuring a pierced, lace-like edge and a subtle floral center.", price: 180, discountedPrice: 144, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/plate-ivory-lace.jpg" },
  { id: "vpp-010", category: "/c/art-plates/vintage-porcelain-plates", slug: "gilded-butterfly", title: "Gilded Butterfly", description: "A whimsical vintage design with delicate butterflies accented by 24k gold tracing.", price: 120, discountedPrice: 90, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/plate-gilded-butterfly.jpg" },

  // ---> Ceramic Art Plates
  { id: "cap-001", category: "/c/art-plates/ceramic-art-plates", slug: "modern-splatter", title: "Modern Splatter Plate", description: "Hand-thrown ceramic plate with abstract black and gold paint splatters.", price: 55, discountedPrice: 44, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cap-splatter.jpg" },
  { id: "cap-002", category: "/c/art-plates/ceramic-art-plates", slug: "earth-tones-swirl", title: "Earth Tones Swirl", description: "Beautiful organic swirls of brown and cream clays mixed together.", price: 65, discountedPrice: 52, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cap-earth.jpg" },
  { id: "cap-003", category: "/c/art-plates/ceramic-art-plates", slug: "matte-black-minimalist", title: "Matte Black Minimalist", description: "A sleek, textureless black ceramic plate for highly modern spaces.", price: 45, discountedPrice: 36, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cap-matte.jpg" },
  { id: "cap-004", category: "/c/art-plates/ceramic-art-plates", slug: "reactive-blue-glaze", title: "Reactive Blue Glaze", description: "Kiln-fired plate featuring an unpredictable, stunning cosmic blue glaze.", price: 75, discountedPrice: 60, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cap-glaze.jpg" },
  { id: "cap-005", category: "/c/art-plates/ceramic-art-plates", slug: "carved-mandala-ceramic", title: "Carved Mandala Ceramic", description: "Thick ceramic plate with a deep, hand-carved mandala pattern.", price: 90, discountedPrice: 72, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cap-carved.jpg" },

  // ---> Hand-Painted Glass Plates
  { id: "hgp-001", category: "/c/art-plates/glass-painted-plates", slug: "stained-glass-sun", title: "Stained Glass Sun", description: "Transparent plate painted to mimic traditional cathedral stained glass.", price: 40, discountedPrice: 32, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/hgp-sun.jpg" },
  { id: "hgp-002", category: "/c/art-plates/glass-painted-plates", slug: "peacock-feather-glass", title: "Peacock Feather Glass", description: "Iridescent paints create a glowing peacock feather effect on clear glass.", price: 50, discountedPrice: 40, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/hgp-peacock.jpg" },
  { id: "hgp-003", category: "/c/art-plates/glass-painted-plates", slug: "frosted-winter-pine", title: "Frosted Winter Pine", description: "Hand-painted pine branches over a chemically frosted glass background.", price: 45, discountedPrice: 36, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/hgp-pine.jpg" },
  { id: "hgp-004", category: "/c/art-plates/glass-painted-plates", slug: "gold-leaf-abstract", title: "Gold Leaf Abstract", description: "Real gold leaf suspended within layers of reverse-painted glass.", price: 85, discountedPrice: 68, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/hgp-gold.jpg" },
  { id: "hgp-005", category: "/c/art-plates/glass-painted-plates", slug: "moroccan-lantern-pattern", title: "Moroccan Lantern Pattern", description: "Intricate, brightly colored geometric patterns inspired by Moroccan lights.", price: 60, discountedPrice: 48, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/hgp-moroccan.jpg" },

  // ---> Metal Embossed Plates
  { id: "mep-001", category: "/c/art-plates/metal-embossed-plates", slug: "hammered-copper-sun", title: "Hammered Copper Sun", description: "Hand-hammered copper plate with a central rising sun motif.", price: 110, discountedPrice: 88, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mep-copper.jpg" },
  { id: "mep-002", category: "/c/art-plates/metal-embossed-plates", slug: "oxidized-brass-floral", title: "Oxidized Brass Floral", description: "Vintage brass with chemically induced green patina highlighting the floral embossing.", price: 130, discountedPrice: 104, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mep-brass.jpg" },
  { id: "mep-003", category: "/c/art-plates/metal-embossed-plates", slug: "silver-celtic-knot", title: "Silver Celtic Knot", description: "Polished silver-plated disc featuring an endless, embossed Celtic knot.", price: 95, discountedPrice: 76, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mep-silver.jpg" },
  { id: "mep-004", category: "/c/art-plates/metal-embossed-plates", slug: "industrial-gear-plate", title: "Industrial Gear Plate", description: "Steampunk-inspired heavy iron plate with embossed interlocking gears.", price: 80, discountedPrice: 64, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mep-gear.jpg" },
  { id: "mep-005", category: "/c/art-plates/metal-embossed-plates", slug: "mughal-empire-shield", title: "Mughal Empire Shield", description: "Detailed metalwork replicating historical shields from the Mughal era.", price: 160, discountedPrice: 128, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mep-mughal.jpg" },

  // ---> Custom Portrait Plates
  { id: "cpp-001", category: "/c/art-plates/custom-portrait-plates", slug: "custom-family-silhouette", title: "Custom Family Silhouette", description: "Provide a photo and we will paint a black silhouette portrait onto porcelain.", price: 150, discountedPrice: 120, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cpp-silhouette.jpg" },
  { id: "cpp-002", category: "/c/art-plates/custom-portrait-plates", slug: "pet-portrait-plate", title: "Pet Portrait Plate", description: "Hand-painted hyper-realistic portrait of your pet on a decorative plate.", price: 180, discountedPrice: 144, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cpp-pet.jpg" },
  { id: "cpp-003", category: "/c/art-plates/custom-portrait-plates", slug: "wedding-anniversary-plate", title: "Wedding Anniversary Plate", description: "Custom painted couple's portrait with gold-leaf wedding dates.", price: 200, discountedPrice: 160, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cpp-wedding.jpg" },
  { id: "cpp-004", category: "/c/art-plates/custom-portrait-plates", slug: "vintage-cameo-style", title: "Vintage Cameo Style", description: "Your side-profile rendered in a classic, white-on-blue cameo style.", price: 140, discountedPrice: 112, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cpp-cameo.jpg" },
  { id: "cpp-005", category: "/c/art-plates/custom-portrait-plates", slug: "pop-art-portrait", title: "Pop Art Portrait", description: "Andy Warhol-inspired bright, 4-color painted portrait on a square ceramic plate.", price: 165, discountedPrice: 132, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/cpp-pop.jpg" },


  // ==========================================
  // 3. MUD WORK (/c/mud-work)
  // ==========================================

  // ---> Lippan Art (Mud & Mirror)
  { id: "lamw-001", category: "/c/mud-work/lippan-art-mirror-work", slug: "surya-sun-motif-panel", title: "Surya (Sun) Motif Panel", description: "A radiant sunburst design crafted from natural clay and embedded with precision-cut mirrors.", price: 150, discountedPrice: 120, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/lippan-surya.jpg" },
  { id: "lamw-002", category: "/c/mud-work/lippan-art-mirror-work", slug: "geometric-diamond-array", title: "Geometric Diamond Array", description: "Modern meets traditional in this striking grid of mud-relief diamonds and reflective glass.", price: 200, discountedPrice: 160, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/lippan-geometric.jpg" },
  { id: "lamw-003", category: "/c/mud-work/lippan-art-mirror-work", slug: "tree-of-life-mural", title: "Tree of Life Mural", description: "An intricate representation of the Tree of Life, symbolizing growth and grounding in traditional Kutch style.", price: 350, discountedPrice: 280, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/lippan-tree-of-life.jpg" },
  { id: "lamw-004", category: "/c/mud-work/lippan-art-mirror-work", slug: "peacock-elegance", title: "Peacock Elegance", description: "A beautifully detailed mud work panel depicting a peacock, enhanced by teardrop mirrors.", price: 280, discountedPrice: 238, discountPercent: 15, image: "https://dessineart.com/cdn/shop/files/lippan-peacock.jpg" },
  { id: "lamw-005", category: "/c/mud-work/lippan-art-mirror-work", slug: "traditional-mandala", title: "Traditional Mandala", description: "A symmetrical, meditative mandala pattern crafted perfectly for a spiritual or calming space.", price: 180, discountedPrice: 135, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/lippan-mandala.jpg" },
  { id: "lamw-006", category: "/c/mud-work/lippan-art-mirror-work", slug: "desert-sands-panel", title: "Desert Sands Panel", description: "Left in its natural earthy hue, this unpainted mud work piece celebrates raw, organic textures.", price: 120, discountedPrice: 96, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/lippan-desert-sands.jpg" },
  { id: "lamw-007", category: "/c/mud-work/lippan-art-mirror-work", slug: "camel-caravan", title: "Camel Caravan", description: "A narrative piece depicting a classic desert caravan, framed by traditional border motifs.", price: 220, discountedPrice: 176, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/lippan-caravan.jpg" },
  { id: "lamw-008", category: "/c/mud-work/lippan-art-mirror-work", slug: "starburst-mirror-frame", title: "Starburst Mirror Frame", description: "A functional piece of art—a central mirror surrounded by intricate mud relief rays.", price: 160, discountedPrice: 128, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/lippan-starburst.jpg" },
  { id: "lamw-009", category: "/c/mud-work/lippan-art-mirror-work", slug: "lotus-pond-mural", title: "Lotus Pond Mural", description: "Elegant lotus flowers rising from rippling clay water, dotted with circular mirror accents.", price: 250, discountedPrice: 200, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/lippan-lotus.jpg" },
  { id: "lamw-010", category: "/c/mud-work/lippan-art-mirror-work", slug: "intricate-border-tiles-set-of-3", title: "Intricate Border Tiles (Set of 3)", description: "A set of three matching vertical panels designed to frame doorways or larger wall spaces.", price: 300, discountedPrice: 240, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/lippan-borders.jpg" },

  // ---> Terracotta Murals
  { id: "tm-001", category: "/c/mud-work/terracotta-murals", slug: "village-scene", title: "Village Scene Mural", description: "A large, unpainted terracotta slab depicting daily rural life in high relief.", price: 400, discountedPrice: 320, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/tm-village.jpg" },
  { id: "tm-002", category: "/c/mud-work/terracotta-murals", slug: "dancing-figures", title: "Dancing Figures Mural", description: "Tribal dancers mid-motion captured perfectly in fired clay.", price: 350, discountedPrice: 280, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/tm-dancers.jpg" },
  { id: "tm-003", category: "/c/mud-work/terracotta-murals", slug: "banyan-tree-relief", title: "Banyan Tree Relief", description: "Detailed rendering of a massive banyan tree, symbolizing eternal life.", price: 500, discountedPrice: 400, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/tm-banyan.jpg" },
  { id: "tm-004", category: "/c/mud-work/terracotta-murals", slug: "abstract-clay-blocks", title: "Abstract Clay Blocks", description: "A modern take on terracotta, featuring geometric extruded blocks of varying heights.", price: 280, discountedPrice: 224, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/tm-abstract.jpg" },
  { id: "tm-005", category: "/c/mud-work/terracotta-murals", slug: "elephant-procession", title: "Elephant Procession", description: "A majestic royal elephant procession carved deeply into a wide terracotta panel.", price: 450, discountedPrice: 360, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/tm-elephant.jpg" },

  // ---> Clay Relief Paintings
  { id: "crp-001", category: "/c/mud-work/clay-relief-paintings", slug: "painted-lotus", title: "Painted Lotus Relief", description: "Clay molded into a lotus flower, then hand-painted in vibrant pinks and greens.", price: 140, discountedPrice: 112, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/crp-lotus.jpg" },
  { id: "crp-002", category: "/c/mud-work/clay-relief-paintings", slug: "golden-buddha", title: "Golden Buddha Relief", description: "A serene face of Buddha crafted in clay and painted with antiqued gold leaf.", price: 220, discountedPrice: 176, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/crp-buddha.jpg" },
  { id: "crp-003", category: "/c/mud-work/clay-relief-paintings", slug: "floral-vine-border", title: "Floral Vine Border", description: "A long rectangular piece featuring winding clay vines painted in jewel tones.", price: 160, discountedPrice: 128, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/crp-vine.jpg" },
  { id: "crp-004", category: "/c/mud-work/clay-relief-paintings", slug: "blue-jay-on-branch", title: "Blue Jay on Branch", description: "Highly realistic bird crafted in 3D clay atop a painted sky background.", price: 180, discountedPrice: 144, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/crp-bird.jpg" },
  { id: "crp-005", category: "/c/mud-work/clay-relief-paintings", slug: "sun-and-moon-duo", title: "Sun and Moon Duo", description: "A split canvas featuring a raised, painted sun on one side and a moon on the other.", price: 200, discountedPrice: 160, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/crp-celestial.jpg" },

  // ---> Traditional Kutch Mud Work
  { id: "kmw-001", category: "/c/mud-work/kutch-mud-work", slug: "white-clay-arch", title: "White Clay Arch", description: "Traditional architectural archway design created using white Kutch mud.", price: 190, discountedPrice: 152, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/kmw-arch.jpg" },
  { id: "kmw-002", category: "/c/mud-work/kutch-mud-work", slug: "kutchi-bride", title: "Kutchi Bride Motif", description: "A stylistic representation of a bride adorned in traditional jewelry, rendered in mud.", price: 210, discountedPrice: 168, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/kmw-bride.jpg" },
  { id: "kmw-003", category: "/c/mud-work/kutch-mud-work", slug: "camel-bell-panel", title: "Camel Bell Panel", description: "Features hanging motifs resembling the bells worn by desert camels.", price: 175, discountedPrice: 140, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/kmw-bells.jpg" },
  { id: "kmw-004", category: "/c/mud-work/kutch-mud-work", slug: "bhunga-wall-art", title: "Bhunga Wall Art", description: "Replica of the circular mud designs found inside traditional Bhunga huts.", price: 260, discountedPrice: 208, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/kmw-bhunga.jpg" },
  { id: "kmw-005", category: "/c/mud-work/kutch-mud-work", slug: "intricate-jaali", title: "Intricate Jaali Work", description: "Mud pinched and formed to resemble delicate wooden or stone jaali screens.", price: 230, discountedPrice: 184, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/kmw-jaali.jpg" },

  // ---> Organic Textured Wall Panels
  { id: "twp-001", category: "/c/mud-work/textured-wall-panels", slug: "sand-dune-waves", title: "Sand Dune Waves", description: "Minimalist plaster and mud mixed to simulate the gentle ripples of desert sand.", price: 300, discountedPrice: 240, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-dunes.jpg" },
  { id: "twp-002", category: "/c/mud-work/textured-wall-panels", slug: "cracked-earth", title: "Cracked Earth Panel", description: "A dramatic, intentional craquelure effect mimicking dry, parched soil.", price: 280, discountedPrice: 224, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-cracked.jpg" },
  { id: "twp-003", category: "/c/mud-work/textured-wall-panels", slug: "raw-concrete-clay", title: "Raw Concrete & Clay", description: "An industrial-organic hybrid mixing gray cements with warm terracotta patches.", price: 320, discountedPrice: 256, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-concrete.jpg" },
  { id: "twp-004", category: "/c/mud-work/textured-wall-panels", slug: "woven-basket-texture", title: "Woven Basket Texture", description: "Clay scored deeply to resemble the thick weave of a natural rattan basket.", price: 250, discountedPrice: 200, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-woven.jpg" },
  { id: "twp-005", category: "/c/mud-work/textured-wall-panels", slug: "river-stone-imprint", title: "River Stone Imprint", description: "Smooth concavities pressed into the mud, resembling an ancient riverbed.", price: 270, discountedPrice: 216, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-stones.jpg" },


  // ==========================================
  // 4. CANVAS ARTS (/c/canvas)
  // ==========================================

  // ---> Oversized Wall Canvas
  { id: "owc-001", category: "/c/canvas/oversized-wall-canvas", slug: "image-1-quantum-waves", title: "Image-1-Quantum-Waves", description: "A sweeping, dynamic abstract piece utilizing deep blues and gold foil to simulate moving energy.", price: 500, discountedPrice: 400, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/Image-1-Quantum-Waves.jpg" },
  { id: "owc-002", category: "/c/canvas/oversized-wall-canvas", slug: "urban-skyline-palette", title: "Urban Skyline Palette", description: "A massive, impressionistic take on a bustling city skyline during a vivid twilight.", price: 450, discountedPrice: 360, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/canvas-urban-skyline.jpg" },
  { id: "owc-003", category: "/c/canvas/oversized-wall-canvas", slug: "monochromatic-depth", title: "Monochromatic Depth", description: "A striking minimalist canvas playing exclusively with textures in black, white, and gray.", price: 380, discountedPrice: 285, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/canvas-monochrome.jpg" },
  { id: "owc-004", category: "/c/canvas/oversized-wall-canvas", slug: "crimson-burst", title: "Crimson Burst", description: "An explosive, passionate abstract expressionist painting dominated by intense reds and warm tones.", price: 420, discountedPrice: 336, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/canvas-crimson-burst.jpg" },
  { id: "owc-005", category: "/c/canvas/oversized-wall-canvas", slug: "oceanic-abyss", title: "Oceanic Abyss", description: "A deeply textured, oversized piece that mimics the dark, mysterious depths of the ocean.", price: 550, discountedPrice: 440, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/canvas-oceanic-abyss.jpg" },
  { id: "owc-006", category: "/c/canvas/oversized-wall-canvas", slug: "golden-flakes-minimalist", title: "Golden Flakes Minimalist", description: "A subtle cream background dramatically split by a vein of highly reflective gold leaf.", price: 600, discountedPrice: 450, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/canvas-golden-flakes.jpg" },
  { id: "owc-007", category: "/c/canvas/oversized-wall-canvas", slug: "geometric-collision", title: "Geometric Collision", description: "Sharp lines and bold, contrasting colors create a retro-modern centerpiece for any large room.", price: 350, discountedPrice: 315, discountPercent: 10, image: "https://dessineart.com/cdn/shop/files/canvas-geometric.jpg" },
  { id: "owc-008", category: "/c/canvas/oversized-wall-canvas", slug: "ethereal-clouds", title: "Ethereal Clouds", description: "Soft, blended pastels create a dreamy, cloud-like atmosphere on a massive scale.", price: 400, discountedPrice: 320, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/canvas-ethereal-clouds.jpg" },
  { id: "owc-009", category: "/c/canvas/oversized-wall-canvas", slug: "industrial-rust-texture", title: "Industrial Rust Texture", description: "An edgy, mixed-media canvas utilizing real oxidization techniques to create an industrial look.", price: 480, discountedPrice: 384, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/canvas-industrial-rust.jpg" },
  { id: "owc-010", category: "/c/canvas/oversized-wall-canvas", slug: "midnight-silhouette", title: "Midnight Silhouette", description: "A dark, moody landscape piece featuring shadowed tree lines against a starry night sky.", price: 520, discountedPrice: 416, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/canvas-midnight.jpg" },

  // ---> Abstract Acrylic Canvas
  { id: "aac-001", category: "/c/canvas/abstract-acrylic-canvas", slug: "neon-splash", title: "Neon Splash", description: "High-energy canvas featuring Jackson Pollock-style splashes of neon acrylics.", price: 210, discountedPrice: 168, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/aac-neon.jpg" },
  { id: "aac-002", category: "/c/canvas/abstract-acrylic-canvas", slug: "color-block-study", title: "Color Block Study", description: "Clean, hard-edge geometric blocks of contrasting modern colors.", price: 190, discountedPrice: 152, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/aac-block.jpg" },
  { id: "aac-003", category: "/c/canvas/abstract-acrylic-canvas", slug: "fluid-pour-galaxy", title: "Fluid Pour Galaxy", description: "Acrylic pour technique creating mesmerizing, cellular galaxy patterns.", price: 240, discountedPrice: 192, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/aac-pour.jpg" },
  { id: "aac-004", category: "/c/canvas/abstract-acrylic-canvas", slug: "muted-earth-strokes", title: "Muted Earth Strokes", description: "Broad, sweeping brushstrokes using a palette of sage, terracotta, and ochre.", price: 260, discountedPrice: 208, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/aac-earth.jpg" },
  { id: "aac-005", category: "/c/canvas/abstract-acrylic-canvas", slug: "shattered-glass", title: "Shattered Glass", description: "Sharp, intersecting lines creating a fragmented, stained-glass aesthetic.", price: 220, discountedPrice: 176, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/aac-glass.jpg" },

  // ---> Oil Painting Portraits
  { id: "opp-001", category: "/c/canvas/oil-painting-portraits", slug: "renaissance-revival", title: "Renaissance Revival", description: "A classically styled portrait mimicking the dramatic lighting of the Renaissance.", price: 800, discountedPrice: 640, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/opp-ren.jpg" },
  { id: "opp-002", category: "/c/canvas/oil-painting-portraits", slug: "modern-muse", title: "Modern Muse", description: "A contemporary oil portrait featuring bold colors and loose brushwork.", price: 650, discountedPrice: 520, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/opp-muse.jpg" },
  { id: "opp-003", category: "/c/canvas/oil-painting-portraits", slug: "the-elder", title: "The Elder", description: "An incredibly detailed, hyper-realistic portrait capturing the wisdom of old age.", price: 950, discountedPrice: 760, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/opp-elder.jpg" },
  { id: "opp-004", category: "/c/canvas/oil-painting-portraits", slug: "shadow-profile", title: "Shadow Profile", description: "A moody side-profile painted almost entirely in varying shades of black and umber.", price: 500, discountedPrice: 400, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/opp-shadow.jpg" },
  { id: "opp-005", category: "/c/canvas/oil-painting-portraits", slug: "childhood-innocence", title: "Childhood Innocence", description: "Soft, blended oil paints capturing the bright eyes of a child.", price: 700, discountedPrice: 560, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/opp-child.jpg" },

  // ---> Mixed Media Canvas
  { id: "mmc-001", category: "/c/canvas/mixed-media-canvas", slug: "newspaper-collage", title: "Newspaper Collage City", description: "Vintage newspaper clippings overlaid with stark black acrylic city silhouettes.", price: 320, discountedPrice: 256, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mmc-news.jpg" },
  { id: "mmc-002", category: "/c/canvas/mixed-media-canvas", slug: "resin-ocean-pour", title: "Resin Ocean Pour", description: "Canvas layered with acrylics, real sand, and thick, glossy epoxy resin waves.", price: 410, discountedPrice: 328, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mmc-ocean.jpg" },
  { id: "mmc-003", category: "/c/canvas/mixed-media-canvas", slug: "fabric-and-paint", title: "Fabric & Paint Abstract", description: "Strips of raw linen glued to canvas and integrated into a painted abstract design.", price: 290, discountedPrice: 232, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mmc-fabric.jpg" },
  { id: "mmc-004", category: "/c/canvas/mixed-media-canvas", slug: "cyberpunk-circuitry", title: "Cyberpunk Circuitry", description: "Real salvaged computer parts embedded into a darkly painted sci-fi canvas.", price: 380, discountedPrice: 304, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mmc-cyber.jpg" },
  { id: "mmc-005", category: "/c/canvas/mixed-media-canvas", slug: "metallic-leaf-forest", title: "Metallic Leaf Forest", description: "Painted birch trees accented with authentic copper and silver leafing.", price: 350, discountedPrice: 280, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/mmc-leaf.jpg" },

  // ---> Textured Palette Knife Art
  { id: "pka-001", category: "/c/canvas/palette-knife-art", slug: "chunky-florals", title: "Chunky Florals", description: "Extremely thick impasto technique making the flower petals leap off the canvas.", price: 280, discountedPrice: 224, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pka-floral.jpg" },
  { id: "pka-002", category: "/c/canvas/palette-knife-art", slug: "birch-tree-grove", title: "Birch Tree Grove", description: "Vertical knife scrapes perfectly mimicking the peeling bark of birch trees.", price: 310, discountedPrice: 248, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pka-birch.jpg" },
  { id: "pka-003", category: "/c/canvas/palette-knife-art", slug: "rainy-street-lamp", title: "Rainy Street Lamp", description: "A classic knife-painted scene of glowing streetlights reflecting on wet pavement.", price: 340, discountedPrice: 272, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pka-lamp.jpg" },
  { id: "pka-004", category: "/c/canvas/palette-knife-art", slug: "mountain-peaks", title: "Rugged Mountain Peaks", description: "Sharp, angled knife strokes capturing the jagged edge of snow-capped mountains.", price: 290, discountedPrice: 232, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pka-mountains.jpg" },
  { id: "pka-005", category: "/c/canvas/palette-knife-art", slug: "autumn-leaves", title: "Autumn Leaves", description: "Thick dollops of red and yellow paint applied directly to the canvas to form leaves.", price: 260, discountedPrice: 208, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pka-autumn.jpg" },


  // ==========================================
  // 5. POTS (/c/pots)
  // ==========================================

  // ---> Hand-Painted Terracotta Pots
  { id: "hpt-001", category: "/c/pots/hand-painted-terracotta", slug: "aztec-geometric-planter", title: "Aztec Geometric Planter", description: "A vibrant terracotta pot adorned with sharp, colorful Aztec-inspired geometric patterns.", price: 40, discountedPrice: 32, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pot-aztec.jpg" },
  { id: "hpt-002", category: "/c/pots/hand-painted-terracotta", slug: "sunflower-burst-pot", title: "Sunflower Burst Pot", description: "Bright yellow sunflowers hand-painted against the natural warm orange of the terracotta clay.", price: 35, discountedPrice: 28, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pot-sunflower.jpg" },
  { id: "hpt-003", category: "/c/pots/hand-painted-terracotta", slug: "ocean-wave-rim", title: "Ocean Wave Rim", description: "A minimalist pot featuring stylized, cresting ocean waves painted cleanly around the top rim.", price: 30, discountedPrice: 24, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pot-ocean-wave.jpg" },
  { id: "hpt-004", category: "/c/pots/hand-painted-terracotta", slug: "traditional-mandala-planter", title: "Traditional Mandala Planter", description: "Intricate, dot-art mandalas painted in soothing whites and blues over a terracotta base.", price: 50, discountedPrice: 35, discountPercent: 30, image: "https://dessineart.com/cdn/shop/files/pot-mandala.jpg" },
  { id: "hpt-005", category: "/c/pots/hand-painted-terracotta", slug: "tribal-art-cylinder", title: "Tribal Art Cylinder", description: "A tall, cylindrical pot featuring ancient tribal stick-figure motifs in striking black paint.", price: 45, discountedPrice: 36, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pot-tribal.jpg" },
  { id: "hpt-006", category: "/c/pots/hand-painted-terracotta", slug: "pastel-polka-dot", title: "Pastel Polka Dot", description: "A playful, modern take on terracotta featuring randomized soft pastel polka dots.", price: 25, discountedPrice: 20, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pot-polka.jpg" },
  { id: "hpt-007", category: "/c/pots/hand-painted-terracotta", slug: "monochrome-chevron", title: "Monochrome Chevron", description: "Sleek black and white chevron stripes that add a contemporary edge to traditional clay.", price: 38, discountedPrice: 30, discountPercent: 21, image: "https://dessineart.com/cdn/shop/files/pot-chevron.jpg" },
  { id: "hpt-008", category: "/c/pots/hand-painted-terracotta", slug: "desert-cactus-motif", title: "Desert Cactus Motif", description: "Hand-painted green saguaro cacti dotting the circumference of this medium-sized planter.", price: 32, discountedPrice: 24, discountPercent: 25, image: "https://dessineart.com/cdn/shop/files/pot-cactus.jpg" },
  { id: "hpt-009", category: "/c/pots/hand-painted-terracotta", slug: "folk-floral-pot", title: "Folk Floral Pot", description: "Inspired by Eastern European folk art, featuring symmetrical, brightly colored floral designs.", price: 48, discountedPrice: 38, discountPercent: 21, image: "https://dessineart.com/cdn/shop/files/pot-folk-floral.jpg" },
  { id: "hpt-010", category: "/c/pots/hand-painted-terracotta", slug: "sunrise-ombre-vase", title: "Sunrise Ombre Vase", description: "A beautiful gradient paint job transitioning from deep terracotta to a soft, sunny yellow at the top.", price: 55, discountedPrice: 44, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/pot-ombre.jpg" },

  // ---> Glazed Ceramic Planters
  { id: "gcp-001", category: "/c/pots/glazed-ceramic-planters", slug: "emerald-drip-pot", title: "Emerald Drip Pot", description: "Thick, dripping emerald green glaze over a solid white ceramic base.", price: 65, discountedPrice: 52, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/gcp-emerald.jpg" },
  { id: "gcp-002", category: "/c/pots/glazed-ceramic-planters", slug: "cobalt-blue-cylinder", title: "Cobalt Blue Cylinder", description: "High-gloss, perfectly smooth cobalt blue cylinder ideal for modern house plants.", price: 55, discountedPrice: 44, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/gcp-cobalt.jpg" },
  { id: "gcp-003", category: "/c/pots/glazed-ceramic-planters", slug: "crackle-glaze-bowl", title: "Crackle Glaze Bowl", description: "Wide, shallow planter featuring an intentional, beautiful crackle effect in the white glaze.", price: 70, discountedPrice: 56, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/gcp-crackle.jpg" },
  { id: "gcp-004", category: "/c/pots/glazed-ceramic-planters", slug: "two-tone-mustard", title: "Two-Tone Mustard", description: "Bottom half raw ceramic, top half dipped in a vibrant mustard yellow glaze.", price: 45, discountedPrice: 36, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/gcp-mustard.jpg" },
  { id: "gcp-005", category: "/c/pots/glazed-ceramic-planters", slug: "metallic-bronze-planter", title: "Metallic Bronze Planter", description: "Fired with a special glaze that gives the ceramic a reflective, metallic bronze finish.", price: 85, discountedPrice: 68, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/gcp-bronze.jpg" },

  // ---> Indoor Decorative Vases
  { id: "idv-001", category: "/c/pots/indoor-decorative-vases", slug: "tall-pampas-vase", title: "Tall Pampas Vase", description: "A towering, slender matte white vase designed specifically for holding tall pampas grass.", price: 90, discountedPrice: 72, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/idv-pampas.jpg" },
  { id: "idv-002", category: "/c/pots/indoor-decorative-vases", slug: "ribbed-glass-vase", title: "Ribbed Glass Vase", description: "Heavy, transparent glass vase with elegant vertical ribbing.", price: 60, discountedPrice: 48, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/idv-glass.jpg" },
  { id: "idv-003", category: "/c/pots/indoor-decorative-vases", slug: "geometric-origami-vase", title: "Geometric Origami Vase", description: "Ceramic vase formed with sharp folds, resembling folded origami paper.", price: 75, discountedPrice: 60, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/idv-origami.jpg" },
  { id: "idv-004", category: "/c/pots/indoor-decorative-vases", slug: "matte-black-jug", title: "Matte Black Jug", description: "A rustic, farmhouse-style jug handle vase finished in sleek matte black.", price: 50, discountedPrice: 40, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/idv-jug.jpg" },
  { id: "idv-005", category: "/c/pots/indoor-decorative-vases", slug: "terrazzo-stone-vase", title: "Terrazzo Stone Vase", description: "Faux terrazzo finish featuring colorful specks set into a smooth white stone vase.", price: 85, discountedPrice: 68, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/idv-terrazzo.jpg" },

  // ---> Bohemian Patterned Pots
  { id: "bpp-001", category: "/c/pots/bohemian-patterned-pots", slug: "macrame-wrapped-pot", title: "Macrame Wrapped Pot", description: "A simple terracotta pot tightly wrapped in intricately knotted cotton macrame.", price: 45, discountedPrice: 36, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/bpp-macrame.jpg" },
  { id: "bpp-002", category: "/c/pots/bohemian-patterned-pots", slug: "mud-cloth-print", title: "Mud Cloth Print", description: "Black pot painted with striking white African mud cloth geometric patterns.", price: 40, discountedPrice: 32, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/bpp-mudcloth.jpg" },
  { id: "bpp-003", category: "/c/pots/bohemian-patterned-pots", slug: "rattan-basket-planter", title: "Rattan Basket Planter", description: "A waterproof inner liner wrapped entirely in woven natural rattan.", price: 55, discountedPrice: 44, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/bpp-rattan.jpg" },
  { id: "bpp-004", category: "/c/pots/bohemian-patterned-pots", slug: "sun-and-moon-boho", title: "Sun and Moon Boho", description: "Gold foil sun and moon designs stamped onto a matte cream ceramic pot.", price: 50, discountedPrice: 40, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/bpp-celestial.jpg" },
  { id: "bpp-005", category: "/c/pots/bohemian-patterned-pots", slug: "fringe-accent-pot", title: "Fringe Accent Pot", description: "A textured fabric pot featuring hanging bohemian fringe layers.", price: 35, discountedPrice: 28, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/bpp-fringe.jpg" },

  // ---> Traditional Warli Painted Pots
  { id: "twp-001", category: "/c/pots/traditional-warli-pots", slug: "warli-village-dance", title: "Warli Village Dance", description: "Authentic white Warli figures painted dancing in a circle around a red clay pot.", price: 60, discountedPrice: 48, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-dance.jpg" },
  { id: "twp-002", category: "/c/pots/traditional-warli-pots", slug: "harvest-festival-pot", title: "Harvest Festival Pot", description: "Detailed stick-figure depictions of a traditional harvest festival.", price: 65, discountedPrice: 52, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-harvest.jpg" },
  { id: "twp-003", category: "/c/pots/traditional-warli-pots", slug: "black-and-white-warli", title: "Black & White Warli", description: "A modern twist using white Warli figures painted on a matte black ceramic background.", price: 70, discountedPrice: 56, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-black.jpg" },
  { id: "twp-004", category: "/c/pots/traditional-warli-pots", slug: "animal-motif-warli", title: "Animal Motif Warli", description: "Features traditional geometric representations of horses, peacocks, and tigers.", price: 55, discountedPrice: 44, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-animal.jpg" },
  { id: "twp-005", category: "/c/pots/traditional-warli-pots", slug: "tall-warli-vase", title: "Tall Warli Vase", description: "A floor-standing vase with spiraling levels of continuous Warli storytelling.", price: 120, discountedPrice: 96, discountPercent: 20, image: "https://dessineart.com/cdn/shop/files/twp-tall.jpg" }
];

export const productsMap = globalProducts.reduce((accu,product)=>{
  const modSlug = product.slug
  accu[modSlug] = product
  return accu
},{})