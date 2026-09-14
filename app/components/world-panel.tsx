import {
  Activity,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Network,
  ServerCog,
} from "lucide-react";

type WorldPanelProps = {
  world: "software" | "systems";
  label: string;
  title: string;
  description: string;
  areas: string[];
  experience: string;
  href: string;
  action: string;
};

export function WorldPanel({
  world,
  label,
  title,
  description,
  areas,
  experience,
  href,
  action,
}: WorldPanelProps) {
  const icons = world === "software"
    ? [
        { icon: Code2, label: "COMPONENT" },
        { icon: Braces, label: "INTERFACE" },
        { icon: Database, label: "DATA" },
      ]
    : [
        { icon: Network, label: "NETWORK" },
        { icon: ServerCog, label: "SERVICE" },
        { icon: Activity, label: "OPERATION" },
      ];

  return (
    <article className={`world-panel world-${world} reveal world-reveal`}>
      <div className="world-geometry" aria-hidden="true">
        <div className="geometry-frame" />
        {icons.map(({ icon: Icon, label }, index) => (
          <span className={`geometry-node geometry-node-${index + 1}`} key={label}>
            <Icon size={19} strokeWidth={1.4} />
            <small>{label}</small>
          </span>
        ))}
        <i className="geometry-line geometry-line-a" />
        <i className="geometry-line geometry-line-b" />
        <i className="geometry-line geometry-line-c" />
        <b className="geometry-pulse" />
      </div>
      <div className="world-connection" aria-hidden="true"><i /></div>

      <div className="world-content">
        <p className="world-label">{label}</p>
        <h2>{title}</h2>
        <p className="world-description">{description}</p>

        <ul aria-label={`Áreas de ${title}`}>
          {areas.map((area) => <li key={area}>{area}</li>)}
        </ul>

        <p className="world-experience">
          <span>EXPERIENCIA RELACIONADA</span>
          {experience}
        </p>

        <a className="world-action" href={href}>
          {action} <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
