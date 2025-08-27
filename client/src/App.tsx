import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { Route, Switch } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SinglePage from "@/pages/SinglePage";
import MensHaircutSanAntonio from "@/pages/MensHaircutSanAntonio";
import FadeHaircutSanAntonio from "@/pages/FadeHaircutSanAntonio";
import BeardTrimSanAntonio from "@/pages/BeardTrimSanAntonio";
import KidsHaircutSanAntonio from "@/pages/KidsHaircutSanAntonio";

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Switch>
              <Route path="/" component={SinglePage} />
              <Route path="/mens-haircut-san-antonio" component={MensHaircutSanAntonio} />
              <Route path="/fade-haircut-san-antonio" component={FadeHaircutSanAntonio} />
              <Route path="/beard-trim-san-antonio" component={BeardTrimSanAntonio} />
              <Route path="/kids-haircut-san-antonio" component={KidsHaircutSanAntonio} />
              <Route component={SinglePage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
