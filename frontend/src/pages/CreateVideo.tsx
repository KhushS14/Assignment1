import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Upload,
  Video,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Check,
  Wand2,
  Mic,
  ZoomIn,
  Captions,
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const steps = [
  { id: 'upload', label: 'Upload', icon: Upload },
  { id: 'enhance', label: 'AI Enhance', icon: Sparkles },
  { id: 'customize', label: 'Customize', icon: Wand2 },
  { id: 'export', label: 'Export', icon: Check },
];

const aiFeatures = [
  { id: 'script', label: 'Script Polish', description: 'Clean up filler words and improve clarity', icon: Wand2, enabled: true },
  { id: 'voiceover', label: 'AI Voiceover', description: 'Replace audio with professional AI voice', icon: Mic, enabled: false },
  { id: 'zoom', label: 'Smart Auto-Zoom', description: 'Add intelligent zoom effects to key actions', icon: ZoomIn, enabled: true },
  { id: 'captions', label: 'Auto Captions', description: 'Generate accurate captions automatically', icon: Captions, enabled: true },
  { id: 'translate', label: 'Translation', description: 'Translate to other languages', icon: Globe, enabled: false },
];

export default function CreateVideo() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [features, setFeatures] = useState(aiFeatures);
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
  });
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file && file.type.startsWith("video/")) {
    setUploadedFile(file);
    setProjectDetails(prev => ({
      ...prev,
      title: file.name.replace(/\.[^/.]+$/, ''),
    }));
  }
};


 const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  

  const file = e.target.files?.[0];
  if (file && file.type.startsWith("image/")) {
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  }
};



     

  


  const toggleFeature = (id: string) => {
    setFeatures(prev => prev.map(f =>
      f.id === id ? { ...f, enabled: !f.enabled } : f
    ));
  };

  const processVideo = async () => {
    setIsProcessing(true);
    setProcessingProgress(0);

    // Simulate AI processing
    for (let i = 0; i <= 100; i += 5) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setProcessingProgress(i);
    }

    setIsProcessing(false);
    setCurrentStep(2);
    toast({
      title: 'AI Enhancement Complete!',
      description: 'Your video has been enhanced and is ready for customization.',
    });
  };

  const exportVideo = () => {
    toast({
      title: 'Export Started',
      description: 'Your video is being exported. You\'ll be notified when it\'s ready.',
    });
    navigate('/dashboard');
  };
const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();

  const file = e.dataTransfer.files?.[0];
  if (file && file.type.startsWith("video/")) {
    setUploadedFile(file);
    setProjectDetails(prev => ({
      ...prev,
      title: file.name.replace(/\.[^/.]+$/, ''),
    }));
  }
};

  return (
   <div className="w-full max-w-none space-y-8 animate-fade-in">


      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Create New Video</h1>
          <p className="text-muted-foreground">Transform your recording with AI magic</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="relative">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
        <div
          className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={cn(
                "flex flex-col items-center gap-2",
                index <= currentStep ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 bg-background transition-all",
                index < currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : index === currentStep
                    ? "border-primary"
                    : "border-border"
              )}>
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              <span className="text-sm font-medium">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className="max-w-5xl">
  <CardContent className="p-8">

          {/* Step 1: Upload */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-2">Upload your recording</h2>
                <p className="text-muted-foreground">
                  Drag and drop or click to upload your video file
                </p>
              </div>

              <div
  className={cn(
    "border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer",
    uploadedFile ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
  )}
  onClick={() => document.getElementById('file-upload')?.click()}
  onDragOver={(e) => e.preventDefault()}
  onDrop={handleDrop}
>

                <input
                  id="file-upload"
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />

                {uploadedFile ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                      <Video className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change file
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-muted flex items-center justify-center">
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Drop your video here</p>
                      <p className="text-sm text-muted-foreground">
                        or click to browse (MP4, MOV, WebM)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {uploadedFile && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      value={projectDetails.title}
                      onChange={(e) => setProjectDetails(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter a title for your video"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description (optional)</Label>
                    <Textarea
                      id="description"
                      value={projectDetails.description}
                      onChange={(e) => setProjectDetails(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your video content"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <Button
                  variant="hero"
                  disabled={!uploadedFile}
                  onClick={() => setCurrentStep(1)}
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: AI Enhance */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-2">Choose AI Enhancements</h2>
                <p className="text-muted-foreground">
                  Select the features to apply to your video
                </p>
              </div>

              {isProcessing ? (
                <div className="py-12 space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-hero flex items-center justify-center animate-pulse">
                    <Sparkles className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium mb-2">AI is enhancing your video...</p>
                    <p className="text-sm text-muted-foreground mb-4">This may take a few moments</p>
                    <Progress value={processingProgress} className="max-w-md mx-auto" />
                    <p className="text-sm text-muted-foreground mt-2">{processingProgress}% complete</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <div
                        key={feature.id}
                        className={cn(
                          "p-4 rounded-xl border cursor-pointer transition-all",
                          feature.enabled
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30"
                        )}
                        onClick={() => toggleFeature(feature.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                            feature.enabled ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          )}>
                            <feature.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{feature.label}</span>
                              <div className={cn(
                                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                feature.enabled
                                  ? "border-primary bg-primary"
                                  : "border-border"
                              )}>
                                {feature.enabled && <Check className="w-3 h-3 text-primary-foreground" />}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={() => setCurrentStep(0)}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button variant="hero" onClick={processVideo}>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Enhance with AI
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 3: Customize */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-2">Customize your video</h2>
                <p className="text-muted-foreground">
                  Fine-tune the AI enhancements and add your brand elements
                </p>
              </div>

              {/* Video Preview */}
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <Video className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost">
                      <Video className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 h-1 bg-muted rounded-full">
                      <div className="w-1/3 h-full bg-primary rounded-full" />
                    </div>
                    <span className="text-xs text-muted-foreground">1:24 / 3:45</span>
                  </div>
                </div>
              </div>

              {/* Customization Options */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Script Editor</CardTitle>
                    <CardDescription className="text-sm">Edit the AI-generated script</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Your polished script will appear here..."
                      rows={4}
                      defaultValue="Welcome to our product demo. Today, I'll show you how to get started with our platform in just a few simple steps..."
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Voiceover Settings</CardTitle>
                    <CardDescription className="text-sm">Choose voice and language</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mic className="w-4 h-4 mr-2" />
                        Sarah (Female)
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mic className="w-4 h-4 mr-2" />
                        James (Male)
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Globe className="w-4 h-4 mr-2" />
                      English (US)
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button variant="hero" onClick={() => setCurrentStep(3)}>
                  Continue to Export
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Export */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Check className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Your video is ready!</h2>
                <p className="text-muted-foreground">
                  Choose how you'd like to export and share
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
  <img
    src="/thumbnails/img1.jpg"
    alt="Video thumbnail"
    className="w-full h-full object-cover"
  />

  {/* Duration badge (optional) */}
  <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/70 text-white">
    3:24
  </span>
</div>


                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1">Get Share Link</h3>
                    <p className="text-sm text-muted-foreground">Embed or share</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Captions className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1">Export with Captions</h3>
                    <p className="text-sm text-muted-foreground">SRT • VTT</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button variant="hero" onClick={exportVideo}>
                  <Check className="w-4 h-4 mr-2" />
                  Export Video
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
