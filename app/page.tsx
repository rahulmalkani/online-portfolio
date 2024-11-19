import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
  <a href={socialLinks.linkedin} target="_blank">
    <Image
      src="/profile.jpg"
      alt="Profile photo"
      className="rounded-full block lg:mt-8 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 profile-image"
      unoptimized
      width={160}
      height={160}
      priority
    />
  </a>

  {/* Typewriter Effect for Heading */}
  <h1 className="text-2xl font-extrabold tracking-tight typewriter">
      Hi, I'm Rahul!
  </h1>

  <div className="prose prose-neutral dark:prose-invert text-justify">
    <p>
      I’m a passionate Android developer with 5+ years of industry experience. Currently, I’m working at AngleOne, enhancing the Android experience to build robust financial solutions that help users manage investments with ease.
    </p>
    <p>
      My passion is in crafting intuitive, high-performance Android apps that not only function seamlessly but also deliver exceptional user experiences. I specialize in Android development with Kotlin, Jetpack Compose, and Clean Architecture. Whether working independently on feature development or collaborating with teams, my goal is always to create apps that combine functionality with delight.    </p>
    <p>
      When I’m not coding, you’ll find me chasing new adventures in the mountains, strumming my guitar to relax, or diving into deep conversations about life and technology. I also love trekking through rugged trails, seeking new challenges and inspirations along the way.
    </p>
    <p>
      Let’s connect! Feel free to reach out to me on{" "}
      <a href={socialLinks.linkedin} target="_blank">
        LinkedIn
      </a>{" "}
      or {" "}
      <a href={socialLinks.instagram} target="_blank">
      Instagram
      </a>.
    </p>

    {/* Aesthetic quote */}
    <div className="mt-4 text-center text-lg font-semibold italic text-neutral-700 dark:text-neutral-300 pt-4">
      <p>"Code. Create. Innovate."</p>
    </div>
  </div>
</section>

  );
}
