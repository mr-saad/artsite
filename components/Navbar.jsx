"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import CartBtn from "./CartBtn";
import { categories } from "@/lib/data/products";

// const paintings = [
//   {
//     title: "Fine Art Prints",
//     href: "fine-art-prints",
//   },

//   {
//     title: "Original Paintings",
//     href: "original-paintings",
//   },
//   {
//     title: "Nature Paintings",
//     href: "nature-paintings",
//   },
//   {
//     title: "Cityscape Paintings",
//     href: "city-paintings",
//   },
//   {
//     title: "Flower Paintings",
//     href: "flower-paintings",
//   },
// ];
// const artPlates = [
//   {
//     title: "Ceramic Art Plates",
//     href: "ceramic-art-plates",
//   },
//   {
//     title: "Hand-Painted Glass Plates",
//     href: "glass-painted-plates",
//   },
//   {
//     title: "Vintage Porcelain Plates",
//     href: "vintage-porcelain-plates",
//   },
//   {
//     title: "Metal Embossed Plates",
//     href: "metal-embossed-plates",
//   },
//   {
//     title: "Custom Portrait Plates",
//     href: "custom-portrait-plates",
//   },
// ];

// const mudWork = [
//   {
//     title: "Lippan Art (Mud & Mirror)",
//     href: "lippan-art-mirror-work",
//   },
//   {
//     title: "Terracotta Murals",
//     href: "terracotta-murals",
//   },
//   {
//     title: "Clay Relief Paintings",
//     href: "clay-relief-paintings",
//   },
//   {
//     title: "Traditional Kutch Mud Work",
//     href: "kutch-mud-work",
//   },
//   {
//     title: "Organic Textured Wall Panels",
//     href: "textured-wall-panels",
//   },
// ];

// const canvas = [
//   {
//     title: "Abstract Acrylic Canvas",
//     href: "abstract-acrylic-canvas",
//   },
//   {
//     title: "Oil Painting Portraits",
//     href: "oil-painting-portraits",
//   },
//   {
//     title: "Mixed Media Canvas",
//     href: "mixed-media-canvas",
//   },
//   {
//     title: "Oversized Wall Canvas",
//     href: "oversized-wall-canvas",
//   },
//   {
//     title: "Textured Palette Knife Art",
//     href: "palette-knife-art",
//   },
// ];

// const pots = [
//   {
//     title: "Hand-Painted Terracotta Pots",
//     href: "hand-painted-terracotta",
//   },
//   {
//     title: "Glazed Ceramic Planters",
//     href: "glazed-ceramic-planters",
//   },
//   {
//     title: "Indoor Decorative Vases",
//     href: "indoor-decorative-vases",
//   },
//   {
//     title: "Bohemian Patterned Pots",
//     href: "bohemian-patterned-pots",
//   },
//   {
//     title: "Traditional Warli Painted Pots",
//     href: "traditional-warli-pots",
//   },
// ];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleOverlay = (e) => {
    if (e.target == e.currentTarget) setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "px-5 py-3 z-2 sticky top-0 bg-zinc-100",
        scrollY > 200 && "shadow",
      )}
    >
      <div className="container cursor-pointer flex gap-5 items-center justify-between mx-auto">
        {/* hamburger menu */}
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="w-7 cursor-pointer z-5 flex flex-col justify-between h-5.5 md:hidden"
        >
          <div
            className={cn(
              "w-full h-0.5 bg-black transition-all origin-left",
              isNavOpen && "rotate-45",
            )}
          ></div>
          <div
            className={cn(
              "w-1/2 self-center h-0.5 bg-black transition-all",
              isNavOpen && "opacity-0",
            )}
          ></div>
          <div
            className={cn(
              "w-full h-0.5 bg-black transition-all origin-left",
              isNavOpen && "-rotate-45",
            )}
          ></div>
        </button>
        {/* Logo Text - home link */}
        <h1>
          <Link
            href={"/"}
            className="text-3xl text-black dark:text-white font-serif"
          >
            ArtSite
          </Link>
        </h1>
        {/* Navigation Links*/}
        <NavigationMenu
          onClick={handleOverlay}
          className={cn(
            isNavOpen
              ? "visible pointer-events-auto opacity-100"
              : "invisible pointer-events-none opacity-0 ",

            "fixed md:visible md:pointer-events-auto justify-start md:justify-center items-start md:items-center md:opacity-100  transition-all duration-300 max-w-full w-full h-full z-4 bg-black/80 backdrop-blur-xs md:backdrop-blur-none md:bg-transparent left-0 top-0 md:static",
          )}
        >
          <NavigationMenuList
            className={cn(
              isNavOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0",
              "items-start transition-all md:translate-x-0 md:opacity-100 fixed top-0 left-0 md:static justify-start md:justify-center pt-20 md:pt-0 w-3/4 px-3 md:px-0 h-full flex-initial bg-zinc-100 md:items-center flex-col md:flex-row",
            )}
          >
            {categories.map((ct) => {
              return (
                <NavigationMenuItem key={ct.id}>
                  <NavigationMenuTrigger className="transition hover:text-black dark:hover:text-white">
                    {ct.title}
                  </NavigationMenuTrigger>
                  {ct.subCategories && (
                    <NavigationMenuContent>
                      <ul className="w-96">
                        {ct.subCategories.map((p) => {
                          return (
                            <li key={p.href}>
                              <Link
                                onClick={() => setIsNavOpen(false)}
                                className="transition text-zinc-500 hover:text-black dark:hover:text-white"
                                href={p.href}
                                title={p.title}
                              >
                                {p.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              );
            })}
            <NavigationMenuItem>
              <NavigationMenuLink
                render={
                  <Link onClick={() => setIsNavOpen(false)} href={"/about"}>
                    About
                  </Link>
                }
              ></NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={
                  <Link onClick={() => setIsNavOpen(false)} href={"/contact"}>
                    Contact
                  </Link>
                }
              ></NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-5">
          <CartBtn />
        </div>
      </div>
    </header>
  );
}
