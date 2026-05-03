export const categories = [
  {
    id: "paintings",
    title: "Paintings",
    baseRoute: "/c/paintings",
    subCategories: [
      {
        id: "fine-art-prints",
        title: "Fine Art Prints",
        href: "/c/paintings/fine-art-prints",
      },
      {
        id: "original-paintings",
        title: "Original Paintings",
        href: "/c/paintings/original-paintings",
      },
      {
        id: "nature-paintings",
        title: "Nature Paintings",
        href: "/c/paintings/nature-paintings",
      },
      {
        id: "city-paintings",
        title: "Cityscape Paintings",
        href: "/c/paintings/city-paintings",
      },
      {
        id: "flower-paintings",
        title: "Flower Paintings",
        href: "/c/paintings/flower-paintings",
      },
    ],
  },
  {
    id: "art-plates",
    title: "Art Plates",
    baseRoute: "/c/art-plates",
    subCategories: [
      {
        id: "ceramic-art-plates",
        title: "Ceramic Art Plates",
        href: "/c/art-plates/ceramic-art-plates",
      },
      {
        id: "glass-painted-plates",
        title: "Hand-Painted Glass Plates",
        href: "/c/art-plates/glass-painted-plates",
      },
      {
        id: "vintage-porcelain-plates",
        title: "Vintage Porcelain Plates",
        href: "/c/art-plates/vintage-porcelain-plates",
      },
      {
        id: "metal-embossed-plates",
        title: "Metal Embossed Plates",
        href: "/c/art-plates/metal-embossed-plates",
      },
      {
        id: "custom-portrait-plates",
        title: "Custom Portrait Plates",
        href: "/c/art-plates/custom-portrait-plates",
      },
    ],
  },
  {
    id: "mud-work",
    title: "Mud Work",
    baseRoute: "/c/mud-work",
    subCategories: [
      {
        id: "lippan-art-mirror-work",
        title: "Lippan Art (Mud & Mirror)",
        href: "/c/mud-work/lippan-art-mirror-work",
      },
      {
        id: "terracotta-murals",
        title: "Terracotta Murals",
        href: "/c/mud-work/terracotta-murals",
      },
      {
        id: "clay-relief-paintings",
        title: "Clay Relief Paintings",
        href: "/c/mud-work/clay-relief-paintings",
      },
      {
        id: "kutch-mud-work",
        title: "Traditional Kutch Mud Work",
        href: "/c/mud-work/kutch-mud-work",
      },
      {
        id: "textured-wall-panels",
        title: "Organic Textured Wall Panels",
        href: "/c/mud-work/textured-wall-panels",
      },
    ],
  },
  {
    id: "canvas",
    title: "Canvas Arts",
    baseRoute: "/c/canvas",
    subCategories: [
      {
        id: "abstract-acrylic-canvas",
        title: "Abstract Acrylic Canvas",
        href: "/c/canvas/abstract-acrylic-canvas",
      },
      {
        id: "oil-painting-portraits",
        title: "Oil Painting Portraits",
        href: "/c/canvas/oil-painting-portraits",
      },
      {
        id: "mixed-media-canvas",
        title: "Mixed Media Canvas",
        href: "/c/canvas/mixed-media-canvas",
      },
      {
        id: "oversized-wall-canvas",
        title: "Oversized Wall Canvas",
        href: "/c/canvas/oversized-wall-canvas",
      },
      {
        id: "palette-knife-art",
        title: "Textured Palette Knife Art",
        href: "/c/canvas/palette-knife-art",
      },
    ],
  },
  {
    id: "pots",
    title: "Pots",
    baseRoute: "/c/pots",
    subCategories: [
      {
        id: "hand-painted-terracotta",
        title: "Hand-Painted Terracotta Pots",
        href: "/c/pots/hand-painted-terracotta",
      },
      {
        id: "glazed-ceramic-planters",
        title: "Glazed Ceramic Planters",
        href: "/c/pots/glazed-ceramic-planters",
      },
      {
        id: "indoor-decorative-vases",
        title: "Indoor Decorative Vases",
        href: "/c/pots/indoor-decorative-vases",
      },
      {
        id: "bohemian-patterned-pots",
        title: "Bohemian Patterned Pots",
        href: "/c/pots/bohemian-patterned-pots",
      },
      {
        id: "traditional-warli-pots",
        title: "Traditional Warli Painted Pots",
        href: "/c/pots/traditional-warli-pots",
      },
    ],
  },
];

export const globalProducts = [
  // ==========================================
  // 1. PAINTINGS (/c/paintings)
  // ==========================================

  {
    id: "np-001",
    category: "/c/paintings/nature-paintings",
    slug: "whispering-pines",
    title: "Whispering Pines",
    description:
      "A serene depiction of a pine forest shrouded in early morning mist, perfect for a calming living room aesthetic.",
    price: 200,
    discountedPrice: 160,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil on premium 400gsm gallery-wrapped cotton canvas.
- **Dimensions:** 24" x 36" (60cm x 90cm) with a 1.5" profile.
- **Frame:** Hand-crafted solid oak wood floating frame with a natural matte finish.
- **Texture:** Smooth blending with slight palette knife texturing on the pine needles.
- **Varnish:** Finished with a UV-resistant satin varnish to protect against fading and dust.

### The Story
"Whispering Pines" was inspired by the early morning fogs of the Himalayan foothills. The artist utilized a cool palette of deep greens, muted cyans, and soft grays to evoke a sense of absolute stillness and tranquility. It invites the viewer to take a deep breath and find peace within their own space.

### Care & Maintenance
To ensure the longevity of this original piece:
1. **Lighting:** Hang in a location free from direct, harsh sunlight to prevent pigment degradation.
2. **Cleaning:** Lightly dust with a soft, dry microfiber cloth. Never use chemical cleaners, water, or solvents.
3. **Environment:** Maintain a stable climate (40-60% humidity is ideal) to prevent the canvas from stretching or the wood frame from warping.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80",
        alt: "Front View",
        color: "Forest Green",
        desc: "Full frontal view of the Whispering Pines painting.",
      },
      {
        url: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&q=80",
        alt: "Angle View",
        color: "Oak",
        desc: "Angled shot highlighting the depth of the floating oak wood frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1579783902922-450f3b4991fb?w=800&q=80",
        alt: "Texture Detail",
        color: "Cyan/Green",
        desc: "Extreme close-up revealing the brushwork and protective satin varnish.",
      },
      {
        url: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?w=800&q=80",
        alt: "Room Context",
        color: "Neutral",
        desc: "Mockup of the painting hung in a minimalist living room setting above a sofa.",
      },
      {
        url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
        alt: "Back View",
        color: "Wood",
        desc: "Back of the canvas showing the gallery wrapping and pre-installed D-ring wire hanger.",
      },
    ],
  },
  {
    id: "np-002",
    category: "/c/paintings/nature-paintings",
    slug: "autumn-canopy",
    title: "Autumn Canopy",
    description:
      "Vibrant hues of orange, red, and gold capture the essence of fall in this breathtaking landscape.",
    price: 150,
    discountedPrice: 120,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** High-grade acrylics on stretched linen.
- **Dimensions:** 18" x 24" (45cm x 60cm).
- **Frame:** Unframed with painted edges (gallery wrap), ready to hang.
- **Style:** Impressionistic with bold, visible brushstrokes.

### Craftsmanship
Capturing the fleeting beauty of autumn, this piece relies on heavy layering of warm tones—cadmium reds, burnt siennas, and golden yellows. The linen canvas provides a superior, tight weave that enhances the crispness of the acrylic paints.

### Care & Maintenance
1. **Handling:** Always hold the painting by the wooden stretcher bars at the back. Pressing on the canvas surface can cause stretching or denting.
2. **Dusting:** Use a soft, natural bristle brush to gently sweep away dust.
3. **Heat Caution:** Keep away from direct heat sources like fireplaces or radiators, which can cause acrylic paints to crack over decades.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80",
        alt: "Front View",
        color: "Burnt Orange",
        desc: "Frontal view showing the vibrant fall canopy.",
      },
      {
        url: "https://images.unsplash.com/photo-1506744626753-1fa44df14dd4?w=800&q=80",
        alt: "Side Profile",
        color: "Orange/Red",
        desc: "Side view showing the painted gallery-wrapped edges.",
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        alt: "Texture Close-up",
        color: "Gold",
        desc: "Macro shot of the layered acrylic brushstrokes on the linen surface.",
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
        alt: "Lifestyle Shot",
        color: "Neutral",
        desc: "The painting displayed in a cozy, warm-lit study.",
      },
      {
        url: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
        alt: "Packaging",
        color: "Brown",
        desc: "The painting secured in its custom reinforced shipping box.",
      },
    ],
  },
  {
    id: "np-003",
    category: "/c/paintings/nature-paintings",
    slug: "serene-waterfall",
    title: "Serene Waterfall",
    description:
      "A hyper-realistic painting of a hidden forest waterfall, bringing the tranquility of nature indoors.",
    price: 300,
    discountedPrice: 240,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1432405972618-c60002091c8c?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Professional-grade watercolors on 300gsm cold-pressed Arches paper.
- **Dimensions:** 20" x 28" (50cm x 71cm) including the mat border.
- **Frame:** Solid teak wood frame featuring a museum-quality, anti-reflective acrylic pane.
- **Matting:** Acid-free double white mat board.

### Composition Details
This hyper-realistic portrayal of a dense forest waterfall explores the interplay of light and moving water. The watercolor medium was chosen specifically for its translucent properties, perfectly mimicking the misty spray at the base of the falls.

### Care & Maintenance
1. **Glass Care:** Wipe the anti-reflective acrylic pane exclusively with ammonia-free glass cleaners and a soft microfiber cloth.
2. **Moisture Defense:** The painting is sealed within the frame, but it should not be hung in highly humid areas like bathrooms to protect the paper from warping.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1432405972618-c60002091c8c?w=800&q=80",
        alt: "Main View",
        color: "Teal/Green",
        desc: "Direct view of the hyper-realistic waterfall.",
      },
      {
        url: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?w=800&q=80",
        alt: "Frame Detail",
        color: "Teak",
        desc: "Close-up of the elegant solid teak wood frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        alt: "Matting Detail",
        color: "White",
        desc: "Detail shot of the acid-free double matting.",
      },
      {
        url: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&q=80",
        alt: "Room Context",
        color: "Neutral",
        desc: "Displayed in a brightly lit hallway above a wooden console.",
      },
      {
        url: "https://images.unsplash.com/photo-1544453158-64fce1eb53f3?w=800&q=80",
        alt: "Paper Texture",
        color: "Green",
        desc: "Macro view showing the watercolor pigments resting on the cold-pressed paper.",
      },
    ],
  },
  {
    id: "np-004",
    category: "/c/paintings/nature-paintings",
    slug: "misty-mountain-morning",
    title: "Misty Mountain Morning",
    description:
      "Minimalist watercolor tones highlight the majestic peaks of a distant mountain range.",
    price: 120,
    discountedPrice: 90,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Sumi-e ink and light watercolor on rice paper.
- **Dimensions:** 16" x 20" (40cm x 50cm).
- **Frame:** Sleek matte black aluminum frame.
- **Aesthetic:** Minimalist, monochromatic, Zen-inspired.

### The Inspiration
Drawing heavily from traditional East Asian ink wash painting techniques, "Misty Mountain Morning" uses negative space to represent the vast, creeping mountain fog. The minimalist approach ensures it complements modern, uncluttered interiors perfectly.

### Care Instructions
1. **Light Sensitivity:** Ink wash on rice paper is highly sensitive to UV light. Ensure it is hung in a shaded area.
2. **Handling:** If removing from the frame, do so with cotton gloves to prevent oils from staining the delicate rice paper.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        alt: "Frontal Shot",
        color: "Grey/White",
        desc: "Full frontal view of the minimalist mountain range.",
      },
      {
        url: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&q=80",
        alt: "Ink Detail",
        color: "Black",
        desc: "Close-up showing the gradient of the ink wash.",
      },
      {
        url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
        alt: "Frame Corner",
        color: "Black",
        desc: "Detail of the sharp, black aluminum frame joint.",
      },
      {
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
        alt: "Interior Design",
        color: "Monochrome",
        desc: "Hung in a sleek, modern, monochromatic bedroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        alt: "Backing",
        color: "Black",
        desc: "Back of the frame showing the secure clasps and hanging wire.",
      },
    ],
  },
  {
    id: "np-005",
    category: "/c/paintings/nature-paintings",
    slug: "golden-hour-meadow",
    title: "Golden Hour Meadow",
    description:
      "Warm sunlight washes over a field of wildflowers in this stunning countryside portrayal.",
    price: 250,
    discountedPrice: 200,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints on canvas board.
- **Dimensions:** 24" x 24" (60cm x 60cm) Square.
- **Frame:** Ornate vintage-style gold resin frame.
- **Texture:** Rich impasto technique emphasizing the foreground flowers.

### The Vision
This painting captures that fleeting, magical fifteen minutes before sunset. The artist used palette knives exclusively for the foreground to make the wildflowers physically pop off the canvas, contrasting with the smoothly blended golden sky.

### Care Guidelines
1. **Dusting Textured Art:** Because of the heavy 3D impasto texture, standard cloths will catch on the paint. Use a soft, clean makeup brush to dislodge dust from the crevices.
2. **Frame Cleaning:** The gold resin frame should only be wiped with a dry cloth. Solvents will strip the gold finish.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
        alt: "Full View",
        color: "Gold/Yellow",
        desc: "Square orientation view of the golden meadow.",
      },
      {
        url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
        alt: "Frame Detail",
        color: "Gold",
        desc: "Corner shot of the ornate vintage gold frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        alt: "Impasto Detail",
        color: "Yellow/Green",
        desc: "Extreme macro shot showing the 3D texture of the painted wildflowers.",
      },
      {
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
        alt: "Room Scene",
        color: "Warm Neutral",
        desc: "Displayed above a vintage wooden credenza.",
      },
      {
        url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&q=80",
        alt: "Side Profile",
        color: "Gold",
        desc: "Angled view showing how far the paint protrudes from the canvas.",
      },
    ],
  },
  {
    id: "np-006",
    category: "/c/paintings/nature-paintings",
    slug: "ocean-breeze",
    title: "Ocean Breeze",
    description:
      "Crisp blues and whites dominate this refreshing seascape, featuring gentle waves on a sandy shore.",
    price: 180,
    discountedPrice: 135,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Acrylic and sea salt on gallery-wrapped canvas.
- **Dimensions:** 30" x 20" (76cm x 50cm) Horizontal.
- **Frame:** Unframed, with continuing edge-painting.
- **Special Materials:** Authentic fine sea salt mixed into the shoreline paint for realistic texture.

### Creative Process
"Ocean Breeze" brings the beach indoors. The artist uniquely incorporated finely crushed sea salt into the titanium white acrylics used for the sea foam, giving the physical painting a subtle, sandy sparkle when hit by direct light.

### Product Care
1. **Handling the Edges:** Because the painting wraps around the edges, be careful not to scuff the corners against hard surfaces when moving it.
2. **Moisture:** Despite being a seascape, the salt mixed into the paint can attract moisture. Keep in a dry, climate-controlled room.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=800&q=80",
        alt: "Main Canvas",
        color: "Azure/White",
        desc: "Full horizontal view of the crashing waves.",
      },
      {
        url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
        alt: "Salt Texture",
        color: "White/Tan",
        desc: "Macro view of the sea salt texture mixed into the shore.",
      },
      {
        url: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=800&q=80",
        alt: "Edge View",
        color: "Blue",
        desc: "View of the painted canvas edge extending around the frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1520116468816-95b69f847357?w=800&q=80",
        alt: "Interior Design",
        color: "Coastal",
        desc: "Mounted in a bright, coastal-themed living area.",
      },
      {
        url: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=800&q=80",
        alt: "Canvas Back",
        color: "Wood",
        desc: "The rear wooden stretcher bars and tension wedges.",
      },
    ],
  },
  {
    id: "np-007",
    category: "/c/paintings/nature-paintings",
    slug: "forest-path",
    title: "Forest Path",
    description:
      "An inviting, sun-dappled trail winding through ancient oaks and lush green undergrowth.",
    price: 220,
    discountedPrice: 198,
    discountPercent: 10,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Classic Oil on primed linen canvas.
- **Dimensions:** 24" x 30" (60cm x 76cm) Vertical.
- **Frame:** Distressed walnut wood frame.
- **Technique:** Glazing and scumbling to achieve hyper-realistic light rays.

### Visual Journey
This piece relies on the traditional oil glazing technique—applying dozens of incredibly thin, translucent layers of paint—to create the illusion of sunbeams penetrating the dense forest canopy. It creates a striking sense of depth that draws the eye down the path.

### Maintenance Cautions
1. **Curing Time:** Oil paintings continue to cure for decades. Do not lean anything against the surface of the canvas.
2. **Cleaning:** Dust gently. Do not use water. If the painting appears dull after many years, consult a professional conservator for re-varnishing.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        alt: "Forest Path Front",
        color: "Deep Green",
        desc: "Vertical shot of the sunlit forest path.",
      },
      {
        url: "https://images.unsplash.com/photo-1470071131384-001b85755536?w=800&q=80",
        alt: "Light Rays Detail",
        color: "Yellow/Green",
        desc: "Close-up on the painted sunbeams filtering through the leaves.",
      },
      {
        url: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=80",
        alt: "Frame",
        color: "Walnut",
        desc: "Detail of the distressed walnut wood framing.",
      },
      {
        url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
        alt: "Room Styling",
        color: "Earthy",
        desc: "Hung in a dark-academia styled library.",
      },
      {
        url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
        alt: "Scale Reference",
        color: "Mixed",
        desc: "The painting held by a person to demonstrate scale.",
      },
    ],
  },
  {
    id: "np-008",
    category: "/c/paintings/nature-paintings",
    slug: "desert-bloom",
    title: "Desert Bloom",
    description:
      "A rare and beautiful scene of cacti flowers blooming against a warm, terracotta desert sunset.",
    price: 140,
    discountedPrice: 105,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Gouache on 300gsm hot-pressed watercolor paper.
- **Dimensions:** 11" x 14" (28cm x 35cm).
- **Frame:** Light ash wood frame with a clear glass pane.
- **Style:** Contemporary illustrative.

### The Medium
Gouache provides the perfect matte, opaque finish needed to capture the stark contrast between the vibrant pink cactus flowers and the muted, dusty terracotta background of the desert at dusk.

### Care Instructions
1. **Moisture Warning:** Gouache is water-soluble even after it dries. A single drop of water can ruin the painting. Never remove it from behind its protective glass.
2. **Glass Cleaning:** Spray glass cleaner onto a cloth, never directly onto the frame, to prevent liquid from seeping under the glass edge.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        alt: "Desert Canvas",
        color: "Terracotta/Pink",
        desc: "Frontal view of the blooming cactus.",
      },
      {
        url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        alt: "Gouache Detail",
        color: "Pink/Green",
        desc: "Macro shot highlighting the matte opacity of the gouache paint.",
      },
      {
        url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800&q=80",
        alt: "Frame Corner",
        color: "Ash Wood",
        desc: "Close-up of the light ash wood frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800&q=80",
        alt: "Room Scene",
        color: "Boho",
        desc: "Displayed on a shelf in a bohemian-styled room.",
      },
      {
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        alt: "Glass Glare",
        color: "Clear",
        desc: "Angled shot demonstrating the protective glass covering.",
      },
    ],
  },
  {
    id: "np-009",
    category: "/c/paintings/nature-paintings",
    slug: "spring-valley",
    title: "Spring Valley",
    description:
      "Lush rolling hills and blooming cherry blossoms capture the vibrant rebirth of spring.",
    price: 280,
    discountedPrice: 238,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Acrylic on birchwood panel.
- **Dimensions:** 36" x 18" (90cm x 45cm) Panoramic.
- **Frame:** Solid white painted wooden border frame.
- **Texture:** Smooth gradients with stippled detailing for the blossoms.

### Distinctive Features
Instead of canvas, this piece is painted directly onto a sealed birchwood panel. This creates a remarkably smooth, rigid surface that allows for incredibly fine, precise stippling on the thousands of tiny cherry blossoms scattered across the valley.

### Product Care
1. **Wood Panel Care:** Wood expands and contracts with humidity. Keep this piece in a climate-controlled room to prevent the panel from bowing.
2. **Dusting:** Use a soft, lint-free cloth. The smooth acrylic surface is easy to clean but can be scratched by abrasive dusters.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=800&q=80",
        alt: "Panoramic View",
        color: "Pink/Green",
        desc: "Full panoramic view of the lush spring valley.",
      },
      {
        url: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&q=80",
        alt: "Wood Grain",
        color: "Wood/Paint",
        desc: "Macro shot showing the paint resting on the smooth birchwood grain.",
      },
      {
        url: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80",
        alt: "Stippling Detail",
        color: "Pink",
        desc: "Extreme close-up of the delicate stippled cherry blossoms.",
      },
      {
        url: "https://images.unsplash.com/photo-1496309732348-3627f3f040ee?w=800&q=80",
        alt: "Living Space",
        color: "Bright Neutral",
        desc: "Hung prominently above a long dining table.",
      },
      {
        url: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&q=80",
        alt: "Frame Detail",
        color: "White",
        desc: "Close-up of the modern white border frame.",
      },
    ],
  },
  {
    id: "np-010",
    category: "/c/paintings/nature-paintings",
    slug: "winter-wonderland",
    title: "Winter Wonderland",
    description:
      "A stark, beautiful contrast of snow-covered pines against a crisp, clear blue winter sky.",
    price: 200,
    discountedPrice: 150,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints on canvas board.
- **Dimensions:** 20" x 24" (50cm x 60cm).
- **Frame:** Metallic silver leaf wooden frame.
- **Varnish:** High-gloss damar varnish.

### The Contrast
This piece thrives on temperature contrasts. The icy, titanium white snow is punctuated by the deep, almost-black emerald of the shaded pines. A high-gloss varnish was applied to give the snow a permanent, wet, icy sheen that reflects beautifully in a well-lit room.

### Care & Usage
1. **Handling Gloss Varnish:** High-gloss varnish easily shows fingerprints. Handle only by the silver frame.
2. **Cleaning:** Wipe with a dry, very soft microfiber cloth. Do not use chemical cleaners on the metallic silver leaf frame, as it may tarnish.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=800&q=80",
        alt: "Winter Scene",
        color: "White/Blue",
        desc: "Frontal view of the snowy pines.",
      },
      {
        url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80",
        alt: "Gloss Detail",
        color: "White",
        desc: "Angled shot highlighting the wet look of the high-gloss varnish.",
      },
      {
        url: "https://images.unsplash.com/photo-1478719059408-592965723cbc?w=800&q=80",
        alt: "Frame Corner",
        color: "Silver",
        desc: "Close-up of the metallic silver leaf framing.",
      },
      {
        url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&q=80",
        alt: "Home Styling",
        color: "Cool Neutral",
        desc: "Displayed in a chic, modern bedroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1517260911058-0fcfd733202d?w=800&q=80",
        alt: "Scale",
        color: "Mixed",
        desc: "The painting placed next to a standard lounge chair for scale.",
      },
    ],
  },

  // ---> Fine Art Prints
  {
    id: "fap-001",
    category: "/c/paintings/fine-art-prints",
    slug: "vintage-botanical",
    title: "Vintage Botanical",
    description: "Classic botanical print on archival museum-quality paper.",
    price: 60,
    discountedPrice: 48,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1534067783307-e837fbf9d5ed?w=800&q=80",
    body: `
### Print Specifications
- **Paper:** 310gsm Hahnemühle German Etching paper (100% $\\alpha$-cellulose).
- **Ink:** 12-color archival pigment inks.
- **Dimensions:** A3 Size - 11.7" x 16.5" (29.7cm x 42cm).
- **Format:** Unframed. Ships rolled in a protective rigid tube.

### Archival Quality
This is not a standard poster. Printed using the Giclée method, this vintage botanical reproduction utilizes museum-grade archival inks that are guaranteed against fading for up to 100 years. The Hahnemühle paper provides a subtle, tactile velvet texture that mimics original watercolor paper perfectly.

### Unboxing & Care
1. **Flattening:** Because this print ships rolled, carefully remove it from the tube and let it rest on a clean, flat surface under heavy books for 24 hours before framing.
2. **Framing:** We strongly recommend framing this print behind UV-filtering glass to maintain the vibrancy of the archival inks.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1534067783307-e837fbf9d5ed?w=800&q=80",
        alt: "Print Front",
        color: "Cream/Green",
        desc: "Full view of the unrolled botanical print.",
      },
      {
        url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        alt: "Paper Texture",
        color: "Cream",
        desc: "Extreme close-up showing the velvety texture of the Hahnemühle paper.",
      },
      {
        url: "https://images.unsplash.com/photo-1466695108335-44674aa2058b?w=800&q=80",
        alt: "Ink Detail",
        color: "Green",
        desc: "Macro shot of the crisp, high-resolution 12-color ink lines.",
      },
      {
        url: "https://images.unsplash.com/photo-1506804886640-30c000e39a3f?w=800&q=80",
        alt: "Packaging",
        color: "Cardboard",
        desc: "The print partially unrolled from its rigid protective shipping tube.",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7bef511?w=800&q=80",
        alt: "Framed Mockup",
        color: "Neutral",
        desc: "Digital mockup showing the print framed in a simple oak frame.",
      },
    ],
  },
  {
    id: "fap-002",
    category: "/c/paintings/fine-art-prints",
    slug: "monet-water-lilies-reproduction",
    title: "Monet Water Lilies Reprint",
    description:
      "High-resolution fine art print of Monet's classic masterpiece.",
    price: 80,
    discountedPrice: 60,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80",
    body: `
### Print Specifications
- **Paper:** 280gsm Premium Luster Photo Paper.
- **Ink:** Archival pigment inks.
- **Dimensions:** 24" x 36" (60cm x 90cm) Poster Size.
- **Format:** Unframed. Ships rolled in a protective rigid tube.

### Masterpiece Reproduction
Captured using a multi-gigapixel scanner, this reproduction of Monet's Water Lilies retains the visual depth of the original impressionist brushstrokes. The premium luster paper provides just enough gloss to make the blues and greens pop without suffering from the harsh glare of standard glossy photo paper.

### Care Cautions
1. **Handling:** Luster paper easily retains fingerprints. Handle only by the edges or wear clean cotton gloves when moving the print to a frame.
2. **Moisture:** Keep away from humid areas until it is securely sealed inside a frame.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80",
        alt: "Monet Print",
        color: "Blue/Green",
        desc: "Full poster view of the Water Lilies reproduction.",
      },
      {
        url: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?w=800&q=80",
        alt: "Luster Finish",
        color: "Reflective",
        desc: "Angled shot demonstrating the soft sheen of the luster paper.",
      },
      {
        url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&q=80",
        alt: "Brushstroke Detail",
        color: "Blue",
        desc: "Close-up showing the high-resolution capture of Monet's brushwork.",
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
        alt: "Living Space",
        color: "Neutral",
        desc: "The print framed in black, sitting in a contemporary living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1526435345700-1c3ae080ea4d?w=800&q=80",
        alt: "Rolled Print",
        color: "White",
        desc: "The print rolled loosely showing the sturdy paper weight.",
      },
    ],
  },
  {
    id: "fap-003",
    category: "/c/paintings/fine-art-prints",
    slug: "geometric-bauhaus",
    title: "Geometric Bauhaus",
    description:
      "Bold, primary colors and sharp shapes defining the Bauhaus movement.",
    price: 50,
    discountedPrice: 40,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
    body: `
### Print Specifications
- **Paper:** 230gsm Heavyweight Matte paper.
- **Ink:** Vector-grade solid color printing.
- **Dimensions:** 18" x 24" (45cm x 60cm).
- **Format:** Unframed. Ships flat in a reinforced cardboard mailer.

### The Aesthetic
This piece is an homage to the 1920s Bauhaus movement. Because the design relies on perfectly sharp geometric shapes and solid primary colors (reds, blues, yellows), we utilized a stark, dead-matte paper. This ensures zero light reflection, keeping the colors completely uniform and bold from any viewing angle.

### Care Instructions
1. **Matte Paper Care:** Matte paper is highly susceptible to scuffing. Do not slide anything across the surface of the print.
2. **Display:** Best framed with a wide white mat board to emphasize the bold geometric colors.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
        alt: "Bauhaus Front",
        color: "Primary Colors",
        desc: "Direct view of the sharp geometric shapes.",
      },
      {
        url: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=800&q=80",
        alt: "Matte Finish",
        color: "Red/Blue",
        desc: "Angled shot showing the completely non-reflective matte surface.",
      },
      {
        url: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
        alt: "Edge Detail",
        color: "White",
        desc: "Close up of the sharp printed lines against the white paper.",
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        alt: "Office Space",
        color: "Modern",
        desc: "Framed and hung in a modern, minimalist office.",
      },
      {
        url: "https://images.unsplash.com/photo-1588694801646-654dbbdff43a?w=800&q=80",
        alt: "Flat Mailer",
        color: "Brown",
        desc: "The print emerging from its flat, reinforced cardboard mailer.",
      },
    ],
  },
  {
    id: "fap-004",
    category: "/c/paintings/fine-art-prints",
    slug: "japanese-wave",
    title: "The Great Wave Print",
    description: "Iconic Japanese ukiyo-e woodblock print reproduction.",
    price: 70,
    discountedPrice: 56,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1554147090-e1221a04a025?w=800&q=80",
    body: `
### Print Specifications
- **Paper:** 250gsm Awagami Washi Paper (Traditional Japanese style).
- **Ink:** Archival pigment inks.
- **Dimensions:** 12" x 18" (30cm x 45cm).
- **Format:** Unframed. Ships rolled in a tube.

### Authentic Textures
To do justice to Hokusai's iconic woodblock print, we do not use standard western photo paper. This reproduction is printed on Awagami Washi—a traditional Japanese paper made from natural fibers. It is slightly translucent and features organic, visible fiber lines running through the sheet, giving the print an incredibly authentic, historical feel.

### Handling Washi Paper
1. **Delicate Fibers:** Washi paper is strong but can crease easily. Handle with extreme care when unrolling.
2. **Mounting:** We recommend "floating" this print inside a frame (rather than hiding the edges under a mat) to show off the beautiful, organic deckled edge of the Washi paper.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1554147090-e1221a04a025?w=800&q=80",
        alt: "Wave Print",
        color: "Indigo/White",
        desc: "Full view of the iconic wave reproduction.",
      },
      {
        url: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=800&q=80",
        alt: "Washi Texture",
        color: "Cream",
        desc: "Macro shot revealing the natural fibers inside the Washi paper.",
      },
      {
        url: "https://images.unsplash.com/photo-1567080536488-8cd351eb8c99?w=800&q=80",
        alt: "Deckled Edge",
        color: "White",
        desc: "Close-up of the rough, organic deckled edge of the paper.",
      },
      {
        url: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?w=800&q=80",
        alt: "Floating Frame",
        color: "Wood",
        desc: "Mockup of the print floating in a shadowbox frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80",
        alt: "Ink Density",
        color: "Blue",
        desc: "Detail of the deep indigo ink pressed into the paper fibers.",
      },
    ],
  },
  {
    id: "fap-005",
    category: "/c/paintings/fine-art-prints",
    slug: "charcoal-figure",
    title: "Charcoal Figure Study",
    description:
      "A moody, highly detailed print of an original charcoal sketch.",
    price: 45,
    discountedPrice: 36,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1566835611413-5b8d2ceb6fa4?w=800&q=80",
    body: `
### Print Specifications
- **Paper:** 300gsm Cold-Pressed Fine Art Paper.
- **Ink:** High-density pure carbon black ink.
- **Dimensions:** 11" x 14" (28cm x 35cm).
- **Format:** Unframed. Ships flat.

### Capturing Charcoal
Reproducing charcoal art requires immense precision to capture the subtle smudges and deep voids of black. We use a dedicated monochrome printing process utilizing pure carbon inks (no color mixing) on highly textured cold-pressed paper. This perfectly simulates the rough grit of a charcoal stick dragging across a sketchpad.

### Care Instructions
1. **Smudge-Free:** Unlike real charcoal, this printed ink will not smudge or transfer to your hands.
2. **Display:** Because the image relies on deep blacks and subtle grays, avoid hanging it on a wall that receives heavy glare, which will wash out the contrast.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1566835611413-5b8d2ceb6fa4?w=800&q=80",
        alt: "Figure Print",
        color: "Monochrome",
        desc: "Full view of the moody charcoal figure study.",
      },
      {
        url: "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
        alt: "Texture Depth",
        color: "Grey",
        desc: "Macro view showing the simulated charcoal grain on the textured paper.",
      },
      {
        url: "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?w=800&q=80",
        alt: "Contrast Detail",
        color: "Black/White",
        desc: "Close-up of the stark transition from deep black to paper white.",
      },
      {
        url: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=80",
        alt: "Studio Scene",
        color: "Neutral",
        desc: "Displayed on a studio easel alongside drafting tools.",
      },
      {
        url: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&q=80",
        alt: "Flat Packaging",
        color: "Brown",
        desc: "The print secured inside its rigid flat mailer.",
      },
    ],
  },

  // ---> Original Paintings
  {
    id: "op-001",
    category: "/c/paintings/original-paintings",
    slug: "midnight-jazz",
    title: "Midnight Jazz",
    description:
      "One-of-a-kind original acrylic painting capturing the essence of a 1920s jazz club.",
    price: 1200,
    discountedPrice: 960,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Professional Acrylic on stretched 12oz cotton canvas.
- **Dimensions:** 36" x 48" (90cm x 120cm) - Large scale.
- **Frame:** Hand-painted black wooden gallery frame.
- **Certificate:** Includes a physical Certificate of Authenticity signed by the artist.

### The Story
"Midnight Jazz" immerses you in the smoky, vibrant atmosphere of a 1920s speakeasy. The artist used sharp, angular brushstrokes and contrasting warm golds against deep midnight blues to simulate the blaring sound of brass instruments and the rhythmic thumping of an upright bass.

### Care & Maintenance
1. **Handling:** This is an original piece with a custom acrylic wash. Handle the frame only, avoiding direct contact with the painted surface.
2. **Environment:** Acrylics are flexible but can become brittle in freezing temperatures. Keep the artwork in a climate-controlled room.
3. **Cleaning:** Dust gently with a clean, dry feather duster. Do not wipe with damp cloths.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
        alt: "Midnight Jazz Front",
        color: "Blue/Gold",
        desc: "Frontal view of the moody jazz club painting.",
      },
      {
        url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&q=80",
        alt: "Brushstroke Detail",
        color: "Gold",
        desc: "Close-up of the sharp, angular strokes used on the brass instruments.",
      },
      {
        url: "https://images.unsplash.com/photo-1520627581977-10705a698a96?w=800&q=80",
        alt: "Frame Detail",
        color: "Black",
        desc: "Angled shot showing the custom black wooden gallery frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
        alt: "Room Scene",
        color: "Moody",
        desc: "Hung in a dimly lit lounge area above a leather sofa.",
      },
      {
        url: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80",
        alt: "Certificate",
        color: "White",
        desc: "The included physical Certificate of Authenticity signed by the artist.",
      },
    ],
  },
  {
    id: "op-002",
    category: "/c/paintings/original-paintings",
    slug: "coastal-solitude",
    title: "Coastal Solitude",
    description:
      "Original oil on canvas depicting a lone lighthouse against a stormy sea.",
    price: 1500,
    discountedPrice: 1200,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Traditional Oil on primed Belgian linen.
- **Dimensions:** 30" x 40" (76cm x 101cm) Horizontal.
- **Frame:** Ornate distressed silver leaf frame.
- **Varnish:** Protected with a layer of traditional Damar varnish.

### The Composition
Painted over the course of three months, "Coastal Solitude" uses the wet-on-dry technique to build incredible depth in the stormy clouds and the crashing waves. The solitary lighthouse stands as a beacon of resilience. The use of Belgian linen provides a superior, fine-grained surface that allows for minuscule details in the ocean spray.

### Care Instructions
1. **Curing:** Oil paints take decades to fully cure. Ensure the painting has proper air circulation and never cover the front with glass or plastic.
2. **Dusting:** Use a soft badger-hair brush to dust the surface.
3. **Varnish Maintenance:** The Damar varnish may slightly yellow over 30+ years, at which point a professional restorer can safely remove and reapply it.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800&q=80",
        alt: "Coastal Solitude",
        color: "Grey/Blue",
        desc: "Full horizontal view of the stormy lighthouse scene.",
      },
      {
        url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
        alt: "Lighthouse Detail",
        color: "White/Grey",
        desc: "Macro shot of the lighthouse showing fine brush details in the brickwork.",
      },
      {
        url: "https://images.unsplash.com/photo-1579783902922-450f3b4991fb?w=800&q=80",
        alt: "Wave Texture",
        color: "Deep Blue",
        desc: "Close-up of the thickly applied oil paint forming the crashing waves.",
      },
      {
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
        alt: "Interior Setting",
        color: "Cool Neutral",
        desc: "Displayed prominently in a modern coastal living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        alt: "Frame Detail",
        color: "Silver",
        desc: "Corner view of the distressed silver leaf frame.",
      },
    ],
  },
  {
    id: "op-003",
    category: "/c/paintings/original-paintings",
    slug: "vibrant-chaos",
    title: "Vibrant Chaos",
    description:
      "An explosive expressionist original using heavy impasto techniques.",
    price: 900,
    discountedPrice: 765,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Heavy body acrylics on rigid wood panel.
- **Dimensions:** 40" x 40" (101cm x 101cm) Square.
- **Frame:** Unframed, edges finished in matte black.
- **Texture:** Extreme 3D impasto (paint protrudes up to 1 inch from the board).

### The Technique
"Vibrant Chaos" abandons brushes entirely. The artist used various sized palette knives and trowels to sculpt thick, buttery acrylics directly onto the wood panel. The result is a highly tactile, explosive array of magenta, teal, and cadmium yellow that casts physical shadows across itself depending on your room's lighting.

### Care & Caution
1. **Handling:** This piece is heavy and the paint peaks are fragile. Always move the piece by holding the sturdy wooden back frame. Never press against the front.
2. **Lighting:** To fully appreciate the 3D texture, hang this piece in a location where it receives angled, directional light (like track lighting or a nearby window).
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
        alt: "Vibrant Chaos",
        color: "Multicolor",
        desc: "Full square view of the abstract explosion of colors.",
      },
      {
        url: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
        alt: "Impasto Peaks",
        color: "Magenta/Yellow",
        desc: "Extreme side angle showing the thick, 1-inch peaks of acrylic paint.",
      },
      {
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
        alt: "Edge Finish",
        color: "Black",
        desc: "View of the rigid wood panel edge, painted in matte black.",
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
        alt: "Living Space",
        color: "Neutral",
        desc: "The colorful painting serving as a stark focal point in an all-white minimalist room.",
      },
      {
        url: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&q=80",
        alt: "Shadow Details",
        color: "Mixed",
        desc: "Close-up showing how the thick paint casts physical shadows on the canvas.",
      },
    ],
  },
  {
    id: "op-004",
    category: "/c/paintings/original-paintings",
    slug: "serengeti-sunset",
    title: "Serengeti Sunset",
    description: "Warm, rich tones hand-painted on stretched linen canvas.",
    price: 1100,
    discountedPrice: 880,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints and dry pigments on premium linen.
- **Dimensions:** 24" x 36" (60cm x 90cm) Horizontal.
- **Frame:** Solid mahogany floating frame.
- **Aesthetic:** Tonalist landscape.

### The Inspiration
The vastness of the African plains at dusk is captured using intense, warm earth tones—burnt umbers, yellow ochres, and deep crimson. The artist used a unique dry-brushing technique over a wet base layer to create the hazy, atmospheric heat radiating from the horizon.

### Product Care
1. **Wood Frame Care:** The solid mahogany frame can be occasionally treated with high-quality wood wax to preserve its rich, natural luster.
2. **Vulnerability to Smoke/Grease:** Like all fine oil paintings, keep this piece away from open kitchens or frequent fireplace smoke, which will stick to the oil surface and dull the warm tones over time.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
        alt: "Serengeti Sunset",
        color: "Orange/Brown",
        desc: "Full horizontal view of the glowing African sunset.",
      },
      {
        url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
        alt: "Dry Brush Detail",
        color: "Ochre",
        desc: "Close-up showing the atmospheric dry-brushing technique in the sky.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Mahogany Frame",
        color: "Mahogany",
        desc: "Detail shot of the solid, rich mahogany floating frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1588694801646-654dbbdff43a?w=800&q=80",
        alt: "Room Context",
        color: "Warm",
        desc: "Displayed in a globally-inspired living room setting.",
      },
      {
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        alt: "Canvas Texture",
        color: "Orange",
        desc: "Macro view of the paint seeping into the heavy linen weave.",
      },
    ],
  },
  {
    id: "op-005",
    category: "/c/paintings/original-paintings",
    slug: "ethereal-dancer",
    title: "Ethereal Dancer",
    description:
      "Original watercolor capturing the fluid motion of a ballet dancer.",
    price: 650,
    discountedPrice: 520,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Professional Watercolors on 300gsm cold-pressed Arches paper.
- **Dimensions:** 18" x 24" (45cm x 60cm).
- **Frame:** Champagne silver gallery frame with an anti-reflective, UV-protective glass pane.
- **Mounting:** Acid-free, ph-neutral white mounting board.

### Composition Details
Watercolors are notoriously difficult to control, but the artist masterfully utilized the "wet-on-wet" technique to allow the pigments to bleed organically. This creates a dreamy, fluid silhouette that perfectly mimics the graceful, fleeting movement of a ballerina in motion.

### Preservation Instructions
1. **Light Damage:** Watercolors are the most susceptible medium to UV fading. Although it features UV-protective glass, do not hang this original artwork in direct sunlight.
2. **Moisture Control:** Do not hang on damp walls or in unventilated bathrooms, as moisture can permeate the backing and cause the watercolor paper to buckle (known as "cockling").
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
        alt: "Ethereal Dancer",
        color: "Pastel",
        desc: "Full frontal view of the watercolor dancer silhouette.",
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        alt: "Bleed Detail",
        color: "Pink/Blue",
        desc: "Close-up of the wet-on-wet watercolor bleeding technique.",
      },
      {
        url: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=80",
        alt: "Frame Corner",
        color: "Champagne Silver",
        desc: "Detail of the elegant champagne silver gallery frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        alt: "Interior Space",
        color: "Bright",
        desc: "Hung in a brightly lit, feminine bedroom setup.",
      },
      {
        url: "https://images.unsplash.com/photo-1544453158-64fce1eb53f3?w=800&q=80",
        alt: "Paper Edge",
        color: "White",
        desc: "Macro view showing the edge of the cold-pressed watercolor paper against the mounting.",
      },
    ],
  },

  // ---> Cityscape Paintings
  {
    id: "cp-001",
    category: "/c/paintings/city-paintings",
    slug: "new-york-rain",
    title: "New York Rain",
    description:
      "Reflective, rainy streets of NYC painted in a neo-noir style.",
    price: 250,
    discountedPrice: 200,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints on canvas.
- **Dimensions:** 24" x 36" (60cm x 90cm) Vertical.
- **Frame:** Modern black aluminum frame.
- **Style:** Contemporary Realism / Neo-noir.

### The Atmosphere
"New York Rain" captures the electric, cinematic mood of a city that never sleeps. The artist focused heavily on the reflections of red taillights and yellow cabs bouncing off the wet asphalt. The moody, dark sky contrasts beautifully with the warm, glowing street-level lights.

### Care & Usage
1. **Cleaning:** Dust with a soft, dry cloth. The modern aluminum frame is highly durable and resists scratching.
2. **Display:** Due to its dark overall composition, this piece looks best in a well-lit room or under dedicated picture lighting to draw out the subtle neon reflections in the wet street.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
        alt: "New York Rain",
        color: "Dark Grey/Red",
        desc: "Vertical view of the rainy, reflective NYC street.",
      },
      {
        url: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
        alt: "Reflection Detail",
        color: "Yellow/Red",
        desc: "Close-up on the wet asphalt reflections of the taxi cabs.",
      },
      {
        url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
        alt: "Aluminum Frame",
        color: "Black",
        desc: "Corner detail of the sleek, modern black aluminum frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1520116468816-95b69f847357?w=800&q=80",
        alt: "Room Scene",
        color: "Urban",
        desc: "Displayed in an industrial, exposed-brick loft apartment.",
      },
      {
        url: "https://images.unsplash.com/photo-1526435345700-1c3ae080ea4d?w=800&q=80",
        alt: "Texture Depth",
        color: "Dark Grey",
        desc: "Angled shot highlighting the slight oil texture on the canvas.",
      },
    ],
  },
  {
    id: "cp-002",
    category: "/c/paintings/city-paintings",
    slug: "paris-cafe",
    title: "Paris Cafe Night",
    description: "Warm, inviting tones of a bustling Parisian street corner.",
    price: 280,
    discountedPrice: 224,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e90760e5a95?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Acrylic on premium cotton canvas.
- **Dimensions:** 20" x 24" (50cm x 60cm).
- **Frame:** Classic carved wooden frame with a subtle gold patina.
- **Finish:** Matte varnish to reduce glare.

### The Scene
Transport yourself to the romantic streets of Montmartre. This painting utilizes a warm, inviting palette of golden yellows, deep burgundies, and soft cobblestone grays. The loose, impressionistic brushstrokes give a sense of movement to the bustling cafe patrons.

### Care Instructions
1. **Handling:** The matte varnish is beautiful but can easily pick up oils from bare hands. Always handle the piece by the wooden frame.
2. **Maintenance:** Dust lightly. Never use abrasive cleaners on the carved wooden frame to preserve the delicate gold patina in the recesses.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1502602898657-3e90760e5a95?w=800&q=80",
        alt: "Paris Cafe Night",
        color: "Warm Yellow/Red",
        desc: "Full frontal view of the bustling, warmly lit Parisian cafe.",
      },
      {
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
        alt: "Impressionist Detail",
        color: "Burgundy",
        desc: "Close-up of the loose, impressionistic brushwork on the cafe patrons.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Frame Patina",
        color: "Gold/Wood",
        desc: "Detail of the carved wooden frame showing the gold patina.",
      },
      {
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
        alt: "Dining Room",
        color: "Classic",
        desc: "The painting hung elegantly over a classical dining buffet.",
      },
      {
        url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&q=80",
        alt: "Matte Finish",
        color: "Yellow",
        desc: "Angled shot proving the glare-free nature of the matte varnish.",
      },
    ],
  },
  {
    id: "cp-003",
    category: "/c/paintings/city-paintings",
    slug: "tokyo-neon",
    title: "Tokyo Neon Nights",
    description:
      "Cyberpunk-inspired bright neon colors contrasting deep city shadows.",
    price: 300,
    discountedPrice: 240,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Mixed Media (Acrylics and Fluorescent Inks) on canvas.
- **Dimensions:** 30" x 40" (76cm x 101cm) Vertical.
- **Frame:** Frameless gallery wrap (2-inch deep profile).
- **Varnish:** High-gloss epoxy resin pour for a "wet city" look.

### A Cyberpunk Vision
"Tokyo Neon Nights" is a striking, futuristic cityscape. The artist integrated true fluorescent inks into the acrylic base, making the neon pinks and cyan blues practically glow. The entire canvas was then poured over with a thick coat of epoxy resin, simulating the reflective, wet, hyper-modern aesthetic of a rainy night in Shinjuku.

### Product Care
1. **Resin Scratching:** The thick resin layer acts like glass. Do not wipe it with paper towels or abrasive sponges. Use only a premium, dry microfiber cloth to buff out fingerprints.
2. **Mounting:** The resin makes this piece heavier than standard canvases. Use sturdy drywall anchors when hanging.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
        alt: "Tokyo Neon",
        color: "Pink/Cyan",
        desc: "Full vertical view of the glowing, cyberpunk Tokyo street.",
      },
      {
        url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
        alt: "Resin Reflection",
        color: "Glossy",
        desc: "Angled view showing the glass-like reflection of the poured resin.",
      },
      {
        url: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=800&q=80",
        alt: "Fluorescent Detail",
        color: "Neon Pink",
        desc: "Macro shot of the fluorescent ink making the neon signs glow.",
      },
      {
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
        alt: "Room Scene",
        color: "Dark Modern",
        desc: "Displayed in an ultra-modern media room with LED backlighting.",
      },
      {
        url: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=800&q=80",
        alt: "Gallery Wrap Edge",
        color: "Black",
        desc: "Side profile showing the 2-inch deep black painted edge.",
      },
    ],
  },
  {
    id: "cp-004",
    category: "/c/paintings/city-paintings",
    slug: "london-fog",
    title: "London Fog",
    description: "A moody, grey-scale painting of the Thames and Big Ben.",
    price: 220,
    discountedPrice: 176,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Grayscale Oil on fine linen canvas.
- **Dimensions:** 18" x 24" (45cm x 60cm).
- **Frame:** Ornate dark charcoal wooden frame.
- **Technique:** Sfumato (soft, hazy transitions).

### The Aesthetic
This piece perfectly encapsulates the mysterious, historic fog of London. The artist restricted their palette to only titanium white and ivory black, creating a masterful study in values. The sfumato technique blends the silhouette of Big Ben seamlessly into the misty background.

### Maintenance & Care
1. **Light Contrast:** Grayscale paintings look their best in well-lit rooms. A dimly lit room will cause the subtle grays to muddy together.
2. **Dusting:** Dust lightly with a soft brush. Keep away from areas with high cooking smoke, which will quickly discolor the stark white fog areas.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
        alt: "London Fog",
        color: "Grey",
        desc: "Full frontal view of the hazy, grayscale London skyline.",
      },
      {
        url: "https://images.unsplash.com/photo-1470071131384-001b85755536?w=800&q=80",
        alt: "Sfumato Detail",
        color: "Soft Grey",
        desc: "Close-up of the soft, blended sfumato brushwork in the fog.",
      },
      {
        url: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=80",
        alt: "Frame Texture",
        color: "Charcoal",
        desc: "Detail of the dark, ornate charcoal-colored wooden frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
        alt: "Office Study",
        color: "Classic",
        desc: "Hung in a traditional, dark-wood office study.",
      },
      {
        url: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&q=80",
        alt: "Canvas Weave",
        color: "Grey/White",
        desc: "Macro shot of the oil paint resting in the fine linen weave.",
      },
    ],
  },
  {
    id: "cp-005",
    category: "/c/paintings/city-paintings",
    slug: "venetian-canal",
    title: "Venetian Canal",
    description:
      "Romantic gondolas floating through the historic waterways of Italy.",
    price: 260,
    discountedPrice: 195,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Fine Watercolors on 300gsm Arches paper.
- **Dimensions:** 16" x 20" (40cm x 50cm).
- **Frame:** Gold-brushed wooden frame with museum-quality anti-reflective glass.
- **Mounting:** Acid-free double cream matting.

### Historical Romance
The fluidity of watercolor is the perfect medium to capture the watery, historic romance of Venice. Translucent layers of aquamarine and terracotta evoke the crumbling beauty of the canal-side architecture and the gentle ripple of the gondola's wake.

### Care Instructions
1. **Glass Care:** Wipe the anti-reflective glass gently with an ammonia-free cleaner.
2. **Moisture Protection:** The watercolor paper is sealed within the frame, but to prevent the acid-free matting from absorbing humidity and cockling, avoid hanging this in unventilated bathrooms.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
        alt: "Venetian Canal",
        color: "Aquamarine",
        desc: "Frontal view of the romantic Venice waterway.",
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        alt: "Watercolor Bleed",
        color: "Teal/Terracotta",
        desc: "Close-up showing the translucent watercolor bleeds forming the water ripples.",
      },
      {
        url: "https://images.unsplash.com/photo-1579783902922-450f3b4991fb?w=800&q=80",
        alt: "Frame Detail",
        color: "Gold",
        desc: "Corner shot of the gold-brushed wood frame and cream matting.",
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        alt: "Living Space",
        color: "Light Neutral",
        desc: "Displayed above a light fabric sofa in an airy living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        alt: "Glass Glare Free",
        color: "Clear",
        desc: "Angled shot demonstrating the invisible look of the anti-reflective museum glass.",
      },
    ],
  },

  // ---> Flower Paintings
  {
    id: "fp-001",
    category: "/c/paintings/flower-paintings",
    slug: "sunflower-field",
    title: "Sunflower Field",
    description: "Bright, textural yellows bringing warmth to any interior.",
    price: 180,
    discountedPrice: 144,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1595856402778-57d341b52a12?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Heavy impasto oil paints on rigid canvas board.
- **Dimensions:** 24" x 24" (60cm x 60cm) Square.
- **Frame:** Solid natural pine wood floating frame.
- **Texture:** Highly tactile, 3D palette knife application.

### The Energy
"Sunflower Field" is an explosion of warmth and joy. The artist used thick, unmixed dollops of cadmium yellow and deep brown directly from the tube, applying them with a palette knife to create sunflower heads that physically stand off the canvas board by nearly half an inch.

### Care Guidelines
1. **Dusting:** Because of the extremely thick paint peaks, dusting requires care. Use a soft, clean makeup brush to gently flick dust out of the crevices. Never use a cloth, which will snag on the dried paint.
2. **Temperature:** Oil paint expands and contracts. Keep this piece away from direct heat sources (like radiators) to prevent the thick impasto layers from cracking over time.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1595856402778-57d341b52a12?w=800&q=80",
        alt: "Sunflower Field",
        color: "Yellow/Green",
        desc: "Full square view of the vibrant, textured sunflower field.",
      },
      {
        url: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
        alt: "3D Texture",
        color: "Yellow",
        desc: "Extreme side angle showing the thick, 3D palette knife paint peaks.",
      },
      {
        url: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=80",
        alt: "Pine Frame",
        color: "Light Wood",
        desc: "Detail of the minimalist natural pine floating frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
        alt: "Interior Setting",
        color: "Warm",
        desc: "The painting adding a massive pop of color to a neutral living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        alt: "Canvas Board Edge",
        color: "Wood",
        desc: "Close-up showing the canvas board mounted securely inside the floating frame.",
      },
    ],
  },
  {
    id: "fp-002",
    category: "/c/paintings/flower-paintings",
    slug: "cherry-blossom-branch",
    title: "Cherry Blossom Branch",
    description:
      "Delicate pink and white watercolor strokes of Sakura blossoms.",
    price: 150,
    discountedPrice: 120,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Transparent Watercolors on 300gsm rough Arches paper.
- **Dimensions:** 12" x 16" (30cm x 40cm).
- **Frame:** Slim rose-gold metal frame with standard glass.
- **Aesthetic:** Minimalist, delicate, East-Asian inspired.

### The Delicacy
This piece embodies the Japanese concept of "Mono no aware" (the pathos of things)—a gentle sadness at their transience. The Sakura (cherry blossoms) are painted with incredibly diluted, translucent pink washes, creating a soft, ethereal branch that feels as though it might blow away in the breeze.

### Care Instructions
1. **Fading Prevention:** The delicate pink watercolors are highly susceptible to fading. Hang this piece in a hallway or room that does not receive direct, glaring sunlight.
2. **Glass Cleaning:** Clean the glass carefully with a microfiber cloth. Do not spray cleaner directly onto the frame, as moisture can seep under the metal lip and ruin the paper.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
        alt: "Cherry Blossom",
        color: "Soft Pink",
        desc: "Full frontal view of the delicate watercolor branch.",
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        alt: "Translucent Wash",
        color: "Pink/White",
        desc: "Macro detail of the highly diluted, translucent watercolor washes.",
      },
      {
        url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
        alt: "Frame Corner",
        color: "Rose Gold",
        desc: "Detail of the slim, elegant rose-gold metal frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800&q=80",
        alt: "Bedroom Display",
        color: "Soft Bright",
        desc: "Displayed on a bedside table leaning against the wall.",
      },
      {
        url: "https://images.unsplash.com/photo-1544453158-64fce1eb53f3?w=800&q=80",
        alt: "Paper Roughness",
        color: "White",
        desc: "Close-up showing the heavy texture of the rough watercolor paper.",
      },
    ],
  },
  {
    id: "fp-003",
    category: "/c/paintings/flower-paintings",
    slug: "midnight-roses",
    title: "Midnight Roses",
    description: "Deep red roses painted against a striking black background.",
    price: 210,
    discountedPrice: 168,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1559564475-40810757a3e7?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints on canvas pre-primed with black gesso.
- **Dimensions:** 20" x 20" (50cm x 50cm) Square.
- **Frame:** Ornate matte black gothic-style wood frame.
- **Technique:** Chiaroscuro (dramatic contrast between light and dark).

### Dramatic Contrast
Rather than painting a black background around the flowers, the artist primed the entire canvas in deep black gesso before beginning. The rich, crimson red and velvet burgundy oil paints were then layered on top, allowing the roses to emerge dynamically from the shadows in a classic Dutch Master style.

### Care & Usage
1. **Dusting:** The black background will show dust much faster than a light painting. Dust regularly with a very soft, dry microfiber cloth.
2. **Varnish:** Protected with a satin varnish. Avoid touching the surface to prevent fingerprint oils from marking the deep black areas.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1559564475-40810757a3e7?w=800&q=80",
        alt: "Midnight Roses",
        color: "Red/Black",
        desc: "Full square view of the dramatic red roses emerging from darkness.",
      },
      {
        url: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
        alt: "Petal Detail",
        color: "Crimson",
        desc: "Close-up showing the subtle oil gradients on the velvet rose petals.",
      },
      {
        url: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=80",
        alt: "Gothic Frame",
        color: "Black",
        desc: "Detail of the heavily carved, gothic-style matte black wood frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
        alt: "Room Scene",
        color: "Moody",
        desc: "Hung in a dark, moody dining room setting.",
      },
      {
        url: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&q=80",
        alt: "Black Gesso Edge",
        color: "Black",
        desc: "Macro view showing the deep black gesso primer showing through the edges.",
      },
    ],
  },
  {
    id: "fp-004",
    category: "/c/paintings/flower-paintings",
    slug: "wild-lavender",
    title: "Wild Lavender",
    description:
      "Impressionistic strokes of purple sweeping across a countryside canvas.",
    price: 170,
    discountedPrice: 136,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1496354898144-8d4cc2eeab19?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Acrylics on gallery-wrapped cotton canvas.
- **Dimensions:** 24" x 36" (60cm x 90cm) Horizontal.
- **Frame:** Unframed, with continuing edge-painting.
- **Varnish:** Gloss acrylic medium.

### The Essence of Provence
Using fast, rhythmic brushstrokes, "Wild Lavender" captures the sweeping, fragrant fields of southern France. The artist used a varied palette of violet, lilac, and deep indigo to create a sense of rolling movement, as if the flowers are actively swaying in the wind.

### Maintenance
1. **Handling:** Hold by the wooden stretcher bars at the rear. The canvas is tightly stretched; pressing on the front can warp the tension.
2. **Cleaning:** The gloss acrylic varnish makes this piece incredibly durable and easy to clean. Simply wipe with a dry or very slightly damp microfiber cloth to remove dust.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1496354898144-8d4cc2eeab19?w=800&q=80",
        alt: "Wild Lavender",
        color: "Purple",
        desc: "Full horizontal view of the sweeping lavender fields.",
      },
      {
        url: "https://images.unsplash.com/photo-1470071131384-001b85755536?w=800&q=80",
        alt: "Brushstroke Detail",
        color: "Violet/Green",
        desc: "Close-up of the fast, rhythmic impressionist brushstrokes.",
      },
      {
        url: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=800&q=80",
        alt: "Edge View",
        color: "Purple",
        desc: "Side profile showing the painted gallery-wrapped edges.",
      },
      {
        url: "https://images.unsplash.com/photo-1520116468816-95b69f847357?w=800&q=80",
        alt: "Sunlit Room",
        color: "Bright Neutral",
        desc: "The painting hung in a bright, sun-drenched sunroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80",
        alt: "Gloss Finish",
        color: "Reflective",
        desc: "Angled shot highlighting the protective gloss acrylic varnish.",
      },
    ],
  },
  {
    id: "fp-005",
    category: "/c/paintings/flower-paintings",
    slug: "abstract-peonies",
    title: "Abstract Peonies",
    description:
      "Modern, stylized floral shapes breaking traditional boundaries.",
    price: 200,
    discountedPrice: 150,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Mixed Media (Acrylics, oil pastels, and spray paint) on canvas.
- **Dimensions:** 30" x 30" (76cm x 76cm) Square.
- **Frame:** Modern white wooden floating frame.
- **Aesthetic:** Abstract Contemporary.

### Breaking the Mold
This is not a traditional floral still-life. "Abstract Peonies" deconstructs the flower into its most basic geometric and fluid forms. Combining the sharp lines of oil pastels with the soft, misty gradients of spray paint and bold acrylic blocks, it is a highly energetic, modern interpretation of a classic subject.

### Care Instructions
1. **Mixed Media Fragility:** Because this piece utilizes unfixed oil pastels on the surface layer, it must never be wiped with a cloth, which will smear the pastel lines.
2. **Dusting:** Use a soft blower or very gentle feather duster only. Avoid all chemical sprays in the vicinity of the canvas.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
        alt: "Abstract Peonies",
        color: "Pink/White",
        desc: "Full square view of the energetic, abstract floral composition.",
      },
      {
        url: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
        alt: "Pastel Lines",
        color: "Dark Pink",
        desc: "Macro detail showing the raw texture of the oil pastel lines over the acrylic base.",
      },
      {
        url: "https://images.unsplash.com/photo-1579783902922-450f3b4991fb?w=800&q=80",
        alt: "White Frame",
        color: "White",
        desc: "Corner shot of the clean, modern white floating frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
        alt: "Modern Living",
        color: "Contemporary",
        desc: "Displayed as a statement piece in an ultra-modern, minimalist loft.",
      },
      {
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        alt: "Spray Paint Mist",
        color: "Soft Pink",
        desc: "Close-up showing the soft, hazy gradient created by the spray paint.",
      },
    ],
  },

  // ==========================================
  // 2. ART PLATES (/c/art-plates)
  // ==========================================

  // ---> Vintage Porcelain Plates
  {
    id: "vpp-001",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "royal-blue-willow",
    title: "Royal Blue Willow",
    description:
      "A classic oriental landscape design rendered in deep cobalt blue on pristine white porcelain.",
    price: 80,
    discountedPrice: 60,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Fine Bone China / Porcelain.
- **Dimensions:** 10.5" Diameter (26.6cm).
- **Design:** Transfer-printed underglaze utilizing authentic Cobalt Blue pigments.
- **Included:** Comes with a spring-loaded brass wall hanger for immediate display.

### History & Design
The Blue Willow pattern is one of the most famous and historically significant designs in ceramics. Featuring the classic elements of the fable—the willow tree, the bridge, the two birds, and the pagoda—this plate is fired at 1200°C to permanently seal the deep blue pigment beneath a highly reflective, glossy glaze.

### Care & Usage Cautions
1. **Decorative Use Only:** While the glaze is technically food-safe, we strongly recommend using this piece strictly for decorative wall or cabinet display to prevent cutlery scratches.
2. **Cleaning:** Wipe with a damp microfiber cloth. Do not use abrasive sponges or place in a dishwasher, as the high heat may eventually dull the vintage finish.
3. **Mounting:** Ensure the included brass wall hanger is securely hooked onto a sturdy wall anchor to prevent falling.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
        alt: "Top View",
        color: "Cobalt Blue",
        desc: "Direct top-down view of the intricate Blue Willow pattern.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Angle View",
        color: "White/Blue",
        desc: "Angled shot highlighting the glossy, reflective underglaze finish.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Detail Shot",
        color: "Blue",
        desc: "Close-up of the two birds and the willow tree motif.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Wall Display",
        color: "Neutral",
        desc: "The plate hanging on a dining room wall alongside other ceramics.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Hardware",
        color: "Brass",
        desc: "Close-up of the included brass spring-loaded wall hanger attached to the back.",
      },
    ],
  },
  {
    id: "vpp-002",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "victorian-rose-crest",
    title: "Victorian Rose Crest",
    description:
      "Delicate pink roses and an intricate gold-leaf border define this elegant Victorian-era replica.",
    price: 110,
    discountedPrice: 88,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1600003014608-f4ed11c4709d?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Premium English Bone China.
- **Dimensions:** 9.5" Diameter (24cm).
- **Embellishment:** Hand-painted 24k gold scalloped rim.
- **Included:** Clear acrylic display stand.

### The Elegance of the Victorian Era
This piece replicates the highly romanticized floral motifs popular in late 19th-century England. The central crest features soft, pastel pink cabbage roses surrounded by muted green foliage. The true standout is the heavily scalloped edge, lined meticulously with real 24k gold leaf.

### Care & Maintenance
1. **Gold Leaf Warning:** The 24k gold rim is applied *over* the glaze. It is highly delicate. Never scrub the edges, and never place this plate in a microwave.
2. **Handling:** Handle by the base rather than the gold-painted rim to prevent the natural oils on your hands from tarnishing the precious metal.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600003014608-f4ed11c4709d?w=800&q=80",
        alt: "Front View",
        color: "Pink/White",
        desc: "Frontal view showing the soft pastel roses in the center.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gold Rim Detail",
        color: "Gold",
        desc: "Extreme macro shot of the scalloped 24k gold leaf rim.",
      },
      {
        url: "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
        alt: "Stand Display",
        color: "Clear",
        desc: "The plate resting elegantly on its included clear acrylic display stand.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Tea Party Scene",
        color: "Pastel",
        desc: "Styled in a traditional, bright English tea party setting.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Base Mark",
        color: "White",
        desc: "Bottom of the plate showing the authentic maker's mark.",
      },
    ],
  },
  {
    id: "vpp-003",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "antique-delftware",
    title: "Antique Delftware",
    description:
      "Authentic Dutch-style blue and white plate featuring traditional windmill and canal motifs.",
    price: 95,
    discountedPrice: 76,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1581093582457-3f309cece559?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Tin-glazed earthenware (Delftware style).
- **Dimensions:** 11" Diameter (28cm).
- **Design:** Hand-painted monochrome blue on opaque white glaze.
- **Included:** Traditional heavy-duty wire wall clasp.

### Historical Context
Originating from the city of Delft in the Netherlands in the 17th century, true Delftware is characterized by its tin-based white glaze that serves as a canvas for striking blue oxide paintings. This plate depicts a classic, tranquil Dutch countryside scene featuring a prominent windmill beside a canal.

### Care Instructions
1. **Tin Glaze Fragility:** Earthenware is softer than bone china. The tin glaze can chip if struck against a hard surface. Handle with absolute care when mounting to a wall.
2. **Dusting:** Use a soft feather duster. Avoid abrasive cloths which can dull the historically accurate matte-like finish of the tin glaze.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581093582457-3f309cece559?w=800&q=80",
        alt: "Delftware Front",
        color: "Blue/White",
        desc: "Top view revealing the detailed windmill and canal scene.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Brushwork Close-up",
        color: "Blue",
        desc: "Macro detail of the authentic, slightly bleeding hand-painted blue strokes.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Edge Crazing",
        color: "White",
        desc: "Close-up showing the intentional, historical 'crazing' (fine cracks) in the white glaze.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Interior Design",
        color: "Rustic",
        desc: "Hung in a rustic kitchen next to copper pots.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Wire Clasp",
        color: "Steel",
        desc: "The back of the plate showing the heavy-duty wire mounting clasp.",
      },
    ],
  },
  {
    id: "vpp-004",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "french-countryside",
    title: "French Countryside",
    description:
      "A rustic yet refined porcelain plate depicting a serene pastoral scene from rural France.",
    price: 70,
    discountedPrice: 63,
    discountPercent: 10,
    image:
      "https://images.unsplash.com/photo-1574586597341-3652fbf221df?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Fine Porcelain.
- **Dimensions:** 10" Diameter (25.4cm).
- **Design:** Classic Toile de Jouy pattern in faded crimson red.
- **Included:** Free-standing wooden easel display.

### The Toile de Jouy Tradition
Inspired by the printed cotton fabrics produced in France during the 18th century, this plate uses a complex monochrome engraving style. Printed in a rustic, faded crimson, it illustrates a romanticized pastoral scene featuring a shepherd, rolling hills, and ancient stone ruins.

### Care & Usage Cautions
1. **Display Recommendations:** The faded crimson color looks most authentic in spaces with warm, yellow-toned lighting.
2. **Cleaning:** Safe to wipe with a mild soap solution and a soft cloth, but dry immediately to prevent water spots from forming on the high-gloss surface.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1574586597341-3652fbf221df?w=800&q=80",
        alt: "French Toile Plate",
        color: "Crimson/Cream",
        desc: "Full view of the faded crimson Toile de Jouy pastoral scene.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Engraving Detail",
        color: "Crimson",
        desc: "Close-up showing the cross-hatched engraving lines in the artwork.",
      },
      {
        url: "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
        alt: "Easel Display",
        color: "Wood",
        desc: "The plate showcased on its included dark wood easel.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Cottagecore Aesthetic",
        color: "Warm",
        desc: "Styled in a bright, cozy Cottagecore-themed living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Gloss Finish",
        color: "Reflective",
        desc: "Angled view showing the smooth, highly reflective surface of the porcelain.",
      },
    ],
  },
  {
    id: "vpp-005",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "empress-peony",
    title: "Empress Peony",
    description:
      "Vibrant, oversized peony blossoms painted on a dark, contrasting vintage porcelain background.",
    price: 130,
    discountedPrice: 104,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1563810143891-b3b3bb6cb57f?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Heavyweight Porcelain Charger Plate.
- **Dimensions:** 12.5" Diameter (31.7cm) - Oversized.
- **Design:** Hand-painted bright florals over a jet-black glaze.
- **Included:** Heavy-duty reinforced wall mount.

### A Striking Centerpiece
Designed to be a commanding focal point, this oversized charger plate uses a jet-black base glaze to create maximum contrast. The oversized, lush pink and white peonies are painted thick enough to cast their own slight shadows, giving the piece an almost 3D effect rarely seen in traditional porcelain art.

### Care & Mounting Instructions
1. **Weight Warning:** This is a heavy 12.5" charger plate. When mounting to drywall, you *must* use a toggle bolt or screw directly into a stud. Do not rely on standard adhesive hooks.
2. **Dusting:** The stark black background will show dust quickly. Dust weekly with a soft, dry microfiber towel.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1563810143891-b3b3bb6cb57f?w=800&q=80",
        alt: "Empress Peony Plate",
        color: "Black/Pink",
        desc: "Top view of the striking pink peonies against the jet-black background.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Flower Detail",
        color: "Pink/White",
        desc: "Macro shot detailing the thick, almost 3D brushstrokes of the flower petals.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Rim Detail",
        color: "Black",
        desc: "Edge profile showing the smooth, rolled black rim of the heavy charger.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Dining Centerpiece",
        color: "Moody",
        desc: "Displayed as the dramatic centerpiece on a dark mahogany dining table.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Mounting Hardware",
        color: "Steel",
        desc: "Close-up of the heavy-duty reinforced steel wall mount adhered to the back.",
      },
    ],
  },
  {
    id: "vpp-006",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "classic-greek-key",
    title: "Classic Greek Key",
    description:
      "Minimalist vintage design featuring the iconic geometric Greek key pattern along the rim.",
    price: 60,
    discountedPrice: 45,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1599395293235-90d2358897c8?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Fine Bone China.
- **Dimensions:** 9" Diameter (23cm).
- **Design:** Continuous geometric meander (Greek Key) motif in matte black.
- **Included:** Invisible adhesive plate hanger.

### The Meander Motif
The Greek Key, or "Meander," is one of the most important symbols in Ancient Greece, symbolizing infinity and the eternal flow of things. This plate strips away chaotic florals for a perfectly clean, minimalist aesthetic, making it an incredibly versatile decor piece that bridges the gap between historical and highly modern interiors.

### Care Guidelines
1. **Handling the Hanger:** The included invisible adhesive hanger must be moistened and left to set on the back of the plate for 24 hours before hanging. Follow the included instructions carefully.
2. **Cleaning:** Wash with warm soapy water if needed. The matte black rim pattern is highly durable but should not be scrubbed with steel wool.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1599395293235-90d2358897c8?w=800&q=80",
        alt: "Greek Key Plate",
        color: "White/Black",
        desc: "Direct view of the minimalist white plate with the black geometric rim.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Rim Macro",
        color: "Black",
        desc: "Extreme close-up of the crisp, matte black Greek Key meander pattern.",
      },
      {
        url: "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
        alt: "Porcelain Shine",
        color: "White",
        desc: "Angled shot highlighting the pristine, glossy white center of the bone china.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Living",
        color: "Monochrome",
        desc: "Hung symmetrically in a modern, black-and-white themed hallway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Adhesive Hanger",
        color: "Yellow/Cloth",
        desc: "View of the back showing the traditional cloth-and-glue invisible hanger system.",
      },
    ],
  },
  {
    id: "vpp-007",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "regal-pheasant",
    title: "Regal Pheasant",
    description:
      "An intricately detailed illustration of a golden pheasant surrounded by autumn foliage.",
    price: 150,
    discountedPrice: 120,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1577903823793-11bbac5dcc83?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Glazed Fine Earthenware.
- **Dimensions:** 11" Diameter (28cm).
- **Design:** Multi-color lithograph transfer with hand-painted gold accents.
- **Included:** Brass spring-loaded wall hanger.

### The Country Estate Aesthetic
Evoking the grandeur of English country manors, this plate features a stunning, highly detailed golden pheasant taking flight amidst deep auburn and ochre autumn leaves. The intricate feathers are highlighted with delicate, hand-applied gold tracing that shimmers beautifully when hit by warm lighting.

### Proper Care
1. **Gold Tracing Care:** The gold accents are delicate. Do not use chemical sprays or abrasive cloths. Dust only with a soft feather brush.
2. **Mounting Safety:** Earthenware is heavier than bone china. Ensure the provided brass wall hanger is tightly gripping the rim before hanging on a sturdy wall hook.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1577903823793-11bbac5dcc83?w=800&q=80",
        alt: "Pheasant Plate",
        color: "Ochre/Gold",
        desc: "Top view of the regal golden pheasant and autumn foliage.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gold Tracing",
        color: "Gold",
        desc: "Macro shot of the hand-applied gold accents on the bird's feathers.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Earthenware Edge",
        color: "Cream",
        desc: "Side profile showing the slightly thicker edge characteristic of fine earthenware.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Library Setting",
        color: "Warm Wood",
        desc: "Displayed on a dark wood bookshelf inside a traditional study.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Hardware",
        color: "Brass",
        desc: "Close-up of the brass spring wires gripping the rim securely.",
      },
    ],
  },
  {
    id: "vpp-008",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "heritage-monogram",
    title: "Heritage Monogram",
    description:
      "A vintage-inspired plate featuring classic typography and subtle scrolling vine accents.",
    price: 85,
    discountedPrice: 68,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1597813295982-588147d3cba0?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Fine Porcelain.
- **Dimensions:** 10" Diameter (25.4cm).
- **Design:** Sepia-toned typography and botanical scrollwork.
- **Personalization:** Blank central shield design (ready for custom engraving or display as-is).
- **Included:** Clear acrylic table stand.

### Historical Letterpress Design
Modeled after 19th-century letterpress bookplates, the "Heritage Monogram" uses a warm, faded sepia tone to create an instantly antique feel. The perimeter is wrapped in intricate scrolling vines, while the center features an ornate shield. While beautiful on its own, it serves as the perfect canvas if you wish to have it professionally engraved locally.

### Care & Usage Cautions
1. **Cleaning:** Dust gently. If washing, use only lukewarm water. Hot water may affect the vintage sepia finish.
2. **Display:** The sepia tones can fade if exposed to direct, prolonged UV sunlight. Display on an interior wall or shaded cabinet using the included acrylic stand.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1597813295982-588147d3cba0?w=800&q=80",
        alt: "Monogram Plate",
        color: "Sepia/Cream",
        desc: "Full view of the intricate sepia scrollwork and central shield.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Vine Detail",
        color: "Sepia",
        desc: "Close-up of the vintage letterpress-style botanical vines.",
      },
      {
        url: "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
        alt: "Stand Display",
        color: "Clear",
        desc: "The plate resting securely on its clear acrylic table stand.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Entryway Scene",
        color: "Neutral",
        desc: "Styled elegantly on a marble entryway console table.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Gloss Glare",
        color: "Reflective",
        desc: "Angled shot demonstrating the smooth, highly protective clear glaze over the design.",
      },
    ],
  },
  {
    id: "vpp-009",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "ivory-lace-plate",
    title: "Ivory Lace Plate",
    description:
      "Stunning porcelain work featuring a pierced, lace-like edge and a subtle floral center.",
    price: 180,
    discountedPrice: 144,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1582210214693-3d077c5c2fc7?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Ultra-thin Reticulated Bone China.
- **Dimensions:** 8.5" Diameter (21.5cm).
- **Design:** Hand-pierced geometric lattice rim (reticulation) with a soft pastel floral decal center.
- **Included:** Velvet-lined presentation box.

### The Art of Reticulation
This is an example of masterful porcelain engineering. The "lace" edge is created by artisan potters who manually pierce (reticulate) the wet clay with tiny scalpels before firing. This painstaking process results in an incredibly delicate, semi-translucent lattice rim that looks identical to woven ivory lace.

### Extreme Fragility Warnings
1. **Highly Fragile:** The pierced rim is extremely delicate. Pick up the plate ONLY by supporting the solid center base. Never grab it by the lace edges.
2. **Mounting:** We strongly advise against using spring-loaded wire hangers, as the tension can snap the pierced porcelain. Display flat or on a deep groove wooden stand only.
3. **Cleaning:** Do not wipe the edges with a cloth, as threads will catch in the lattice. Use compressed air or a soft makeup brush to remove dust.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1582210214693-3d077c5c2fc7?w=800&q=80",
        alt: "Lace Plate",
        color: "Ivory/Pastel",
        desc: "Top down view showing the incredible hand-pierced lattice rim.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Pierced Detail",
        color: "Ivory",
        desc: "Extreme macro shot of the tiny, uniform holes cut into the porcelain rim.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Translucency",
        color: "White/Light",
        desc: "Held up to a window to demonstrate the stunning translucency of the fine bone china.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Display Cabinet",
        color: "Glass",
        desc: "Displayed safely inside a lit glass curio cabinet.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Velvet Box",
        color: "Black/Red",
        desc: "The plate nestled securely inside its velvet-lined presentation box.",
      },
    ],
  },
  {
    id: "vpp-010",
    category: "/c/art-plates/vintage-porcelain-plates",
    slug: "gilded-butterfly",
    title: "Gilded Butterfly",
    description:
      "A whimsical vintage design with delicate butterflies accented by 24k gold tracing.",
    price: 120,
    discountedPrice: 90,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1588691523326-809bf2167fc7?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Fine Bone China.
- **Dimensions:** 10" Diameter (25.4cm).
- **Design:** Polychrome butterflies with raised enamel and 24k gold gilding.
- **Included:** Brass spring-loaded wall hanger.

### Raised Enamel Whimsy
This piece captures the whimsical nature of high-Victorian porcelain. The colorful butterflies are not just painted; they are formed using raised enamel dots, giving their wings a slight, tactile bump. The artist then applied fine 24k gold tracing to the antennae and wing edges, making the butterflies catch the light vividly.

### Care Instructions
1. **Raised Enamel Care:** Because the enamel is raised above the glaze, it can be chipped off if struck. Handle the surface with extreme care.
2. **Gold Tarnishing:** Over many decades, the gold may naturally dull. Do not attempt to polish it with silver or brass cleaners, as it will strip the gold layer entirely.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1588691523326-809bf2167fc7?w=800&q=80",
        alt: "Butterfly Plate",
        color: "Multicolor/Gold",
        desc: "Full frontal view of the whimsical butterfly design.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Enamel Detail",
        color: "Blue/Gold",
        desc: "Macro shot from the side showing the physical bump of the raised enamel and gold.",
      },
      {
        url: "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
        alt: "Rim Details",
        color: "Gold/White",
        desc: "Close-up of the delicate gold banding lining the rim of the plate.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Nursery Wall",
        color: "Pastel",
        desc: "Hung as a delicate accent piece in a brightly lit, pastel nursery.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Hanger Setup",
        color: "Brass",
        desc: "View of the brass hanger safely attached to the sturdy plate back.",
      },
    ],
  },

  // ---> Ceramic Art Plates
  {
    id: "cap-001",
    category: "/c/art-plates/ceramic-art-plates",
    slug: "modern-splatter",
    title: "Modern Splatter Plate",
    description:
      "Hand-thrown ceramic plate with abstract black and gold paint splatters.",
    price: 55,
    discountedPrice: 44,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=800&q=80",
    body: `
### Product Specifications
- **Material:** High-fired stoneware ceramic.
- **Dimensions:** 11" Diameter (28cm).
- **Design:** Hand-flicked black slip and authentic gold luster splatter.
- **Edge:** Hand-thrown, intentionally slightly irregular, organic rim.

### The Abstract Expressionist Approach
Moving away from perfect factory molds, this plate embraces the organic aesthetic of modern studio pottery. Wheel-thrown by hand, it features slight wobbles and finger grooves. The decoration relies on spontaneous, Jackson Pollock-esque flicks of jet-black clay slip and genuine liquid gold luster, meaning no two plates in existence will ever be identical.

### Product Care
1. **Food Safety:** The clear glaze over the black slip is food safe, however, the gold luster is NOT microwave safe (it will spark and ruin the microwave). Hand-washing is strongly recommended.
2. **Durability:** High-fired stoneware is incredibly dense and chip-resistant, making this plate much sturdier than standard porcelain.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=800&q=80",
        alt: "Splatter Plate",
        color: "White/Black/Gold",
        desc: "Direct top view showing the spontaneous black and gold splatter pattern.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Rim Irregularity",
        color: "White",
        desc: "Side angle highlighting the organic, slightly uneven hand-thrown rim.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gold Splatter",
        color: "Gold",
        desc: "Extreme close up of a heavy drop of genuine gold luster reflecting light.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Kitchen",
        color: "Minimalist",
        desc: "Styled leaning against a matte black backsplash in a modern kitchen.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Unglazed Base",
        color: "Tan Clay",
        desc: "Bottom of the plate showing the raw, unglazed stoneware foot ring.",
      },
    ],
  },
  {
    id: "cap-002",
    category: "/c/art-plates/ceramic-art-plates",
    slug: "earth-tones-swirl",
    title: "Earth Tones Swirl",
    description:
      "Beautiful organic swirls of brown and cream clays mixed together.",
    price: 65,
    discountedPrice: 52,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1611078712170-c081827b5bd6?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Nerikomi blended stoneware clays (Dark Walnut and Cream).
- **Dimensions:** 10.5" Diameter (26.6cm).
- **Finish:** Satin-matte transparent glaze.
- **Included:** Clear acrylic standing easel.

### The Nerikomi Technique
The stunning marbleized effect on this plate is not painted on. It is created using the Japanese *Nerikomi* technique, where two entirely different colors of raw clay are layered, folded, and sliced before being formed. This means the swirling pattern penetrates completely through the plate and is visible on both the front and the back.

### Care Instructions
1. **Handling:** The satin-matte glaze provides a beautiful, soft feel, but it can show oil smudges from fingers. Handle by the extreme edges.
2. **Cleaning:** Wash with warm soapy water. Because the pattern is inherent to the clay body itself, there is zero risk of the design fading or washing away.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1611078712170-c081827b5bd6?w=800&q=80",
        alt: "Swirl Plate",
        color: "Brown/Cream",
        desc: "Top view of the mesmerizing, organic clay swirls.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Clay Blend",
        color: "Walnut",
        desc: "Macro shot proving the pattern is baked into the clay, not painted on the surface.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Satin Glaze",
        color: "Matte",
        desc: "Angled shot demonstrating the soft, low-reflection satin glaze finish.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Easel Display",
        color: "Clear/Wood",
        desc: "The plate showcased on a wooden console table using the acrylic easel.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Plate Back",
        color: "Brown/Cream",
        desc: "The back of the plate, showing the swirling pattern continuing through the piece.",
      },
    ],
  },
  {
    id: "cap-003",
    category: "/c/art-plates/ceramic-art-plates",
    slug: "matte-black-minimalist",
    title: "Matte Black Minimalist",
    description:
      "A sleek, textureless black ceramic plate for highly modern spaces.",
    price: 45,
    discountedPrice: 36,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1622396112999-52e6f4ba06bb?w=800&q=80",
    body: `
### Product Specifications
- **Material:** High-density Porcelain.
- **Dimensions:** 11.5" Diameter (29cm).
- **Finish:** Ultra-matte, light-absorbing black glaze.
- **Profile:** Completely flat base with a sharp, vertical 1-inch lip.

### Industrial Minimalism
Designed for the uncompromising modernist, this plate abandons the traditional curved bowl shape. It features a perfectly flat horizontal base and a sharp, 90-degree vertical lip. The ultra-matte black glaze absorbs ambient light, making it look almost like a void or a shadow resting on your table or shelf.

### Strict Care Cautions
1. **Scuffing:** Ultra-matte dark glazes are highly prone to showing cutlery marks (silver streaks from metal rubbing against the ceramic). Do not use sharp knives on this plate.
2. **Oil Marks:** The matte surface readily absorbs finger oils, leaving shiny smudges. Wash with a strong degreasing dish soap and dry immediately with a clean microfiber towel to restore the perfect matte look.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1622396112999-52e6f4ba06bb?w=800&q=80",
        alt: "Matte Black Plate",
        color: "Black",
        desc: "Top down view of the stark, light-absorbing black plate.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Vertical Lip",
        color: "Black",
        desc: "Side profile highlighting the sharp, 90-degree vertical edge.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Matte Texture",
        color: "Black",
        desc: "Extreme close-up showing the completely textureless, non-reflective surface.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Minimalist Kitchen",
        color: "Industrial",
        desc: "Stacked elegantly in a brutalist concrete and steel kitchen.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Flat Base",
        color: "Black",
        desc: "Underside of the plate demonstrating the perfectly flat footprint.",
      },
    ],
  },
  {
    id: "cap-004",
    category: "/c/art-plates/ceramic-art-plates",
    slug: "reactive-blue-glaze",
    title: "Reactive Blue Glaze",
    description:
      "Kiln-fired plate featuring an unpredictable, stunning cosmic blue glaze.",
    price: 75,
    discountedPrice: 60,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1574510008518-e3621fc42247?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Hand-thrown Stoneware.
- **Dimensions:** 10" Diameter (25.4cm).
- **Glaze:** Cobalt and Rutile reactive crystal glaze.
- **Finish:** High-gloss, glass-like pool in the center.

### The Chemistry of the Kiln
This plate is a testament to ceramic alchemy. The glaze is formulated with cobalt and titanium rutile. When fired to 1220°C, the glaze melts into a liquid glass pool, and as it cools, spectacular, unpredictable blue and gold crystals actually grow within the glass. **Because this is a chemical reaction, the pattern on your plate will be 100% unique and vary significantly from the photo.**

### Care & Usage Cautions
1. **Acidic Foods:** While generally food-safe, do not leave highly acidic foods (like cut lemons or heavy tomato sauce) sitting on reactive glazes for long periods, as it can slowly dull the crystalline shine.
2. **Thermal Shock:** Never take this plate from a cold refrigerator and run it under hot water. The thick glass pool in the center can crack from sudden temperature changes.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1574510008518-e3621fc42247?w=800&q=80",
        alt: "Blue Glaze Plate",
        color: "Cosmic Blue",
        desc: "Top view of the deep blue, galaxy-like reactive glaze pool.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Crystal Growth",
        color: "Blue/Gold",
        desc: "Macro shot detailing the tiny, snowflake-like crystals grown inside the glaze.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Glaze Drips",
        color: "Dark Blue",
        desc: "Side angle showing thick, beautiful glaze drips frozen near the rim.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Table Setting",
        color: "Moody",
        desc: "Displayed as an accent piece in a dark, atmospheric dining room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Unglazed Base",
        color: "Tan Stoneware",
        desc: "The raw, toasted stoneware base providing contrast to the glossy blue top.",
      },
    ],
  },
  {
    id: "cap-005",
    category: "/c/art-plates/ceramic-art-plates",
    slug: "carved-mandala-ceramic",
    title: "Carved Mandala Ceramic",
    description:
      "Thick ceramic plate with a deep, hand-carved mandala pattern.",
    price: 90,
    discountedPrice: 72,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1602521946028-dfb729fb3e06?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Heavy grogged clay body.
- **Dimensions:** 12" Diameter (30.5cm) - Thick profile.
- **Design:** Sgraffito carving (deeply incised lines).
- **Glaze:** Translucent celadon green glaze over white slip.

### The Art of Sgraffito
This substantial, weighty plate uses the ancient Italian *Sgraffito* (to scratch) technique. The raw brown clay is painted with a thick layer of white liquid clay (slip). The artist then carves an intricate, mesmerizing mandala pattern directly through the white slip to reveal the dark clay underneath. A translucent green glaze pools in the carvings, creating stunning depth.

### Care & Mounting Advice
1. **Weight:** This is an exceptionally heavy piece of ceramics (over 4 lbs). Do not use a wire hanger. This plate must be displayed either flat on a table or secured in a heavy-duty wrought iron tabletop stand.
2. **Dust in Carvings:** The deep carved lines will accumulate dust. Clean by running it under a warm tap and gently using a soft-bristled dish brush. Dry thoroughly.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1602521946028-dfb729fb3e06?w=800&q=80",
        alt: "Mandala Plate",
        color: "Celadon Green",
        desc: "Full frontal view of the deeply carved, intricate mandala pattern.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Sgraffito Detail",
        color: "Green/Brown",
        desc: "Macro shot showing the dark clay revealed inside the deep carved grooves.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Glaze Pooling",
        color: "Light Green",
        desc: "Angled view showing the translucent green glaze pooling thicker in the recesses.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Coffee Table",
        color: "Boho",
        desc: "Resting flat as a central decor piece on a large wooden coffee table.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Thick Profile",
        color: "Ceramic",
        desc: "Side shot showing the unusually thick, heavy-duty profile of the grogged clay.",
      },
    ],
  },

  // ---> Hand-Painted Glass Plates
  {
    id: "hgp-001",
    category: "/c/art-plates/glass-painted-plates",
    slug: "stained-glass-sun",
    title: "Stained Glass Sun",
    description:
      "Transparent plate painted to mimic traditional cathedral stained glass.",
    price: 40,
    discountedPrice: 32,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 4mm thick tempered clear glass.
- **Dimensions:** 10" Diameter (25.4cm).
- **Design:** Reverse-painted translucent enamel and simulated lead lining.
- **Included:** Clear acrylic window-sill stand.

### The Stained Glass Illusion
To achieve the luminous effect of a cathedral window without the fragility of leaded glass, the artist utilizes a "reverse painting" technique. The thick, black outlines are piped onto the back of the glass plate, followed by layers of highly translucent, vibrant liquid enamels. When placed near a light source, the plate catches and projects stunning colorful shadows.

### Care & Display Cautions
1. **Light Positioning:** This piece is designed to be backlit. Display it on a windowsill or in front of a lamp using the included acrylic stand for the full stained-glass effect.
2. **Reverse Painting Fragility:** Because the paint is entirely on the back of the plate, **do not scratch or scrape the rear surface**.
3. **Cleaning:** Clean the smooth front glass surface freely with standard glass cleaner. For the painted back, use only a dry, soft microfiber cloth to gently remove dust.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
        alt: "Sun Plate",
        color: "Yellow/Orange",
        desc: "Frontal view showing the radiant stained-glass sun motif.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Enamel Detail",
        color: "Translucent Orange",
        desc: "Macro shot detailing the translucent enamel pools and simulated black lead lines.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Light Projection",
        color: "Multicolor",
        desc: "Angled view showing the colored shadows projecting onto a white surface.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Window Display",
        color: "Bright",
        desc: "Displayed on a sunlit windowsill using the acrylic stand.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Painted Back",
        color: "Matte",
        desc: "View of the back of the plate showing the raw, matte enamel layers.",
      },
    ],
  },
  {
    id: "hgp-002",
    category: "/c/art-plates/glass-painted-plates",
    slug: "peacock-feather-glass",
    title: "Peacock Feather Glass",
    description:
      "Iridescent paints create a glowing peacock feather effect on clear glass.",
    price: 50,
    discountedPrice: 40,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1518833989345-77bba96b6534?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 5mm convex glass plate.
- **Dimensions:** 11.5" Diameter (29cm).
- **Design:** Iridescent and metallic interference paints.
- **Included:** Black metal plate stand.

### Shifting Colors
The magic of this plate lies in the use of interference acrylics. A large, sweeping peacock feather is painted using specialized metallic pigments that reflect light differently depending on your viewing angle. As you walk past the plate, the eye of the feather shifts dynamically between emerald green, deep cyan, and striking violet.

### Care Instructions
1. **Handling:** Handle exclusively by the edges to avoid leaving oily fingerprints on the smooth glass front, which will dull the iridescent effect.
2. **Backing Care:** The metallic paint is exposed on the reverse side. Do not let it rub against rough surfaces like stone walls or brick.
3. **Cleaning:** Spray glass cleaner onto a soft cloth—never directly onto the plate—to avoid liquid seeping to the back edges.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1518833989345-77bba96b6534?w=800&q=80",
        alt: "Peacock Glass",
        color: "Emerald/Cyan",
        desc: "Direct view of the iridescent peacock feather.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Iridescence Shift",
        color: "Violet",
        desc: "Angled shot demonstrating the color shift to deep violet.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Glass Edge",
        color: "Clear",
        desc: "Side profile showing the thickness and subtle convex curve of the glass.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Console Display",
        color: "Moody",
        desc: "Displayed under a warm spotlight on a dark wooden console.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Metal Stand",
        color: "Black",
        desc: "Close-up of the plate resting securely in the black metal display stand.",
      },
    ],
  },
  {
    id: "hgp-003",
    category: "/c/art-plates/glass-painted-plates",
    slug: "frosted-winter-pine",
    title: "Frosted Winter Pine",
    description:
      "Hand-painted pine branches over a chemically frosted glass background.",
    price: 45,
    discountedPrice: 36,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1453306458000-2f7bc63f0533?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Chemically acid-etched (frosted) glass.
- **Dimensions:** 9" Diameter (23cm).
- **Design:** Hand-painted opaque white and silver pine branches.
- **Included:** Pre-attached invisible adhesive wall hanger.

### The Frosted Canvas
Rather than using a clear glass base, the artist first treated the entire plate with a specialized acid-etching cream. This permanently turns the glass into a soft, velvety, translucent "frost." Opaque white and metallic silver paints are then applied to the front surface, creating a delicate, snowy pine branch that feels incredibly wintry and tactile.

### Care Guidelines
1. **Frosted Glass Maintenance:** The frosted (matte) side of the glass absorbs oils easily. If touched with bare hands, it may temporarily look like a smudge. Wash with warm water and degreasing soap to restore the perfect velvet frost.
2. **Paint Care:** The white and silver paint is raised on the front surface. Do not scrub these painted areas with abrasive sponges.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1453306458000-2f7bc63f0533?w=800&q=80",
        alt: "Frosted Pine",
        color: "White/Silver",
        desc: "Front view of the frosted plate with delicate pine branches.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Etched Texture",
        color: "Frost",
        desc: "Extreme close-up showing the velvety, acid-etched texture of the glass base.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Painted Needles",
        color: "Silver",
        desc: "Macro detail of the raised silver and white paint forming the pine needles.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Holiday Decor",
        color: "Cool Neutral",
        desc: "Hung on a wall as part of an elegant, minimalist winter holiday display.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Translucency",
        color: "Soft Light",
        desc: "Held up to the light to show how the frost diffuses incoming illumination.",
      },
    ],
  },
  {
    id: "hgp-004",
    category: "/c/art-plates/glass-painted-plates",
    slug: "gold-leaf-abstract",
    title: "Gold Leaf Abstract",
    description:
      "Real gold leaf suspended within layers of reverse-painted glass.",
    price: 85,
    discountedPrice: 68,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Ultra-clear low-iron glass (no green tint).
- **Dimensions:** 12" Diameter (30.5cm) - Large profile.
- **Design:** Authentic 24k gold leaf, black enamel, and protective resin backing.
- **Included:** Heavy-duty black wooden display easel.

### Suspended in Glass
This piece utilizes ultra-clear, low-iron glass to ensure perfectly true colors. The artist applies authentic 24k gold leaf flakes to the back of the glass, followed by dramatic sweeps of jet-black enamel. The entire back is then sealed with a thin layer of protective epoxy resin, making it appear as if the pure gold is magically suspended inside the glass itself.

### Ultimate Protection
1. **Resin Sealed:** Unlike our other glass plates, the delicate paint and gold leaf on the back of this plate are permanently sealed inside a hard resin casing. This makes the back much more resistant to scratches.
2. **Polishing:** The front low-iron glass can be polished vigorously with any commercial glass cleaner to maintain a stunning, mirror-like finish.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?w=800&q=80",
        alt: "Gold Leaf Glass",
        color: "Black/Gold",
        desc: "Top view of the striking black enamel and suspended gold leaf.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gold Detail",
        color: "Gold",
        desc: "Macro shot of the crumpled, authentic 24k gold leaf pressing against the glass.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Low Iron Glass Edge",
        color: "Clear",
        desc: "Edge profile proving the lack of the typical 'green tint' found in standard glass.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Easel Display",
        color: "Dark Wood",
        desc: "The heavy plate resting in its dark wooden display easel on a mantelpiece.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Resin Backing",
        color: "Black Resin",
        desc: "View of the smooth, protective black epoxy resin sealing the back of the plate.",
      },
    ],
  },
  {
    id: "hgp-005",
    category: "/c/art-plates/glass-painted-plates",
    slug: "moroccan-lantern-pattern",
    title: "Moroccan Lantern Pattern",
    description:
      "Intricate, brightly colored geometric patterns inspired by Moroccan lights.",
    price: 60,
    discountedPrice: 48,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1548625361-ec853c078bfa?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 4mm thick clear glass.
- **Dimensions:** 10.5" Diameter (26.6cm).
- **Design:** Complex arabesque geometric patterns in turquoise, ruby, and amber.
- **Included:** Adhesive wall disc hanger.

### Geometric Brilliance
Inspired by the mesmerizing colored glass of traditional Moroccan lanterns, this plate features an incredibly complex, symmetrical arabesque pattern. It takes an artisan over four hours to pipe the delicate metallic gold outlining before hand-filling each geometric cavity with highly saturated, jewel-toned glass paints.

### Care Instructions
1. **Light is Key:** This plate is a kaleidoscope of color. To truly appreciate it, hang it on a brightly lit, stark white wall to allow the colors to pop, or display it on a stand near a window.
2. **Textured Front:** The gold outlining is raised on the front of the glass. Do not wipe heavily with fibrous cloths; use a soft makeup brush or gentle duster to clean.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1548625361-ec853c078bfa?w=800&q=80",
        alt: "Moroccan Pattern",
        color: "Multicolor",
        desc: "Direct view of the complex, jewel-toned geometric arabesque pattern.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Raised Gold",
        color: "Gold/Ruby",
        desc: "Close-up showing the raised metallic gold piping separating the enamel colors.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Color Saturation",
        color: "Turquoise/Amber",
        desc: "Angled view highlighting the deep saturation of the glass paints.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Boho Display",
        color: "Warm",
        desc: "Hung in a vibrant, bohemian-styled living space alongside tapestries.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Adhesive Disc",
        color: "White",
        desc: "Back of the plate showing the secure adhesive mounting disc.",
      },
    ],
  },

  // ---> Metal Embossed Plates
  {
    id: "mep-001",
    category: "/c/art-plates/metal-embossed-plates",
    slug: "hammered-copper-sun",
    title: "Hammered Copper Sun",
    description: "Hand-hammered copper plate with a central rising sun motif.",
    price: 110,
    discountedPrice: 88,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 100% Solid Heavy-Gauge Copper.
- **Dimensions:** 14" Diameter (35.5cm) - Large.
- **Technique:** Repoussé (embossed from the back) and hand-hammered peening.
- **Included:** Integrated welded copper hanging loop.

### The Artisan Hammer
This impressive 14-inch plate is a testament to the ancient art of coppersmithing. Starting with a flat sheet of heavy-gauge copper, the artisan uses the *repoussé* technique to push the central sun motif outward from the back. The front is then meticulously hand-peened with thousands of tiny hammer strikes, creating a textured surface that scatters warm, fiery light in all directions.

### Care & Copper Patina
1. **The Living Metal:** Copper is a "living" metal. It arrives highly polished but will naturally oxidize and darken into a rich, penny-brown patina over time due to oxygen and humidity.
2. **Maintenance Options:**
   - *To keep it bright:* Polish every few months with a commercial copper cream or a simple paste of lemon juice and salt.
   - *To let it age:* Do nothing. Let the natural patina develop for a deeply historic, rustic look.
3. **Weight Warning:** This is solid copper and quite heavy. Mount using a heavy-duty drywall anchor.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
        alt: "Copper Sun",
        color: "Polished Copper",
        desc: "Front view of the glowing, hammered copper plate.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Hammer Marks",
        color: "Copper",
        desc: "Extreme close-up showing the thousands of individual, faceted hammer strikes.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Repoussé Detail",
        color: "Copper",
        desc: "Angled shot highlighting the raised, 3D sun rays formed by pushing the metal.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Fireplace Mount",
        color: "Warm",
        desc: "Mounted dramatically above a stone fireplace mantel.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Welded Loop",
        color: "Dark Copper",
        desc: "The back of the plate, showing the heavy-duty welded hanging loop.",
      },
    ],
  },
  {
    id: "mep-002",
    category: "/c/art-plates/metal-embossed-plates",
    slug: "oxidized-brass-floral",
    title: "Oxidized Brass Floral",
    description:
      "Vintage brass with chemically induced green patina highlighting the floral embossing.",
    price: 130,
    discountedPrice: 104,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1590059345025-072818985c45?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Solid Brass.
- **Dimensions:** 11" Diameter (28cm).
- **Design:** Deep acid-etched floral scrollwork with forced verdigris (green) patina.
- **Included:** Integrated hanging bracket.

### The Beauty of Verdigris
This plate looks as though it was pulled from a 19th-century shipwreck. The solid brass is deeply acid-etched to create the floral pattern. The artisan then applies a specialized chemical wash to force rapid oxidization, turning the recessed areas into a vivid, chalky blue-green patina (verdigris). The high points are then buffed back to raw brass to create striking contrast.

### Strict Care Warnings
1. **Do NOT Polish:** You must *never* use brass polish on this plate. Commercial polishes will strip away the beautiful green verdigris patina and ruin the artwork instantly.
2. **Dusting Only:** To clean, simply use a soft, dry feather duster. Do not use water or wet cloths, as moisture can alter the chemical patina further.
3. **Handling:** Handle by the edges. Heavy oils from your fingers can darken the buffed brass highlights.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1590059345025-072818985c45?w=800&q=80",
        alt: "Brass Floral",
        color: "Brass/Green",
        desc: "Top view of the etched brass plate and vivid green patina.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Verdigris Patina",
        color: "Verdigris Green",
        desc: "Macro detail of the chalky green oxidation nestled inside the floral grooves.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Buffed Highlights",
        color: "Gold/Brass",
        desc: "Close-up showing the contrast between the green recesses and the polished brass high points.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Antique Display",
        color: "Moody",
        desc: "Styled in a moody, antique-filled study room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Bracket",
        color: "Brass",
        desc: "View of the rear integrated hanging bracket.",
      },
    ],
  },
  {
    id: "mep-003",
    category: "/c/art-plates/metal-embossed-plates",
    slug: "silver-celtic-knot",
    title: "Silver Celtic Knot",
    description:
      "Polished silver-plated disc featuring an endless, embossed Celtic knot.",
    price: 95,
    discountedPrice: 76,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Nickel alloy base with heavy .925 Silver Plating.
- **Dimensions:** 10" Diameter (25.4cm).
- **Design:** Seamless, raised triple-strand Celtic knot geometry.
- **Included:** Black velvet presentation box and acrylic display easel.

### The Endless Knot
Symbolizing eternity and the interconnectedness of life, the central Celtic knot on this plate is embossed with mathematical precision. The heavy silver plating gives the piece an incredibly luxurious, mirror-like finish that catches and bends light across the raised geometric strands.

### Tarnish & Care
1. **Tarnishing:** Like all real silver, this plate will tarnish (turn dark/yellowish) over time when exposed to sulfur compounds in the air.
2. **Polishing:** To maintain the brilliant mirror finish, gently wipe the plate once a month with a specialized jewelry polishing cloth. Do not use abrasive silver dips or harsh liquid chemicals, as they can wear down the plating over the years.
3. **Display:** When not on display, store it in the included velvet box to prevent air exposure and tarnishing.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
        alt: "Silver Knot",
        color: "Silver",
        desc: "Full frontal view of the highly polished silver Celtic knot.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Embossed Geometry",
        color: "Mirror Silver",
        desc: "Macro shot detailing the flawlessly raised, interwoven geometric strands.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Reflectivity",
        color: "Silver",
        desc: "Angled view proving the incredibly high, mirror-like reflectivity of the plating.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Easel Setup",
        color: "Clear/Silver",
        desc: "The plate resting cleanly on its acrylic easel on a glass table.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Velvet Box",
        color: "Black",
        desc: "The silver plate glowing against the dark black velvet of its presentation box.",
      },
    ],
  },
  {
    id: "mep-004",
    category: "/c/art-plates/metal-embossed-plates",
    slug: "industrial-gear-plate",
    title: "Industrial Gear Plate",
    description:
      "Steampunk-inspired heavy iron plate with embossed interlocking gears.",
    price: 80,
    discountedPrice: 64,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1533038590840-1c798b30d32f?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Cast Iron.
- **Dimensions:** 12" Diameter (30.5cm) - Extremely Heavy.
- **Design:** Deeply cast interlocking steampunk cogs and gears.
- **Finish:** Forged matte black with a rust-preventative clear coat.
- **Included:** Industrial bolt-style wall hanger.

### Brutalist Steampunk
This is a raw, unyielding piece of industrial art. Forged from actual cast iron, it features a deeply recessed mold of interlocking clockwork gears. It is not delicate; it is heavy, cold to the touch, and designed to look like a component ripped straight from a Victorian-era steam engine.

### Extreme Mounting Warning
1. **Massive Weight:** This plate weighs over 7 lbs (3.1 kg). **It cannot be hung on standard drywall hooks.** You must use the included heavy-duty lag bolt directly into a wooden wall stud.
2. **Rust Prevention:** Cast iron naturally rusts. While this piece has a clear matte sealant applied to it, you should avoid hanging it in humid environments (like patios or bathrooms) to prevent orange rust from forming.
3. **Cleaning:** Dust with a dry brush. If moisture ever touches it, dry it immediately with a towel.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1533038590840-1c798b30d32f?w=800&q=80",
        alt: "Iron Gears",
        color: "Matte Black/Grey",
        desc: "Top down view of the heavy, interlocking cast iron gears.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Cast Depth",
        color: "Dark Grey",
        desc: "Angled shot highlighting the deep, thick recesses of the cast iron mold.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Matte Finish",
        color: "Black",
        desc: "Close-up of the rough, unpolished matte black industrial finish.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Brick Wall Display",
        color: "Red Brick",
        desc: "Mounted securely on an exposed brick wall in a loft.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Bolt Hanger",
        color: "Steel",
        desc: "View of the heavy-duty industrial bolt hanger welded to the back.",
      },
    ],
  },
  {
    id: "mep-005",
    category: "/c/art-plates/metal-embossed-plates",
    slug: "mughal-empire-shield",
    title: "Mughal Empire Shield",
    description:
      "Detailed metalwork replicating historical shields from the Mughal era.",
    price: 160,
    discountedPrice: 128,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1580228399566-f4ce2b604325?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Brass and Steel alloy blend.
- **Dimensions:** 16" Diameter (40.6cm) - Very Large / Convex.
- **Design:** Deep hand-chiseling (Naqashi) featuring Indo-Persian floral arrays and four central brass bosses (domes).
- **Included:** Heavy chain link wall mount.

### Historical Weaponry Art
Modeled after the ceremonial Dhal (shields) carried by the warriors and royalty of the 17th-century Mughal Empire, this massive 16-inch plate is aggressively convex (domed). It features four raised brass bosses in the center, surrounded by incredibly intricate, hand-chiseled *Naqashi* scrollwork that takes an artisan nearly three days to carve.

### Care & Display
1. **Convex Profile:** Because the plate bows outward significantly like a shield, it protrudes from the wall by nearly 3 inches. Mount it in an area where people will not bump into it.
2. **Dusting the Naqashi:** The deep, sharp chiseled lines are a magnet for dust. Use a stiff, dry bristle brush to sweep dust out of the intricate scrollwork.
3. **Dual Metals:** The mix of brass and steel means it requires zero chemical polishing; simply wipe with a dry cloth.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1580228399566-f4ce2b604325?w=800&q=80",
        alt: "Mughal Shield",
        color: "Steel/Brass",
        desc: "Direct view of the massive, domed shield plate and four brass bosses.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Naqashi Carving",
        color: "Steel",
        desc: "Extreme macro shot of the incredibly intricate, hand-chiseled floral scrollwork.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Convex Dome",
        color: "Mixed Metals",
        desc: "Side profile proving the aggressive, 3-inch deep convex bowing of the shield.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Grand Hallway",
        color: "Traditional",
        desc: "Displayed as a major focal point in a grand, traditionally styled hallway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Chain Mount",
        color: "Dark Steel",
        desc: "The back of the shield showing the heavy-duty chain link mounting system.",
      },
    ],
  },

  // ---> Custom Portrait Plates
  {
    id: "cpp-001",
    category: "/c/art-plates/custom-portrait-plates",
    slug: "custom-family-silhouette",
    title: "Custom Family Silhouette",
    description:
      "Provide a photo and we will paint a black silhouette portrait onto porcelain.",
    price: 150,
    discountedPrice: 120,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 10" Fine White Porcelain.
- **Process:** Hand-painted opaque black enamel overglaze.
- **Requirements:** High-contrast profile (side-view) photo submitted upon order.
- **Included:** Black wooden display easel.

### A Modern Heirloom
A contemporary take on the classic Victorian cameo. Upon ordering, our studio will reach out to request a side-profile photograph of your family members (up to 4 subjects). Our artisans will then hand-paint a flawless, jet-black silhouette grouping onto a pristine white porcelain plate, creating a minimalist, deeply personal family heirloom.

### Custom Order Cautions & Care
1. **Lead Time:** Because this is a bespoke, hand-painted item, please allow **3 to 4 weeks** for production before shipping.
2. **No Returns:** Due to the highly personalized nature of silhouettes, we cannot accept returns or offer refunds once painting has begun.
3. **Cleaning:** The black enamel is fired on, making it permanent. However, wipe only with a soft microfiber cloth; avoid abrasive scrubbing pads.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
        alt: "Silhouette Sample",
        color: "Black/White",
        desc: "Example showing a crisp black family silhouette on the white porcelain plate.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Enamel Edge",
        color: "Black",
        desc: "Macro shot showing the incredibly sharp, hand-painted edges of the black enamel.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Porcelain Base",
        color: "White",
        desc: "Angled shot demonstrating the glossy, high-quality white porcelain base.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Mantel Display",
        color: "Minimalist",
        desc: "The silhouette plate displayed beautifully on a minimalist fireplace mantel.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Easel",
        color: "Black Wood",
        desc: "Close up of the included black wooden display easel holding the plate.",
      },
    ],
  },
  {
    id: "cpp-002",
    category: "/c/art-plates/custom-portrait-plates",
    slug: "pet-portrait-plate",
    title: "Pet Portrait Plate",
    description:
      "Hand-painted hyper-realistic portrait of your pet on a decorative plate.",
    price: 180,
    discountedPrice: 144,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 11" Glazed Earthenware Plate.
- **Process:** Underglaze ceramic painting (kiln fired).
- **Requirements:** Clear, well-lit, front-facing photo of your pet.
- **Included:** Invisible adhesive wall hanger.

### Immortalize Your Companion
This is our most labor-intensive custom product. Our master ceramicists use fine-tipped brushes and specialized ceramic pigments to paint a hyper-realistic portrait of your dog, cat, or bird directly onto the raw clay. The plate is then dipped in a clear glaze and fired at 1200°C. The result is a vibrant, permanent piece of art where your pet's portrait is safely locked *beneath* the glass-like glaze.

### Important Custom Information
1. **Production Time:** Due to the painting time and dual-firing kiln process, allow **4 to 6 weeks** for delivery.
2. **Photo Quality:** The realism of the painting depends entirely on the photo you provide. We will contact you if your submitted photo is too blurry to use.
3. **Forever Safe:** Because the painting is sealed under a kiln-fired glaze, this plate is actually food-safe, dishwasher-safe, and impossible to scratch or fade.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
        alt: "Dog Portrait",
        color: "Multicolor",
        desc: "Example of a hyper-realistic Beagle painted onto the ceramic plate.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Fur Detail",
        color: "Brown/White",
        desc: "Extreme macro shot showing the individual brushstrokes used to create fur texture.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Glaze Shine",
        color: "Reflective",
        desc: "Angled view proving the portrait is sealed securely beneath a high-gloss glaze.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Room Display",
        color: "Cozy",
        desc: "Hung affectionately next to the dog's actual bed in a living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Adhesive Hanger",
        color: "Yellow",
        desc: "The back of the plate showing the invisible adhesive hanger applied.",
      },
    ],
  },
  {
    id: "cpp-003",
    category: "/c/art-plates/custom-portrait-plates",
    slug: "wedding-anniversary-plate",
    title: "Wedding Anniversary Plate",
    description:
      "Custom painted couple's portrait with gold-leaf wedding dates.",
    price: 200,
    discountedPrice: 160,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 12" Fine Bone China Charger.
- **Process:** Monochrome watercolor-style painting with 24k gold hand-lettering.
- **Requirements:** A favorite wedding or couple's photo, plus names and the date.
- **Included:** Premium white presentation box and clear acrylic stand.

### The Ultimate Anniversary Gift
We take your favorite photograph of the couple and render it in a beautiful, dreamy, monochrome watercolor style directly onto the bone china. Below the portrait, our calligrapher hand-paints the couple's names and their wedding or anniversary date using brilliant 24k liquid gold luster.

### Care & Bespoke Policies
1. **Handling Gold:** The 24k gold lettering is fired onto the surface but can be scratched by hard objects. Clean only by wiping gently with a soft microfiber cloth.
2. **Review Process:** For this premium item, we will email you a digital sketch mock-up for your approval before we begin painting the final porcelain.
3. **Timeline:** Expect a **4 week** turnaround time. Please order well in advance of the anniversary date!
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        alt: "Wedding Plate",
        color: "Grey/Gold",
        desc: "Example plate showing a monochrome couple's portrait with gold lettering.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gold Calligraphy",
        color: "Gold",
        desc: "Macro shot detailing the shimmering 24k liquid gold luster typography.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Watercolor Effect",
        color: "Grey",
        desc: "Close-up showing the soft, dreamy watercolor-style brushwork on the porcelain.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Gift Presentation",
        color: "White",
        desc: "The plate showcased inside its premium white gifting box.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Stand Setup",
        color: "Clear",
        desc: "View of the plate resting on the clear acrylic table stand.",
      },
    ],
  },
  {
    id: "cpp-004",
    category: "/c/art-plates/custom-portrait-plates",
    slug: "vintage-cameo-style",
    title: "Vintage Cameo Style",
    description:
      "Your side-profile rendered in a classic, white-on-blue cameo style.",
    price: 140,
    discountedPrice: 112,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 9" Matte Jasperware (similar to Wedgwood).
- **Process:** Poured white clay relief (bas-relief) over a colored base.
- **Requirements:** Strict 90-degree side profile photo.
- **Included:** Spring-loaded wall hanger.

### Classical Antiquity
Inspired by 18th-century Neoclassical jasperware, this is a true sculptural piece. We do not paint your silhouette; instead, we sculpt your profile using liquid white clay (slip) and apply it to a matte, unglazed "Wedgwood blue" or sage green plate. The result is a physical, 3D bas-relief cameo that looks like it belongs in a museum.

### Specialized Jasperware Care
1. **Unglazed Surface:** Jasperware is matte and unglazed. This means it is highly porous and will absorb oils and stains instantly. **Wash your hands thoroughly before touching this plate.**
2. **Dusting:** Dust will settle on the raised white clay profile. Use a soft, dry toothbrush to gently scrub dust out of the detailed clay ridges. Do not use liquids.
3. **Turnaround:** Sculpting custom relief takes time. Allow **5 weeks** for production.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&q=80",
        alt: "Cameo Plate",
        color: "Pale Blue/White",
        desc: "Front view of the classic pale blue plate with the raised white cameo profile.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Bas-Relief Texture",
        color: "White",
        desc: "Extreme side angle showing the 3D depth of the poured white clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Matte Finish",
        color: "Blue",
        desc: "Close-up emphasizing the dry, unglazed, matte texture of the Jasperware base.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Victorian Decor",
        color: "Vintage",
        desc: "Hung among a collection of vintage frames in a Victorian-styled hallway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Spring Hanger",
        color: "Brass",
        desc: "View of the brass spring hanger attached to the unglazed back.",
      },
    ],
  },
  {
    id: "cpp-005",
    category: "/c/art-plates/custom-portrait-plates",
    slug: "pop-art-portrait",
    title: "Pop Art Portrait",
    description:
      "Andy Warhol-inspired bright, 4-color painted portrait on a square ceramic plate.",
    price: 165,
    discountedPrice: 132,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 10" x 10" Square Ceramic Plate.
- **Process:** Hand-painted opaque acrylic enamel, finished with high-gloss resin.
- **Requirements:** Any clear, front-facing portrait photo.
- **Included:** Modern black acrylic display stand.

### A Warhol in Your Living Room
If traditional portraits aren't your style, this Pop Art plate is the ultimate conversation starter. Send us your photo, and our artists will digitally posterize it before hand-painting the image using four intensely bright, contrasting colors (e.g., hot pink, neon yellow, cyan, and black). The square plate format mimics a vinyl record sleeve or a modern canvas.

### Care & Display Guidelines
1. **Resin Finish:** The front is coated in a high-gloss epoxy resin to make the neon colors pop. Dust only with a soft microfiber cloth to avoid scratching the resin.
2. **UV Light:** Fluorescent and highly saturated paints can fade if placed in direct sunlight. Display in a shaded area or a room with LED lighting.
3. **Timeline:** Allows **3 weeks** for digital posterization approval and final painting.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800&q=80",
        alt: "Pop Art Plate",
        color: "Neon Pink/Cyan",
        desc: "Direct view of the bright, 4-color square Pop Art portrait plate.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Resin Gloss",
        color: "Reflective",
        desc: "Angled shot highlighting the glass-like epoxy resin coating over the paint.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Square Edge",
        color: "Ceramic",
        desc: "Detail of the unique square ceramic corners and clean edges.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Studio Display",
        color: "Modern",
        desc: "Displayed boldly on a shelf in an eclectic, modern art studio.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Black Stand",
        color: "Black",
        desc: "The square plate resting securely in the modern black acrylic stand.",
      },
    ],
  },

  // ==========================================
  // 3. MUD WORK (/c/mud-work)
  // ==========================================

  // ---> Lippan Art (Mud & Mirror)
  {
    id: "lamw-001",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "surya-sun-motif-panel",
    title: "Surya (Sun) Motif Panel",
    description:
      "A radiant sunburst design crafted from natural clay and embedded with precision-cut mirrors.",
    price: 150,
    discountedPrice: 120,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1600854495574-12eb760775d7?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Sturdy 8mm MDF board backing to prevent warping.
- **Relief Material:** Traditional dough of camel dung, wild ass dung, and fine Kutch clay (treated to be completely odorless and sanitized).
- **Inlay:** Hand-cut geometric mirror pieces (Aabhla).
- **Dimensions:** 20" x 20" Circular Panel.
- **Finish:** Coated in traditional bright white clay (Chhapa).

### Craftsmanship
Lippan Kaam is the traditional mural craft of Kutch, Gujarat. This Surya (Sun) motif is meticulously pinched and shaped by hand without the use of molds. The embedded mirrors catch ambient light, historically used to illuminate the dark interiors of desert Bhunga huts with just a single oil lamp.

### Care & Usage Cautions
1. **Fragility:** The mud relief is delicate. Handle the panel strictly by the MDF edges. Do not press your fingers directly onto the clay ridges or mirrors.
2. **Moisture Warning:** Keep away from high-moisture areas (like bathrooms). The natural clay can absorb severe moisture and soften.
3. **Cleaning:** Dust very gently with a dry, soft feather duster. Never use wet cloths or liquid glass cleaners on the mirrors, as liquid will seep into the clay matrix.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600854495574-12eb760775d7?w=800&q=80",
        alt: "Front View",
        color: "White/Silver",
        desc: "Full view of the circular sun motif and mirror inlays.",
      },
      {
        url: "https://images.unsplash.com/photo-1600854496228-568eb2a297bd?w=800&q=80",
        alt: "Macro Texture",
        color: "White",
        desc: "Extreme macro shot showing the hand-pinched ridges of the clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Light Reflection",
        color: "Silver",
        desc: "Angled shot demonstrating how the mirrors catch and reflect light.",
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
        alt: "Lifestyle",
        color: "Neutral",
        desc: "The panel mounted above an entryway console table.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Back Mounting",
        color: "Brown",
        desc: "View of the MDF backing and the heavy-duty metal keyhole hanger.",
      },
    ],
  },
  {
    id: "lamw-002",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "geometric-diamond-array",
    title: "Geometric Diamond Array",
    description:
      "Modern meets traditional in this striking grid of mud-relief diamonds and reflective glass.",
    price: 200,
    discountedPrice: 160,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 10mm waterproof Marine Ply backing.
- **Relief Material:** Processed Kutch white clay.
- **Inlay:** Diamond-cut traditional mirrors.
- **Dimensions:** 24" x 36" (60cm x 90cm) Rectangular Panel.
- **Finish:** Matte white slip glaze.

### Contemporary Lippan
This piece takes the ancient Lippan technique and applies it to a highly contemporary, minimalist geometric grid. The repetitive diamond array creates a mesmerizing optical effect as the viewer walks past the artwork, with each mirror catching the light at slightly different angles. It bridges the gap between ethnic craft and modern interior design.

### Care Guidelines
1. **Handling Weight:** Due to the thick marine ply and heavy clay, this piece weighs nearly 12 lbs. It must be hung using heavy-duty drywall anchors.
2. **Dusting:** The sharp geometric ridges will collect dust faster than rounded traditional motifs. Clean weekly with a very soft-bristled brush.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=800&q=80",
        alt: "Diamond Array",
        color: "White",
        desc: "Full frontal view of the highly symmetrical diamond mud grid.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Mirror Inlay",
        color: "Silver",
        desc: "Macro shot detailing the diamond-shaped mirrors pressed into the wet clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Matte Finish",
        color: "Matte White",
        desc: "Angled view showing the stark, matte white finish of the clay slip.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Living",
        color: "Monochrome",
        desc: "Displayed prominently in a sleek, black-and-white minimalist apartment.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Marine Ply Edge",
        color: "Wood",
        desc: "Side profile revealing the durable, 10mm thick marine ply backing.",
      },
    ],
  },
  {
    id: "lamw-003",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "tree-of-life-mural",
    title: "Tree of Life Mural",
    description:
      "An intricate representation of the Tree of Life, symbolizing growth and grounding in traditional Kutch style.",
    price: 350,
    discountedPrice: 280,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1583339824000-642138e6e58b?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Oversized 12mm MDF board.
- **Relief Material:** Fine Kutch mud and natural binders.
- **Inlay:** Over 500 individually placed circular and teardrop mirrors.
- **Dimensions:** 36" x 36" (90cm x 90cm) Large Square.
- **Finish:** Authentic unpainted terracotta base with white clay highlights.

### The Artisan's Masterpiece
The Tree of Life is a universal symbol, but this interpretation is deeply rooted in Gujarati folklore. Taking a master artisan over a week to complete, the roots and branches intertwine in an incredibly complex raised relief. Rather than being painted completely white, the background retains its natural terracotta hue to create a striking two-tone contrast.

### Mounting & Maintenance
1. **Oversized Warning:** This is a very large, heavy mural. Use the three pre-installed metal D-rings on the back to distribute the weight across multiple wall studs.
2. **Mirror Maintenance:** With over 500 mirrors, do not attempt to clean them individually. Use compressed air (held at least 12 inches away) to safely blow dust out of the dense branching patterns.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1583339824000-642138e6e58b?w=800&q=80",
        alt: "Tree of Life",
        color: "Terracotta/White",
        desc: "Full view of the massive, two-tone Tree of Life mural.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Branch Detail",
        color: "White",
        desc: "Close-up showing the intricate, winding branches and hundreds of tiny mirrors.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Terracotta Base",
        color: "Earthy Red",
        desc: "Macro shot highlighting the contrast between the white relief and the raw terracotta board.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Dining Room Setup",
        color: "Warm",
        desc: "Hung as a massive statement piece behind a long wooden dining table.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "D-Ring Mounts",
        color: "Steel",
        desc: "View of the three heavy-duty D-rings secured to the back of the mural.",
      },
    ],
  },
  {
    id: "lamw-004",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "peacock-elegance",
    title: "Peacock Elegance",
    description:
      "A beautifully detailed mud work panel depicting a peacock, enhanced by teardrop mirrors.",
    price: 280,
    discountedPrice: 238,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1620242503258-29471d15c7e1?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 8mm MDF board.
- **Relief Material:** Traditional Kutch clay.
- **Inlay:** Teardrop (tear-shaped) and circular Aabhla mirrors.
- **Dimensions:** 24" x 24" (60cm x 60cm) Square.
- **Finish:** Solid bright white clay wash.

### Cultural Significance
The peacock is deeply embedded in Indian art and mythology, symbolizing grace, pride, and beauty. In this Lippan piece, the artisan uses specific teardrop-shaped mirrors to simulate the "eyes" of the peacock's sweeping tail feathers. The raised clay lines create a sweeping sense of motion across the square panel.

### Care Instructions
1. **Handling Fragile Edges:** The clay lines representing the feathers are highly raised and somewhat thin. They can chip if the panel is dropped or brushed against roughly.
2. **Moisture Damage:** The white clay wash is not sealed with waterproof varnish (to maintain its traditional matte look). Never allow liquids to splash onto the panel.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1620242503258-29471d15c7e1?w=800&q=80",
        alt: "Peacock Mud Work",
        color: "White",
        desc: "Frontal view of the elegant peacock and its sweeping mirror tail.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Teardrop Mirrors",
        color: "Silver",
        desc: "Close-up of the teardrop-shaped mirrors simulating the peacock's feathers.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Clay Relief",
        color: "White",
        desc: "Angled shot demonstrating the high relief of the clay outlines.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bedroom Decor",
        color: "Serene",
        desc: "Displayed above a bed in a serene, white-themed bedroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Panel Edge",
        color: "Brown",
        desc: "Side view showing the clean edge of the 8mm MDF board.",
      },
    ],
  },
  {
    id: "lamw-005",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "traditional-mandala",
    title: "Traditional Mandala",
    description:
      "A symmetrical, meditative mandala pattern crafted perfectly for a spiritual or calming space.",
    price: 180,
    discountedPrice: 135,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1578301978693-85def21f4214?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 8mm circular MDF board.
- **Relief Material:** Camel dung and clay mixture.
- **Inlay:** Alternating circular and triangular mirrors.
- **Dimensions:** 18" x 18" Circular.
- **Finish:** Chalky white traditional finish.

### Meditative Symmetry
Mandalas are spiritual symbols representing the universe and inner peace. This Lippan art piece is created working outwards from a central mirror, requiring immense mathematical precision by the artisan to ensure the concentric rings of clay and mirrors remain perfectly symmetrical as they expand.

### Ideal Placement & Care
1. **Lighting:** This piece thrives in rooms with natural, moving sunlight. As the sun crosses the room, different rings of the mandala will flash and reflect the light.
2. **Dusting:** Use a soft makeup brush to gently sweep dust out of the tight concentric clay rings. Do not use a damp cloth.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1578301978693-85def21f4214?w=800&q=80",
        alt: "Mandala Lippan",
        color: "White/Silver",
        desc: "Full circular view of the highly symmetrical mandala pattern.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Center Mirror",
        color: "Silver",
        desc: "Macro shot focusing on the central mirror and the tightly packed inner rings.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Chalky Finish",
        color: "Matte White",
        desc: "Close-up highlighting the authentic, chalky texture of the traditional white wash.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Yoga Space",
        color: "Calm",
        desc: "Hung in a tranquil home yoga and meditation space.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Mounting Hook",
        color: "Steel",
        desc: "View of the single top-mounted steel hook on the back of the board.",
      },
    ],
  },
  {
    id: "lamw-006",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "desert-sands-panel",
    title: "Desert Sands Panel",
    description:
      "Left in its natural earthy hue, this unpainted mud work piece celebrates raw, organic textures.",
    price: 120,
    discountedPrice: 96,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 8mm MDF board.
- **Relief Material:** Raw, unpainted Kutch clay and local sand.
- **Inlay:** Antique-style oxidized mirrors.
- **Dimensions:** 16" x 24" (40cm x 60cm) Vertical.
- **Finish:** Raw, unsealed terracotta brown.

### The Raw Earth Aesthetic
While most Lippan art is painted white to reflect light, this piece intentionally skips the final step. It celebrates the raw, earthy brown hue of the actual desert sand and clay used to create it. The artisan also selected slightly oxidized, vintage-style mirrors rather than high-gloss ones, ensuring the entire piece feels incredibly grounded and organic.

### Care Instructions
1. **Unsealed Clay:** Because it lacks the white sealing wash, the raw clay is more susceptible to crumbling if struck. Handle with extreme delicacy.
2. **Moisture:** Absolutely no water should come near this piece. It will turn back into mud if saturated.
3. **Display:** Ideal for bohemian, desert-modern, or rustic interiors where natural earth tones are dominant.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
        alt: "Desert Sands Panel",
        color: "Brown",
        desc: "Vertical view of the raw, earthy brown mud panel.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Raw Clay Texture",
        color: "Terracotta",
        desc: "Macro shot showing the gritty sand texture within the raw clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Oxidized Mirror",
        color: "Dull Silver",
        desc: "Close-up of the vintage, slightly distressed mirror inlays.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Boho Styling",
        color: "Warm Earth",
        desc: "Styled in a desert-modern living room alongside cacti and leather.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Panel Backing",
        color: "Brown",
        desc: "Rear view showing the clean MDF backing and hanging wire.",
      },
    ],
  },
  {
    id: "lamw-007",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "camel-caravan",
    title: "Camel Caravan",
    description:
      "A narrative piece depicting a classic desert caravan, framed by traditional border motifs.",
    price: 220,
    discountedPrice: 176,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 10mm Marine Ply backing.
- **Relief Material:** Fine Kutch clay.
- **Inlay:** Micro-mirrors (highly detailed work).
- **Dimensions:** 30" x 15" (76cm x 38cm) Panoramic.
- **Finish:** Bright white traditional slip.

### Narrative Craftsmanship
Unlike geometric or floral designs, this is a narrative mural. It depicts a line of camels walking through the Rann of Kutch, bordered by intricate triangular motifs representing the desert dunes. The camels are adorned with tiny "micro-mirrors" to represent the elaborate, colorful textiles traditionally draped over them by local nomads.

### Care & Usage Cautions
1. **Micro-Mirrors:** The mirrors used on the camels are extremely small (less than 5mm). They are held securely by the clay, but rigorous dusting with a heavy cloth could dislodge them. Use only a soft blower.
2. **Mounting:** The wide, panoramic shape requires two wall hooks to remain level. Use a spirit level when installing your wall anchors.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        alt: "Camel Caravan",
        color: "White/Silver",
        desc: "Panoramic view of the narrative camel caravan design.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Micro-Mirror Detail",
        color: "Silver",
        desc: "Extreme close-up showing the tiny micro-mirrors decorating the camel figures.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Dune Border",
        color: "White",
        desc: "Detail of the triangular geometric border representing desert dunes.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Hallway Display",
        color: "Bright",
        desc: "Hung prominently in a long, sunlit residential hallway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Dual Mounts",
        color: "Steel",
        desc: "Back of the panel showing the two D-rings required for level hanging.",
      },
    ],
  },
  {
    id: "lamw-008",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "starburst-mirror-frame",
    title: "Starburst Mirror Frame",
    description:
      "A functional piece of art—a central mirror surrounded by intricate mud relief rays.",
    price: 160,
    discountedPrice: 128,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 10mm heavy MDF board.
- **Center:** 8" High-quality glass mirror.
- **Relief Material:** Traditional Kutch clay rays.
- **Dimensions:** 22" x 22" Circular overall.
- **Finish:** Solid white clay wash.

### Functional Folk Art
This piece serves a dual purpose. A high-quality, perfectly flat 8-inch mirror sits in the center, making it a functional vanity or entryway mirror. Exploding outward from the center are intricately pinched mud rays inlaid with smaller decorative mirrors, creating a stunning starburst effect that dominates the wall.

### Cleaning & Safety
1. **Cleaning the Center Mirror:** You can clean the large central mirror with standard glass cleaner. However, spray the cleaner *onto your cloth first*. If you spray the mirror directly, the liquid will run down into the clay border and ruin the mud work.
2. **Weight:** The central glass mirror adds significant weight. Ensure it is anchored properly into drywall or a stud.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=800&q=80",
        alt: "Starburst Frame",
        color: "White/Mirror",
        desc: "Front view of the functional central mirror and the mud relief rays.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Central Joint",
        color: "White/Glass",
        desc: "Close-up showing where the clay starburst meets the flat central glass mirror.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Ray Detail",
        color: "White/Silver",
        desc: "Macro shot of the intricate pinching technique used to form the starburst rays.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Vanity Use",
        color: "Bright",
        desc: "Styled as a functional mirror above an entryway console table.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Reinforced Back",
        color: "Brown",
        desc: "Back view showing the extra MDF bracing to support the heavy central mirror.",
      },
    ],
  },
  {
    id: "lamw-009",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "lotus-pond-mural",
    title: "Lotus Pond Mural",
    description:
      "Elegant lotus flowers rising from rippling clay water, dotted with circular mirror accents.",
    price: 250,
    discountedPrice: 200,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1584031649931-6c2e361fa385?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 10mm Marine Ply.
- **Relief Material:** Fine processed Kutch clay.
- **Inlay:** Circular and custom petal-shaped mirrors.
- **Dimensions:** 24" x 36" (60cm x 90cm) Vertical.
- **Finish:** Pure white matte slip.

### The Sacred Lotus
The Lotus represents purity and spiritual awakening. This massive vertical mural depicts several blooming lotus flowers rising from a stylized, geometric representation of rippling water. The artisan uses custom-cut, petal-shaped mirrors for the flowers, making the blooms shimmer vibrantly against the matte white clay water ripples.

### Care Instructions
1. **Delicate Petals:** The clay forming the tips of the lotus petals is pinched very thinly to create a delicate look. These tips are the most fragile part of the mural; avoid brushing against them.
2. **Dusting:** Use a clean, dry watercolor brush or a soft makeup brush to navigate the intricate curves of the flower petals during cleaning.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1584031649931-6c2e361fa385?w=800&q=80",
        alt: "Lotus Pond",
        color: "White/Silver",
        desc: "Full vertical view of the lotus flowers and rippling mud water.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Petal Mirrors",
        color: "Silver",
        desc: "Close-up showing the custom-cut, petal-shaped mirrors in the lotus blooms.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Water Ripples",
        color: "White",
        desc: "Detail of the geometric clay lines representing the rippling pond water.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Space",
        color: "Zen",
        desc: "Hung prominently in a calm, Zen-inspired living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Back Hook",
        color: "Steel",
        desc: "View of the heavy-duty vertical mounting hook on the back.",
      },
    ],
  },
  {
    id: "lamw-010",
    category: "/c/mud-work/lippan-art-mirror-work",
    slug: "intricate-border-tiles-set-of-3",
    title: "Intricate Border Tiles (Set of 3)",
    description:
      "A set of three matching vertical panels designed to frame doorways or larger wall spaces.",
    price: 300,
    discountedPrice: 240,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 8mm MDF board (Set of 3 distinct panels).
- **Relief Material:** Traditional Kutch clay.
- **Inlay:** Heavy use of diamond and circular Aabhla mirrors.
- **Dimensions:** Each panel is 8" x 36" (20cm x 90cm) Vertical.
- **Finish:** Bright white traditional wash.

### Architectural Enhancement
Lippan art is historically used as architectural framing inside homes. This set of three matching vertical tiles is specifically designed to be hung together with a 2-inch gap between them, or used individually to beautifully frame a doorway or an arch. The repetitive, dense geometric patterns create a sense of structural elegance.

### Hanging & Maintenance
1. **Alignment:** Because these are intended to be hung as a set, precision is key. Use a laser level and measure carefully before installing your wall hooks to ensure the geometric lines flow seamlessly from one panel to the next.
2. **Moisture:** As with all Lippan, the white wash is water-soluble. Do not hang these panels in an outdoor, unprotected patio or near a bathroom.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
        alt: "Tile Set",
        color: "White/Silver",
        desc: "View of all three tall, vertical panels hung together as a triptych.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Geometric Density",
        color: "White",
        desc: "Macro shot highlighting the incredibly dense, repetitive geometric clay work.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Mirror Alignment",
        color: "Silver",
        desc: "Angled view showing how the mirrors catch light evenly across the panels.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Doorway Frame",
        color: "Warm",
        desc: "Two of the panels used to frame a beautiful wooden archway in a home.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Individual Back",
        color: "Brown",
        desc: "Back of a single panel showing the top and bottom mounting hooks.",
      },
    ],
  },

  // ---> Terracotta Murals
  {
    id: "tm-001",
    category: "/c/mud-work/terracotta-murals",
    slug: "village-scene",
    title: "Village Scene Mural",
    description:
      "A large, unpainted terracotta slab depicting daily rural life in high relief.",
    price: 400,
    discountedPrice: 320,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1615410940561-eb83db08fdb7?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 100% Solid Kiln-Fired Terracotta Clay.
- **Dimensions:** 24" x 36" (60cm x 90cm) Horizontal.
- **Weight:** Extremely Heavy (Approx. 25 lbs / 11.3 kg).
- **Finish:** Raw, unglazed, natural fired red-earth.

### High-Relief Sculpture
This is not a painted canvas; it is a massive, heavy sculpture. The artisan starts with a thick slab of wet clay and subtracts material to carve a highly detailed, 3D relief of an Indian village scene—featuring women carrying water pots, children playing, and traditional huts. It is then slowly kiln-fired for over 48 hours to turn it into solid ceramic.

### Extreme Mounting Warnings
1. **Massive Weight:** This mural weighs 25 lbs. **It cannot be hung on standard picture hooks.** You must use the embedded heavy-duty steel anchors and drill directly into wall studs or concrete.
2. **Fragility of Relief:** While the fired clay is hard, the protruding 3D elements (like the arms of the figures) can snap off if the mural is dropped or bumped heavily.
3. **Cleaning:** The raw terracotta is porous. Do not use wet cloths. Vacuum with a brush attachment or use a dry paintbrush to clean dust out of the deep carvings.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1615410940561-eb83db08fdb7?w=800&q=80",
        alt: "Village Mural",
        color: "Terracotta Red",
        desc: "Full horizontal view of the massive, detailed terracotta village scene.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "3D Figures",
        color: "Red Earth",
        desc: "Extreme side angle showing how far the 3D figures protrude from the base slab.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Clay Texture",
        color: "Rustic Red",
        desc: "Macro detail of the raw, unglazed, porous fired clay texture.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Outdoor Patio",
        color: "Warm",
        desc: "Mounted securely on an outdoor covered patio brick wall.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Steel Anchors",
        color: "Steel/Clay",
        desc: "Back view showing the heavy steel mounting loops embedded directly into the fired clay.",
      },
    ],
  },
  {
    id: "tm-002",
    category: "/c/mud-work/terracotta-murals",
    slug: "dancing-figures",
    title: "Dancing Figures Mural",
    description: "Tribal dancers mid-motion captured perfectly in fired clay.",
    price: 350,
    discountedPrice: 280,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Fired Terracotta with dark oxide wash.
- **Dimensions:** 20" x 30" (50cm x 76cm) Vertical.
- **Finish:** Hand-rubbed black manganese oxide to highlight the deep carvings.
- **Mounting:** French cleat system included.

### Capturing Motion in Clay
Depicting a traditional tribal dance, the artisan focuses heavily on the fluid movement of the dancers' garments. After the clay is carved and fired, a liquid black oxide wash is applied and quickly rubbed off the high points. The black oxide remains trapped in the deep recesses, acting like permanent shadowing to dramatically highlight the 3D dancers.

### Care Instructions
1. **Oxide Staining:** The black oxide is fired on, but if you rub it vigorously with a wet, soapy cloth, you may dull the finish. Clean with dry dusting only.
2. **Mounting:** We provide a metal French cleat system for this heavy piece. Ensure the wall-side cleat is perfectly level and screwed into studs before lifting the mural onto it.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
        alt: "Dancing Figures",
        color: "Terracotta/Black",
        desc: "Vertical view of the energetic tribal dancers in relief.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Oxide Wash",
        color: "Black/Red",
        desc: "Close-up showing the dark black oxide settled in the deep carved grooves.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Garment Detail",
        color: "Red Earth",
        desc: "Macro shot of the fluid, carved clay representing the spinning garments.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Hallway Display",
        color: "Rustic",
        desc: "Hung in a well-lit hallway to emphasize the 3D shadows.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "French Cleat",
        color: "Steel",
        desc: "View of the secure French cleat mounting system attached to the back.",
      },
    ],
  },
  {
    id: "tm-003",
    category: "/c/mud-work/terracotta-murals",
    slug: "banyan-tree-relief",
    title: "Banyan Tree Relief",
    description:
      "Detailed rendering of a massive banyan tree, symbolizing eternal life.",
    price: 500,
    discountedPrice: 400,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Four individual square terracotta tiles (Quadriptych).
- **Dimensions:** 40" x 40" total (Each tile is 20" x 20").
- **Finish:** Raw, unglazed terracotta.
- **Weight:** Over 35 lbs (15.8 kg) total.

### The Monumental Quadriptych
To prevent cracking in the kiln, a mural of this massive size cannot be fired as one piece. The artisan carves the sprawling Banyan tree across four separate, massive clay tiles. When mounted together on your wall with a slight half-inch gap between them, they form a breathtaking, continuous 40-inch square relief of the eternal tree and its hanging roots.

### Professional Installation Required
1. **Hanging the Grid:** Because the branches must line up perfectly across the four tiles, **we highly recommend hiring a professional handyman** to install this piece. Measurements and leveling must be exact.
2. **Wall Strength:** The combined weight is immense. Do not hang this on thin plasterboard; solid concrete, brick, or direct-to-stud mounting is mandatory.
3. **Cleaning:** Vacuum with a soft brush attachment.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        alt: "Banyan Tree Quad",
        color: "Terracotta",
        desc: "View of the four massive tiles arranged together to form the Banyan tree.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Root Detail",
        color: "Earthy Red",
        desc: "Close-up of the deeply carved, twisting hanging roots of the tree.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Tile Gap",
        color: "Shadow",
        desc: "Detail shot showing the clean gap where the branches cross from one tile to the next.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Room Feature",
        color: "Grand",
        desc: "The four-piece mural acting as the central feature wall in a large living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Tile Backing",
        color: "Clay",
        desc: "The back of a single tile showing its heavy, waffle-grid structure for kiln firing.",
      },
    ],
  },
  {
    id: "tm-004",
    category: "/c/mud-work/terracotta-murals",
    slug: "abstract-clay-blocks",
    title: "Abstract Clay Blocks",
    description:
      "A modern take on terracotta, featuring geometric extruded blocks of varying heights.",
    price: 280,
    discountedPrice: 224,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Extruded and cut terracotta clay blocks.
- **Base:** Thick wooden backing board.
- **Dimensions:** 24" x 24" (60cm x 60cm) Square.
- **Finish:** Half raw terracotta, half matte black painted blocks.

### Architectural Modernism
This piece completely reimagines what terracotta can be. Hundreds of perfect, geometric clay blocks are extruded and cut to varying heights. They are adhered to a heavy wooden backer board, creating a pixelated, architectural cityscape. Some blocks are left raw, while others are painted matte black, resulting in a stark, brutalist aesthetic.

### Care Instructions
1. **Dusting Hazard:** This piece has hundreds of deep, flat crevices between the varying blocks. It will trap dust. You must use a can of compressed air (or an air compressor on a low setting) to effectively blow the dust out of the grid.
2. **Handling:** Do not press against the front of the blocks; handle strictly by the wooden backer board frame.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
        alt: "Clay Blocks",
        color: "Terracotta/Black",
        desc: "Frontal view of the pixelated, geometric clay block grid.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Height Variance",
        color: "Mixed",
        desc: "Extreme side angle highlighting the varying 3D heights of the extruded blocks.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Color Contrast",
        color: "Red/Black",
        desc: "Close-up showing the stark contrast between the raw terracotta and matte black blocks.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Office",
        color: "Industrial",
        desc: "Displayed in a sleek, industrial-style modern office.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Wood Backing",
        color: "Black Wood",
        desc: "The heavy wooden frame and backer board holding the blocks in place.",
      },
    ],
  },
  {
    id: "tm-005",
    category: "/c/mud-work/terracotta-murals",
    slug: "elephant-procession",
    title: "Elephant Procession",
    description:
      "A majestic royal elephant procession carved deeply into a wide terracotta panel.",
    price: 450,
    discountedPrice: 360,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    body: `
### Product Specifications
- **Material:** High-fired Solid Terracotta.
- **Dimensions:** 18" x 48" (45cm x 120cm) Panoramic.
- **Weight:** Approx. 30 lbs (13.6 kg).
- **Finish:** Antiqued clay (rubbed with local ash before firing).

### The Royal March
This massive, 4-foot-long panoramic mural depicts a regal Maharaja's elephant procession. The elephants, riders, and ornate ceremonial parasols are carved with astonishing detail. Before firing, the artisan rubs fine wood ash into the clay. In the kiln, this ash melts into the crevices, giving the final piece an incredibly ancient, weathered, and museum-quality aesthetic.

### Mounting & Maintenance
1. **Panoramic Weight:** Weighing 30 lbs and stretching 4 feet wide, this piece requires three heavy-duty wall anchors. Do not attempt to hang this alone; it is a two-person job.
2. **Ash Finish:** The antiqued ash finish is permanently fired into the clay. It will not rub off, but the piece should still be cleaned only with a dry brush or vacuum attachment to preserve the porous surface.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
        alt: "Elephant Procession",
        color: "Antique Brown",
        desc: "Full panoramic view of the majestic elephant march.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Elephant Detail",
        color: "Terracotta",
        desc: "Macro shot of an elephant showing the intricate carving of its ceremonial armor.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Ash Antiquing",
        color: "Dark Grey",
        desc: "Close-up showing the dark, melted ash giving the recesses an antique look.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Room Accent",
        color: "Warm",
        desc: "Hung as a dramatic accent piece above a long living room sofa.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Mounting Loops",
        color: "Steel",
        desc: "Back view showing the three steel mounting loops embedded in the long clay slab.",
      },
    ],
  },

  // ---> Clay Relief Paintings
  {
    id: "crp-001",
    category: "/c/mud-work/clay-relief-paintings",
    slug: "painted-lotus",
    title: "Painted Lotus Relief",
    description:
      "Clay molded into a lotus flower, then hand-painted in vibrant pinks and greens.",
    price: 140,
    discountedPrice: 112,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1603513361877-3e1ee9813292?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Sturdy 10mm waterproof ply.
- **Relief Material:** Air-dry polymer clay blend.
- **Dimensions:** 16" x 16" (40cm x 40cm) Square.
- **Finish:** Opaque acrylics sealed with a matte varnish.

### 3D Botanical Art
Bridging the gap between sculpture and painting, this piece features a lotus flower built up layer by layer using a specialized air-dry clay. Once the physical 3D flower is hardened, the artisan paints it with vibrant, highly saturated pinks and greens. The physical depth of the clay casts natural shadows, giving the painting incredible volume.

### Care & Usage Cautions
1. **Fragility of Petals:** The clay petals protrude outward by almost an inch. They are hard but can snap if bumped. Handle the artwork only by the thick wooden backing.
2. **Dusting:** Dust will collect in the recesses of the 3D flower. Use a soft, dry makeup brush to gently sweep dust out from between the petals.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1603513361877-3e1ee9813292?w=800&q=80",
        alt: "Painted Lotus",
        color: "Pink/Green",
        desc: "Frontal view of the vibrant, 3D clay lotus flower.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Relief Depth",
        color: "Pink",
        desc: "Extreme side angle showing the physical depth and protrusion of the clay petals.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Brushstroke Details",
        color: "Green",
        desc: "Macro shot of the acrylic paint applied directly over the textured clay leaves.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bedroom Display",
        color: "Bright",
        desc: "Mounted elegantly above a low dresser in a sunlit bedroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Ply Backing",
        color: "Wood",
        desc: "View of the marine ply backing and the sturdy sawtooth hanger.",
      },
    ],
  },
  {
    id: "crp-002",
    category: "/c/mud-work/clay-relief-paintings",
    slug: "golden-buddha",
    title: "Golden Buddha Relief",
    description:
      "A serene face of Buddha crafted in clay and painted with antiqued gold leaf.",
    price: 220,
    discountedPrice: 176,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Dark-stained 12mm teak wood board.
- **Relief Material:** Sculpted terracotta clay.
- **Dimensions:** 20" x 24" (50cm x 60cm) Vertical.
- **Finish:** Antiqued composite gold leaf and black wax.

### Serene Antiquity
This wall sculpture exudes a profound sense of peace. The face of the Buddha is sculpted in high relief, dominating the wooden canvas. To create an ancient, temple-aged aesthetic, the artisan applies composite gold leaf over the clay and then rubs a dark black wax into the recesses. This highlights the serene, downcast eyes and the texture of the hair.

### Care Instructions
1. **Wax Finish:** The antiquing wax is somewhat soft. Do not wipe the face of the Buddha with a wet or soapy cloth, as it will strip the black wax out of the crevices and ruin the antique look.
2. **Location:** Ideal for meditation rooms or quiet corners. Hang securely using the provided dual D-rings.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80",
        alt: "Golden Buddha",
        color: "Gold/Black",
        desc: "Full vertical view of the serene, gold-leafed Buddha face.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Antiqued Wax Detail",
        color: "Dark Gold",
        desc: "Close-up showing the dark black wax settled into the gold leaf crevices.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "High Relief Profile",
        color: "Gold",
        desc: "Side profile demonstrating how far the nose and brow protrude from the wood base.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Zen Space",
        color: "Moody",
        desc: "Displayed under soft, warm spotlighting in a meditation room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Teak Backing",
        color: "Dark Wood",
        desc: "The back of the relief showing the rich, dark-stained teak wood base.",
      },
    ],
  },
  {
    id: "crp-003",
    category: "/c/mud-work/clay-relief-paintings",
    slug: "floral-vine-border",
    title: "Floral Vine Border",
    description:
      "A long rectangular piece featuring winding clay vines painted in jewel tones.",
    price: 160,
    discountedPrice: 128,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 8mm MDF board.
- **Relief Material:** Fine modeling clay.
- **Dimensions:** 12" x 36" (30cm x 90cm) Panoramic.
- **Finish:** Glossy jewel-toned acrylics over a matte black background.

### Architectural Accent
Designed specifically to be hung above doorways, windows, or horizontally along a hallway. The artist hand-rolls thin strips of clay to form winding, intertwining vines. The vines and small blooming flowers are painted in striking, high-gloss jewel tones (sapphire blues, ruby reds, and emerald greens) that pop violently against the dead-matte black background.

### Maintenance & Hanging
1. **Panoramic Hanging:** Ensure you use a spirit level when hanging. This long piece requires two nails to remain perfectly horizontal.
2. **Dusting:** The high-gloss jewel tones are easy to wipe clean, but be careful not to snag the thin clay vines with fibrous cloths.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
        alt: "Floral Vine Border",
        color: "Multicolor/Black",
        desc: "Full panoramic view of the winding clay vines on a black background.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Jewel Tones",
        color: "Ruby/Emerald",
        desc: "Macro shot of the glossy, jewel-toned acrylics applied to the raised clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Vine Relief",
        color: "Green",
        desc: "Angled view showing the physical roundness of the hand-rolled clay vines.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Doorway Mount",
        color: "Bright",
        desc: "Hung horizontally as a beautiful architectural accent above a wooden doorway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Dual Hangers",
        color: "Steel",
        desc: "Back view showing the two D-rings placed widely for stable horizontal hanging.",
      },
    ],
  },
  {
    id: "crp-004",
    category: "/c/mud-work/clay-relief-paintings",
    slug: "blue-jay-on-branch",
    title: "Blue Jay on Branch",
    description:
      "Highly realistic bird crafted in 3D clay atop a painted sky background.",
    price: 180,
    discountedPrice: 144,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1552728089-5710522197e5?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Stretched 10oz canvas.
- **Relief Material:** Ultra-lightweight paper clay.
- **Dimensions:** 16" x 20" (40cm x 50cm).
- **Finish:** Detailed acrylic painting and soft matte varnish.

### The Illusion of Life
This piece creates a stunning optical illusion. The background sky and distant trees are painted entirely flat on the canvas. However, the Blue Jay and the immediate branch it sits on are sculpted from ultra-lightweight paper clay directly onto the canvas. The physical shadow cast by the 3D bird against the 2D painted background brings the scene vividly to life.

### Care Cautions
1. **Paper Clay Fragility:** Paper clay is incredibly light, allowing it to adhere to a stretched canvas, but it is somewhat brittle. Never press against the bird.
2. **Handling the Canvas:** Always lift and move the piece by the wooden stretcher frame. Pushing on the canvas can cause the 3D clay elements to detach from the fabric.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1552728089-5710522197e5?w=800&q=80",
        alt: "Blue Jay Relief",
        color: "Blue/White",
        desc: "Front view of the 3D Blue Jay sitting against the painted background.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Feather Details",
        color: "Blue",
        desc: "Extreme macro shot showing the fine texture carved into the clay feathers.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Cast Shadow",
        color: "Shadow",
        desc: "Angled view highlighting the real physical shadow cast by the 3D bird onto the canvas.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Space",
        color: "Warm",
        desc: "Displayed in a cozy, nature-themed reading nook.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Canvas Frame",
        color: "Wood",
        desc: "Back of the piece showing the lightweight stretched canvas frame.",
      },
    ],
  },
  {
    id: "crp-005",
    category: "/c/mud-work/clay-relief-paintings",
    slug: "sun-and-moon-duo",
    title: "Sun and Moon Duo",
    description:
      "A split canvas featuring a raised, painted sun on one side and a moon on the other.",
    price: 200,
    discountedPrice: 160,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Two separate 12" x 24" rigid canvas boards (Diptych).
- **Relief Material:** Dense modeling clay with metallic powders.
- **Dimensions:** 24" x 24" (60cm x 60cm) total when hung together.
- **Finish:** Metallic gold and silver waxes over dark acrylics.

### Celestial Balance
This diptych (two-piece) artwork represents cosmic duality. One panel features a fiercely radiating sun, rubbed with metallic gold wax. The other features a serene crescent moon and stars, finished in cool silver wax. The raised clay faces are highly stylized and slightly abstract, creating a beautiful balance of warm and cool tones when hung side-by-side.

### Care Instructions
1. **Metallic Wax Care:** The gold and silver finishes are created using specialized metallic waxes. Do not wash or wipe with damp cloths, which will dull the metallic shine.
2. **Hanging Alignment:** For the best visual impact, hang the two panels precisely 1.5 inches apart at the exact same height.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80",
        alt: "Sun and Moon Duo",
        color: "Gold/Silver/Black",
        desc: "Full view of the two panels hung side-by-side.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Sun Relief",
        color: "Gold",
        desc: "Close-up of the highly textured, gold-waxed sun face.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Moon Relief",
        color: "Silver",
        desc: "Close-up showing the cool silver metallic finish on the crescent moon.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bedroom Wall",
        color: "Moody",
        desc: "The diptych mounted prominently above a bed's headboard.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Panel Edge",
        color: "Black",
        desc: "Side profile showing the clean black edge of the rigid canvas boards.",
      },
    ],
  },

  // ---> Traditional Kutch Mud Work
  {
    id: "kmw-001",
    category: "/c/mud-work/kutch-mud-work",
    slug: "white-clay-arch",
    title: "White Clay Arch",
    description:
      "Traditional architectural archway design created using white Kutch mud.",
    price: 190,
    discountedPrice: 152,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1604928045688-6623cd3a58d6?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Arched MDF board.
- **Relief Material:** Traditional dung and clay mix.
- **Dimensions:** 20" Wide x 30" High (50cm x 76cm) at the peak.
- **Finish:** Authentic chalky white Chhapa (clay slip).

### Architectural Heritage
Instead of a standard square or circle, the wooden backing of this piece is cut into a traditional Indian architectural arch (Jharokha style). The mud work inside mimics the elaborate stone carvings found in historic Rajasthani and Gujarati palaces. It brings a piece of classical Indian architecture directly onto your modern walls.

### Environmental Sensitivities
1. **Moisture Warning:** The authentic chalky white slip is completely unsealed, honoring traditional methods. It is extremely sensitive to moisture and humidity. Keep strictly indoors in dry rooms.
2. **Cleaning:** Dust gently using a dry, soft-bristled brush. Never use liquids or spray cleaners near this artwork.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1604928045688-6623cd3a58d6?w=800&q=80",
        alt: "White Clay Arch",
        color: "White",
        desc: "Frontal view of the beautifully arched MDF board and mud design.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Arch Peak",
        color: "White",
        desc: "Close-up of the intricate mud detailing at the peak of the arch.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Mud Pinching",
        color: "Matte White",
        desc: "Macro shot highlighting the traditional hand-pinched clay ridges.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Entryway Display",
        color: "Warm",
        desc: "Hung in a foyer to mimic a traditional architectural window.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "MDF Edge",
        color: "Brown",
        desc: "Side profile showing the precise, arched cut of the backing board.",
      },
    ],
  },
  {
    id: "kmw-002",
    category: "/c/mud-work/kutch-mud-work",
    slug: "kutchi-bride",
    title: "Kutchi Bride Motif",
    description:
      "A stylistic representation of a bride adorned in traditional jewelry, rendered in mud.",
    price: 210,
    discountedPrice: 168,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 10mm Marine Ply board.
- **Relief Material:** Fine Kutch clay.
- **Inlay:** Elaborate use of tiny Aabhla mirrors to represent jewelry.
- **Dimensions:** 18" x 24" (45cm x 60cm) Vertical.
- **Finish:** Bright white slip.

### Cultural Storytelling
This intricate mud work panel depicts a Kutchi bride in profile. The artisan uses extremely thin, delicate lines of clay to map out the bride's traditional garments (Odhni). The hallmark of this piece is the extensive use of tiny, precision-cut mirrors embedded along the neck and ears to represent the heavy, ornate silver jewelry traditionally worn on a wedding day.

### Care Instructions
1. **Handling Delicate Lines:** The clay lines representing the fabric folds are very thin and high. Handle the panel strictly by the wooden edges to avoid crushing the clay.
2. **Mirror Cleaning:** Use a dry, soft blower (like a camera lens blower) to remove dust from the densely packed mirror jewelry sections.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?w=800&q=80",
        alt: "Kutchi Bride",
        color: "White/Silver",
        desc: "Vertical view of the stylistic bridal profile in mud relief.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Jewelry Mirrors",
        color: "Silver",
        desc: "Extreme close-up of the tiny mirrors representing bridal jewelry.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Clay Linework",
        color: "White",
        desc: "Angled shot highlighting the delicate, thin clay lines of the garments.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bedroom Wall",
        color: "Soft Lighting",
        desc: "Displayed under soft, warm lighting in a traditional bedroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Back Hook",
        color: "Steel",
        desc: "View of the sturdy metal hanging hook attached to the ply board.",
      },
    ],
  },
  {
    id: "kmw-003",
    category: "/c/mud-work/kutch-mud-work",
    slug: "camel-bell-panel",
    title: "Camel Bell Panel",
    description:
      "Features hanging motifs resembling the bells worn by desert camels.",
    price: 175,
    discountedPrice: 140,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1548625361-ec853c078bfa?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 8mm MDF board.
- **Relief Material:** Traditional camel dung and clay mix.
- **Inlay:** Triangular and teardrop mirrors.
- **Dimensions:** 16" x 24" (40cm x 60cm) Vertical.
- **Finish:** Chalky matte white wash.

### Desert Symphony
Inspired by the rhythmic chiming heard across the Thar Desert, this panel relies on stylized, dangling geometric shapes that represent traditional camel bells. The use of downward-pointing triangular mirrors at the base of the motifs gives the illusion of hanging weight and movement.

### Ideal Placement & Care
1. **Lighting Angle:** This panel looks best when lit from above (like ceiling track lighting). The downward-pointing bell motifs will cast beautiful, elongated shadows down the white board.
2. **Dusting:** Dust gently with a clean, dry feather duster. Do not use wet cloths.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1548625361-ec853c078bfa?w=800&q=80",
        alt: "Camel Bell Panel",
        color: "White/Silver",
        desc: "Full frontal view of the hanging bell motifs in mud work.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Bell Detail",
        color: "White",
        desc: "Macro shot of the stylized bell shape formed by the clay ridges.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Mirror Inlay",
        color: "Silver",
        desc: "Close-up of the triangular mirror placed at the bottom of the bell motif.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Hallway Console",
        color: "Neutral",
        desc: "Mounted above a narrow hallway console table.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Mounting Wire",
        color: "Steel",
        desc: "Back of the panel showing the pre-installed steel hanging wire.",
      },
    ],
  },
  {
    id: "kmw-004",
    category: "/c/mud-work/kutch-mud-work",
    slug: "bhunga-wall-art",
    title: "Bhunga Wall Art",
    description:
      "Replica of the circular mud designs found inside traditional Bhunga huts.",
    price: 260,
    discountedPrice: 208,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Heavy 12mm Marine Ply.
- **Relief Material:** Authentic Kutch clay and local binders.
- **Inlay:** Dense clusters of circular Aabhla mirrors.
- **Dimensions:** 30" x 30" (76cm x 76cm) Large Square.
- **Finish:** Traditional chalky white.

### Architectural Replication
A "Bhunga" is the traditional circular mud hut of the Kutch region, known for its earthquake resistance and incredibly ornate interior walls. This massive 30-inch panel is an exact, 1:1 replica of a section of a Bhunga wall. It features concentric borders, heavy mirror density, and thick, bold clay lines designed to maximize light reflection in a dark space.

### Extreme Care & Mounting
1. **Weight Warning:** This is a very heavy panel due to the thick marine ply and dense clay application. It MUST be mounted using heavy-duty drywall anchors or directly into wall studs.
2. **Moisture & Touch:** The thick white clay slip is authentic and unsealed. Do not touch the white surface with dirty or oily hands, and keep strictly away from damp environments.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
        alt: "Bhunga Wall Art",
        color: "White/Silver",
        desc: "Full square view of the dense, highly reflective traditional Bhunga pattern.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Thick Clay Lines",
        color: "White",
        desc: "Angled shot highlighting the thick, bold clay ridges used in Bhunga interiors.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Mirror Density",
        color: "Silver",
        desc: "Macro detail showing the extreme density of the circular mirrors.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Room Feature",
        color: "Bright",
        desc: "Hung as the massive centerpiece in a bohemian living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Heavy Duty Cleat",
        color: "Steel",
        desc: "View of the heavy-duty French cleat system used to mount the heavy panel.",
      },
    ],
  },
  {
    id: "kmw-005",
    category: "/c/mud-work/kutch-mud-work",
    slug: "intricate-jaali",
    title: "Intricate Jaali Work",
    description:
      "Mud pinched and formed to resemble delicate wooden or stone jaali screens.",
    price: 230,
    discountedPrice: 184,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1604928045688-6623cd3a58d6?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 8mm MDF board.
- **Relief Material:** Fine Kutch modeling clay.
- **Inlay:** Strategic placement of diamond mirrors.
- **Dimensions:** 24" x 30" (60cm x 76cm) Vertical.
- **Finish:** Matte white slip.

### The Illusion of Stone
A "Jaali" is a perforated stone or latticed screen found in Indo-Islamic architecture. This masterpiece creates the optical illusion of a carved stone screen using only pinched mud. The artisan creates a perfectly interlocked, repeating hexagonal matrix that looks structurally impossible to achieve with wet clay.

### Strict Care Guidelines
1. **Ultimate Fragility:** This is our most delicate mud work piece. The interconnected "lattice" clay lines are extremely thin to mimic a screen. A sudden drop or heavy pressure will shatter the clay grid.
2. **Cleaning:** Do NOT use a cloth or a standard feather duster, which will snag on the intricate lattice. Clean ONLY with gentle compressed air or a soft makeup brush.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1604928045688-6623cd3a58d6?w=800&q=80",
        alt: "Jaali Mud Work",
        color: "White",
        desc: "Frontal view of the incredibly intricate, lattice-like Jaali clay grid.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Hexagonal Lattice",
        color: "White/Shadow",
        desc: "Extreme macro shot showing the deep shadows cast by the tight clay lattice.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Diamond Mirror",
        color: "Silver",
        desc: "Close-up of a tiny diamond mirror set securely at the intersection of the clay lines.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Window Light",
        color: "Bright",
        desc: "Hung near a window where raking light severely highlights the 3D grid.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "MDF Backing",
        color: "Brown",
        desc: "Rear view showing the clean MDF backing board and hooks.",
      },
    ],
  },

  // ---> Organic Textured Wall Panels
  {
    id: "twp-001",
    category: "/c/mud-work/textured-wall-panels",
    slug: "sand-dune-waves",
    title: "Sand Dune Waves",
    description:
      "Minimalist plaster and mud mixed to simulate the gentle ripples of desert sand.",
    price: 300,
    discountedPrice: 240,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** Rigid 12mm Marine Ply.
- **Relief Material:** Architectural plaster mixed with fine desert sand and clay.
- **Dimensions:** 36" x 36" (90cm x 90cm) Large Square.
- **Finish:** Matte, raw off-white/beige plaster finish.

### Zen Minimalism
This massive square panel bridges the gap between organic earth craft and ultra-modern minimalism. Using large trowels and combs, the artist sweeps a thick mixture of plaster and local sand across the board to perfectly simulate the gentle, wind-swept ripples of a desert sand dune. There is no paint; the color is the natural hue of the dried plaster and sand mix.

### Installation & Care
1. **Directional Lighting:** This panel will look completely flat and boring if lit from straight-on. **It must be lit with angled, directional light** (like track lighting shining down from the ceiling) to cast shadows inside the sand ripples and reveal the texture.
2. **Weight & Mounting:** Weighs approx. 20 lbs. Mount securely into wall studs using the attached D-rings.
3. **Cleaning:** Vacuum gently with a soft brush attachment.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
        alt: "Sand Dune Panel",
        color: "Beige",
        desc: "Full square view of the sweeping, minimalist sand dune waves.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Wave Shadows",
        color: "Off-White/Shadow",
        desc: "Angled shot demonstrating the deep shadows cast by the plaster waves.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Sand Texture",
        color: "Beige",
        desc: "Extreme macro detail showing the actual grains of sand mixed into the plaster.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Interior",
        color: "Minimalist",
        desc: "Serving as a subtle, textural focal point in a stark white minimalist living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Panel Edge",
        color: "Wood/Plaster",
        desc: "Side profile showing the thick marine ply and the heavy plaster overlay.",
      },
    ],
  },
  {
    id: "twp-002",
    category: "/c/mud-work/textured-wall-panels",
    slug: "cracked-earth",
    title: "Cracked Earth Panel",
    description:
      "A dramatic, intentional craquelure effect mimicking dry, parched soil.",
    price: 280,
    discountedPrice: 224,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 10mm MDF board.
- **Relief Material:** Specialized shrinking clay and crackle medium.
- **Dimensions:** 24" x 36" (60cm x 90cm) Vertical.
- **Finish:** Raw, earthy brown with dark stained fissures.

### Controlled Destruction
To create this dramatic texture, the artist applies a thick layer of a specialized, high-shrinkage clay over a wet binding medium. As the piece dries over several days, the clay violently pulls apart, creating deep, unpredictable fissures identical to a dry riverbed. A dark liquid stain is then washed into the cracks to highlight the depth.

### Sealing & Care
1. **Stability:** Despite looking like it is falling apart, the clay "islands" are permanently chemically bonded to the wooden backer. They will not flake off.
2. **Matte Sealant:** The entire piece is sprayed with an invisible, dead-matte fixative to stop dust from settling deep into the porous cracks.
3. **Cleaning:** Use a soft duster or compressed air. Never use water.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80",
        alt: "Cracked Earth",
        color: "Brown",
        desc: "Full vertical view of the dramatic, parched earth texture.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Fissure Detail",
        color: "Dark Brown",
        desc: "Extreme close-up looking down into the deep, dark-stained cracks.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Clay Islands",
        color: "Earthy Red",
        desc: "Angled shot showing the physical thickness of the separated clay 'islands'.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Rustic Styling",
        color: "Warm",
        desc: "Hung in a rustic, earth-toned dining space.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Board Edge",
        color: "Brown",
        desc: "Side profile showing the MDF backing and the sealed edges of the clay.",
      },
    ],
  },
  {
    id: "twp-003",
    category: "/c/mud-work/textured-wall-panels",
    slug: "raw-concrete-clay",
    title: "Raw Concrete & Clay",
    description:
      "An industrial-organic hybrid mixing gray cements with warm terracotta patches.",
    price: 320,
    discountedPrice: 256,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 12mm Marine Ply.
- **Relief Material:** Micro-cement and raw terracotta clay.
- **Dimensions:** 30" x 40" (76cm x 101cm) Horizontal.
- **Finish:** Raw, unpolished industrial matte.

### Industrial meets Organic
This panel is designed for the modern loft aesthetic. The artist aggressively trowels heavy, cool-gray micro-cement across the board, intentionally leaving rough, unfinished areas. In these voids, warm, red terracotta clay is pressed and smoothed in. The resulting contrast between the cold, industrial concrete and the warm, organic earth is visually striking.

### Mounting & Maintenance
1. **Extreme Weight:** The use of real micro-cement makes this panel extremely heavy (approx. 28 lbs). Use the provided heavy-duty French cleat to mount it securely to wall studs.
2. **Chalking:** The raw concrete may initially drop a tiny amount of gray dust (chalking) when first handled. This is normal.
3. **Cleaning:** Vacuum with a brush attachment to clean the rough concrete pores.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=800&q=80",
        alt: "Concrete Clay Panel",
        color: "Grey/Red",
        desc: "Full horizontal view of the industrial concrete and terracotta patches.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Material Contrast",
        color: "Grey/Orange",
        desc: "Close-up of the rough seam where the gray concrete meets the smooth red clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Trowel Marks",
        color: "Concrete Grey",
        desc: "Angled shot highlighting the sweeping, aggressive trowel marks in the cement.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Loft Interior",
        color: "Industrial",
        desc: "Mounted securely on a white wall in an exposed-pipe industrial loft.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "French Cleat",
        color: "Steel",
        desc: "Rear view showing the heavy-duty aluminum French cleat mounting system.",
      },
    ],
  },
  {
    id: "twp-004",
    category: "/c/mud-work/textured-wall-panels",
    slug: "woven-basket-texture",
    title: "Woven Basket Texture",
    description:
      "Clay scored deeply to resemble the thick weave of a natural rattan basket.",
    price: 250,
    discountedPrice: 200,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 10mm MDF board.
- **Relief Material:** Thick, slow-drying modeling clay.
- **Dimensions:** 24" x 24" (60cm x 60cm) Square.
- **Finish:** Painted in varying shades of warm rattan-tan, sealed with matte varnish.

### The Illusion of Weave
This piece brings the cozy, bohemian warmth of woven rattan to a permanent wall fixture. A thick layer of wet clay is applied to the board, and the artist uses specialized combing tools to score deep, interlocking horizontal and vertical grooves. Once dry, it is painted to perfectly mimic the organic color variations of natural woven grass.

### Care Guidelines
1. **Fragility of Ridges:** The deeply scored "woven" ridges are delicate until fully supported. Do not press hard against the front of the panel when moving it.
2. **Dusting:** The heavy cross-hatching will trap dust. Use a vacuum with a soft brush attachment, moving in the direction of the grooves to pull dust out.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80",
        alt: "Woven Clay",
        color: "Tan/Brown",
        desc: "Frontal square view of the clay scored to look like a woven basket.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Scoring Detail",
        color: "Tan",
        desc: "Extreme close-up of the deep, interlocking vertical and horizontal grooves.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Depth of Weave",
        color: "Shadow",
        desc: "Angled shot showing the deep physical shadows cast by the faux weave.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Boho Bedroom",
        color: "Warm",
        desc: "Displayed as a warm, textural accent above a bohemian styled bed.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "MDF Edge",
        color: "Brown",
        desc: "Side profile showing the thick clay layer sitting atop the MDF board.",
      },
    ],
  },
  {
    id: "twp-005",
    category: "/c/mud-work/textured-wall-panels",
    slug: "river-stone-imprint",
    title: "River Stone Imprint",
    description:
      "Smooth concavities pressed into the mud, resembling an ancient riverbed.",
    price: 270,
    discountedPrice: 216,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1506804886640-30c000e39a3f?w=800&q=80",
    body: `
### Product Specifications
- **Base Material:** 10mm Marine Ply.
- **Relief Material:** Ultra-smooth, fine-particulate gray clay.
- **Dimensions:** 20" x 30" (50cm x 76cm) Vertical.
- **Finish:** Raw, unpainted stone-gray clay, burnished to a soft sheen.

### Tactile Serenity
Inspired by the smooth, water-worn stones of a riverbed. The artist applies a perfectly flat, thick layer of fine gray clay. While wet, actual, flawlessly smooth river stones are pressed into the clay and removed, leaving behind hundreds of perfectly smooth, organic concavities. Once dry, the surface is vigorously rubbed (burnished) with a smooth stone, giving the raw clay a beautiful, natural eggshell sheen without any glaze or varnish.

### Care Instructions
1. **Burnished Surface Care:** The soft, natural sheen of burnished clay is beautiful but easily ruined by liquids. Never wipe this piece with a wet cloth, which will instantly dull the burnished shine.
2. **Dusting:** Dust gently with a dry microfiber cloth to keep the smooth concavities clean.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1506804886640-30c000e39a3f?w=800&q=80",
        alt: "River Stone Panel",
        color: "Cool Grey",
        desc: "Full vertical view of the gray clay panel with smooth, stone-like concavities.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Imprint Detail",
        color: "Grey/Shadow",
        desc: "Macro shot looking into the smooth, perfectly rounded indentations.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Burnished Sheen",
        color: "Soft Reflection",
        desc: "Angled view highlighting the soft, eggshell-like sheen of the burnished clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bathroom Decor",
        color: "Zen",
        desc: "Hung in a luxury, spa-like bathroom (must be well-ventilated).",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Ply Backing",
        color: "Wood",
        desc: "Back of the panel showing the marine ply board and mounting wire.",
      },
    ],
  },

  // ==========================================
  // 4. CANVAS ARTS (/c/canvas)
  // ==========================================

  // ---> Oversized Wall Canvas
  {
    id: "owc-001",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "image-1-quantum-waves",
    title: "Image-1-Quantum-Waves",
    description:
      "A sweeping, dynamic abstract piece utilizing deep blues and gold foil to simulate moving energy.",
    price: 500,
    discountedPrice: 400,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Mixed media (Acrylic, epoxy resin, and authentic 24k gold leaf) on heavy-duty 12oz cotton duck canvas.
- **Dimensions:** 48" x 72" (120cm x 180cm) - Oversized.
- **Framework:** Stretched over 2-inch deep kiln-dried pine stretcher bars. Includes cross-bracing for structural integrity.
- **Weight:** Approx. 18 lbs (8.1 kg).

### The Composition
"Quantum Waves" is a statement piece designed for massive, open-concept walls. The artist poured tinted epoxy resin to create glassy, fluid blue waves, intersecting them with hand-applied gold leaf that catches the light dynamically as you walk past the canvas.

### Care & Mounting Cautions
1. **Heavy Mounting:** Due to its massive size and the weight of the resin, this canvas MUST be hung using heavy-duty wall anchors (e.g., French cleats or drywall toggles). Do not use standard nails.
2. **Resin Care:** The resin sections are highly glossy but can be scratched. Dust only with an ultra-soft microfiber cloth.
3. **Gold Leaf:** The gold leaf is sealed, but avoid touching it directly with bare hands, as natural skin oils can degrade the finish over time.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
        alt: "Frontal View",
        color: "Deep Blue/Gold",
        desc: "Complete view of the 48x72 oversized canvas.",
      },
      {
        url: "https://images.unsplash.com/photo-1579783902922-450f3b4991fb?w=800&q=80",
        alt: "Gold Leaf Detail",
        color: "Gold",
        desc: "Macro close-up showing the authentic 24k gold leaf flaking texture.",
      },
      {
        url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
        alt: "Resin Gloss",
        color: "Blue",
        desc: "Angled shot highlighting the glass-like reflectivity of the poured resin.",
      },
      {
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
        alt: "Room Context",
        color: "Neutral",
        desc: "The massive canvas taking up an entire wall in a modern corporate boardroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?w=800&q=80",
        alt: "Framework",
        color: "Wood",
        desc: "Back of the canvas showing the thick pine cross-bracing required for an oversized piece.",
      },
    ],
  },
  {
    id: "owc-002",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "urban-skyline-palette",
    title: "Urban Skyline Palette",
    description:
      "A massive, impressionistic take on a bustling city skyline during a vivid twilight.",
    price: 450,
    discountedPrice: 360,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Heavy impasto oil and acrylic blend on gallery-wrapped canvas.
- **Dimensions:** 60" x 40" (152cm x 101cm) Horizontal.
- **Framework:** 1.5-inch kiln-dried fir wood stretcher bars.
- **Finish:** Satin UV-resistant varnish.

### City Energy
Capturing the sheer verticality and chaotic energy of a metropolis at twilight. The artist uses wide, aggressive palette knife strokes to lay down thick, blocky colors representing skyscrapers, contrasted against a smoothly blended, glowing orange and violet sky.

### Care Instructions
1. **Handling Impasto:** The thick chunks of paint are susceptible to cracking if the canvas is pressed or folded. Always move this large piece by holding the sturdy wooden frame at the back.
2. **Dusting:** Use a soft badger-hair brush to clean the deep crevices left by the palette knife.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
        alt: "Urban Skyline",
        color: "Orange/Purple/Grey",
        desc: "Full horizontal view of the vibrant, impressionistic city skyline.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Palette Knife Detail",
        color: "Grey/Orange",
        desc: "Macro shot of the thick, blocky paint strokes simulating skyscrapers.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Sky Gradient",
        color: "Purple",
        desc: "Close-up showing the smooth, blended gradient of the twilight sky.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Loft Display",
        color: "Industrial",
        desc: "Mounted securely on an exposed brick wall in a downtown loft apartment.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Cross Bracing",
        color: "Wood",
        desc: "View of the back showing the center cross-brace to keep the massive canvas taut.",
      },
    ],
  },
  {
    id: "owc-003",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "monochromatic-depth",
    title: "Monochromatic Depth",
    description:
      "A striking minimalist canvas playing exclusively with textures in black, white, and gray.",
    price: 380,
    discountedPrice: 285,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Modeling paste, gesso, and acrylic on stretched canvas.
- **Dimensions:** 48" x 48" (120cm x 120cm) Square.
- **Framework:** Solid pine stretcher bars with a minimalist black float frame.
- **Aesthetic:** Minimalist, monochromatic, highly textural.

### Texture over Color
When color is removed, texture becomes the absolute focus. This oversized square canvas relies entirely on heavy modeling paste sculpted into sharp ridges and smooth valleys. The stark black, crisp white, and subtle gray paints interact with the physical shadows cast by the 3D ridges, meaning the painting changes appearance as the sun moves across your room.

### Display & Care
1. **Directional Lighting Required:** To truly experience the depth of this monochromatic piece, it must be lit with angled track lighting or placed near a raking window light to cast shadows.
2. **Cleaning:** The stark white ridges will show dust quickly. Dust weekly with a dry microfiber duster.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
        alt: "Monochrome Canvas",
        color: "Black/White",
        desc: "Full square view of the deeply textured black and white canvas.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Modeling Paste Detail",
        color: "White/Grey",
        desc: "Macro shot of the sharp ridges formed by the thick modeling paste.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Shadow Play",
        color: "Shadow",
        desc: "Angled view showing how the physical ridges cast shadows across the white paint.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Office Space",
        color: "Modern Minimalist",
        desc: "Serving as a stark, dramatic focal point in a modern executive office.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Float Frame",
        color: "Black",
        desc: "Close-up of the clean, minimalist black floating frame enclosing the canvas.",
      },
    ],
  },
  {
    id: "owc-004",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "crimson-burst",
    title: "Crimson Burst",
    description:
      "An explosive, passionate abstract expressionist painting dominated by intense reds and warm tones.",
    price: 420,
    discountedPrice: 336,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Fluid acrylics and heavy body gels on raw linen.
- **Dimensions:** 50" x 40" (127cm x 101cm) Vertical.
- **Framework:** Heavy-duty 2-inch deep gallery wrap.
- **Finish:** High-gloss varnish to saturate the warm colors.

### Explosive Expressionism
"Crimson Burst" channels raw, unfiltered emotion. The artist used centrifugal force and aggressive splashing techniques to create a violent, beautiful burst of cadmium red, deep magenta, and bright orange originating from the center of the canvas. The high-gloss varnish ensures the reds remain wet, vibrant, and incredibly saturated.

### Care Guidelines
1. **Gloss Varnish Maintenance:** The glossy surface is prone to fingerprints. Handle strictly by the rear stretcher bars.
2. **Display Location:** The aggressive red tones command attention. This piece acts perfectly as the singular anchor in an otherwise neutral-toned dining or living room.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80",
        alt: "Crimson Burst",
        color: "Red/Orange",
        desc: "Full vertical view of the explosive, bright red abstract composition.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Splatter Detail",
        color: "Crimson",
        desc: "Macro shot of the aggressive, kinetic splatters radiating from the center.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Gloss Finish",
        color: "Reflective Red",
        desc: "Angled view highlighting the deep, wet look of the high-gloss varnish.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Space",
        color: "Neutral",
        desc: "Hung powerfully against a dark charcoal accent wall in a modern home.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Gallery Wrap",
        color: "Red",
        desc: "Side profile showing the chaotic paint splashes continuing around the thick 2-inch edge.",
      },
    ],
  },
  {
    id: "owc-005",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "oceanic-abyss",
    title: "Oceanic Abyss",
    description:
      "A deeply textured, oversized piece that mimics the dark, mysterious depths of the ocean.",
    price: 550,
    discountedPrice: 440,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Deep pour epoxy resin, mica powders, and acrylics.
- **Dimensions:** 48" x 60" (120cm x 152cm) Horizontal.
- **Framework:** Solid birchwood backing board supported by a hidden aluminum sub-frame.
- **Weight:** Extremely Heavy (Approx. 32 lbs / 14.5 kg).

### Into the Deep
This isn't a traditional painting—it is a liquid sculpture. The artist poured multiple layers of heavy epoxy resin mixed with metallic indigo and cyan mica powders to simulate looking straight down into the Mariana Trench. The layers cure at different times, physically suspending the swirling blue pigments at different depths inside the clear resin.

### Extreme Mounting Warning
1. **Massive Weight:** This is the heaviest piece in our canvas collection due to the thick resin and solid birchwood board. It features a heavy-duty aluminum French cleat. **You must secure this directly into multiple wall studs.**
2. **Scratch Prevention:** Resin acts like glass. Never wipe it with paper towels or abrasive sponges. Use only a dedicated, dry microfiber cloth to polish the surface.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
        alt: "Oceanic Abyss",
        color: "Deep Blue/Cyan",
        desc: "Full horizontal view of the swirling, deep ocean blue resin.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Resin Depth",
        color: "Blue",
        desc: "Macro shot looking down into the thick resin to see the suspended metallic mica layers.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Gloss Reflection",
        color: "Reflective",
        desc: "Angled view proving the perfectly smooth, glass-like reflection of the surface.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Executive Display",
        color: "Modern",
        desc: "Mounted as the focal point in a sleek, glass-walled executive boardroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Aluminum Cleat",
        color: "Steel",
        desc: "Back of the heavy board showing the sturdy aluminum French cleat mounting system.",
      },
    ],
  },
  {
    id: "owc-006",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "golden-flakes-minimalist",
    title: "Golden Flakes Minimalist",
    description:
      "A subtle cream background dramatically split by a vein of highly reflective gold leaf.",
    price: 600,
    discountedPrice: 450,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Plaster, acrylic gesso, and authentic 24k gold leaf on canvas.
- **Dimensions:** 40" x 60" (101cm x 152cm) Vertical.
- **Framework:** Solid pine, 1.5-inch profile.
- **Frame:** Champagne-gold metallic floater frame.

### The Kintsugi Aesthetic
Inspired by the Japanese philosophy of *Kintsugi* (finding beauty in broken things), this oversized canvas features a stark, heavily textured cream plaster background that has been intentionally "cracked" down the middle. The artist filled this central fissure entirely with authentic 24k gold leaf, creating a stunning, shimmering vein that catches light violently across the minimalist canvas.

### Handling Gold Leaf
1. **Do Not Touch:** The 24k gold leaf is sealed, but natural skin oils will degrade the sealant over time. Handle the artwork only by the champagne-gold frame.
2. **Lighting:** To maximize the effect of the gold vein, position a warm-toned spotlight to hit the canvas at an angle.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
        alt: "Golden Flakes",
        color: "Cream/Gold",
        desc: "Full vertical view of the minimalist cream canvas split by the gold vein.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gold Vein Detail",
        color: "Gold",
        desc: "Extreme close-up of the crinkled, authentic 24k gold leaf filling the plaster crack.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Plaster Texture",
        color: "Cream",
        desc: "Macro shot detailing the rough, organic texture of the cream plaster background.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Luxury Bedroom",
        color: "Warm Bright",
        desc: "Hung elegantly above a plush, neutral-toned master bed.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Floater Frame",
        color: "Champagne Gold",
        desc: "Detail of the slim, champagne-gold metallic floater frame encasing the canvas.",
      },
    ],
  },
  {
    id: "owc-007",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "geometric-collision",
    title: "Geometric Collision",
    description:
      "Sharp lines and bold, contrasting colors create a retro-modern centerpiece for any large room.",
    price: 350,
    discountedPrice: 315,
    discountPercent: 10,
    image:
      "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** High-pigment acrylics and masking techniques on canvas.
- **Dimensions:** 48" x 36" (120cm x 90cm) Horizontal.
- **Framework:** Gallery-wrapped 1.5-inch edge.
- **Finish:** Dead-matte varnish.

### Retro-Modernism
This hard-edge geometric painting is an homage to mid-century modern design. The artist uses precision masking tape and multiple layers of opaque acrylics to create razor-sharp intersections of mustard yellow, navy blue, and burnt orange. The dead-matte finish ensures there is absolutely no light glare, allowing the flat, graphic colors to pop perfectly from any angle.

### Care Instructions
1. **Matte Varnish Care:** Matte finishes are easily scuffed. Do not drag anything across the surface of the canvas.
2. **Cleaning:** Dust gently with a soft, dry cloth. If a smudge occurs, use a very slightly damp cloth to dab (not rub) the spot.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
        alt: "Geometric Collision",
        color: "Yellow/Navy",
        desc: "Full horizontal view of the sharp, graphic geometric shapes.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Hard Edge Line",
        color: "Orange/Blue",
        desc: "Macro detail showing the razor-sharp, masked transition between two colors.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Matte Reflection",
        color: "Flat",
        desc: "Angled shot demonstrating the completely glare-free, dead-matte finish.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Mid-Century Living",
        color: "Retro",
        desc: "Displayed beautifully alongside a teak mid-century modern credenza.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Gallery Wrap",
        color: "Navy",
        desc: "Side profile showing the solid navy blue painted gallery-wrapped edge.",
      },
    ],
  },
  {
    id: "owc-008",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "ethereal-clouds",
    title: "Ethereal Clouds",
    description:
      "Soft, blended pastels create a dreamy, cloud-like atmosphere on a massive scale.",
    price: 400,
    discountedPrice: 320,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Slow-drying acrylics and glazing liquid on canvas.
- **Dimensions:** 60" x 48" (152cm x 120cm) Vertical.
- **Framework:** Custom kiln-dried cedar stretcher bars (lightweight).
- **Aesthetic:** Dreamy, soft-focus, atmospheric.

### The Soft Focus
To achieve the hazy, dream-like quality of this massive piece, the artist mixed acrylics with a slow-drying glazing liquid, allowing them to blend and soften the edges of the blush pink and pale cerulean blue "clouds" over several days. The painting lacks any sharp lines or hard focal points, making it an incredibly calming presence in a room.

### Maintenance
1. **Light Frame:** Despite its massive size, the use of premium cedar wood for the stretcher bars keeps the weight manageable (under 12 lbs). It can be hung on standard heavy-duty picture hooks.
2. **Dusting:** Wipe gently with a dry, clean microfiber cloth to preserve the soft, satin finish.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        alt: "Ethereal Clouds",
        color: "Pale Pink/Blue",
        desc: "Full vertical view of the soft, hazy, cloud-like abstraction.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Soft Blending",
        color: "Blush",
        desc: "Close-up showing the flawless, soft-focus blending of the acrylic glazes.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Canvas Texture",
        color: "Blue",
        desc: "Macro shot revealing the subtle canvas weave beneath the thin, translucent glazes.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Nursery or Bedroom",
        color: "Calm",
        desc: "Hung as a massive, calming backdrop in a soft, bright bedroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Cedar Frame",
        color: "Light Wood",
        desc: "View of the back showing the lightweight, premium cedar wood stretcher bars.",
      },
    ],
  },
  {
    id: "owc-009",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "industrial-rust-texture",
    title: "Industrial Rust Texture",
    description:
      "An edgy, mixed-media canvas utilizing real oxidization techniques to create an industrial look.",
    price: 480,
    discountedPrice: 384,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1533038590840-1c798b30d32f?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Iron-reactive paints, oxidizing spray, and acrylic on rigid board.
- **Dimensions:** 40" x 50" (101cm x 127cm) Horizontal.
- **Frame:** Raw, welded angle-iron steel frame.
- **Weight:** Very Heavy (Approx. 28 lbs / 12.7 kg).

### True Oxidation
This is true industrial art. The canvas is coated with a specialized paint containing actual microscopic iron filings. The artist then sprays a chemical oxidizer over the surface, forcing the painting to physically rust over the course of 48 hours. The result is authentic, unpredictable blooms of fiery orange rust against dark, decaying greys.

### Extreme Care & Sealing
1. **The Sealant:** The oxidation process has been halted and sealed with a heavy matte fixative. However, the rust texture remains slightly rough and gritty. **Do not wipe with cloths, as they will snag on the grit.** Use only compressed air to clean.
2. **Mounting:** The raw steel angle-iron frame makes this piece extremely heavy. It must be bolted directly into wall studs using the pre-drilled holes in the metal frame.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1533038590840-1c798b30d32f?w=800&q=80",
        alt: "Industrial Rust",
        color: "Orange/Grey",
        desc: "Full horizontal view of the fiery, oxidized rust textures.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "True Rust Detail",
        color: "Burnt Orange",
        desc: "Extreme macro shot proving the gritty, authentic texture of the iron oxidation.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Steel Frame",
        color: "Raw Steel",
        desc: "Corner detail of the raw, welded angle-iron steel frame enclosing the piece.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Loft Display",
        color: "Brutalist",
        desc: "Mounted securely on an exposed concrete wall in an industrial apartment.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Bolt Holes",
        color: "Steel",
        desc: "View of the pre-drilled mounting holes in the heavy steel frame.",
      },
    ],
  },
  {
    id: "owc-010",
    category: "/c/canvas/oversized-wall-canvas",
    slug: "midnight-silhouette",
    title: "Midnight Silhouette",
    description:
      "A dark, moody landscape piece featuring shadowed tree lines against a starry night sky.",
    price: 520,
    discountedPrice: 416,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints and silver leaf on heavy linen canvas.
- **Dimensions:** 36" x 60" (90cm x 152cm) Horizontal Panoramic.
- **Frame:** Thin, matte black wooden floater frame.
- **Finish:** Satin varnish.

### Nocturnal Serenity
A study in deep, tonal darks. This massive panoramic canvas features a pitch-black, jagged silhouette of a pine forest stretching across the bottom edge. Above it, a massive, swirling night sky painted in deep indigos and navy blues is speckled with tiny flecks of genuine silver leaf representing distant stars, creating a quiet, imposing nocturnal atmosphere.

### Display Recommendations
1. **Lighting:** Because the painting is composed almost entirely of dark values, it will "disappear" in a poorly lit room. It requires dedicated gallery spotlighting to make the subtle blues visible and the silver leaf stars shimmer.
2. **Cleaning:** Dust with a soft, clean feather duster. Avoid pressing against the expansive, tightly stretched linen surface.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80",
        alt: "Midnight Silhouette",
        color: "Black/Navy",
        desc: "Full panoramic view of the dark forest silhouette and starry sky.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Silver Stars",
        color: "Silver/Blue",
        desc: "Macro close-up showing the tiny flakes of silver leaf representing stars.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Silhouette Edge",
        color: "Black",
        desc: "Detail shot of the sharp, black painted tree line against the dark blue sky.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Media Room",
        color: "Dark Modern",
        desc: "Hung elegantly in a dark, moody home theater or media room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Floater Frame",
        color: "Black",
        desc: "View of the sleek, black wooden floater frame bordering the massive canvas.",
      },
    ],
  },

  // ---> Abstract Acrylic Canvas
  {
    id: "aac-001",
    category: "/c/canvas/abstract-acrylic-canvas",
    slug: "neon-splash",
    title: "Neon Splash",
    description:
      "High-energy canvas featuring Jackson Pollock-style splashes of neon acrylics.",
    price: 210,
    discountedPrice: 168,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** High-viscosity fluorescent acrylics on canvas.
- **Dimensions:** 24" x 36" (60cm x 90cm) Vertical.
- **Framework:** Gallery-wrapped with continuing splatters.
- **Aesthetic:** Action painting, chaotic, high-energy.

### Action Painting
Embracing the mid-century action painting techniques popularized by Jackson Pollock, "Neon Splash" was created with the canvas lying flat on the studio floor. The artist rapidly dripped, flicked, and poured neon pinks, electric yellows, and cyan blues across a stark black background, mapping the physical, kinetic energy of the artist's movements.

### UV Light Interaction
1. **Blacklight Reactive:** Because this piece utilizes true fluorescent acrylic pigments, the neon colors will literally glow if placed under a UV blacklight, making it an incredible piece for entertainment spaces.
2. **Sunlight Warning:** Fluorescent pigments are notoriously sensitive to UV degradation. If exposed to direct sunlight every day, the neon intensity will fade. Keep away from bright windows.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80",
        alt: "Neon Splash",
        color: "Neon/Black",
        desc: "Full vertical view of the chaotic, fluorescent paint splatters.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Drip Texture",
        color: "Pink/Yellow",
        desc: "Macro detail highlighting the thick, raised drips of paint crossing over one another.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Blacklight Effect",
        color: "Glowing",
        desc: "Shot demonstrating the glowing effect of the canvas under a UV blacklight.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Entertainment Room",
        color: "Dark",
        desc: "Hung as a vibrant statement piece in a dark basement entertainment room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Edge Splatter",
        color: "Multicolor",
        desc: "Side profile showing the wild paint splatters continuing around the gallery-wrapped edge.",
      },
    ],
  },
  {
    id: "aac-002",
    category: "/c/canvas/abstract-acrylic-canvas",
    slug: "color-block-study",
    title: "Color Block Study",
    description:
      "Clean, hard-edge geometric blocks of contrasting modern colors.",
    price: 190,
    discountedPrice: 152,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Opaque matte acrylics on stretched canvas.
- **Dimensions:** 20" x 24" (50cm x 60cm).
- **Frame:** Slim natural maple wood frame.
- **Finish:** Dead-matte to eliminate glare.

### Precision Geometry
"Color Block Study" is an exercise in restraint and balance. Using precision masking techniques, the artist lays down perfectly straight, hard-edged blocks of contrasting, muted modern colors—mustard, sage green, and terra cotta. The dead-matte finish ensures the blocks appear as solid fields of color, completely free of distracting reflections.

### Maintenance Instructions
1. **Matte Scuffing:** Matte varnishes are beautiful but can show physical scuffs if brushed against a hard object. Handle the canvas only by its maple frame.
2. **Cleaning:** Dust gently with a clean, dry feather duster. Do not rub with damp cloths.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
        alt: "Color Block Study",
        color: "Mustard/Sage",
        desc: "Frontal view of the perfectly balanced, muted geometric color blocks.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Hard Edge",
        color: "Terra Cotta/Sage",
        desc: "Extreme close-up showing the razor-sharp transition between two color fields.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Maple Frame",
        color: "Light Wood",
        desc: "Detail of the slim, minimalist natural maple wood framing.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Home Office",
        color: "Bright Neutral",
        desc: "Displayed neatly above a desk in a bright, modern home office.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Matte Finish",
        color: "Flat",
        desc: "Angled shot proving the completely glare-free nature of the matte varnish.",
      },
    ],
  },
  {
    id: "aac-003",
    category: "/c/canvas/abstract-acrylic-canvas",
    slug: "fluid-pour-galaxy",
    title: "Fluid Pour Galaxy",
    description:
      "Acrylic pour technique creating mesmerizing, cellular galaxy patterns.",
    price: 240,
    discountedPrice: 192,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Acrylic pouring medium and silicone oil on canvas board.
- **Dimensions:** 24" x 24" (60cm x 60cm) Square.
- **Frame:** Unframed, painted edges.
- **Finish:** Ultra-high gloss epoxy resin.

### The Science of Fluid Art
This piece relies on physics rather than brushwork. The artist mixes deep space blues, purples, and metallics with specialized pouring mediums and drops of silicone oil. When poured onto the canvas, the different densities of the paints fight against each other, organically creating incredible, circular "cells" that closely resemble the swirling gases of a distant nebula.

### Care & Mounting
1. **Resin Reflection:** The entire canvas board is coated in a thick, mirror-like layer of epoxy resin. Treat this piece like glass. Dust only with a soft microfiber cloth to prevent micro-scratches.
2. **Mounting:** Canvas boards are rigid and heavier than stretched fabric. Use the pre-installed heavy-duty sawtooth hanger on a secure wall nail.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&q=80",
        alt: "Fluid Pour Galaxy",
        color: "Purple/Blue",
        desc: "Full square view of the swirling, cellular galaxy patterns.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Cell Detail",
        color: "Magenta/Cyan",
        desc: "Macro shot detailing the incredible circular 'cells' created by the silicone oil.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Resin Shine",
        color: "Reflective",
        desc: "Angled view showing the thick, glass-like reflection of the epoxy resin finish.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Space",
        color: "Eclectic",
        desc: "Hung in an eclectic, colorful living space as a vibrant focal point.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Board Edge",
        color: "Resin Drips",
        desc: "Side profile showing the beautiful, frozen resin drips along the rigid edge of the board.",
      },
    ],
  },
  {
    id: "aac-004",
    category: "/c/canvas/abstract-acrylic-canvas",
    slug: "muted-earth-strokes",
    title: "Muted Earth Strokes",
    description:
      "Broad, sweeping brushstrokes using a palette of sage, terracotta, and ochre.",
    price: 260,
    discountedPrice: 208,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Heavy body acrylics on stretched linen.
- **Dimensions:** 30" x 40" (76cm x 101cm) Horizontal.
- **Frame:** Solid walnut wood floater frame.
- **Texture:** Highly visible, wide brush bristle textures.

### Organic Flow
Designed for spaces that crave calm and grounding elements. The artist restricted their palette entirely to natural earth tones—sage greens, warm ochres, and deep terracotta. Using a massive, 4-inch wide bristle brush, the paint is dragged across the rough linen in sweeping, uninterrupted horizontal arcs, leaving behind highly visible, textural bristle grooves.

### Product Care
1. **Dusting Ridges:** The heavy brushstrokes leave deep, textured grooves in the acrylic paint. Dust weekly with a soft bristle brush, moving horizontally along the grain of the paint strokes.
2. **Frame Care:** The beautiful walnut floater frame can be wiped with a dry cloth or treated with a light wood wax yearly.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
        alt: "Earth Strokes",
        color: "Sage/Terracotta",
        desc: "Full horizontal view of the broad, sweeping earth-toned arcs.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Bristle Texture",
        color: "Ochre",
        desc: "Extreme close-up showing the deep grooves left by the massive 4-inch brush.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Walnut Frame",
        color: "Dark Wood",
        desc: "Detail of the elegant, dark walnut wood floater frame surrounding the canvas.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Dining Room",
        color: "Warm Organic",
        desc: "Displayed perfectly in a warm, organic-modern dining room setup.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Linen Weave",
        color: "Brown",
        desc: "Macro shot revealing the rough, premium linen canvas peeking through the thin edges of the paint.",
      },
    ],
  },
  {
    id: "aac-005",
    category: "/c/canvas/abstract-acrylic-canvas",
    slug: "shattered-glass",
    title: "Shattered Glass",
    description:
      "Sharp, intersecting lines creating a fragmented, stained-glass aesthetic.",
    price: 220,
    discountedPrice: 176,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Acrylics and black dimensional liner on canvas.
- **Dimensions:** 24" x 30" (60cm x 76cm) Vertical.
- **Frame:** Frameless, painted black edges.
- **Finish:** High-gloss varnish.

### Fragmented Reality
This dynamic abstract piece mimics the jagged, chaotic beauty of a shattered window. The artist lays down chaotic blocks of contrasting cool and warm colors. Once dry, a specialized, thick black dimensional paint is piped directly onto the canvas, forming raised, tactile ridges that intersect and "shatter" the color fields beneath, much like the lead lines in stained glass.

### Handling & Care
1. **Raised Ridges:** The black intersecting lines are physically raised off the canvas. Be careful not to scrape the painting against hard edges when moving it, as the raised lines can be chipped.
2. **Gloss Cleaning:** The high-gloss finish makes the colors pop beautifully but will show dust easily. Wipe gently with a dry microfiber cloth, being careful not to snag on the raised black piping.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
        alt: "Shattered Glass Abstract",
        color: "Multicolor",
        desc: "Full vertical view of the fragmented, sharply intersected color blocks.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Raised Piping",
        color: "Black/Blue",
        desc: "Macro shot showing the thick, physically raised black dimensional paint lines.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Gloss Finish",
        color: "Reflective",
        desc: "Angled view highlighting the deep, wet-look of the high gloss varnish.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Entryway Display",
        color: "Modern",
        desc: "Acting as an energetic focal point in a modern apartment entryway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Edge Finish",
        color: "Black",
        desc: "Side profile showing the clean, matte black painted edges of the unframed canvas.",
      },
    ],
  },

  // ---> Oil Painting Portraits
  {
    id: "opp-001",
    category: "/c/canvas/oil-painting-portraits",
    slug: "renaissance-revival",
    title: "Renaissance Revival",
    description:
      "A classically styled portrait mimicking the dramatic lighting of the Renaissance.",
    price: 800,
    discountedPrice: 640,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Traditional Oils on stretched linen.
- **Dimensions:** 24" x 30" (60cm x 76cm) Vertical.
- **Frame:** Heavy, ornate gold-leaf wooden frame.
- **Technique:** Chiaroscuro and multi-layer glazing.

### Masterful Lighting
This original portrait is a deliberate homage to the old masters of the Renaissance. Utilizing the *chiaroscuro* technique, the subject emerges dramatically from a near pitch-black background, lit by a single, warm directional light source. The artist spent over two months applying dozens of translucent oil glazes to achieve the hyper-realistic, glowing skin tones.

### Care & Display
1. **Museum Lighting:** To fully appreciate the dramatic contrast, display this piece in a dimly lit room with a dedicated, warm-temperature picture light positioned directly above it.
2. **Curing Time:** Oil paints cure over decades. Do not cover the painting with glass, as it needs to breathe to prevent the linseed oil from yellowing.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&q=80",
        alt: "Renaissance Portrait",
        color: "Dark/Warm Skin",
        desc: "Full vertical view of the dramatic, classic oil portrait.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Glazing Detail",
        color: "Warm Peach",
        desc: "Macro detail showing the incredibly smooth, blended oil glazes forming the skin.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Gold Frame",
        color: "Gold",
        desc: "Close-up of the ornate, heavy gold-leaf wooden framing.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Study Room",
        color: "Traditional",
        desc: "Hung as a prestigious focal point in a classic, dark-wood study.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Canvas Texture",
        color: "Dark Brown",
        desc: "Extreme close-up showing the oil paint seeping into the tight linen weave.",
      },
    ],
  },
  {
    id: "opp-002",
    category: "/c/canvas/oil-painting-portraits",
    slug: "modern-muse",
    title: "Modern Muse",
    description:
      "A contemporary oil portrait featuring bold colors and loose brushwork.",
    price: 650,
    discountedPrice: 520,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Alkyd-modified Oils on cotton canvas.
- **Dimensions:** 20" x 24" (50cm x 60cm).
- **Frame:** Minimalist white wooden floater frame.
- **Aesthetic:** Contemporary Expressive.

### Expressive Emotion
Breaking away from strict realism, "Modern Muse" captures the raw emotion of its subject through loose, aggressive brushstrokes and unexpected color choices. The artist weaves tones of cerulean blue and vibrant magenta directly into the skin tones, creating a vibrant, pulsing portrait that commands attention.

### Care Instructions
1. **Handling:** The loose brushwork means some paint strokes are thicker than others. Handle strictly by the frame to avoid flattening any raised oil peaks.
2. **Dusting:** Dust gently with a clean, dry feather duster. Do not use chemical cleaners on the canvas or the white floater frame.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
        alt: "Modern Muse",
        color: "Multicolor",
        desc: "Frontal view of the bold, colorful expressive portrait.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Brushstroke Detail",
        color: "Magenta/Blue",
        desc: "Close-up showing the aggressive, visible brushstrokes and unexpected colors.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Floater Frame",
        color: "White",
        desc: "Detail of the slim, modern white wooden floater frame.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Loft Display",
        color: "Bright",
        desc: "Displayed vividly against a stark white wall in a modern loft.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Varnish Sheen",
        color: "Reflective",
        desc: "Angled view demonstrating the protective satin varnish over the oils.",
      },
    ],
  },
  {
    id: "opp-003",
    category: "/c/canvas/oil-painting-portraits",
    slug: "the-elder",
    title: "The Elder",
    description:
      "An incredibly detailed, hyper-realistic portrait capturing the wisdom of old age.",
    price: 950,
    discountedPrice: 760,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Fine Oils on triple-primed smooth linen.
- **Dimensions:** 30" x 30" (76cm x 76cm) Square.
- **Frame:** Distressed walnut gallery frame.
- **Style:** Hyper-realism.

### Uncompromising Detail
"The Elder" is a breathtaking achievement in hyper-realism. The artist used zero-point detail brushes to render every single wrinkle, age spot, and stray hair. Painted on ultra-smooth, triple-primed linen, there is almost no canvas weave visible, making the painting look uncannily like a high-definition photograph from afar, only revealing its painted nature upon close inspection.

### Preservation Guidelines
1. **Sunlight Defense:** Hyper-realistic oils rely on incredibly subtle, thin layers of pigment. Direct sunlight will permanently bleach these delicate layers, washing out the shadows. Hang in a shaded, climate-controlled room.
2. **Cleaning:** Do not wipe the canvas surface. Use a soft blower to remove dust.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
        alt: "The Elder Portrait",
        color: "Warm Peach/Grey",
        desc: "Full square view of the incredibly detailed, hyper-realistic face.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Wrinkle Detail",
        color: "Skin Tone",
        desc: "Extreme macro shot showing the meticulous detailing of the skin texture and wrinkles.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Eye Detail",
        color: "Blue/Grey",
        desc: "Close-up of the highly reflective, lifelike painted eye.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Library Setting",
        color: "Dark Wood",
        desc: "Hung with reverence above a fireplace in a traditional library.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Walnut Frame",
        color: "Dark Brown",
        desc: "Detail of the distressed walnut wood frame surrounding the piece.",
      },
    ],
  },
  {
    id: "opp-004",
    category: "/c/canvas/oil-painting-portraits",
    slug: "shadow-profile",
    title: "Shadow Profile",
    description:
      "A moody side-profile painted almost entirely in varying shades of black and umber.",
    price: 500,
    discountedPrice: 400,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints on canvas.
- **Dimensions:** 18" x 24" (45cm x 60cm).
- **Frame:** Frameless, deep black painted edges.
- **Palette:** Strictly limited (Ivory Black, Burnt Umber, Titanium White).

### Subtle Silhouettes
This portrait is a masterclass in tonal restriction. By limiting the palette to just three pigments, the artist forces the viewer to focus entirely on the silhouette and the subtle transition from total darkness into shadow. It is an incredibly moody, quiet piece that works perfectly in minimalist or industrial spaces.

### Care Cautions
1. **Handling Darks:** Deep black and umber oil paints are notorious for showing the oils from human skin. If you touch the dark areas of this canvas, you will leave permanent, shiny fingerprints. Handle by the edges only.
2. **Display:** Requires strategic lighting to prevent the dark umbers from looking like a flat black void.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
        alt: "Shadow Profile",
        color: "Black/Brown",
        desc: "Frontal view of the dark, moody side-profile portrait.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Umber Detail",
        color: "Umber",
        desc: "Close-up showing the subtle, warm umber tones transitioning into black.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Canvas Weave",
        color: "Dark Grey",
        desc: "Macro shot of the thin oil layers resting over the canvas texture.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Minimalist Room",
        color: "Monochrome",
        desc: "Displayed simply on a stark white wall in an otherwise empty hallway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Painted Edge",
        color: "Black",
        desc: "Side profile showing the solid black painted edge of the frameless canvas.",
      },
    ],
  },
  {
    id: "opp-005",
    category: "/c/canvas/oil-painting-portraits",
    slug: "childhood-innocence",
    title: "Childhood Innocence",
    description:
      "Soft, blended oil paints capturing the bright eyes of a child.",
    price: 700,
    discountedPrice: 560,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Traditional Oils on fine cotton canvas.
- **Dimensions:** 24" x 24" (60cm x 60cm) Square.
- **Frame:** Light ash wood frame.
- **Varnish:** Protective matte Damar varnish.

### Soft Focus Realism
This piece relies on the "sfumato" technique—the same soft, hazy blending method used by Da Vinci. By avoiding any harsh, sharp lines in the child's face, the portrait takes on an angelic, dream-like quality. The only sharp focal points in the entire painting are the bright, reflective catches of light in the child's eyes.

### Product Care
1. **Cleaning:** Dust gently with a clean microfiber cloth.
2. **Matte Varnish:** The matte varnish eliminates glare but can be scuffed if scraped by hard objects.
3. **Environment:** Hang in a climate-controlled area to prevent the cotton canvas from stretching and sagging over the years.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        alt: "Childhood Innocence",
        color: "Soft Peach",
        desc: "Full square view of the soft, blended portrait.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Eye Catch-Light",
        color: "Blue/White",
        desc: "Extreme close-up on the sharp, detailed catch-light in the subject's eye.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Sfumato Blending",
        color: "Peach",
        desc: "Detail showing the hazy, soft-focus blending of the skin tones.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Nursery Display",
        color: "Warm Bright",
        desc: "Hung as a serene, beautiful piece in a child's nursery.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Ash Wood Frame",
        color: "Light Wood",
        desc: "Corner detail of the light, natural ash wood framing.",
      },
    ],
  },

  // ---> Mixed Media Canvas
  {
    id: "mmc-001",
    category: "/c/canvas/mixed-media-canvas",
    slug: "newspaper-collage",
    title: "Newspaper Collage City",
    description:
      "Vintage newspaper clippings overlaid with stark black acrylic city silhouettes.",
    price: 320,
    discountedPrice: 256,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Authentic 1950s newspaper clippings, matte medium, and acrylic ink.
- **Dimensions:** 24" x 36" (60cm x 90cm).
- **Frame:** Industrial black metal frame.
- **Finish:** UV-protective archival spray fixative.

### Textural History
This is a true mixed-media collage. The artist sourced authentic, vintage newspaper clippings from the 1950s, adhering them to the canvas using a thick matte medium to form a textured, typographic background. Once dried, heavy black acrylic ink was painted over the text in the shape of a sweeping, anonymous city skyline.

### Strict Archival Care
1. **Paper Yellowing:** Although coated with a UV-protectant spray, authentic 1950s newsprint is highly acidic. It will naturally continue to yellow and brown over time, which adds to the intended vintage aesthetic.
2. **Moisture Warning:** Do not wipe this canvas with a damp cloth. The paper elements can lift or bubble if exposed to moisture. Dust only with compressed air.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
        alt: "Newspaper Collage",
        color: "Sepia/Black",
        desc: "Full view of the stark black skyline over the vintage newspaper background.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Newsprint Detail",
        color: "Sepia",
        desc: "Macro shot showing the authentic, legible typography from the 1950s clippings.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Acrylic Contrast",
        color: "Black",
        desc: "Close-up detailing the heavy black acrylic painted directly over the paper texture.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Loft Wall",
        color: "Industrial",
        desc: "Displayed in an industrial loft against an exposed brick wall.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Metal Frame",
        color: "Black Steel",
        desc: "Detail of the sharp, industrial black metal framing.",
      },
    ],
  },
  {
    id: "mmc-002",
    category: "/c/canvas/mixed-media-canvas",
    slug: "resin-ocean-pour",
    title: "Resin Ocean Pour",
    description:
      "Canvas layered with acrylics, real sand, and thick, glossy epoxy resin waves.",
    price: 410,
    discountedPrice: 328,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1518833989345-77bba96b6534?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Marine-grade epoxy resin, acrylic paints, and natural beach sand.
- **Dimensions:** 20" x 40" (50cm x 101cm) Horizontal.
- **Base:** Rigid birchwood panel (prevents resin cracking).
- **Finish:** High-gloss, 3D wave lacing.

### Coastal Escapism
This piece brings the actual beach into your home. The artist glued natural, coarse beach sand to the bottom half of the board. The top half features multiple poured layers of tinted blue epoxy resin. A heat gun is used to aggressively blow white resin across the blue, creating realistic, foamy 3D wave "lacing" that physically crashes onto the sand.

### Resin Care & Mounting
1. **Weight:** The birchwood board and heavy resin make this piece weigh approximately 16 lbs. Use the provided heavy-duty D-rings anchored into wall studs.
2. **Scratching:** The epoxy resin is glass-like and will show micro-scratches if wiped with rough materials. Use only a dedicated, soft microfiber cloth to polish it.
3. **Sand Shedding:** A few loose grains of sand may shed during unboxing. This is normal and will stop once hung.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1518833989345-77bba96b6534?w=800&q=80",
        alt: "Resin Ocean",
        color: "Blue/Tan",
        desc: "Full horizontal view of the resin waves crashing onto the real sand.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Wave Lacing",
        color: "White/Blue",
        desc: "Macro shot of the intricate, foamy resin cell lacing created by the heat gun.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Sand Texture",
        color: "Tan",
        desc: "Close-up showing the real, coarse beach sand adhered to the board.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Coastal Home",
        color: "Bright",
        desc: "Hung beautifully above a white credenza in a coastal-themed home.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Resin Depth",
        color: "Reflective",
        desc: "Angled view showing the thick, glass-like depth of the layered epoxy.",
      },
    ],
  },
  {
    id: "mmc-003",
    category: "/c/canvas/mixed-media-canvas",
    slug: "fabric-and-paint",
    title: "Fabric & Paint Abstract",
    description:
      "Strips of raw linen glued to canvas and integrated into a painted abstract design.",
    price: 290,
    discountedPrice: 232,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Raw linen fabric strips, heavy modeling paste, and acrylics.
- **Dimensions:** 30" x 30" (76cm x 76cm) Square.
- **Frame:** Unframed gallery wrap.
- **Aesthetic:** Highly textural, organic modernism.

### Sculpting with Textiles
In this highly tactile mixed-media piece, the artist ripped long strips of raw, unprimed linen and adhered them in chaotic, folding patterns across the canvas using heavy modeling paste. Once rigid, the entire chaotic, 3D surface was painted with sweeping strokes of muted greys and warm ochres, turning the fabric into a permanent sculptural element.

### Care Instructions
1. **Dust Trapping:** The folded, rigid fabric strips create deep pockets that will trap dust. You must use compressed air or a soft makeup brush to clean inside the textile folds.
2. **Handling:** Although the fabric is coated in modeling paste, the sharp, rigid edges can be snapped if crushed. Handle carefully by the rear stretcher bars.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
        alt: "Fabric Abstract",
        color: "Grey/Ochre",
        desc: "Full square view of the chaotic, fabric-textured abstract painting.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Fabric Folds",
        color: "Grey",
        desc: "Extreme close-up showing the ripped linen strips protruding from the canvas.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Paint Integration",
        color: "Ochre",
        desc: "Macro shot detailing how the acrylic paint rests on the rough fabric weave.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Setting",
        color: "Neutral",
        desc: "Serving as a highly textural focal point in an ultra-modern living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Gallery Edge",
        color: "Grey",
        desc: "Side profile showing the fabric folds wrapping around the edge of the canvas.",
      },
    ],
  },
  {
    id: "mmc-004",
    category: "/c/canvas/mixed-media-canvas",
    slug: "cyberpunk-circuitry",
    title: "Cyberpunk Circuitry",
    description:
      "Real salvaged computer parts embedded into a darkly painted sci-fi canvas.",
    price: 380,
    discountedPrice: 304,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Salvaged silicon motherboards, copper wire, epoxy, and acrylics.
- **Dimensions:** 24" x 36" (60cm x 90cm) Vertical.
- **Base:** Thick, rigid MDF board (canvas fabric cannot support the weight).
- **Frame:** Metallic gunmetal floater frame.

### Upcycled Sci-Fi
"Cyberpunk Circuitry" is the ultimate piece of upcycled industrial art. The artist dismantled broken computers and permanently epoxied real motherboards, processors, and exposed copper wiring directly onto the board. The entire arrangement was then painted over with dark, metallic acrylics, leaving the sharp, geometric textures of the microchips to catch the light in a striking, dystopian aesthetic.

### Extreme Care & Safety
1. **Sharp Edges:** This artwork contains actual sheared metal, clipped wires, and fiberglass boards. **It has incredibly sharp edges.** Keep well out of reach of children.
2. **Dusting:** Do NOT use a cloth to clean this. It will snag instantly on the circuitry and tear. You must use a can of compressed air to blow dust out of the microchips.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        alt: "Circuitry Art",
        color: "Metallic Dark Grey",
        desc: "Full vertical view of the dark, cyberpunk motherboard collage.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Microchip Detail",
        color: "Dark Silver",
        desc: "Extreme macro shot showing the metallic paint covering an actual computer processor.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Copper Wire",
        color: "Copper/Black",
        desc: "Close-up of exposed copper wires weaving through the painted motherboards.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Gaming Room",
        color: "Neon",
        desc: "Displayed aggressively in a dark gaming room lit by neon LEDs.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Gunmetal Frame",
        color: "Gunmetal",
        desc: "Detail of the sleek, metallic gunmetal floating frame surrounding the board.",
      },
    ],
  },
  {
    id: "mmc-005",
    category: "/c/canvas/mixed-media-canvas",
    slug: "metallic-leaf-forest",
    title: "Metallic Leaf Forest",
    description:
      "Painted birch trees accented with authentic copper and silver leafing.",
    price: 350,
    discountedPrice: 280,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Acrylics, texture paste, and authentic Copper and Silver leaf.
- **Dimensions:** 30" x 40" (76cm x 101cm) Horizontal.
- **Frame:** Solid white oak floating frame.
- **Finish:** Satin varnish over paint, proprietary sealant over metals.

### The Shimmering Grove
This mixed-media forest scene relies on physical texture and high reflectivity. The artist used texture paste to build up the peeling bark of the birch trees. Instead of using standard metallic paints, the autumn leaves and peeling bark are accented with hand-applied, authentic copper and silver leaf flakes. When lit, the painting shimmers and flashes dynamically.

### Care & Display
1. **Oxidation Prevention:** The copper leaf has been sealed, but if the canvas is kept in a highly humid environment, the copper may eventually develop a green patina. Keep indoors in a dry area.
2. **Lighting:** To fully realize the beauty of the metallic leaf, hang this canvas opposite a window or beneath a strong spotlight.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80",
        alt: "Metallic Forest",
        color: "White/Copper",
        desc: "Full horizontal view of the birch trees and shimmering metallic leaves.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Copper Leaf Detail",
        color: "Copper",
        desc: "Macro detail of the crinkled, authentic copper leaf applied to the canvas.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Bark Texture",
        color: "White/Silver",
        desc: "Close-up showing the raised texture paste and silver leaf forming the birch bark.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Space",
        color: "Warm",
        desc: "Hung beautifully above a light-colored sofa in a bright living room.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Oak Frame",
        color: "Light Wood",
        desc: "Detail of the solid white oak floating frame bordering the canvas.",
      },
    ],
  },

  // ---> Textured Palette Knife Art
  {
    id: "pka-001",
    category: "/c/canvas/palette-knife-art",
    slug: "chunky-florals",
    title: "Chunky Florals",
    description:
      "Extremely thick impasto technique making the flower petals leap off the canvas.",
    price: 280,
    discountedPrice: 224,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Ultra-heavy body acrylics and modeling paste.
- **Dimensions:** 24" x 24" (60cm x 60cm) Square.
- **Frame:** Unframed, with white painted gallery-wrapped edges.
- **Texture:** Extreme 3D impasto (protruding up to 1 inch).

### Sculpting with Paint
This is not painted; it is sculpted. The artist mixes acrylics with heavy modeling paste, using large palette knives and trowels to apply massive, unblended chunks of pink, yellow, and white paint directly to the canvas. The resulting flower petals physically leap off the board, creating severe, dramatic shadows.

### Strict Care Warnings
1. **Extreme Fragility:** The thick peaks of paint are brittle once dry. **Do not press or lean anything against the front of this canvas**, or the 3D petals will snap off.
2. **Dusting:** You cannot wipe this canvas. The rough, jagged paint chunks will snag any cloth. Use only compressed air or a very soft, dry makeup brush to clean the deep crevices.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
        alt: "Chunky Florals",
        color: "Pink/Yellow",
        desc: "Full square view of the highly textured, 3D floral painting.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Impasto Peaks",
        color: "Pink",
        desc: "Extreme side angle showing the paint peaks protruding nearly an inch off the canvas.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Knife Marks",
        color: "Yellow",
        desc: "Close-up detailing the flat, scraping marks left by the steel palette knife.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bedroom Wall",
        color: "Bright",
        desc: "Adding a massive pop of physical texture and color to a neutral bedroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Gallery Edge",
        color: "White",
        desc: "Side profile showing the clean white gallery-wrapped edge beneath the protruding paint.",
      },
    ],
  },
  {
    id: "pka-002",
    category: "/c/canvas/palette-knife-art",
    slug: "birch-tree-grove",
    title: "Birch Tree Grove",
    description:
      "Vertical knife scrapes perfectly mimicking the peeling bark of birch trees.",
    price: 310,
    discountedPrice: 248,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1513553404607-988bf2703777?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints on stretched canvas.
- **Dimensions:** 24" x 36" (60cm x 90cm) Vertical.
- **Frame:** Distressed silver wooden frame.
- **Technique:** Vertical palette knife scraping.

### The Illusion of Bark
To capture the iconic, peeling texture of white birch trees, the artist abandons brushes completely. By loading the edge of a long palette knife with titanium white and ivory black oil paint, and scraping it vertically down the canvas, the paint naturally skips and breaks. This creates a hyper-realistic, rough texture that perfectly mimics peeling tree bark.

### Care Instructions
1. **Oil Curing:** The thick patches of oil paint will take years to fully cure underneath. Do not press against the thickest white areas.
2. **Cleaning:** Dust gently with a feather duster. The scraped texture is rough and can catch on microfiber cloths.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1513553404607-988bf2703777?w=800&q=80",
        alt: "Birch Grove",
        color: "White/Grey",
        desc: "Full vertical view of the highly textured birch tree trunks.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Bark Texture",
        color: "White/Black",
        desc: "Macro shot of the skipping, scraped oil paint mimicking peeling bark.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Shadow Depth",
        color: "Grey",
        desc: "Angled view highlighting the physical shadows cast by the thick paint scrapes.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Hallway Display",
        color: "Cool Neutral",
        desc: "Hung elegantly in a well-lit hallway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Silver Frame",
        color: "Silver Wood",
        desc: "Detail of the distressed silver wooden framing matching the birch tones.",
      },
    ],
  },
  {
    id: "pka-003",
    category: "/c/canvas/palette-knife-art",
    slug: "rainy-street-lamp",
    title: "Rainy Street Lamp",
    description:
      "A classic knife-painted scene of glowing streetlights reflecting on wet pavement.",
    price: 340,
    discountedPrice: 272,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints on fine linen.
- **Dimensions:** 20" x 24" (50cm x 60cm) Vertical.
- **Frame:** Black gallery frame.
- **Varnish:** High-gloss to simulate a wet surface.

### Impressionistic Reflections
This moody, atmospheric piece relies on the flat edge of a palette knife to smear wet oil paints across the canvas. This dragging technique flawlessly simulates the blurry, streaking reflections of warm yellow street lamps bouncing off rain-slicked asphalt. The piece is finished with a high-gloss varnish, making the painting itself look permanently wet.

### Care & Usage
1. **Lighting is Critical:** Because of the high-gloss varnish and the dark composition, this painting will suffer from severe glare if placed opposite a bright window. Place it on a side wall with dedicated, angled picture lighting.
2. **Cleaning:** Wipe with a dry, clean microfiber cloth.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?w=800&q=80",
        alt: "Rainy Street",
        color: "Blue/Yellow",
        desc: "Full vertical view of the moody, blurry rainy street scene.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Reflection Detail",
        color: "Yellow/Grey",
        desc: "Close-up of the smeared, palette-knife reflections on the wet asphalt.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Gloss Wet Look",
        color: "Reflective",
        desc: "Angled view proving the wet, highly reflective nature of the gloss varnish.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Study Decor",
        color: "Moody",
        desc: "Hung in a dark, moody study or home office.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Frame Detail",
        color: "Black",
        desc: "Detail of the sleek, simple black gallery frame.",
      },
    ],
  },
  {
    id: "pka-004",
    category: "/c/canvas/palette-knife-art",
    slug: "mountain-peaks",
    title: "Rugged Mountain Peaks",
    description:
      "Sharp, angled knife strokes capturing the jagged edge of snow-capped mountains.",
    price: 290,
    discountedPrice: 232,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Heavy acrylics on canvas board.
- **Dimensions:** 24" x 18" (60cm x 45cm) Horizontal.
- **Frame:** Raw, unfinished oak wood frame.
- **Texture:** Sharp, geometric 3D impasto.

### Sculpting Stone
To capture the brutal, sharp geometry of a rocky mountain peak, the artist uses the stiff blade of a trowel to apply heavy, unblended slabs of white, grey, and deep blue paint. The paint is laid down thick and sheared off sharply, resulting in jagged, physical ridges on the canvas that mimic actual stone and snowpack.

### Care Instructions
1. **Fragile Ridges:** The geometric peaks of the paint are sharp and brittle. Handle the canvas board strictly by the oak frame to avoid chipping the 3D texture.
2. **Dusting:** Dust only with a soft makeup brush or compressed air. Cloths will tear on the sharp acrylic ridges.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        alt: "Mountain Peaks",
        color: "White/Blue",
        desc: "Full horizontal view of the jagged, textured mountain range.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Impasto Detail",
        color: "White/Grey",
        desc: "Macro shot of the sharp, trowel-sheared slabs of thick acrylic paint.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Shadow Texture",
        color: "Shadow",
        desc: "Angled view showing the deep physical shadows cast by the sharp paint peaks.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Rustic Cabin",
        color: "Warm Wood",
        desc: "Displayed beautifully in a rustic, wood-paneled cabin setting.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Oak Frame",
        color: "Raw Wood",
        desc: "Detail of the raw, unfinished oak wood frame surrounding the board.",
      },
    ],
  },
  {
    id: "pka-005",
    category: "/c/canvas/palette-knife-art",
    slug: "autumn-leaves",
    title: "Autumn Leaves",
    description:
      "Thick dollops of red and yellow paint applied directly to the canvas to form leaves.",
    price: 260,
    discountedPrice: 208,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80",
    body: `
### Artwork Specifications
- **Medium:** Oil paints on stretched canvas.
- **Dimensions:** 20" x 24" (50cm x 60cm).
- **Frame:** Minimalist gold floater frame.
- **Technique:** Pointillism via palette knife (heavy impasto).

### A Tactile Canopy
This highly textural piece relies on thousands of individual, thick dollops of cadmium red, orange, and yellow oil paint. Applied entirely with the rounded tip of a palette knife, each dollop stands off the canvas like a physical leaf. The result is a vibrant, heavy, and chaotic autumn canopy that demands to be viewed from multiple angles.

### Care & Usage Cautions
1. **Extreme Curing Time:** Because the oil paint is applied in thick, glob-like dollops, the interior of the paint will take years to fully harden. **Do not press on the leaves, as they may still be soft underneath the dried surface skin.**
2. **Dusting:** Use a soft badger-hair brush or compressed air to dislodge dust from between the thousands of individual paint peaks.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=800&q=80",
        alt: "Autumn Leaves",
        color: "Red/Orange",
        desc: "Full view of the vibrant, highly textured autumn leaf canopy.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Dollop Detail",
        color: "Yellow/Red",
        desc: "Extreme macro shot showing the thick, individual dollops of oil paint.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "3D Texture",
        color: "Orange",
        desc: "Angled side view demonstrating the extreme 3D texture protruding from the canvas.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Living Space",
        color: "Warm",
        desc: "Hung in a cozy living room, catching the light dynamically from a nearby window.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Gold Floater",
        color: "Gold",
        desc: "Detail of the elegant, slim gold floater frame protecting the edges.",
      },
    ],
  },

  // ==========================================
  // 5. POTS (/c/pots)
  // ==========================================

  // ---> Hand-Painted Terracotta Pots
  {
    id: "hpt-001",
    category: "/c/pots/hand-painted-terracotta",
    slug: "aztec-geometric-planter",
    title: "Aztec Geometric Planter",
    description:
      "A vibrant terracotta pot adorned with sharp, colorful Aztec-inspired geometric patterns.",
    price: 40,
    discountedPrice: 32,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    body: `
### Product Specifications
- **Material:** 100% natural, porous baked terracotta clay.
- **Dimensions:** 8" Top Diameter x 10" Height (20cm x 25cm). Tapers to a 6" base.
- **Finish:** Exterior hand-painted with eco-friendly acrylics, sealed with a clear matte water-resistant glaze.
- **Drainage:** Includes a pre-drilled 1-inch central drainage hole at the base.
- **Weight:** Approximately 3.5 lbs (1.6 kg).

### Craftsmanship
This planter was wheel-thrown by local artisans, sun-dried, and kiln-fired at over 1000°C to ensure structural durability. The vivid Aztec geometric patterns are painted completely freehand without stencils, ensuring every single pot is uniquely imperfect.

### Care & Usage Cautions
1. **Watering Practices:** Terracotta is naturally porous, which is great for plant roots. However, consistent moisture can slowly degrade exterior acrylic paint. **We highly recommend using a plastic nursery pot insert** inside this planter rather than potting soil directly into it.
2. **Cleaning:** Wipe the exterior gently with a damp cloth to remove dirt. Do not scrub with abrasive brushes or use harsh detergents.
3. **Climate Warning:** Suitable for indoor or covered outdoor use. Severe freezing temperatures (frost) may cause the moisture inside terracotta to expand and crack the pot. Bring indoors during winter.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
        alt: "Front View",
        color: "Terracotta/Multicolor",
        desc: "Frontal view showing the vivid hand-painted Aztec patterns.",
      },
      {
        url: "https://images.unsplash.com/photo-1416879598555-520f9f1b7470?w=800&q=80",
        alt: "Top Angle",
        color: "Terracotta",
        desc: "Top-down angled view showing the rim and the interior depth.",
      },
      {
        url: "https://images.unsplash.com/photo-1512492665322-26f6345ec468?w=800&q=80",
        alt: "Paint Detail",
        color: "Orange/Blue",
        desc: "Close-up of the brushstrokes highlighting the freehand painting technique.",
      },
      {
        url: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80",
        alt: "Lifestyle Shot",
        color: "Green",
        desc: "The pot styled on a window sill holding a lush Monstera plant.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Drainage Hole",
        color: "Terracotta",
        desc: "View of the bottom base showing the pre-drilled 1-inch drainage hole.",
      },
    ],
  },
  {
    id: "hpt-002",
    category: "/c/pots/hand-painted-terracotta",
    slug: "sunflower-burst-pot",
    title: "Sunflower Burst Pot",
    description:
      "Bright yellow sunflowers hand-painted against the natural warm orange of the terracotta clay.",
    price: 35,
    discountedPrice: 28,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Red-earth terracotta.
- **Dimensions:** 7" Diameter x 7" Height (18cm x 18cm) Cylinder.
- **Finish:** Hand-painted opaque yellow acrylics with a satin finish.
- **Drainage:** Single bottom drainage hole.

### Warmth & Vitality
Designed to bring a burst of sunshine to any room, this cylindrical pot features large, stylized sunflowers painted directly onto the raw, unglazed terracotta. The natural porous texture of the clay acts as the background, creating a beautiful contrast between the smooth acrylic petals and the rough red earth.

### Care Guidelines
1. **Soil Potting:** If you choose to plant directly into the pot, be aware that mineral salts from tap water and fertilizers may eventually seep through the unglazed terracotta and form a white chalky layer (efflorescence) on the outside.
2. **Cleaning:** Dust gently. Do not soak the painted exterior in water.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        alt: "Sunflower Pot",
        color: "Yellow/Orange",
        desc: "Front view of the bright sunflower motif against the raw clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Petal Detail",
        color: "Yellow",
        desc: "Close-up detailing the opaque acrylic paint sitting on the porous clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Cylinder Shape",
        color: "Terracotta",
        desc: "Angled view showing the straight, cylindrical shape of the pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Sunlit Room",
        color: "Bright",
        desc: "Displayed holding a succulent in a brightly lit sunroom.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Drainage Detail",
        color: "Dark",
        desc: "Underside showing the central drainage hole and unglazed bottom.",
      },
    ],
  },
  {
    id: "hpt-003",
    category: "/c/pots/hand-painted-terracotta",
    slug: "ocean-wave-rim",
    title: "Ocean Wave Rim",
    description:
      "A minimalist pot featuring stylized, cresting ocean waves painted cleanly around the top rim.",
    price: 30,
    discountedPrice: 24,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Smooth-finished terracotta clay.
- **Dimensions:** 6" Top Diameter x 6" Height (15cm x 15cm).
- **Finish:** Painted rim with clear acrylic sealant over the lower unpainted section.
- **Drainage:** Includes a rubber stopper for the drainage hole if used indoors without a saucer.

### Coastal Minimalism
Perfect for smaller trailing plants like String of Pearls or Pothos, this pot embraces a minimalist aesthetic. Only the top two inches of the pot are painted with a continuous, stylized ocean wave motif in deep navy and white. The rest of the pot is left in its natural clay state, sealed slightly to give it a soft sheen.

### Maintenance
1. **Rubber Stopper:** If using the included rubber stopper to prevent water leaks indoors, ensure you line the bottom of the pot with pebbles or activated charcoal to prevent root rot.
2. **Rim Care:** When moving the pot, lift from the unpainted base to avoid scratching the painted wave rim.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80",
        alt: "Wave Rim Pot",
        color: "Navy/Terracotta",
        desc: "Front view showing the clean painted rim contrasting with the raw base.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Wave Pattern",
        color: "Navy/White",
        desc: "Macro shot of the stylized, crisp wave painting along the top.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Sealant Sheen",
        color: "Orange",
        desc: "Angled view highlighting the soft sheen of the clear sealant on the clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bathroom Styling",
        color: "Clean",
        desc: "Styled elegantly holding a fern on a modern bathroom vanity.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Rubber Stopper",
        color: "Black",
        desc: "Bottom view showing the removable rubber drainage stopper.",
      },
    ],
  },
  {
    id: "hpt-004",
    category: "/c/pots/hand-painted-terracotta",
    slug: "traditional-mandala-planter",
    title: "Traditional Mandala Planter",
    description:
      "Intricate, dot-art mandalas painted in soothing whites and blues over a terracotta base.",
    price: 50,
    discountedPrice: 35,
    discountPercent: 30,
    image:
      "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Thick-walled baked terracotta.
- **Dimensions:** 9" Diameter x 8" Height (23cm x 20cm) Bowl shape.
- **Finish:** Hand-applied 3D dot art (mandala) in white and cyan enamels.
- **Drainage:** Large 1.5-inch drainage hole for succulents/cacti.

### Meditative Dot Art
This stunning bowl-shaped planter is decorated using the ancient technique of dot art. The artisan uses specialized tools to drop perfect, raised spheres of white and cyan enamel paint onto the surface, building complex, radiating mandala patterns entirely from thousands of tiny dots. The enamel dots dry raised, giving the pot a highly tactile, beaded texture.

### Product Care
1. **Fragility of Dots:** The raised enamel dots can be chipped off if the pot is scraped against hard surfaces. Handle with extreme delicacy.
2. **Nursery Pot Recommended:** Because of the delicate exterior artwork, we heavily advise keeping your plant in its plastic nursery pot and removing it entirely to water it, returning it to the mandala planter once drained.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1610705126868-b80c5ceee079?w=800&q=80",
        alt: "Mandala Planter",
        color: "Blue/White/Orange",
        desc: "Top-angled view showing the intricate, dotted mandala pattern covering the pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Dot Texture",
        color: "White/Cyan",
        desc: "Extreme macro shot highlighting the 3D, raised texture of the enamel dots.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Bowl Shape",
        color: "Terracotta",
        desc: "Side profile demonstrating the wide, shallow bowl shape ideal for succulents.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Coffee Table",
        color: "Boho",
        desc: "Displayed as a central showpiece on a low wooden coffee table.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Drainage Hole",
        color: "Dark",
        desc: "View of the wide base and large 1.5-inch drainage hole.",
      },
    ],
  },
  {
    id: "hpt-005",
    category: "/c/pots/hand-painted-terracotta",
    slug: "tribal-art-cylinder",
    title: "Tribal Art Cylinder",
    description:
      "A tall, cylindrical pot featuring ancient tribal stick-figure motifs in striking black paint.",
    price: 45,
    discountedPrice: 36,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1544453158-64fce1eb53f3?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Hard-fired terracotta.
- **Dimensions:** 6" Diameter x 12" Height (15cm x 30cm) Tall Cylinder.
- **Finish:** Opaque black acrylic linework on raw clay.
- **Drainage:** Single drainage hole.

### Ancient Storytelling
Perfect for deep-rooted plants or tall architectural flora like Snake Plants. This tall cylinder features wrap-around tribal artwork heavily inspired by ancient cave paintings. The striking black stick-figures and geometric animals are painted boldly against the raw orange-red clay, creating a piece that feels both ancient and highly modern.

### Care Instructions
1. **Stability:** Because this is a tall, narrow cylinder, it is top-heavy once a plant is added. Place it on a flat, stable surface where it cannot be easily bumped over.
2. **Washing:** Wash exterior gently with a dry or lightly damp cloth. Avoid harsh scrubbing over the black linework.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1544453158-64fce1eb53f3?w=800&q=80",
        alt: "Tribal Cylinder",
        color: "Black/Orange",
        desc: "Full vertical view of the tall, black-painted tribal pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Linework Detail",
        color: "Black",
        desc: "Close-up showing the stark, solid black acrylic lines depicting tribal figures.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Tall Profile",
        color: "Terracotta",
        desc: "Angled shot emphasizing the height of the cylindrical shape.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Floor Display",
        color: "Minimalist",
        desc: "Styled on the floor holding a tall Snake Plant in a minimalist corner.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Base",
        color: "Raw Clay",
        desc: "Bottom showing the thick, sturdy base required for stability.",
      },
    ],
  },
  {
    id: "hpt-006",
    category: "/c/pots/hand-painted-terracotta",
    slug: "pastel-polka-dot",
    title: "Pastel Polka Dot",
    description:
      "A playful, modern take on terracotta featuring randomized soft pastel polka dots.",
    price: 25,
    discountedPrice: 20,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Lightweight porous terracotta.
- **Dimensions:** 5" Diameter x 5" Height (12.7cm x 12.7cm).
- **Finish:** Randomized pastel pink, mint, and lilac painted dots.
- **Drainage:** Single drainage hole with saucer included.

### Playful Design
A fun, lighthearted addition to a desk, nursery, or sunny windowsill. This small planter retains the breathable benefits of raw terracotta while adding a touch of modern whimsy with scattered, hand-painted pastel polka dots.

### Care & Usage
1. **Saucer Included:** This pot comes with a matching, unpainted terracotta saucer to catch water drainage.
2. **Moisture Discoloration:** When you water the plant, the raw terracotta will temporarily turn a much darker shade of brown as it absorbs moisture. This is normal and actually provides a great visual indicator of when the soil is wet.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800&q=80",
        alt: "Pastel Polka Dot Pot",
        color: "Pastel/Orange",
        desc: "Front view of the small, playful pastel dotted pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Paint Texture",
        color: "Mint/Pink",
        desc: "Macro detail of the smooth, opaque pastel paints against the rough clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Saucer Included",
        color: "Terracotta",
        desc: "Angled view showing the pot resting in its matching terracotta saucer.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Desk Decor",
        color: "Bright",
        desc: "Displayed holding a small cactus on a white office desk.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Inside Rim",
        color: "Raw Clay",
        desc: "Top-down view showing the clean, unpainted interior of the pot.",
      },
    ],
  },
  {
    id: "hpt-007",
    category: "/c/pots/hand-painted-terracotta",
    slug: "monochrome-chevron",
    title: "Monochrome Chevron",
    description:
      "Sleek black and white chevron stripes that add a contemporary edge to traditional clay.",
    price: 38,
    discountedPrice: 30,
    discountPercent: 21,
    image:
      "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Terracotta completely sealed in exterior paint.
- **Dimensions:** 7.5" Diameter x 8" Height (19cm x 20cm).
- **Finish:** Fully painted in stark black and white chevron patterns.
- **Drainage:** Single drainage hole.

### Contemporary Contrast
Unlike our other terracotta pots, this planter is completely sealed. The entire exterior is painted with stark, sharp black and white chevron stripes, completely hiding the red clay underneath. It provides a striking, contemporary geometric edge that looks incredible against the organic, wild green leaves of house plants like Ferns or Spider Plants.

### Maintenance
1. **Fully Sealed:** Because the exterior is completely painted, this pot will not breathe or sweat moisture like traditional terracotta. Adjust your watering schedule accordingly, as soil will stay wet longer.
2. **Cleaning:** The painted surface is highly durable and can be wiped down easily with a damp cloth.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
        alt: "Chevron Planter",
        color: "Black/White",
        desc: "Full frontal view of the sharp, black and white chevron patterned pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Geometric Edge",
        color: "Black/White",
        desc: "Macro shot showing the crisp, masked lines between the black and white paints.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Inside Contrast",
        color: "Orange",
        desc: "Top-angled view showing the stark contrast between the painted outside and raw terracotta inside.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Setting",
        color: "Monochrome",
        desc: "Styled in a minimalist, black-and-white living room holding a dark green plant.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Drainage",
        color: "Black",
        desc: "Underside of the pot showing the painted base and central drainage hole.",
      },
    ],
  },
  {
    id: "hpt-008",
    category: "/c/pots/hand-painted-terracotta",
    slug: "desert-cactus-motif",
    title: "Desert Cactus Motif",
    description:
      "Hand-painted green saguaro cacti dotting the circumference of this medium-sized planter.",
    price: 32,
    discountedPrice: 24,
    discountPercent: 25,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Raw porous terracotta.
- **Dimensions:** 6.5" Diameter x 6" Height (16.5cm x 15cm).
- **Finish:** Hand-painted green cacti motifs with a matte sealant over the artwork.
- **Drainage:** Single drainage hole.

### Southwestern Charm
A celebration of desert life. The artisan has hand-painted several stylized green saguaro cacti evenly around the perimeter of the raw terracotta pot. It is the perfect, thematic home for your favorite indoor succulent, aloe vera, or small prickly pear.

### Care Instructions
1. **Direct Planting:** Succulents love terracotta because it wicks moisture away from their roots, preventing rot. You can plant directly into this pot safely.
2. **Sunlight:** The acrylic paint used for the cacti is UV resistant, so it will happily sit on a bright, sunny windowsill without fading.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
        alt: "Cactus Motif Pot",
        color: "Green/Orange",
        desc: "Front view of the pot featuring the painted green saguaro cacti.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Paint Detail",
        color: "Green",
        desc: "Close-up showing the subtle shading used on the hand-painted cacti.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Terracotta Texture",
        color: "Orange",
        desc: "Macro shot of the porous, gritty natural surface of the unpainted clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Window Sill",
        color: "Sunny",
        desc: "Displayed holding a real cactus on a brightly sunlit windowsill.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Rim View",
        color: "Clay",
        desc: "Top down view emphasizing the thick, durable rim of the planter.",
      },
    ],
  },
  {
    id: "hpt-009",
    category: "/c/pots/hand-painted-terracotta",
    slug: "folk-floral-pot",
    title: "Folk Floral Pot",
    description:
      "Inspired by Eastern European folk art, featuring symmetrical, brightly colored floral designs.",
    price: 48,
    discountedPrice: 38,
    discountPercent: 21,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Fine-grained terracotta.
- **Dimensions:** 8" Diameter x 7.5" Height (20cm x 19cm) Bell shape.
- **Finish:** Vibrant, multi-color folk florals over a painted dark blue band.
- **Drainage:** Single drainage hole.

### Global Heritage
Drawing inspiration from traditional Polish and Hungarian folk embroidery, the center band of this bell-shaped pot is painted a deep navy blue, acting as the perfect canvas for the incredibly vibrant, highly symmetrical red, yellow, and white floral bursts painted over it.

### Maintenance Advice
1. **Cleaning:** The intricate floral band is sealed, but to ensure the longevity of the bright colors, avoid scrubbing the paint with hard brushes. Use a damp microfiber cloth only.
2. **Indoor Use:** While the paint is sealed, the intricate layers of folk art may peel over time if exposed to harsh, freezing outdoor weather. Keep this beauty indoors.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
        alt: "Folk Floral Pot",
        color: "Navy/Red/Yellow",
        desc: "Full frontal view of the vibrant, symmetrical folk florals on the navy band.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Floral Detail",
        color: "Multicolor",
        desc: "Extreme close-up of the delicate, hand-painted flower petals and vines.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Bell Shape",
        color: "Terracotta",
        desc: "Side profile showing the elegant, curved bell shape of the planter.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Kitchen Display",
        color: "Warm",
        desc: "Styled in a rustic kitchen holding a sprawling herb plant.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Unglazed Rim",
        color: "Orange",
        desc: "Top angled view showing the unpainted terracotta rim bordering the blue band.",
      },
    ],
  },
  {
    id: "hpt-010",
    category: "/c/pots/hand-painted-terracotta",
    slug: "sunrise-ombre-vase",
    title: "Sunrise Ombre Vase",
    description:
      "A beautiful gradient paint job transitioning from deep terracotta to a soft, sunny yellow at the top.",
    price: 55,
    discountedPrice: 44,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1582210214693-3d077c5c2fc7?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Tall terracotta vase profile.
- **Dimensions:** 6" Diameter x 11" Height (15cm x 28cm).
- **Finish:** Airbrushed ombre gradient (Terracotta to Yellow), sealed with a satin clear coat.
- **Drainage:** NO drainage hole (Vase style).

### The Ombre Effect
Rather than using a brush, the artisan uses an airbrush to apply a flawless, incredibly smooth gradient of soft yellow paint that fades seamlessly into the natural terracotta color at the base. It looks like a glowing sunrise captured on clay.

### Care & Usage Limits
1. **No Drainage:** Because this piece lacks a drainage hole, it is designed to be used as a decorative vase for dried flowers (like pampas grass) or for dropping a nursery pot into. **Do not plant directly into it**, as water will pool at the bottom and rot the roots.
2. **Waterproofing:** Terracotta is porous. If you intend to use this for fresh-cut flowers with water inside, you must place a glass or plastic watertight liner inside the vase first, otherwise the water will seep through the clay and ruin the painted gradient.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1582210214693-3d077c5c2fc7?w=800&q=80",
        alt: "Ombre Vase",
        color: "Yellow/Orange",
        desc: "Full vertical view showing the smooth sunrise ombre gradient.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gradient Detail",
        color: "Mixed",
        desc: "Macro shot detailing the seamless, airbrushed transition between the paint and raw clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Satin Finish",
        color: "Soft Reflection",
        desc: "Angled view highlighting the protective satin clear coat.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Pampas Grass",
        color: "Boho",
        desc: "Styled holding tall, dried pampas grass on a bedroom floor.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Solid Base",
        color: "Terracotta",
        desc: "Underside view confirming the solid base with no drainage hole.",
      },
    ],
  },

  // ---> Glazed Ceramic Planters
  {
    id: "gcp-001",
    category: "/c/pots/glazed-ceramic-planters",
    slug: "emerald-drip-pot",
    title: "Emerald Drip Pot",
    description:
      "Thick, dripping emerald green glaze over a solid white ceramic base.",
    price: 65,
    discountedPrice: 52,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1604168612704-dfb10ddc81e9?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Heavy-duty fired stoneware.
- **Dimensions:** 8.5" Diameter x 8" Height (21.5cm x 20cm).
- **Finish:** Dual glaze—matte white base with a thick, glossy emerald green drip edge.
- **Drainage:** Pre-drilled drainage hole with matching ceramic saucer.

### The Artisan Drip
This planter utilizes a highly controlled double-glazing technique. The pot is first dipped in a smooth, matte white glaze. Then, a viscous emerald green gloss glaze is poured thickly around the top rim. In the extreme heat of the kiln, the green glaze melts and drips down the sides, freezing permanently into thick, glassy droplets.

### Care Instructions
1. **Drip Fragility:** The frozen droplets of green glaze are thick and beautiful, but they can be chipped if struck with a hard object. Handle the rim with care.
2. **Indoor/Outdoor Safe:** Fully glazed stoneware is non-porous and highly durable. It is completely safe for direct planting and can withstand outdoor weather (though avoid freezing it while full of wet soil).
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1604168612704-dfb10ddc81e9?w=800&q=80",
        alt: "Emerald Drip Planter",
        color: "Emerald/White",
        desc: "Front view showing the striking, thick green glaze dripping over the white base.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Drip Detail",
        color: "Dark Green",
        desc: "Macro close-up of a thick, 3D droplet of frozen emerald glaze.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Saucer Inclusion",
        color: "White",
        desc: "Angled view showing the matching matte white ceramic saucer.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Patio Display",
        color: "Bright",
        desc: "Displayed outdoors on a sunny patio holding a bright floral plant.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Interior Glaze",
        color: "Gloss White",
        desc: "Top-down view proving the interior is fully glazed to prevent moisture seepage.",
      },
    ],
  },
  {
    id: "gcp-002",
    category: "/c/pots/glazed-ceramic-planters",
    slug: "cobalt-blue-cylinder",
    title: "Cobalt Blue Cylinder",
    description:
      "High-gloss, perfectly smooth cobalt blue cylinder ideal for modern house plants.",
    price: 55,
    discountedPrice: 44,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1583847268964-b28ce8f25f2b?w=800&q=80",
    body: `
### Product Specifications
- **Material:** High-fired Porcelain.
- **Dimensions:** 7" Diameter x 7" Height (18cm x 18cm) Perfect Cylinder.
- **Finish:** Ultra-high gloss Cobalt Blue glaze.
- **Drainage:** Single drainage hole (No saucer).

### Modernist Perfection
Designed for sleek, modern interiors, this planter abandons all organic textures for a flawless, machine-like perfection. The high-fired porcelain creates a perfectly straight cylinder, dipped entirely in an intense, highly reflective cobalt blue glaze that mirrors its surroundings.

### Display & Maintenance
1. **Scratch Warning:** The high-gloss glaze acts like a mirror. Do not slide the pot roughly across abrasive surfaces (like stone patios), or the glaze will show micro-scratches.
2. **Watering:** Because it lacks a saucer, ensure you water your plant in a sink, letting it drain completely before returning the cylinder to your furniture.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1583847268964-b28ce8f25f2b?w=800&q=80",
        alt: "Cobalt Cylinder",
        color: "Blue",
        desc: "Frontal view of the perfectly straight, high-gloss blue cylinder.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gloss Reflection",
        color: "Reflective",
        desc: "Macro shot demonstrating the mirror-like reflectivity of the smooth glaze.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Rim Detail",
        color: "Blue",
        desc: "Top-angled view showing the crisp, clean 90-degree edge of the rim.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Living",
        color: "Monochrome",
        desc: "Styled in a minimalist apartment holding a sleek Ficus tree.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Base",
        color: "White Porcelain",
        desc: "Underside showing the unglazed white porcelain foot ring to prevent slipping.",
      },
    ],
  },
  {
    id: "gcp-003",
    category: "/c/pots/glazed-ceramic-planters",
    slug: "crackle-glaze-bowl",
    title: "Crackle Glaze Bowl",
    description:
      "Wide, shallow planter featuring an intentional, beautiful crackle effect in the white glaze.",
    price: 70,
    discountedPrice: 56,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1497215848529-6cb8f192b005?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Thick Stoneware.
- **Dimensions:** 12" Diameter x 4" Height (30.5cm x 10cm) Shallow Bowl.
- **Finish:** Antique white with intentional crazing (crackle effect).
- **Drainage:** Three small drainage holes for superior aeration.

### The Wabi-Sabi Aesthetic
This wide, shallow bowl is designed perfectly for bonsai training, succulent gardens, or bulb plants. The glaze is formulated to shrink faster than the clay during the kiln cooling process, causing it to fracture into thousands of tiny, beautiful spiderweb cracks (known as crazing). An organic dark wash is rubbed into the glaze to highlight these cracks, honoring the Japanese *Wabi-Sabi* philosophy of finding beauty in imperfection.

### Care Instructions
1. **Crazing Expansion:** Over the years, as the pot is exposed to water and varying temperatures, the crackle network may continue to grow and expand. This is a natural, intended feature of the glaze and will not affect the structural integrity of the thick stoneware bowl.
2. **Cleaning:** Wash with warm water. Do not soak in dark liquids or dirty water, as the unsealed cracks can absorb stains.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1497215848529-6cb8f192b005?w=800&q=80",
        alt: "Crackle Bowl",
        color: "Off-White",
        desc: "Top-angled view of the wide, shallow bowl and its intricate spiderweb pattern.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Crazing Detail",
        color: "Grey/White",
        desc: "Extreme macro shot highlighting the dark wash trapped inside the glaze cracks.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Shallow Profile",
        color: "White",
        desc: "Side profile demonstrating the 4-inch shallow depth perfect for succulents.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bonsai Display",
        color: "Zen",
        desc: "Displayed outdoors holding a beautifully manicured Juniper bonsai tree.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Triple Drainage",
        color: "Dark",
        desc: "Underside showing the three small drainage holes to prevent root rot.",
      },
    ],
  },
  {
    id: "gcp-004",
    category: "/c/pots/glazed-ceramic-planters",
    slug: "two-tone-mustard",
    title: "Two-Tone Mustard",
    description:
      "Bottom half raw ceramic, top half dipped in a vibrant mustard yellow glaze.",
    price: 45,
    discountedPrice: 36,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Speckled buff clay.
- **Dimensions:** 6.5" Diameter x 7" Height (16.5cm x 18cm).
- **Finish:** Half raw clay, half vibrant mustard yellow gloss glaze.
- **Drainage:** Single bottom hole.

### Dipped Design
This pot offers a beautiful study in contrast—both in color and texture. The artisan takes the fired pot (made of a beautiful sandy-colored clay with dark speckles) and hand-dips only the top half into a vat of vibrant mustard yellow gloss glaze. The result is a crisp, wavy dividing line where the ultra-smooth yellow glass meets the gritty, raw, unglazed sand texture.

### Product Care
1. **Handling Contrast:** When moving the pot, the bottom half provides excellent grip, but be aware that the raw clay can leave slight scuffs on delicate wooden furniture. We recommend placing a felt pad or cork mat beneath it.
2. **Watering:** The top half is waterproof, but the bottom half is porous. Water seeping through the bottom half is normal and helps the soil breathe.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
        alt: "Two-Tone Mustard",
        color: "Yellow/Sand",
        desc: "Frontal view showing the striking contrast between the yellow glaze and raw clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Dip Line",
        color: "Yellow/Tan",
        desc: "Macro detail of the organic, wavy line where the glossy glaze stops.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Clay Speckles",
        color: "Tan/Black",
        desc: "Extreme close-up of the raw bottom half, showing the natural dark speckles in the clay.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Bookshelf Decor",
        color: "Warm",
        desc: "Styled on a mid-century modern wooden bookshelf with a trailing plant.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Interior Glaze",
        color: "Yellow",
        desc: "Top view proving the interior is fully glazed in mustard yellow for durability.",
      },
    ],
  },
  {
    id: "gcp-005",
    category: "/c/pots/glazed-ceramic-planters",
    slug: "metallic-bronze-planter",
    title: "Metallic Bronze Planter",
    description:
      "Fired with a special glaze that gives the ceramic a reflective, metallic bronze finish.",
    price: 85,
    discountedPrice: 68,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Dark Stoneware.
- **Dimensions:** 10" Diameter x 10" Height (25.4cm x 25.4cm).
- **Finish:** Chemically reactive metallic bronze glaze.
- **Drainage:** Large drainage hole with matching saucer.

### The Illusion of Metal
This planter looks exactly like a heavy, cast-bronze cauldron, but it is actually high-fired ceramic. The artisan uses a specialized glaze heavily saturated with manganese and copper carbonates. In the kiln, these elements fuse and rise to the surface, creating a genuinely metallic, shimmering bronze finish that will not rust or tarnish like real metal.

### Care Instructions
1. **Metallic Glaze Warning:** Like all metallic ceramic glazes, this surface is highly susceptible to acidic compounds. Do not use chemical fertilizers directly on the glazed surface, and wash only with a mild, pH-neutral dish soap.
2. **Weight:** Stoneware is heavy. Coupled with soil and a large plant, this pot will be quite difficult to move. Place it in its final location before potting.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
        alt: "Bronze Planter",
        color: "Metallic Bronze",
        desc: "Full view of the shimmering, metallic bronze ceramic pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Metallic Sheen",
        color: "Bronze/Gold",
        desc: "Macro shot highlighting the genuine metallic reflectivity of the specialized glaze.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Matching Saucer",
        color: "Bronze",
        desc: "Angled view showing the pot resting securely in its matching metallic saucer.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Entryway Display",
        color: "Elegant",
        desc: "Holding a large Peace Lily in a formal, elegant home entryway.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Dark Stoneware Base",
        color: "Dark Grey",
        desc: "Underside showing the dark grey, unglazed stoneware foot ring.",
      },
    ],
  },

  // ---> Indoor Decorative Vases
  {
    id: "idv-001",
    category: "/c/pots/indoor-decorative-vases",
    slug: "tall-pampas-vase",
    title: "Tall Pampas Vase",
    description:
      "A towering, slender matte white vase designed specifically for holding tall pampas grass.",
    price: 90,
    discountedPrice: 72,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1583847268964-b28ce8f25f2b?w=800&q=80",
    body: `
### Product Specifications
- **Material:** High-fired matte porcelain.
- **Dimensions:** 4" Top Diameter x 18" Height (10cm x 45cm) Slender profile.
- **Finish:** Unglazed "bisque" matte white.
- **Drainage:** None. Designed for dry arrangements.

### Structural Elegance
This vase is an architectural statement. Standing an impressive 18 inches tall with a highly restricted neck, it is specifically engineered to hold tall, heavy-stemmed dried botanicals like Pampas grass, Eucalyptus, or dried Lotus pods perfectly upright without them flopping to the sides. The stark, unglazed matte white finish provides a clean, modern aesthetic.

### Strict Usage Warnings
1. **Not Watertight:** Because the exterior and interior are left unglazed (bisque-fired) to achieve the ultra-matte chalky look, this vase is porous. **Do not fill with water for fresh flowers**, or it will slowly seep through and ruin your furniture.
2. **Stability:** Tall, slender vases are easily tipped. Place on a sturdy floor or a wide, low credenza where it cannot be accidentally knocked over.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1583847268964-b28ce8f25f2b?w=800&q=80",
        alt: "Tall Pampas Vase",
        color: "Matte White",
        desc: "Full vertical view of the tall, slender white vase.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Bisque Texture",
        color: "White",
        desc: "Macro shot detailing the chalky, unglazed bisque porcelain texture.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Narrow Neck",
        color: "White/Shadow",
        desc: "Top-down view highlighting the restricted 4-inch neck opening.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Boho Styling",
        color: "Neutral",
        desc: "Styled on a bedroom floor holding massive, fluffy dried Pampas grass.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Weighted Base",
        color: "White",
        desc: "Side profile of the thickened base designed to lower the center of gravity.",
      },
    ],
  },
  {
    id: "idv-002",
    category: "/c/pots/indoor-decorative-vases",
    slug: "ribbed-glass-vase",
    title: "Ribbed Glass Vase",
    description: "Heavy, transparent glass vase with elegant vertical ribbing.",
    price: 60,
    discountedPrice: 48,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Heavyweight blown glass.
- **Dimensions:** 6" Diameter x 10" Height (15cm x 25cm).
- **Design:** Deep, vertical optical ribbing.
- **Drainage:** None (Fully Watertight).

### Optical Brilliance
This piece takes advantage of how glass bends light. The deep, vertical ridges act like prisms. When filled with water and placed near a light source, the ribbed glass scatters beautiful, linear refractions across your table. It is heavy, exceptionally sturdy, and perfectly suited for heavy fresh-cut floral bouquets.

### Care Instructions
1. **Cleaning the Ribs:** Hard water stains can build up inside the vertical ridges over time. Clean the interior with a bottle brush and a mixture of white vinegar and baking soda to keep the glass sparkling clear.
2. **Handling:** Always lift the vase by the base, especially when full of water. Gripping by the rim when heavy can cause the glass to crack under pressure.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80",
        alt: "Ribbed Glass Vase",
        color: "Clear",
        desc: "Frontal view of the heavy, vertically ribbed glass vase.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Optical Refraction",
        color: "Glass/Light",
        desc: "Macro detail showing how the glass ridges bend and distort the light.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Thick Base",
        color: "Clear",
        desc: "Close-up of the thick, heavy 1-inch solid glass base for stability.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Dining Centerpiece",
        color: "Bright",
        desc: "Displayed as a stunning dining centerpiece filled with fresh white tulips.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Polished Rim",
        color: "Clear",
        desc: "Angled view showing the smooth, polished lip of the vase opening.",
      },
    ],
  },
  {
    id: "idv-003",
    category: "/c/pots/indoor-decorative-vases",
    slug: "geometric-origami-vase",
    title: "Geometric Origami Vase",
    description:
      "Ceramic vase formed with sharp folds, resembling folded origami paper.",
    price: 75,
    discountedPrice: 60,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1612282130134-49784d98ac61?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Slip-cast porcelain.
- **Dimensions:** 7" Diameter x 9" Height (18cm x 23cm).
- **Finish:** Satin pale pink glaze.
- **Drainage:** None (Fully Watertight).

### Sculptural Folds
This vase challenges the fluid nature of clay by imitating paper. Using a complex, multi-part slip-casting mold, the porcelain is formed with razor-sharp creases and geometric, faceted planes that mimic Japanese origami. The soft, satin pink glaze ensures the light catches every sharp geometric fold beautifully.

### Product Care
1. **Dusting Facets:** The sharp creases can trap dust in the "valleys" of the design. Wipe down occasionally with a damp microfiber cloth to keep the facets looking crisp.
2. **Floral Styling:** The highly structured, modern look of this vase pairs best with minimalist or exotic botanicals—think single Monstera leaves, Birds of Paradise, or simple Cherry Blossom branches rather than chaotic wildflower bouquets.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1612282130134-49784d98ac61?w=800&q=80",
        alt: "Origami Vase",
        color: "Satin Pink",
        desc: "Front view of the faceted, origami-folded ceramic vase.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Geometric Folds",
        color: "Pink/Shadow",
        desc: "Macro shot highlighting the razor-sharp creases and the shadows they cast.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Satin Glaze",
        color: "Soft Pink",
        desc: "Angled view demonstrating the smooth, low-reflection satin pink glaze.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Modern Decor",
        color: "Minimalist",
        desc: "Styled cleanly on a floating shelf holding a single green tropical leaf.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Glazed Interior",
        color: "Pink",
        desc: "Top down view showing the fully glazed, watertight interior.",
      },
    ],
  },
  {
    id: "idv-004",
    category: "/c/pots/indoor-decorative-vases",
    slug: "matte-black-jug",
    title: "Matte Black Jug",
    description:
      "A rustic, farmhouse-style jug handle vase finished in sleek matte black.",
    price: 50,
    discountedPrice: 40,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Coarse Stoneware.
- **Dimensions:** 8" Base Diameter x 10" Height (20cm x 25cm).
- **Design:** Classic jug silhouette with an integrated side handle.
- **Finish:** Dead-matte black exterior, gloss black interior.
- **Drainage:** None (Watertight).

### Rustic meets Modern
This vase takes a traditional, antique farmhouse silhouette—the handled pouring jug—and modernizes it entirely with a stark, textureless matte black finish. It is heavy, grounded, and serves as a powerful, dark focal point when paired with brightly colored dried or fresh flowers.

### Care & Handling
1. **Handle With Care:** While the handle is fully integrated, the vase becomes extremely heavy when filled with water. Do not carry a full vase by the handle alone; support it from the bottom.
2. **Matte Black Maintenance:** The matte exterior absorbs oils from your skin and can show shiny fingerprints. Wash with degreasing dish soap to restore the perfect, flat black aesthetic.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
        alt: "Black Jug Vase",
        color: "Matte Black",
        desc: "Frontal view of the dark, rustic jug vase with its side handle.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Matte Texture",
        color: "Black",
        desc: "Macro shot of the completely flat, light-absorbing matte black exterior.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Handle Detail",
        color: "Black",
        desc: "Close-up showing the smooth integration of the pulling handle to the neck.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Farmhouse Kitchen",
        color: "Warm Rustic",
        desc: "Displayed on a kitchen island holding a bunch of bright yellow dried wheat.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Gloss Interior",
        color: "Reflective Black",
        desc: "Top angled view proving the interior is gloss-glazed for water protection.",
      },
    ],
  },
  {
    id: "idv-005",
    category: "/c/pots/indoor-decorative-vases",
    slug: "terrazzo-stone-vase",
    title: "Terrazzo Stone Vase",
    description:
      "Faux terrazzo finish featuring colorful specks set into a smooth white stone vase.",
    price: 85,
    discountedPrice: 68,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Cast Jesmonite (eco-friendly acrylic-modified cement).
- **Dimensions:** 6" Diameter x 8" Height (15cm x 20cm).
- **Finish:** Sanded smooth with exposed multi-color aggregate (Terrazzo style).
- **Drainage:** None (Watertight via interior sealant).

### Italian Terrazzo Style
Hand-cast in our studio using Jesmonite, this heavy, stone-like vase features a fun, colorful Terrazzo pattern. Chips of cured, brightly colored acrylics (mustard, navy, and rust) are mixed into the white stone base. Once cured, the artisan sands the exterior down for hours until the vase is perfectly smooth, exposing the colorful "chips" buried inside.

### Material Care Instructions
1. **Wax Coating:** The exterior of the Jesmonite is sealed with a natural beeswax to protect it from stains. If water splashes on the outside, wipe it off so it doesn't leave a water mark on the wax.
2. **Interior Sealant:** While the inside is coated with a waterproof sealant, we do not recommend leaving stagnant water in this stone vase for weeks at a time. It is best suited for dried arrangements or dropping a glass jar inside if using fresh flowers.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
        alt: "Terrazzo Vase",
        color: "White/Multicolor",
        desc: "Front view of the smooth white vase dotted with colorful Terrazzo chips.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Terrazzo Detail",
        color: "Mixed",
        desc: "Extreme macro shot showing the sanded acrylic chips sitting flush in the stone.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Sanded Finish",
        color: "White",
        desc: "Angled view highlighting the perfectly smooth, polished exterior.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Coffee Table Decor",
        color: "Playful",
        desc: "Styled playfully on a pastel coffee table holding dried Billy Buttons.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Thick Walls",
        color: "Stone",
        desc: "Top view showing the incredibly thick, heavy walls of the cast stone.",
      },
    ],
  },

  // ---> Bohemian Patterned Pots
  {
    id: "bpp-001",
    category: "/c/pots/bohemian-patterned-pots",
    slug: "macrame-wrapped-pot",
    title: "Macrame Wrapped Pot",
    description:
      "A simple terracotta pot tightly wrapped in intricately knotted cotton macrame.",
    price: 45,
    discountedPrice: 36,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Raw Terracotta pot wrapped in 100% natural cotton cord.
- **Dimensions:** 6" Diameter x 6" Height (15cm x 15cm).
- **Design:** Hand-knotted diamond and fringe macrame cover.
- **Drainage:** Single drainage hole (Saucer not included).

### Bohemian Warmth
This pot adds immediate textural warmth to any space. A standard, highly breathable terracotta pot is permanently enclosed in a custom, hand-knotted macrame sleeve made from natural, unbleached cotton cord. It brings a soft, textile element to your indoor jungle, contrasting beautifully with the hard, green leaves of your plants.

### Strict Watering Cautions
1. **Remove to Water:** Terracotta sweats moisture. If you plant directly into this pot, the moisture and dirty water will seep through the clay and permanently stain the white cotton macrame. **You MUST use a plastic nursery insert.** Remove the plant entirely to water it in the sink, and only return it to the macrame pot once it is completely dry.
2. **Fabric Care:** If the cotton gets dusty, use a lint roller or light vacuum. Do not wash.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1502446700874-9dcb407fb44f?w=800&q=80",
        alt: "Macrame Pot",
        color: "Cream/Orange",
        desc: "Frontal view of the terracotta pot wrapped tightly in knotted cotton.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Knot Detail",
        color: "Cream",
        desc: "Macro detail of the intricate, hand-tied diamond macrame knots.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Fringe Edge",
        color: "Cream",
        desc: "Close-up of the combed cotton fringe hanging along the bottom edge.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Boho Living",
        color: "Warm Cozy",
        desc: "Displayed beautifully on a wooden stool in a bohemian bedroom setup.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Pot Integration",
        color: "Terracotta/Cotton",
        desc: "Top view showing how the macrame sleeve hugs the rim of the clay pot.",
      },
    ],
  },
  {
    id: "bpp-002",
    category: "/c/pots/bohemian-patterned-pots",
    slug: "mud-cloth-print",
    title: "Mud Cloth Print",
    description:
      "Black pot painted with striking white African mud cloth geometric patterns.",
    price: 40,
    discountedPrice: 32,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Cement-fiber blend pot.
- **Dimensions:** 7" Diameter x 7" Height (18cm x 18cm).
- **Finish:** Matte black base with raised white acrylic geometric symbols.
- **Drainage:** Single drainage hole with a rubber stopper.

### Inspired by Bogolanfini
Drawing inspiration from traditional Malian "Mud Cloth" (Bogolanfini) textiles, this planter features sharp, repetitive geometric symbols representing paths, shields, and community. The white paint is applied thickly, giving the symbols a raised, tactile feel against the stark, heavy matte black cement base.

### Care Instructions
1. **Cement Porosity:** While tougher than terracotta, cement is still slightly porous. We recommend keeping the rubber drainage stopper in place if using indoors and lining the bottom with gravel.
2. **Cleaning:** Wipe the matte black exterior with a dry cloth. Avoid scrubbing the raised white symbols to prevent chipping the paint.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
        alt: "Mud Cloth Pot",
        color: "Black/White",
        desc: "Front view showing the striking white geometric symbols on the black pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Raised Paint",
        color: "White/Black",
        desc: "Macro shot detailing the thick, raised application of the white acrylic lines.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Cement Texture",
        color: "Matte Black",
        desc: "Angled view showing the slightly gritty, industrial texture of the cement-fiber base.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Global Decor",
        color: "Eclectic",
        desc: "Styled in a globally inspired living room holding a large ZZ Plant.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Interior View",
        color: "Grey Cement",
        desc: "Top-down view showing the raw, unpainted grey cement interior.",
      },
    ],
  },
  {
    id: "bpp-003",
    category: "/c/pots/bohemian-patterned-pots",
    slug: "rattan-basket-planter",
    title: "Rattan Basket Planter",
    description:
      "A waterproof inner liner wrapped entirely in woven natural rattan.",
    price: 55,
    discountedPrice: 44,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1544453158-64fce1eb53f3?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Woven natural rattan cane over a rigid plastic core.
- **Dimensions:** 10" Diameter x 10" Height (25.4cm x 25.4cm) - Large.
- **Liner:** Built-in, non-removable waterproof PVC interior liner.
- **Drainage:** None (Cachepot style).

### Tropical Warmth
Perfect for large floor plants like Fiddle Leaf Figs or Monsteras. This is technically a "cachepot" (a decorative cover for a functional pot). The exterior is hand-woven using natural rattan cane, bringing a massive dose of tropical, bohemian warmth to your room. It hides a durable, completely waterproof plastic tub inside.

### Plant Care & Usage
1. **Cachepot System:** Because there is no drainage hole, **do not pour soil directly into this basket.** Keep your plant in its ugly plastic nursery pot, and simply drop the whole thing inside the rattan basket.
2. **Watering:** Take the plastic nursery pot out to water it. If you water it while inside the basket, stagnant water will pool in the bottom of the waterproof liner and rot your plant's roots.
3. **Rattan Care:** Keep the exterior rattan dry. If it gets wet frequently, the natural wood can develop mold.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1544453158-64fce1eb53f3?w=800&q=80",
        alt: "Rattan Planter",
        color: "Natural Wood",
        desc: "Frontal view of the tightly woven natural rattan basket planter.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Weave Detail",
        color: "Tan",
        desc: "Extreme close-up of the thick, overlapping natural cane fibers.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Waterproof Liner",
        color: "Black Plastic",
        desc: "Top-angled view showing the hidden, waterproof black PVC liner inside.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Floor Display",
        color: "Bright Boho",
        desc: "Sitting on a hardwood floor holding a massive, leafy Monstera Deliciosa.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Sturdy Base",
        color: "Wood",
        desc: "Underside showing the flat, tightly coiled rattan base for floor stability.",
      },
    ],
  },
  {
    id: "bpp-004",
    category: "/c/pots/bohemian-patterned-pots",
    slug: "sun-and-moon-boho",
    title: "Sun and Moon Boho",
    description:
      "Gold foil sun and moon designs stamped onto a matte cream ceramic pot.",
    price: 50,
    discountedPrice: 40,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Glazed Ceramic.
- **Dimensions:** 6" Diameter x 6" Height (15cm x 15cm).
- **Finish:** Matte cream base glaze with heat-stamped gold foil decals.
- **Drainage:** Single drainage hole with matching cream saucer.

### Celestial Magic
A delicate, dreamy addition to a bedroom or office. This smooth ceramic pot is coated in a velvety matte cream glaze. The artisan then uses a heated press to stamp stylized, celestial sun, moon, and star motifs onto the surface using brilliant gold foil. The gold catches the light beautifully against the soft matte background.

### Cleaning Cautions
1. **Foil Delicacy:** The gold foil decals are heat-set, but they can be scratched off if scrubbed. Wipe the exterior gently with a dry or lightly damp microfiber cloth only. Do not use chemical cleaners.
2. **Potting:** Fully glazed inside and out, making it completely waterproof and safe for direct soil planting.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80",
        alt: "Sun Moon Pot",
        color: "Cream/Gold",
        desc: "Front view of the cream pot with shining gold celestial motifs.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gold Foil Detail",
        color: "Gold",
        desc: "Macro shot of the highly reflective gold foil pressed into the matte glaze.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Saucer",
        color: "Cream",
        desc: "Angled view showing the pot resting in its matching matte cream saucer.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Nightstand Decor",
        color: "Soft Lighting",
        desc: "Styled delicately on a nightstand holding a cascading String of Hearts plant.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Glaze Contrast",
        color: "Cream",
        desc: "Close-up showing the stark contrast between the matte exterior and glossy interior.",
      },
    ],
  },
  {
    id: "bpp-005",
    category: "/c/pots/bohemian-patterned-pots",
    slug: "fringe-accent-pot",
    title: "Fringe Accent Pot",
    description:
      "A textured fabric pot featuring hanging bohemian fringe layers.",
    price: 35,
    discountedPrice: 28,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Sewn heavy-duty canvas fabric.
- **Dimensions:** 8" Diameter x 8" Height (20cm x 20cm).
- **Design:** Tiered rows of brushed cotton fringe.
- **Liner:** Flexible plastic interior lining.
- **Drainage:** None (Cachepot style fabric bag).

### Soft Textures
Breaking away from hard ceramics and heavy clays, this is a soft, pliable "plant bag." Made from thick canvas, the exterior is covered in tiered layers of combed, rust-colored cotton fringe. It brings a fun, highly tactile, 1970s bohemian aesthetic to your plant shelf.

### Usage Instructions
1. **Nursery Pot Required:** This is a fabric cover. It has a thin plastic liner to protect against light moisture, but you cannot put soil directly into it. Place your plant (in its plastic drainage pot) inside this bag.
2. **Watering:** Always remove the plant to water it. If water pools in the bottom of the fabric bag, it will eventually cause the canvas to mildew.
3. **Fringe Care:** If the fringe becomes tangled or messy, gently comb it straight using a wide-toothed hair comb.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800&q=80",
        alt: "Fringe Pot Bag",
        color: "Rust Orange",
        desc: "Frontal view of the soft fabric pot covered in tiered cotton fringe.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Fringe Detail",
        color: "Rust",
        desc: "Macro close-up of the combed, soft cotton threads forming the fringe.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Flexible Shape",
        color: "Canvas",
        desc: "Angled view showing the soft, pliable nature of the canvas fabric bag.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Shelf Styling",
        color: "Boho",
        desc: "Displayed casually on a wooden shelf next to stacked books.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Plastic Liner",
        color: "Clear Plastic",
        desc: "Top-down view revealing the protective, flexible plastic liner stitched inside.",
      },
    ],
  },

  // ---> Traditional Warli Painted Pots
  {
    id: "twp-001",
    category: "/c/pots/traditional-warli-pots",
    slug: "warli-village-dance",
    title: "Warli Village Dance",
    description:
      "Authentic white Warli figures painted dancing in a circle around a red clay pot.",
    price: 60,
    discountedPrice: 48,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Red-earth Terracotta (Matka shape).
- **Dimensions:** 8" Diameter x 7" Height (20cm x 18cm) Round belly.
- **Finish:** White acrylic paste mimicking traditional rice powder.
- **Drainage:** Single large drainage hole.

### The Tarpa Dance
Warli art is a tribal art form originating from Maharashtra, India. This pot captures the spirit of the *Tarpa Dance*, where villagers intertwine their arms in a massive, sweeping circle. The artisan paints the stick-figures completely freehand in a continuous loop around the bulging belly of the red clay pot, utilizing a thick white paste that perfectly mimics the historical rice-flour paint.

### Maintenance
1. **Raised Paint Care:** Because the white paint is thick and sits on top of the unglazed clay, it can be chipped if scrubbed. Clean the exterior only by dabbing with a dry cloth or using a soft brush.
2. **Planting:** Safe for direct soil planting. Over time, the porous terracotta will age and weather naturally, making the tribal art look even more authentic.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
        alt: "Warli Dance Pot",
        color: "Red/White",
        desc: "Front view showing the continuous circle of dancing Warli figures.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Rice Paste Detail",
        color: "White",
        desc: "Macro detail of the thick, textured white acrylic mimicking traditional rice paste.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Matka Shape",
        color: "Terracotta",
        desc: "Side profile highlighting the traditional round-bellied 'Matka' shape of the pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Indoor Jungle",
        color: "Green",
        desc: "Styled beautifully among a dense collection of indoor tropical plants.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Drainage",
        color: "Dark",
        desc: "View of the wide, sturdy base and central drainage hole.",
      },
    ],
  },
  {
    id: "twp-002",
    category: "/c/pots/traditional-warli-pots",
    slug: "harvest-festival-pot",
    title: "Harvest Festival Pot",
    description:
      "Detailed stick-figure depictions of a traditional harvest festival.",
    price: 65,
    discountedPrice: 52,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Dark brown fired stoneware.
- **Dimensions:** 9" Diameter x 8" Height (23cm x 20cm).
- **Finish:** Highly detailed white linework over a dark clay base.
- **Drainage:** Single drainage hole with saucer included.

### A Scene of Prosperity
Unlike the repeating patterns of the dance pots, this planter acts as a canvas for a full village scene. The artisan paints tiny, incredibly detailed Warli figures harvesting crops, carrying baskets, and tending to animals. The dark brown stoneware base provides incredible contrast to the bright white figures, making the story pop visibly from across the room.

### Care Instructions
1. **Stoneware Durability:** Unlike standard terracotta, this stoneware is fired much hotter, making it significantly less porous and much stronger. It is less likely to sweat moisture onto your furniture.
2. **Cleaning:** The painted figures are protected by an invisible matte sealant. You can safely wipe the exterior with a damp cloth without fear of smudging the artwork.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80",
        alt: "Harvest Festival Pot",
        color: "Dark Brown/White",
        desc: "Front view showing the intricate, story-driven harvest scene.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Detail Work",
        color: "White/Brown",
        desc: "Macro close-up of the tiny, expertly painted geometric figures carrying crops.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Dark Clay Base",
        color: "Dark Brown",
        desc: "Angled shot emphasizing the smooth, dark brown texture of the fired stoneware.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Kitchen Island",
        color: "Warm",
        desc: "Displayed prominently on a kitchen island holding a lush fern.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Saucer Base",
        color: "Dark Brown",
        desc: "View of the pot resting in its matching dark brown stoneware saucer.",
      },
    ],
  },
  {
    id: "twp-003",
    category: "/c/pots/traditional-warli-pots",
    slug: "black-and-white-warli",
    title: "Black & White Warli",
    description:
      "A modern twist using white Warli figures painted on a matte black ceramic background.",
    price: 70,
    discountedPrice: 56,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1612282130134-49784d98ac61?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Sealed Ceramic.
- **Dimensions:** 7" Diameter x 7" Height (18cm x 18cm) Cylinder.
- **Finish:** Dead-matte black background with white gloss enamel figures.
- **Drainage:** Pre-drilled bottom hole.

### Contemporary Tribal
This piece completely modernizes the ancient Warli art form. By sealing the pot in a light-absorbing, textureless matte black finish, the tribal art immediately feels contemporary. The artisan paints the geometric figures using a high-gloss white enamel, creating a stunning visual and textural contrast between the flat black void and the shiny, raised white art.

### Product Care
1. **Matte Black Maintenance:** The matte black finish is prone to showing oily fingerprints. Handle by the rim. Wash with grease-cutting dish soap to restore the flat black look.
2. **Potting Safely:** The interior is fully sealed, making it completely waterproof and safe for direct planting without fear of moisture damaging the exterior paint.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1612282130134-49784d98ac61?w=800&q=80",
        alt: "Black Warli Pot",
        color: "Black/White",
        desc: "Front view of the striking white gloss figures on the dead-matte black pot.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Gloss on Matte",
        color: "Black/Reflective",
        desc: "Macro shot highlighting the shiny white enamel sitting atop the flat black background.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Cylinder Edge",
        color: "Black",
        desc: "Angled view showing the crisp, modern cylindrical shape of the ceramic.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Monochrome Decor",
        color: "Minimalist",
        desc: "Styled perfectly in a high-contrast, black and white minimalist office.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Sealed Interior",
        color: "Black Gloss",
        desc: "Top down view showing the waterproof, gloss black painted interior.",
      },
    ],
  },
  {
    id: "twp-004",
    category: "/c/pots/traditional-warli-pots",
    slug: "animal-motif-warli",
    title: "Animal Motif Warli",
    description:
      "Features traditional geometric representations of horses, peacocks, and tigers.",
    price: 55,
    discountedPrice: 44,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Lightly grogged (textured) Terracotta.
- **Dimensions:** 6" Diameter x 6" Height (15cm x 15cm).
- **Finish:** Raw orange clay with white tribal animal motifs.
- **Drainage:** Single bottom hole.

### Nature in Geometry
Warli art is famous for reducing the natural world to its most basic geometric components (circles, triangles, and squares). This medium-sized planter focuses entirely on the wildlife of India, featuring continuous bands of exquisitely painted geometric horses, strutting peacocks, and stalking tigers.

### Usage Advice
1. **The Patina Process:** Grogged terracotta is highly porous. As you water your plant over the months, the clay will absorb minerals and develop a white, chalky patina around the base. This is highly desired by many collectors as it makes the pot look truly ancient.
2. **Cleaning:** If you dislike the natural patina, scrub the pot monthly with a stiff brush and a 1:1 mixture of water and white vinegar. Avoid scrubbing the painted white figures.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
        alt: "Animal Motif Warli",
        color: "Orange/White",
        desc: "Frontal view showing the bands of geometric tribal animals.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Tiger Detail",
        color: "White/Orange",
        desc: "Extreme macro shot of the brilliantly simple geometric tiger design.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Grogged Clay",
        color: "Textured Orange",
        desc: "Close up showing the gritty, sandy texture of the 'grogged' terracotta.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Sunroom Display",
        color: "Bright",
        desc: "Holding a bright green succulent on a sunny window ledge.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Thick Rim",
        color: "Clay",
        desc: "Top view proving the sturdy, thick-walled construction of the clay pot.",
      },
    ],
  },
  {
    id: "twp-005",
    category: "/c/pots/traditional-warli-pots",
    slug: "tall-warli-vase",
    title: "Tall Warli Vase",
    description:
      "A floor-standing vase with spiraling levels of continuous Warli storytelling.",
    price: 120,
    discountedPrice: 96,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    body: `
### Product Specifications
- **Material:** Heavy baked Terracotta floor vase.
- **Dimensions:** 8" Base Diameter x 24" Height (20cm x 60cm) - Floor standing.
- **Finish:** Raw red earth with expansive white tribal narratives.
- **Drainage:** None (Vase style).

### The Spiraling Epic
This is a museum-quality showpiece designed to stand directly on your floor. Standing two feet tall, the artisan uses the massive surface area to paint a continuous, spiraling narrative that wraps around the vase from bottom to top. It depicts the entire lifecycle of a traditional village, from planting seeds at the base to joyous festival dancing near the rim.

### Strict Care Warnings
1. **Floor Hazard:** Terracotta of this height is brittle. Do not place this vase in a high-traffic hallway or anywhere a pet/child could knock it over, as it will shatter.
2. **Not Watertight:** This is an unglazed clay vase. Do not fill it with water. It is designed to hold massive, dry branches or peacock feathers.
3. **Dusting:** Given its size and the intricate painting, dusting is best done with a dry Swiffer or feather duster.
    `,
    images: [
      {
        url: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
        alt: "Tall Warli Vase",
        color: "Terracotta/White",
        desc: "Full vertical view of the 2-foot tall spiraling floor vase.",
      },
      {
        url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=80",
        alt: "Spiral Narrative",
        color: "White/Red",
        desc: "Close-up showing the spiraling bands of the tribal village narrative.",
      },
      {
        url: "https://images.unsplash.com/photo-1605335198436-cc7d3c0a5d42?w=800&q=80",
        alt: "Vase Rim",
        color: "Terracotta",
        desc: "Angled view showing the flared, sturdy rim of the tall vase.",
      },
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35d9a9?w=800&q=80",
        alt: "Floor Styling",
        color: "Earthy",
        desc: "Styled standing on a hardwood floor, holding tall, dry willow branches.",
      },
      {
        url: "https://images.unsplash.com/photo-1590422749906-8968038b3941?w=800&q=80",
        alt: "Weighted Base",
        color: "Clay",
        desc: "Detail of the thick, heavy base designed to keep the tall vase from tipping.",
      },
    ],
  },
];

export const productsMap = globalProducts.reduce((accu, product) => {
  const modSlug = product.slug;
  accu[modSlug] = product;
  return accu;
}, {});
