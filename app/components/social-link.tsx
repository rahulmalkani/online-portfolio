export function SocialLink({ href, icon: Icon, hoverColor }) {
    const hoverClasses = {
      github: "lg:hover:text-white",
      linkedin: "lg:hover:text-blue-500",
      instagram: "lg:hover:text-pink-500",
      email: "lg:hover:text-red-500",
    };
  
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors lg:brightness-75 lg:hover:brightness-100 duration-300 ${hoverClasses[hoverColor]}`}
      >
        <Icon />
      </a>
    );
  }