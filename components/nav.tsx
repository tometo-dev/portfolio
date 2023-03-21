"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import closeIcon from "@/assets/icons/close.svg";
import menuIcon from "@/assets/icons/menu.svg";
import logo from "@/assets/images/logo.png";

import { Sparkles } from "./sparkles";

const navLinks = [
  { id: "about", title: "About", link: "/#about" },
  { id: "work", title: "Work", link: "/#work" },
  { id: "connect", title: "Connect", link: "/#connect" },
  // { id: "voyage", title: "Voyage", link: "/voyage" },
] as const;

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<(typeof navLinks)[number]["id"] | "">("");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`paddingX fixed top-0 z-20 flex w-full items-center ${
        scrolled ? "bg-primary" : "bg-transparent"
      } py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <Sparkles>
            <p className="cursor-pointer text-lg font-bold text-white">Sudhanshu</p>
          </Sparkles>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer text-lg font-medium ${
                active === link.id ? "text-white" : "text-secondary"
              } hover:text-white`}
            >
              <a href={link.link} onClick={() => setActive(link.id)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <Image
            src={isOpen ? closeIcon : menuIcon}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div
            className={`${
              !isOpen ? "hidden" : "flex"
            } black-gradient absolute top-20 right-0 z-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === link.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setActive(link.id);
                  }}
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
