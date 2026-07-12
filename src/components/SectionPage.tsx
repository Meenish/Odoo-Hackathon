import type { ReactNode } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Panel, StatCard } from "@/components/Panels";

export function GenericSectionPage({
  title,
  subtitle,
  stats,
  children,
}: {
  title: string;
  subtitle: string;
  stats: Array<React.ComponentProps<typeof StatCard>>;
  children?: ReactNode;
}) {
  return (
    <AppLayout title={title} subtitle={subtitle}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
      <div className="mt-6">{children}</div>
    </AppLayout>
  );
}

export function EmptyPanel({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return (
    <Panel title={title} subtitle={description} action={action}>
      <div className="grid place-items-center rounded-lg border border-dashed border-border py-16 text-center">
        <div className="text-sm font-medium">Coming soon</div>
        <p className="mt-1 max-w-md text-xs text-muted-foreground">
          Detailed workflows for this module are being fine-tuned by the EcoSphere team.
        </p>
      </div>
    </Panel>
  );
}
