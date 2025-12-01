"use client";

export default function Sidebar() {
  return (
    <div className="w-[250px] h-full bg-[#252526] border-r border-[#3c3c3c] flex flex-col">
      {/* Explorer Header */}
      <div className="p-3 uppercase text-xs tracking-wider text-gray-400">
        Explorer
      </div>

      {/* File List */}
      <div className="px-3 text-sm space-y-1">
        <div className="text-gray-300 hover:text-white cursor-pointer">
          about-me.md
        </div>
        <div className="text-gray-300 hover:text-white cursor-pointer">
          skills.js
        </div>
        <div className="text-gray-300 hover:text-white cursor-pointer">
          contact.json
        </div>

        {/* Projects Folder */}
        <div className="mt-3 text-gray-400 uppercase text-xs">Projects</div>
        <div className="text-gray-300 hover:text-white cursor-pointer ml-3">
          ecommerce-app.md
        </div>
        <div className="text-gray-300 hover:text-white cursor-pointer ml-3">
          chat-app.ts
        </div>
      </div>
    </div>
  );
}
