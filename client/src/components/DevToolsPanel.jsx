import { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  FileText,
  Folder,
  FolderOpen,
  GitBranch,
  GitCommit,
  Terminal,
  Layers,
  Code2,
  RefreshCw,
  Copy,
  Check,
  Circle,
  CheckCircle2,
  AlertCircle,
  X,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const FILE_TREE = [
  {
    name: 'client/src',
    type: 'folder',
    defaultOpen: true,
    children: [
      { name: 'App.jsx', type: 'file', lang: 'jsx', path: 'client/src/App.jsx' },
      { name: 'main.jsx', type: 'file', lang: 'jsx', path: 'client/src/main.jsx' },
      { name: 'index.css', type: 'file', lang: 'css', path: 'client/src/index.css' },
      {
        name: 'components',
        type: 'folder',
        defaultOpen: true,
        children: [
          { name: 'Header.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/Header.jsx' },
          { name: 'Hero.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/Hero.jsx' },
          { name: 'FourPillars.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/FourPillars.jsx' },
          { name: 'HowWeDoIt.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/HowWeDoIt.jsx' },
          { name: 'WhatWeDo.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/WhatWeDo.jsx' },
          { name: 'About.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/About.jsx' },
          { name: 'Products.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/Products.jsx' },
          { name: 'Consulting.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/Consulting.jsx' },
          { name: 'Footer.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/Footer.jsx' },
          { name: 'ContactForm.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/ContactForm.jsx' },
          { name: 'Blog.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/Blog.jsx' },
          { name: 'Teams.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/Teams.jsx' },
          { name: 'ScrollProgress.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/ScrollProgress.jsx' },
          { name: 'ScrollToTop.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/ScrollToTop.jsx' },
          { name: 'AnimatedSection.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/AnimatedSection.jsx' },
          { name: 'PdfModal.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/PdfModal.jsx' },
          { name: 'DevToolsPanel.jsx', type: 'file', lang: 'jsx', path: 'client/src/components/DevToolsPanel.jsx' },
        ],
      },
      {
        name: 'pages',
        type: 'folder',
        defaultOpen: false,
        children: [
          { name: 'Home.jsx', type: 'file', lang: 'jsx', path: 'client/src/pages/Home.jsx' },
          { name: 'TrainingAcademy.tsx', type: 'file', lang: 'tsx', path: 'client/src/pages/TrainingAcademy.tsx' },
          { name: 'DevEnvironment.tsx', type: 'file', lang: 'tsx', path: 'client/src/pages/DevEnvironment.tsx' },
          { name: 'NotFound.tsx', type: 'file', lang: 'tsx', path: 'client/src/pages/NotFound.tsx' },
        ],
      },
      {
        name: 'contexts',
        type: 'folder',
        defaultOpen: false,
        children: [
          { name: 'ThemeContext.tsx', type: 'file', lang: 'tsx', path: 'client/src/contexts/ThemeContext.tsx' },
        ],
      },
      {
        name: 'hooks',
        type: 'folder',
        defaultOpen: false,
        children: [
          { name: 'use-mobile.js', type: 'file', lang: 'js', path: 'client/src/hooks/use-mobile.js' },
          { name: 'useMobile.tsx', type: 'file', lang: 'tsx', path: 'client/src/hooks/useMobile.tsx' },
        ],
      },
    ],
  },
  {
    name: 'client/public',
    type: 'folder',
    defaultOpen: false,
    children: [
      { name: 'index.html', type: 'file', lang: 'html', path: 'client/index.html' },
      { name: 'logo.png', type: 'file', lang: 'img', path: 'client/public/logo.png' },
      { name: 'logoMain.png', type: 'file', lang: 'img', path: 'client/public/logoMain.png' },
      { name: 'first.png', type: 'file', lang: 'img', path: 'client/public/first.png' },
      { name: 'second.png', type: 'file', lang: 'img', path: 'client/public/second.png' },
    ],
  },
  {
    name: 'server',
    type: 'folder',
    defaultOpen: false,
    children: [
      { name: 'index.ts', type: 'file', lang: 'ts', path: 'server/index.ts' },
    ],
  },
  { name: 'package.json', type: 'file', lang: 'json', path: 'package.json' },
  { name: 'vite.config.ts', type: 'file', lang: 'ts', path: 'vite.config.ts' },
  { name: 'tsconfig.json', type: 'file', lang: 'json', path: 'tsconfig.json' },
  { name: '.gitignore', type: 'file', lang: 'text', path: '.gitignore' },
];

const COMPONENTS = [
  { name: 'App', file: 'App.jsx', type: 'Root', status: 'active' },
  { name: 'Header', file: 'Header.jsx', type: 'Layout', status: 'active' },
  { name: 'Hero', file: 'Hero.jsx', type: 'Section', status: 'active' },
  { name: 'FourPillars', file: 'FourPillars.jsx', type: 'Section', status: 'active' },
  { name: 'HowWeDoIt', file: 'HowWeDoIt.jsx', type: 'Section', status: 'active' },
  { name: 'WhatWeDo', file: 'WhatWeDo.jsx', type: 'Section', status: 'active' },
  { name: 'About', file: 'About.jsx', type: 'Section', status: 'active' },
  { name: 'Products', file: 'Products.jsx', type: 'Section', status: 'active' },
  { name: 'Consulting', file: 'Consulting.jsx', type: 'Section', status: 'active' },
  { name: 'Footer', file: 'Footer.jsx', type: 'Layout', status: 'active' },
  { name: 'ContactForm', file: 'ContactForm.jsx', type: 'UI', status: 'active' },
  { name: 'Blog', file: 'Blog.jsx', type: 'Section', status: 'inactive' },
  { name: 'Teams', file: 'Teams.jsx', type: 'Section', status: 'active' },
  { name: 'ScrollProgress', file: 'ScrollProgress.jsx', type: 'UI', status: 'active' },
  { name: 'ScrollToTop', file: 'ScrollToTop.jsx', type: 'UI', status: 'active' },
  { name: 'AnimatedSection', file: 'AnimatedSection.jsx', type: 'Wrapper', status: 'active' },
  { name: 'PdfModal', file: 'PdfModal.jsx', type: 'UI', status: 'active' },
  { name: 'TrainingAcademy', file: 'TrainingAcademy.tsx', type: 'Page', status: 'active' },
  { name: 'DevEnvironment', file: 'DevEnvironment.tsx', type: 'Page', status: 'active' },
];

const GIT_INFO = {
  branch: 'master',
  remote: 'origin → github.com/babacode224/africybercore-website',
  status: 'clean',
  commits: [
    { hash: '6aaceeb', message: 'Initial commit: AfriCyberCore website project', date: 'Mar 25, 2026', author: 'AfriCyberCore Dev' },
  ],
};

const QUICK_COMMANDS = [
  { label: 'Start Dev Server', cmd: 'pnpm run dev', icon: '▶', color: 'text-green-400' },
  { label: 'Build for Production', cmd: 'pnpm run build', icon: '⚙', color: 'text-blue-400' },
  { label: 'Type Check', cmd: 'pnpm run check', icon: '✓', color: 'text-yellow-400' },
  { label: 'Format Code', cmd: 'pnpm run format', icon: '✦', color: 'text-purple-400' },
  { label: 'Git Status', cmd: 'git status', icon: '◉', color: 'text-orange-400' },
  { label: 'Git Push', cmd: 'git push origin master', icon: '↑', color: 'text-cyan-400' },
  { label: 'Install Deps', cmd: 'pnpm install', icon: '⬇', color: 'text-pink-400' },
  { label: 'Preview Build', cmd: 'pnpm run preview', icon: '◈', color: 'text-teal-400' },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const LANG_COLORS = {
  jsx: 'text-cyan-400',
  tsx: 'text-blue-400',
  ts: 'text-blue-300',
  js: 'text-yellow-300',
  css: 'text-pink-400',
  json: 'text-orange-300',
  html: 'text-red-400',
  img: 'text-green-400',
  text: 'text-slate-400',
};

const TYPE_COLORS = {
  Root: 'bg-purple-900/60 text-purple-300',
  Layout: 'bg-blue-900/60 text-blue-300',
  Section: 'bg-green-900/60 text-green-300',
  UI: 'bg-yellow-900/60 text-yellow-300',
  Wrapper: 'bg-orange-900/60 text-orange-300',
  Page: 'bg-pink-900/60 text-pink-300',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function FileNode({ node, level = 0 }) {
  const [open, setOpen] = useState(node.defaultOpen ?? false);
  const indent = level * 14;

  if (node.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 w-full text-left py-[3px] px-2 rounded hover:bg-slate-700/50 transition-colors group"
          style={{ paddingLeft: `${8 + indent}px` }}
        >
          <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
            {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          </span>
          <span className="text-yellow-400/80">
            {open ? <FolderOpen size={13} /> : <Folder size={13} />}
          </span>
          <span className="text-slate-300 text-xs font-medium ml-1">{node.name}</span>
        </button>
        {open && node.children && (
          <div>
            {node.children.map((child) => (
              <FileNode key={child.path || child.name} node={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  const langColor = LANG_COLORS[node.lang] || 'text-slate-400';

  return (
    <div
      className="flex items-center gap-1.5 py-[3px] px-2 rounded hover:bg-slate-700/50 transition-colors cursor-pointer group"
      style={{ paddingLeft: `${22 + indent}px` }}
      title={node.path}
    >
      <FileText size={12} className={`${langColor} shrink-0`} />
      <span className="text-slate-300 text-xs group-hover:text-white transition-colors truncate">{node.name}</span>
      <span className={`text-[10px] ml-auto shrink-0 opacity-50 ${langColor}`}>{node.lang}</span>
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={copy}
      className="p-1 rounded hover:bg-slate-600 transition-colors text-slate-400 hover:text-white"
      title="Copy command"
    >
      {copied ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
    </button>
  );
}

// ─── Tab Panels ──────────────────────────────────────────────────────────────

function FilesTab() {
  return (
    <div className="overflow-y-auto flex-1 py-1">
      {FILE_TREE.map((node) => (
        <FileNode key={node.path || node.name} node={node} />
      ))}
    </div>
  );
}

function ComponentsTab() {
  const [filter, setFilter] = useState('');
  const filtered = COMPONENTS.filter(
    (c) =>
      c.name.toLowerCase().includes(filter.toLowerCase()) ||
      c.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="px-2 py-2 border-b border-slate-700/50">
        <input
          type="text"
          placeholder="Filter components..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full bg-slate-700/50 text-slate-200 text-xs px-2 py-1.5 rounded border border-slate-600/50 focus:outline-none focus:border-blue-500/60 placeholder-slate-500"
        />
      </div>
      <div className="overflow-y-auto flex-1 py-1">
        {filtered.map((comp) => (
          <div
            key={comp.name}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-700/40 transition-colors cursor-pointer group"
          >
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${comp.status === 'active' ? 'bg-green-400' : 'bg-slate-500'}`} />
            <span className="text-slate-200 text-xs font-medium flex-1 truncate group-hover:text-white">{comp.name}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0 ${TYPE_COLORS[comp.type] || 'bg-slate-700 text-slate-300'}`}>
              {comp.type}
            </span>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-slate-500 text-xs text-center py-6">No components found</div>
        )}
      </div>
      <div className="px-3 py-2 border-t border-slate-700/50 text-[10px] text-slate-500">
        {filtered.length} of {COMPONENTS.length} components
        {' · '}
        <span className="text-green-400">{COMPONENTS.filter(c => c.status === 'active').length} active</span>
        {' · '}
        <span className="text-slate-500">{COMPONENTS.filter(c => c.status === 'inactive').length} inactive</span>
      </div>
    </div>
  );
}

function GitTab() {
  return (
    <div className="overflow-y-auto flex-1 py-2 px-3 space-y-4">
      {/* Branch info */}
      <div className="bg-slate-700/40 rounded-lg p-3 space-y-2">
        <div className="flex items-center gap-2">
          <GitBranch size={13} className="text-orange-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-200">Branch</span>
        </div>
        <div className="text-xs text-green-400 font-mono ml-5">{GIT_INFO.branch}</div>
        <div className="text-[10px] text-slate-400 ml-5 truncate">{GIT_INFO.remote}</div>
      </div>

      {/* Working tree status */}
      <div className="bg-slate-700/40 rounded-lg p-3 space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={13} className="text-green-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-200">Working Tree</span>
        </div>
        <div className="text-xs text-green-400 ml-5">✓ Nothing to commit — working tree clean</div>
      </div>

      {/* Commit history */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 px-1">
          <GitCommit size={13} className="text-blue-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-200">Recent Commits</span>
        </div>
        {GIT_INFO.commits.map((c) => (
          <div key={c.hash} className="bg-slate-700/40 rounded-lg p-3 space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-yellow-400 bg-yellow-900/30 px-1.5 py-0.5 rounded">{c.hash}</span>
              <span className="text-[10px] text-slate-400 ml-auto">{c.date}</span>
            </div>
            <div className="text-xs text-slate-200 leading-snug">{c.message}</div>
            <div className="text-[10px] text-slate-500">{c.author}</div>
          </div>
        ))}
      </div>

      {/* GitHub link */}
      <div className="bg-slate-700/40 rounded-lg p-3">
        <div className="text-[10px] text-slate-400 mb-1">Remote Repository</div>
        <a
          href="https://github.com/babacode224/africybercore-website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 break-all"
        >
          github.com/babacode224/africybercore-website
        </a>
      </div>
    </div>
  );
}

function CommandsTab() {
  const [log, setLog] = useState([
    { type: 'info', text: 'Dev server running on localhost:3000' },
    { type: 'info', text: 'HMR enabled — hot module replacement active' },
    { type: 'success', text: 'GitHub repository synced' },
  ]);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  const runCmd = (cmd) => {
    setLog((prev) => [
      ...prev,
      { type: 'cmd', text: `$ ${cmd}` },
      { type: 'info', text: `Running: ${cmd} (see terminal for output)` },
    ]);
  };

  const clearLog = () => setLog([]);

  const logColors = {
    cmd: 'text-cyan-300',
    info: 'text-slate-300',
    success: 'text-green-400',
    error: 'text-red-400',
    warn: 'text-yellow-400',
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Quick commands */}
      <div className="px-2 py-2 border-b border-slate-700/50 space-y-1">
        <div className="text-[10px] text-slate-500 px-1 mb-2 font-semibold uppercase tracking-wider">Quick Commands</div>
        <div className="grid grid-cols-1 gap-1">
          {QUICK_COMMANDS.map((qc) => (
            <div
              key={qc.cmd}
              className="flex items-center gap-2 px-2 py-1.5 rounded bg-slate-700/30 hover:bg-slate-700/60 transition-colors group"
            >
              <span className={`text-sm shrink-0 ${qc.color}`}>{qc.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-slate-200 font-medium truncate group-hover:text-white">{qc.label}</div>
                <div className="text-[10px] text-slate-500 font-mono truncate">{qc.cmd}</div>
              </div>
              <CopyButton text={qc.cmd} />
              <button
                onClick={() => runCmd(qc.cmd)}
                className="shrink-0 p-1 rounded hover:bg-slate-600 transition-colors text-slate-400 hover:text-green-400"
                title="Run"
              >
                <ChevronRight size={11} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Log output */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-700/50">
        <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Output Log</span>
        <button
          onClick={clearLog}
          className="text-[10px] text-slate-500 hover:text-red-400 transition-colors flex items-center gap-1"
        >
          <X size={10} /> Clear
        </button>
      </div>
      <div
        ref={logRef}
        className="flex-1 overflow-y-auto p-2 font-mono text-[11px] space-y-0.5 bg-slate-950/50"
      >
        {log.map((entry, i) => (
          <div key={i} className={logColors[entry.type] || 'text-slate-300'}>
            {entry.text}
          </div>
        ))}
        {log.length === 0 && (
          <div className="text-slate-600 italic">No output yet.</div>
        )}
      </div>
    </div>
  );
}

// ─── Main Panel ───────────────────────────────────────────────────────────────

const TABS = [
  { id: 'files', label: 'Files', icon: Folder },
  { id: 'components', label: 'Components', icon: Layers },
  { id: 'git', label: 'Git', icon: GitBranch },
  { id: 'commands', label: 'Terminal', icon: Terminal },
];

export default function DevToolsPanel() {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('files');
  const [width, setWidth] = useState(280);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startW = useRef(0);

  // Resize drag
  const onMouseDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
    startW.current = width;
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const delta = e.clientX - startX.current;
      const newW = Math.min(480, Math.max(220, startW.current + delta));
      setWidth(newW);
    };
    const onUp = () => {
      dragging.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  const ActiveIcon = TABS.find((t) => t.id === activeTab)?.icon || Folder;

  return (
    <>
      {/* Toggle button when panel is closed */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-1/2 right-0 -translate-y-1/2 z-[9999] bg-slate-800 hover:bg-slate-700 text-slate-200 px-1.5 py-4 rounded-l-lg shadow-xl border border-r-0 border-slate-600/60 transition-all hover:px-2.5 flex flex-col items-center gap-2"
          title="Open Dev Tools"
        >
          <Code2 size={14} />
          <ChevronLeft size={12} />
        </button>
      )}

      {/* Side panel */}
      {open && (
        <div
          className="fixed top-0 right-0 h-screen z-[9998] flex flex-col bg-slate-900 border-l border-slate-700/60 shadow-2xl"
          style={{ width: `${width}px` }}
        >
          {/* Resize handle */}
          <div
            onMouseDown={onMouseDown}
            className="absolute left-0 top-0 h-full w-1 cursor-ew-resize hover:bg-blue-500/40 transition-colors z-10"
          />

          {/* Panel header */}
          <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-700/60 bg-slate-800/80 shrink-0">
            <div className="flex items-center gap-2">
              <Code2 size={14} className="text-blue-400" />
              <span className="text-xs font-bold text-slate-100 tracking-wide">DEV TOOLS</span>
              <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded font-medium">
                LIVE
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-slate-700"
              title="Close panel"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Tab bar */}
          <div className="flex border-b border-slate-700/60 bg-slate-800/50 shrink-0">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-all border-b-2 ${
                    isActive
                      ? 'border-blue-500 text-blue-400 bg-slate-700/40'
                      : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-700/20'
                  }`}
                >
                  <Icon size={13} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {activeTab === 'files' && <FilesTab />}
            {activeTab === 'components' && <ComponentsTab />}
            {activeTab === 'git' && <GitTab />}
            {activeTab === 'commands' && <CommandsTab />}
          </div>

          {/* Footer status bar */}
          <div className="shrink-0 border-t border-slate-700/60 bg-slate-800/80 px-3 py-1.5 flex items-center gap-3 text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400">Server running</span>
            </span>
            <span>·</span>
            <span>Vite 7 + React 19</span>
            <span>·</span>
            <span className="text-blue-400 font-mono">:3000</span>
          </div>
        </div>
      )}
    </>
  );
}
