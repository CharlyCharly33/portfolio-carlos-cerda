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
      <img
        src={profilePortrait.src}
        alt={profilePortrait.alt}
        style={{ objectPosition }}
      />
    </div>
  );
}
