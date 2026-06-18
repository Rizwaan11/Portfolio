import {
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MongoDBIcon,
  JavaScriptIcon,
  LangChainIcon,
  TailwindIcon,
  PostgreSQLIcon,
  GitIcon,
  PostmanIcon,
} from "@/components/icons/tech-icons";
import { Marquee } from "@/components/ui/marquee";
import { marqueeItems } from "@/lib/data";

const ICON_MAP = {
  REACT:       { Icon: ReactIcon,      color: "#61DAFB" },
  "NODE.JS":   { Icon: NodeIcon,       color: "#5FA04E" },
  EXPRESS:     { Icon: ExpressIcon,    color: "#cfcfcf" },
  MONGODB:     { Icon: MongoDBIcon,    color: "#47A248" },
  JAVASCRIPT:  { Icon: JavaScriptIcon, color: "#F7DF1E" },
  LANGCHAIN:   { Icon: LangChainIcon,  color: "#ef4444" },
  TAILWIND:    { Icon: TailwindIcon,   color: "#38BDF8" },
  POSTGRESQL:  { Icon: PostgreSQLIcon, color: "#4169E1" },
  GIT:         { Icon: GitIcon,        color: "#F05032" },
  POSTMAN:     { Icon: PostmanIcon,    color: "#FF6C37" },
};

export function MarqueeStrip() {
  return (
    <div
      className="border-y border-line bg-bg-elevated py-[14px]"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)",
      }}
    >
      <Marquee>
        {marqueeItems.map((item, i) => {
          const entry = ICON_MAP[item];
          return (
            <span key={i} className="flex items-center gap-8 px-5">
              <span className="flex items-center gap-2">
                {entry && <entry.Icon size={14} color={entry.color} />}
                <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-t3 uppercase whitespace-nowrap">
                  {item}
                </span>
              </span>
              <span className="text-[6px] text-accent opacity-70">◆</span>
            </span>
          );
        })}
      </Marquee>
    </div>
  );
}
