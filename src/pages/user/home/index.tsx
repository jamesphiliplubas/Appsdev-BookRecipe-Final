import { useState } from "react";
import { useAuth } from "@/components/context/use-auth";
import { RecipeCollection } from "@/components/features/recipe/recipe-collection";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { user, logout } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout() {
    try {
      setError("");
      await logout();
    } catch {
      setError("Unable to sign out. Please try again.");
    }
  }

  return (
    
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] text-slate-100">
      
    
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
        
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg shadow-inner">
              🍳
            </div>
            <div>
              <span className="text-lg font-bold tracking-wide text-white">RecipeBook</span>
              <p className="text-[10px] text-indigo-400 font-medium">Culinary Hub</p>
            </div>
          </div>

      
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs text-slate-400">Welcome back,</span>
              <span className="text-sm font-semibold text-slate-200">{user?.name || "Chef"}</span>
            </div>

            <Button 
              variant="secondary" 
              onClick={handleLogout}
              className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
            >
              Sign out
            </Button>
          </div>

        </div>
      </header>

      
      <main className="mx-auto max-w-7xl px-6 py-10">
        
      
        <div className="mb-10 rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
              ✨ Your Kitchen Companion
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Your Personal Recipe Hub
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed sm:text-base">
              Explore, organize, and create your favorite meals all in one place.
            </p>
          </div>
        </div>

      
        {error && (
          <div role="alert" className="mb-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm font-medium text-rose-400 backdrop-blur-md">
            ⚠️ {error}
          </div>
        )}

        
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-xl sm:p-8">
          <RecipeCollection />
        </div>

      </main>
    </div>
  );
}