import { categories, globalProducts } from '@/lib/data/products';

// 1. Reconstruct the URL and Validate it exists
export const getCategoryData = (slugArray) => {
  // Reconstruct path: ["paintings", "nature"] -> "/c/paintings/nature"
  const targetPath = `/c/${slugArray.join('/')}`;

  // Check if it's a Top-Level Category (e.g., /c/paintings)
  const parentMatch = categories.find(cat => cat.baseRoute === targetPath);
  if (parentMatch) {
    return { type: 'parent', data: parentMatch, searchPath: targetPath };
  }

  // Check if it's a Sub-Category (e.g., /c/paintings/nature-paintings)
  for (const parent of categories) {
    const subMatch = parent.subCategories.find(sub => sub.href === targetPath);
    if (subMatch) {
      return { type: 'child', data: subMatch, searchPath: targetPath };
    }
  }

  // If we reach here, the URL is invalid (e.g. /c/fake/route)
  return null;
};

// 2. Fetch the products
export const getProductsByPath = (searchPath) => {
  // If searchPath is "/c/paintings", it grabs ALL paintings.
  // If searchPath is "/c/paintings/nature", it grabs ONLY nature paintings.
  return globalProducts.filter(product => product.category.startsWith(searchPath));
};