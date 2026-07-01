import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, FileText, Folder, Plus, Save, RotateCcw, Play, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
}

interface EditorState {
  currentFile: string | null;
  content: string;
  isDirty: boolean;
}

const DevEnvironment: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorState>({
    currentFile: null,
    content: '',
    isDirty: false,
  });

  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src', 'src/components']));
  const [fileTree, setFileTree] = useState<FileNode[]>([]);
  const [previewUrl, setPreviewUrl] = useState('http://localhost:3000');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  // Mock file tree structure
  useEffect(() => {
    const mockTree: FileNode[] = [
      {
        name: 'src',
        path: 'src',
        type: 'folder',
        children: [
          {
            name: 'App.jsx',
            path: 'src/App.jsx',
            type: 'file',
            content: `import Header from './components/Header';\nimport Hero from './components/Hero';\n// App component code here...`,
          },
          {
            name: 'main.jsx',
            path: 'src/main.jsx',
            type: 'file',
            content: `import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './App.jsx'`,
          },
          {
            name: 'components',
            path: 'src/components',
            type: 'folder',
            children: [
              {
                name: 'Header.jsx',
                path: 'src/components/Header.jsx',
                type: 'file',
                content: `export default function Header() {\n  return <header>Header Component</header>\n}`,
              },
              {
                name: 'Hero.jsx',
                path: 'src/components/Hero.jsx',
                type: 'file',
                content: `export default function Hero() {\n  return <section>Hero Section</section>\n}`,
              },
              {
                name: 'Footer.jsx',
                path: 'src/components/Footer.jsx',
                type: 'file',
                content: `export default function Footer() {\n  return <footer>Footer Component</footer>\n}`,
              },
            ],
          },
        ],
      },
      {
        name: 'public',
        path: 'public',
        type: 'folder',
        children: [
          {
            name: 'index.html',
            path: 'public/index.html',
            type: 'file',
            content: `<!DOCTYPE html>\n<html>\n<head>\n  <title>AfriCyberCore</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>`,
          },
        ],
      },
      {
        name: 'package.json',
        path: 'package.json',
        type: 'file',
        content: `{\n  "name": "africybercore-website",\n  "version": "1.0.0",\n  "type": "module"\n}`,
      },
    ];

    setFileTree(mockTree);
  }, []);

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const openFile = (file: FileNode) => {
    if (file.type === 'file' && file.content) {
      setEditorState({
        currentFile: file.path,
        content: file.content,
        isDirty: false,
      });
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditorState({
      ...editorState,
      content: e.target.value,
      isDirty: true,
    });
  };

  const saveFile = () => {
    setEditorState({
      ...editorState,
      isDirty: false,
    });
    // In a real app, this would save to the backend
  };

  const reloadPreview = () => {
    if (iframeRef.current) {
      iframeRef.current.src = previewUrl;
    }
  };

  const renderFileTree = (nodes: FileNode[], level = 0) => {
    return (
      <div>
        {nodes.map((node) => (
          <div key={node.path}>
            <div
              className={`flex items-center gap-2 px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer ${
                level > 0 ? `ml-${level * 4}` : ''
              }`}
              style={{ paddingLeft: `${level * 16}px` }}
            >
              {node.type === 'folder' ? (
                <>
                  <button
                    onClick={() => toggleFolder(node.path)}
                    className="p-0 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"
                  >
                    {expandedFolders.has(node.path) ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  <Folder size={16} className="text-blue-500" />
                  <span className="text-sm font-medium">{node.name}</span>
                </>
              ) : (
                <>
                  <div className="w-4" />
                  <FileText size={16} className="text-gray-500" />
                  <button
                    onClick={() => openFile(node)}
                    className={`text-sm ${
                      editorState.currentFile === node.path
                        ? 'font-bold text-blue-600'
                        : 'hover:text-blue-600'
                    }`}
                  >
                    {node.name}
                  </button>
                </>
              )}
            </div>
            {node.type === 'folder' && expandedFolders.has(node.path) && node.children && (
              renderFileTree(node.children, level + 1)
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold">AfriCyberCore Dev Environment</h1>
          <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded">
            Live
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={saveFile}
            disabled={!editorState.isDirty}
            className="gap-2"
          >
            <Save size={16} />
            Save
          </Button>
          <Button size="sm" variant="outline" onClick={reloadPreview} className="gap-2">
            <RotateCcw size={16} />
            Reload
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - File Browser */}
        <div className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-sm">Files</h2>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                <Plus size={14} />
              </Button>
            </div>
            <div className="space-y-1">{renderFileTree(fileTree)}</div>
          </div>
        </div>

        {/* Middle Panel - Code Editor */}
        <div className="flex-1 flex flex-col bg-slate-100 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700">
          {editorState.currentFile ? (
            <>
              <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-2 flex items-center justify-between">
                <span className="text-sm font-medium">{editorState.currentFile}</span>
                {editorState.isDirty && (
                  <span className="text-xs text-orange-500 font-semibold">Unsaved</span>
                )}
              </div>
              <textarea
                ref={editorRef}
                value={editorState.content}
                onChange={handleContentChange}
                className="flex-1 p-4 font-mono text-sm bg-slate-900 text-slate-100 resize-none focus:outline-none"
                spellCheck="false"
              />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-500">
              <p>Select a file to edit</p>
            </div>
          )}
        </div>

        {/* Right Panel - Live Preview */}
        <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800">
          <div className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-2">
            <p className="text-sm font-medium">Live Preview</p>
            <p className="text-xs text-slate-500 mt-1">{previewUrl}</p>
          </div>
          <iframe
            ref={iframeRef}
            src={previewUrl}
            className="flex-1 border-0"
            title="Live Preview"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
          />
        </div>
      </div>

      {/* Console/Logs Footer */}
      <div className="h-24 bg-slate-900 text-slate-100 border-t border-slate-700 p-3 overflow-y-auto font-mono text-xs">
        <div className="text-green-400">[Dev Server] Connected and ready</div>
        <div className="text-slate-400">[HMR] Hot Module Replacement enabled</div>
        <div className="text-slate-400">[Build] Ready for development</div>
      </div>
    </div>
  );
};

export default DevEnvironment;
