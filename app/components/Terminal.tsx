"use client";
import React, { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "System Initialized...",
    "Type 'help' to see available commands.",
  ]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let response = "";

      switch (cmd) {
        case "help":
          response = "Available commands: about, skills, status, clear";
          break;
        case "about":
          response = "DevOps & Cloud Engineer specializing in Kubernetes, AWS, and CI/CD automation.";
          break;
        case "skills":
          response = "AWS | Kubernetes | Docker | Terraform | GitHub Actions | Ansible | Linux";
          break;
        case "status":
          response = "All Systems Operational. Uptime: 99.99%";
          break;
        case "clear":
          setOutput([]);
          setInput("");
          return;
        default:
          response = `Command not found: ${cmd}. Type 'help' for options.`;
      }

      setOutput((prev) => [...prev, `$ ${input}`, response]);
      setInput("");
    }
  };

  return (
    <div className="bg-black/90 text-green-400 font-mono p-4 rounded-lg border border-green-500/30 shadow-lg w-full max-w-xl">
      <div className="flex items-center space-x-2 mb-3 border-b border-gray-800 pb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-xs text-gray-500 ml-2">sysadmin@control-center:~</span>
      </div>
      <div className="h-48 overflow-y-auto space-y-1 text-sm">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="flex items-center mt-2 border-t border-gray-800 pt-2">
        <span className="mr-2 text-green-500">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent focus:outline-none text-green-400 w-full"
          autoFocus
        />
      </div>
    </div>
  );
}