import React, { useState } from 'react';
import { Upload, Link as LinkIcon, FileText, Youtube, File } from 'lucide-react';

interface ContentUploaderProps {
  onUpload: (isLong: boolean) => void;
}

export function ContentUploader({ onUpload }: ContentUploaderProps) {
  const [link, setLink] = useState('');

  const handleSubmit = () => {
    if (link.trim()) {
      onUpload(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="relative">
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <LinkIcon className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="relative">
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Paste a link to any educational content..."
            className="w-full pl-14 pr-36 py-5 bg-zinc-800/80 border border-zinc-700 rounded-2xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-lg shadow-lg"
          />
          <button
            onClick={handleSubmit}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 btn-primary px-8 py-2.5 text-lg"
          >
            Try Demo
          </button>
        </div>

        <div className="flex justify-center gap-12 mt-6">
          <div className="flex items-center gap-2 text-gray-400">
            <Youtube className="w-5 h-5" />
            <span className="text-sm">YouTube</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FileText className="w-5 h-5" />
            <span className="text-sm">PDF</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <File className="w-5 h-5" />
            <span className="text-sm">Word</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <LinkIcon className="w-5 h-5" />
            <span className="text-sm">Web Link</span>
          </div>
        </div>
      </div>
    </div>
  );
}