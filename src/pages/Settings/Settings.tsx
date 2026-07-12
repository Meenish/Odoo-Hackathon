import { useState } from 'react';
import { Bell, Building2, Moon, Palette, Shield, User } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card, CardHeader } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Avatar } from '../../components/common/Avatar';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

const sections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'organization', label: 'Organization', icon: Building2 },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'security', label: 'Security', icon: Shield },
];

function Field({ label, defaultValue, type = 'text' }: { label: string; defaultValue: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-semibold text-slate-600 dark:text-slate-300">{label}</span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:focus:bg-white/10 dark:focus:ring-brand-500/10"
      />
    </label>
  );
}

function Toggle({ label, description, defaultChecked = false }: { label: string; description: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <p className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">{label}</p>
        <p className="text-[11.5px] text-slate-400">{description}</p>
      </div>
      <button
        onClick={() => setChecked((prev) => !prev)}
        aria-pressed={checked}
        aria-label={label}
        className={cn(
          'relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200',
          checked ? 'bg-brand-600' : 'bg-slate-200 dark:bg-white/10'
        )}
      >
        <span
          className={cn(
            'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200',
            checked ? 'translate-x-[22px]' : 'translate-x-0.5'
          )}
        />
      </button>
    </div>
  );
}

export default function Settings() {
  const [active, setActive] = useState('profile');
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <PageHeader eyebrow="Settings" title="Account & Platform Settings" description="Manage your profile, organization, and platform preferences." />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <Card padding="sm" className="h-fit lg:col-span-1">
          <ul className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => setActive(section.id)}
                    className={cn(
                      'flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold transition-colors',
                      active === section.id
                        ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300'
                        : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/5'
                    )}
                  >
                    <Icon size={16} /> {section.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </Card>

        <div className="lg:col-span-3 space-y-5">
          {active === 'profile' && (
            <Card>
              <CardHeader icon={<User size={18} />} title="Profile" subtitle="Your personal information" />
              <div className="mb-5 flex items-center gap-4">
                <Avatar name="Priya Sharma" size={56} />
                <div>
                  <Button variant="outline" size="sm">Change photo</Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" defaultValue="Priya Sharma" />
                <Field label="Email" defaultValue="priya.sharma@ecosphere.ai" type="email" />
                <Field label="Job title" defaultValue="Sustainability Lead" />
                <Field label="Department" defaultValue="Sustainability & ESG" />
              </div>
              <div className="mt-5 flex justify-end">
                <Button size="sm">Save changes</Button>
              </div>
            </Card>
          )}

          {active === 'organization' && (
            <Card>
              <CardHeader icon={<Building2 size={18} />} title="Organization" subtitle="Company-wide ESG configuration" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Organization name" defaultValue="EcoSphere Industries Inc." />
                <Field label="Primary region" defaultValue="North America" />
                <Field label="Fiscal year start" defaultValue="January" />
                <Field label="Reporting framework" defaultValue="GRI, CSRD, SASB" />
              </div>
              <div className="mt-5 flex justify-end">
                <Button size="sm">Save changes</Button>
              </div>
            </Card>
          )}

          {active === 'notifications' && (
            <Card>
              <CardHeader icon={<Bell size={18} />} title="Notifications" subtitle="Choose what you want to be alerted about" />
              <div className="divide-y divide-slate-100 dark:divide-white/5">
                <Toggle label="Compliance alerts" description="Regulatory deadlines and overdue reviews" defaultChecked />
                <Toggle label="Weekly digest" description="Summary of ESG performance every Monday" defaultChecked />
                <Toggle label="Challenge updates" description="Progress on gamification challenges" />
                <Toggle label="AI Copilot insights" description="Proactive alerts from EcoSphere Copilot" defaultChecked />
              </div>
            </Card>
          )}

          {active === 'appearance' && (
            <Card>
              <CardHeader icon={<Palette size={18} />} title="Appearance" subtitle="Personalize how EcoSphere looks" />
              <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-white/10">
                    <Moon size={16} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">Dark mode</p>
                    <p className="text-[11.5px] text-slate-400">Currently {theme === 'dark' ? 'enabled' : 'disabled'}</p>
                  </div>
                </div>
                <button
                  onClick={toggleTheme}
                  className={cn(
                    'relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200',
                    theme === 'dark' ? 'bg-brand-600' : 'bg-slate-200'
                  )}
                >
                  <span
                    className={cn(
                      'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200',
                      theme === 'dark' ? 'translate-x-[22px]' : 'translate-x-0.5'
                    )}
                  />
                </button>
              </div>
            </Card>
          )}

          {active === 'security' && (
            <Card>
              <CardHeader icon={<Shield size={18} />} title="Security" subtitle="Authentication is not yet configured for this preview" />
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                This build focuses on the platform experience. Sign-in, SSO, and role-based access controls will be
                added once the backend and auth provider are connected.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
