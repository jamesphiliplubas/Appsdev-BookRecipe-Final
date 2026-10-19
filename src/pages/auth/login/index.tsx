import { AuthFormHeader } from "@/components/features/auth/auth-form-header";
import { Link } from "react-router";
import { LoginForm } from "@/components/features/auth/login-form";

export default function LoginPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] p-4 sm:p-6">
      

      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl">
        <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-2">
          
          
          <div className="relative hidden flex-col justify-between bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-10 text-white md:flex">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent)] pointer-events-none" />

          
            <div className="relative z-10 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-lg shadow-inner">
                🍳
              </div>
              <span className="text-lg font-bold tracking-wide text-white">RecipeBook</span>
            </div>

            
            <div className="relative z-10 my-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 backdrop-blur-sm">
                ✨ Culinary Hub
              </div>
              <h2 className="text-3xl font-extrabold leading-snug tracking-tight text-white">
                Cook, Save & Discover New Recipes.
              </h2>
              <p className="text-sm text-slate-300/80 leading-relaxed">
                Access your personal collection of delicious meals and step-by-step cooking guides anytime.
              </p>
            </div>

            
            <div className="relative z-10 text-xs text-slate-400">
              📖 Your personal digital kitchen companion
            </div>
          </div>

          
          <div className="flex flex-col justify-center bg-white p-8 sm:p-12">
            <div className="mx-auto w-full max-w-sm">
              
              
              <div className="mb-8 text-left">
                <AuthFormHeader 
                  title="Welcome back" 
                  description="Sign in to access your saved recipes." 
                />
              </div>

              
              <div className="[&_label]:text-xs [&_label]:font-semibold [&_label]:text-slate-700 [&_input]:mt-1.5 [&_input]:w-full [&_input]:rounded-xl [&_input]:border [&_input]:border-slate-200 [&_input]:bg-slate-50/50 [&_input]:px-4 [&_input]:py-3 [&_input]:text-sm [&_input]:text-slate-900 [&_input]:transition-all [&_input]:placeholder:text-slate-400 [&_input]:focus:border-indigo-600 [&_input]:focus:bg-white [&_input]:focus:outline-none [&_input]:focus:ring-4 [&_input]:focus:ring-indigo-600/10 [&_button]:mt-3 [&_button]:w-full [&_button]:rounded-xl [&_button]:bg-slate-900 [&_button]:py-3 [&_button]:font-medium [&_button]:text-white [&_button]:hover:bg-slate-800 [&_button]:transition-all">
                <LoginForm />
              </div>

              
              <div className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link 
                  className="font-semibold text-indigo-600 underline-offset-4 hover:text-indigo-700 hover:underline" 
                  to={"/auth/signup"}
                >
                  Create one now
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}