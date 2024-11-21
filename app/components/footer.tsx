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
    <div className="flex text-lg gap-3.5 float-right">
      <SocialLink href={socialLinks.github} icon={FaGithub} hoverColor="github" />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} hoverColor="linkedin" />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} hoverColor="instagram" />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} hoverColor="email" />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
        {metaData.title}
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
