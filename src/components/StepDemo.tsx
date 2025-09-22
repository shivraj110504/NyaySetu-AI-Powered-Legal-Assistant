import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Paperclip, ArrowDown } from "lucide-react";

export const StepDemo = () => {
  const [step, setStep] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleNext = () => {
    setStep((prev) => {
      const next = Math.min(prev + 1, 3);
      if (prev === 0) {
        setQuery("I found a wallet lying on the street in Pune and kept it with me.");
      }
      return next;
    });
  };

  const handleReset = () => {
    setStep(0);
    setQuery("");
  };

  const handlePickFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setQuery(file.name);
    }
  };

  return (
    <section id="step-demo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 section-reveal">
          <h3 className="text-3xl font-bold font-display mb-4">IPC Section Prediction <span className="italic">(Demo)</span></h3>
          <p className="text-muted-foreground">Automatically predict the most relevant IPC Section(s) based on a user’s incident description provided in multiple formats. Ensures citizens understand which laws apply.</p>
          <p className=" text-red-600 mt-3 text-center"> For Demonstratrion Purpose just click <strong>Next</strong>, don't fill any input box.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 shadow-2xl border-0">
            {/* Input Row */}
            <div className="flex flex-col gap-3">
              <div className="flex items-stretch gap-2">
                <Input
                  placeholder="text or voice or file"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1"
                />
                <Button variant="secondary" onClick={handlePickFile} aria-label="Upload file">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button variant="secondary" aria-label="Capture audio (demo)">
                  <Mic className="w-4 h-4" />
                </Button>
                {step === 0 && (
                  <Button onClick={handleNext} className="bg-accent text-accent-foreground hover:bg-accent-light">
                    Next
                  </Button>
                )}
              </div>
            </div>

            {/* Arrow between Input and Confidence */}
            {step >= 1 && (
              <div className="flex justify-center my-4">
                <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
              </div>
            )}

            {/* Reveals */}
            <div className="mt-8 space-y-4">
              {step >= 1 && (
                <div className="flex items-center justify-between gap-4">
                  <div className="section-reveal animate animate-[subtitle-reveal_0.6s_ease-out_forwards] p-4 rounded-lg border border-accent bg-accent/10 w-full">
                    <p className="text-sm sm:text-base"><span className="font-semibold">Confidence:</span> 60% [ IPC 378 (Theft – likely attempt/possession) ]</p>
                  </div>
                  {step === 1 && (
                    <Button onClick={handleNext} className="shrink-0 bg-accent text-accent-foreground hover:bg-accent-light">Next</Button>
                  )}
                </div>
              )}

              {/* Arrow between Confidence and Explanation */}
              {step >= 2 && (
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
                </div>
              )}

              {step >= 2 && (
                <div className="flex items-center justify-between gap-4">
                  <div className="section-reveal animate animate-[subtitle-reveal_0.6s_ease-out_forwards] p-4 rounded-lg border border-accent bg-accent/10 w-full">
                    <div className="text-sm sm:text-base whitespace-pre-line">
                      <span className="font-semibold">Explanation:</span>{`\n`}
                      {`“Found a wallet lying on the street” → no clear intent to steal, could be accidental possession.`}{`\n`}
                      {`“Kept it with me because I wasn’t sure who it belonged to” → shows uncertainty, not outright theft, but keeping lost property may attract legal scrutiny.`}
                    </div>
                  </div>
                  {step === 2 && (
                    <Button onClick={handleNext} className="shrink-0 bg-accent text-accent-foreground hover:bg-accent-light">Next</Button>
                  )}
                </div>
              )}

              {/* Arrow between Explanation and Suggestion */}
              {step >= 3 && (
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
                </div>
              )}

              {step >= 3 && (
                <div className="section-reveal animate animate-[subtitle-reveal_0.6s_ease-out_forwards] p-4 rounded-lg border border-accent bg-accent/10">
                  <div className="text-sm sm:text-base whitespace-pre-line">
                    <span className="font-semibold">Suggestion:</span>{`\n`}
                    {`“Kept it with me because I wasn’t sure who it belonged to” → shows uncertainty, not outright theft, but keeping lost property may attract legal scrutiny.`}
                  </div>
                </div>
              )}
            </div>

            {/* Ask Again and Disclaimer */}
            {step >= 3 && (
              <div className="mt-6 flex justify-center">
                <Button onClick={handleReset} variant="secondary">Ask Again</Button>
              </div>
            )}
            <p className="text-xs text-red-600 mt-6 text-center">This is a demo. Responses are simulated for demonstration purposes.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};


