import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowDown, ArrowLeft, ArrowUpLeft, ArrowDownLeft, Ban, Download, Mail, X, ZoomIn, ZoomOut } from "lucide-react";
import affidavitImg from "@/assets/Affidavit.png";
import { toast } from "@/hooks/use-toast";

type Field = {
  label: string;
  placeholder: string;
  prefill: string;
  multiline?: boolean;
};

const fields: Field[] = [
  { label: "Affiant’s Name", placeholder: "Enter affiant's name", prefill: "John Smith" },
  { label: "Date", placeholder: "Enter date", prefill: "March 2021" },
  { label: "Describe in paragraph form the circumstances under which you have known the Applicant.", placeholder: "Paragraph...", prefill: "I met John Smith while volunteering at a Seattle legal aid clinic, where we worked together on pro bono cases.", multiline: true },
  { label: "Provide in paragraph form examples of Applicant’s character and general reputation, etc.", placeholder: "Paragraph...", prefill: "John is honest, ethical, and highly regarded in the legal community. He has shown dedication by assisting low-income clients with housing issues, always acting with integrity.", multiline: true },
  { label: "Provide in paragraph form other information bearing on the Applicant’s character and fitness to practice law.", placeholder: "Paragraph...", prefill: "John’s commitment to continuing education and over 100 hours of annual volunteer work demonstrate his fitness to practice law.", multiline: true },
  { label: "State", placeholder: "Enter state", prefill: "Washington" },
  { label: "County", placeholder: "Enter county", prefill: "King" },
  { label: "Notary Public", placeholder: "Enter notary public", prefill: "Robert Johnson" },
];

export const DraftGenerator = () => {
  const [active, setActive] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0); // 0 = choose, 1..8 fields, 9 = submitted/preview
  const [values, setValues] = useState<string[]>(Array(fields.length).fill(""));
  const [downloaded, setDownloaded] = useState<boolean>(false);
  const [mailed, setMailed] = useState<boolean>(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);

  const handleAffidavitClick = () => {
    setActive(true);
    setStep(1);
  };

  const handleNext = () => {
    if (step >= 1 && step <= fields.length) {
      const idx = step - 1;
      const newValues = [...values];
      newValues[idx] = fields[idx].prefill;
      setValues(newValues);
      const nextStep = step + 1;
      setStep(nextStep > fields.length ? fields.length : nextStep);
      if (nextStep === fields.length + 1) {
        // move to submit state
        setStep(fields.length + 1);
      }
    } else if (step === fields.length + 1) {
      setStep(fields.length + 2); // show preview
    }
  };

  const handleSubmit = () => {
    setStep(fields.length + 2); // move to preview phase
  };

  const handleNextFromPreview = () => {
    setStep(fields.length + 3); // move to actions phase
  };

  const handleAskAgain = () => {
    setActive(false);
    setStep(0);
    setValues(Array(fields.length).fill(""));
    setDownloaded(false);
    setMailed(false);
    setIsPreviewOpen(false);
    setZoom(1);
  };

  const currentIndex = step >= 1 && step <= fields.length ? step - 1 : -1;
  const phase = step === 0 ? 1 : step >= 1 && step <= fields.length + 1 ? 2 : step === fields.length + 2 ? 3 : 4;

  return (
    <section id="draft-generator" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 section-reveal">
          <h3 className="text-3xl font-bold font-display mb-4">Draft Generator <span className="italic">(Demo)</span></h3>
          <p className="text-muted-foreground">Automate the creation of legal documents using predefined templates and dynamic questioning.</p>
          <p className=" text-red-600 mt-3 text-center"> For Demonstratrion Purpose just click <strong>Next</strong>, don't fill any input box.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-6 shadow-2xl border-0">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              {phase === 1 && (
                <div className="p-4 rounded-xl border border-accent h-[220px] mx-auto text-center">
                  <h4 className="font-semibold mb-3">1) Select Document</h4>
                  <div className="flex flex-col items-center gap-2">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent-light relative cursor-not-allowed group h-10 min-w-[140px] px-4 rounded-md">RTI
                      <Ban className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent-light relative cursor-not-allowed group h-10 min-w-[140px] px-4 rounded-md">BAIL
                      <Ban className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                    <Button onClick={handleAffidavitClick} className="bg-accent text-accent-foreground hover:bg-accent-light h-10 min-w-[140px] px-4 rounded-md">AFFIDAVIT</Button>
                  </div>
                  <p className="text-xs text-red-600 mt-3 text-center"> This is a demo. Responses are simulated for demonstration purposes.</p>
                </div>
              )}

              {phase === 2 && (
                <div className="p-4 rounded-xl border border-accent h-[300px] mx-auto">
                  <h4 className="font-semibold mb-3 text-center">2) Fill Form</h4>
                  <div className="flex flex-col h-[250px]">
                    <div className="flex-1 overflow-auto space-y-2 pr-2">
                      {(step <= fields.length ? fields.slice(0, currentIndex + 1) : fields).map((f, i) => {
                        const isLast = step <= fields.length ? i === currentIndex : false;
                        return (
                          <div key={i} className={`p-2 rounded-lg border ${isLast ? 'border-accent' : 'border-muted'} ${isLast ? 'section-reveal animate animate-[subtitle-reveal_0.6s_ease-out_forwards]' : ''}`}>
                            <label className="text-xs font-medium block mb-1">{f.label}</label>
                            {f.multiline ? (
                              <textarea className="w-full rounded-md bg-background p-2 text-sm" placeholder={f.placeholder} value={values[i]} readOnly rows={3} />
                            ) : (
                              <Input placeholder={f.placeholder} value={values[i]} readOnly className="h-9" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="sticky bottom-0 pt-2 flex items-center justify-between bg-background/60 backdrop-blur-sm rounded-md px-2">
                      <p className="text-xs text-red-600"> This is a demo. Responses are simulated for demonstration purposes.</p>
                      {step <= fields.length ? (
                        <Button onClick={handleNext} className="bg-accent text-accent-foreground hover:bg-accent-light h-10 min-w-[120px] px-4 rounded-md">Next</Button>
                      ) : (
                        <Button onClick={handleSubmit} className="bg-accent text-accent-foreground hover:bg-accent-light h-10 min-w-[120px] px-4 rounded-md">Submit</Button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {phase === 3 && (
                <div className="p-4 rounded-xl border border-accent h-[420px] mx-auto text-center">
                  <h4 className="font-semibold mb-3">3) Document Preview</h4>
                  <button type="button" onClick={() => { setIsPreviewOpen(true); setZoom(1);} } className="mx-auto w-[607px] max-w-full h-[340px] focus:outline-none cursor-zoom-in" aria-label="Open preview">
                    <img src={affidavitImg} alt="Affidavit Preview" className="w-full h-full object-contain rounded-lg border" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-1">Click the image to view it clearly in a popup.</p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-red-600"> This is a demo. Responses are simulated for demonstration purposes.</p>
                    <Button onClick={handleNextFromPreview} className="bg-accent text-accent-foreground hover:bg-accent-light h-10 min-w-[120px] px-4 rounded-md">Next</Button>
                  </div>
                </div>
              )}

              {phase === 4 && (
                <div className="p-4 rounded-xl border border-accent h-[220px] mx-auto text-center">
                  <h4 className="font-semibold mb-3">4) Mail or Download</h4>
                  <div className="flex flex-col items-center gap-3">
                    <Button className={`bg-accent text-accent-foreground hover:bg-accent-light h-10 min-w-[140px] px-4 rounded-md ${downloaded ? 'bg-green-600 hover:bg-green-600 text-white' : ''}`} onClick={() => { setDownloaded(true); toast({ title: 'Download successful', description: <span className='text-green-600'>Your file has been downloaded.</span> }); }}>
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
                    <Button className={`bg-accent text-accent-foreground hover:bg-accent-light h-10 min-w-[140px] px-4 rounded-md ${mailed ? 'bg-green-600 hover:bg-green-600 text-white' : ''}`} onClick={() => { setMailed(true); toast({ title: 'Email sent', description: <span className='text-green-600'>The document has been emailed successfully.</span> }); }}>
                      <Mail className="w-4 h-4 mr-2" /> Mail
                    </Button>
                  </div>
                  <p className="text-xs text-red-600 mt-3 text-center"> This is a demo. Responses are simulated for demonstration purposes.</p>
                </div>
              )}
            </div>
          </div>
          </Card>
        </div>

        {/* Image Modal Preview */}
        {isPreviewOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            onClick={(e) => { if (e.target === e.currentTarget) setIsPreviewOpen(false); }}
            tabIndex={-1}
            onKeyDown={(e) => { if (e.key === 'Escape') setIsPreviewOpen(false); }}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden">
              <img
                src={affidavitImg}
                alt="Affidavit Full Preview"
                className="rounded-lg shadow-2xl select-none max-w-[90vw] max-h-[90vh] w-auto h-auto"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              />
              {/* Controls */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <Button
                  variant="secondary"
                  className="h-9 w-9 rounded-full bg-white/80 hover:bg-white"
                  onClick={() => setZoom((z) => Math.min(3, parseFloat((z + 0.2).toFixed(2))))}
                  aria-label="Zoom in"
                  title="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="h-9 w-9 rounded-full bg-white/80 hover:bg-white"
                  onClick={() => setZoom((z) => Math.max(0.5, parseFloat((z - 0.2).toFixed(2))))}
                  aria-label="Zoom out"
                  title="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="h-9 w-9 rounded-full bg-white/90 hover:bg-white"
                  onClick={() => setIsPreviewOpen(false)}
                  aria-label="Close"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


