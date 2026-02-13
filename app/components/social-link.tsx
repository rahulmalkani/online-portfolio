export function SocialLink({ href, icon: Icon, hoverColor }) {
    const hoverClasses = {
      github: "hover:text-[#24292f] dark:hover:text-[#c9d1d9]",
      linkedin: "hover:text-[#0969da] dark:hover:text-[#58a6ff]",
      instagram: "hover:text-[#d63384] dark:hover:text-[#da4a91]",
      email: "hover:text-[#cf222e] dark:hover:text-[#f85149]",
    };
  
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 md:min-w-0 md:min-h-0 md:p-0 rounded-lg transition-all duration-200 text-[#57606a] dark:text-[#8b949e] ${hoverClasses[hoverColor]} hover:scale-110 active:scale-95 hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]`}
        aria-label={`Visit ${hoverColor} profile`}
      >
        <Icon className="w-4 h-4 shrink-0" />
      </a>
    );
  }
