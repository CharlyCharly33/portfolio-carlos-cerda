import Image from "next/image";

type ProfilePortraitProps = {
  className?: string;
  objectPosition?: string;
};

const profilePortrait = {
  src: "/carlos-cerda-perfil.png",
  alt: "Retrato profesional de Carlos Cerda",
};

export function ProfilePortrait({
  className = "",
  objectPosition = "50% 50%",
}: ProfilePortraitProps) {
  return (
    <div className={`profile-portrait ${className}`.trim()}>
      <Image
        src={profilePortrait.src}
        alt={profilePortrait.alt}
        fill
        unoptimized
        priority
        sizes="(max-width: 520px) 70vw, 400px"
        style={{ objectFit: "contain", objectPosition }}
      />
    </div>
  );
}
