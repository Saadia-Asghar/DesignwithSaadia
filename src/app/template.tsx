/** Re-mounts on every navigation, so each page slides in. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="route">{children}</div>;
}
