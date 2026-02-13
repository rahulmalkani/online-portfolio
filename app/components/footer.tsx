"use client";

import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";
import { SocialLink } from "./social-link";

const YEAR = new Date().getFullYear();

function SocialLinks() {
return (
    <div className="flex text-lg gap-4">
      <SocialLink href={socialLinks.github} icon={FaGithub} hoverColor="github" />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} hoverColor="linkedin" />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} hoverColor="instagram" />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} hoverColor="email" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="block lg:mt-12 mt-8 pt-8 border-t border-[#d0d7de] dark:border-[#30363d]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <small className="text-sm text-[#57606a] dark:text-[#8b949e]">
          <time>© {YEAR}</time>{" "}
          <span className="text-[#24292f] dark:text-[#c9d1d9] font-medium">{metaData.name}</span>
        </small>
        <SocialLinks />
      </div>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </footer>
  );
}
