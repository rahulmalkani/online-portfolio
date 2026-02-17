"use client";

import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";
import { SocialLink } from "./social-link";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-8 pt-6 pb-6 border-t border-[#d0d7de] dark:border-[#30363d]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#57606a] dark:text-[#8b949e]">
          <SocialLink href={socialLinks.github} icon={FaGithub} hoverColor="github" />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} hoverColor="linkedin" />
          <SocialLink href={socialLinks.instagram} icon={FaInstagram} hoverColor="instagram" />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} hoverColor="email" />
        </div>
        <p className="text-center text-xs text-[#8b949e] dark:text-[#6e7681]">
          © {YEAR} {metaData.name}
        </p>
      </div>
    </footer>
  );
}
