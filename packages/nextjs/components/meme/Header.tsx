import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";

interface HeaderProps {
  balance?: number;
  onConnect?: () => void;
}

export function Header({ balance = 100, onConnect }: HeaderProps) {
  return (
    <div className="w-full bg-gray-100 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
        <div className="bg-[#FFFBE6] px-4 py-2 rounded flex items-center gap-2">
          <span className="text-orange-500">🎫</span>
          <span className="text-xl font-bold">{balance}</span>
        </div>
      </div>
      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6"
        onClick={onConnect}
      >
        CONNECT
        <Key className="h-4 w-4" />
      </Button>
    </div>
  );
}
