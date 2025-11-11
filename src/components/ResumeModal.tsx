import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const { t } = useLanguage();

  // Placeholder resume data - will be updated when user provides PDFs
  const resumes = [
    {
      name: "Resume (English)",
      file: "/resume-en.pdf",
    },
    {
      name: "CV (Français)",
      file: "/resume-fr.pdf",
    },
  ];

  const handleResumeClick = (file: string) => {
    window.open(file, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md glass-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
            <FileText className="h-6 w-6" />
            {t('modal.resume.title')}
          </DialogTitle>
          <DialogDescription>
            {t('modal.resume.description')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {resumes.map((resume, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-between border-primary/30 hover:bg-primary/10 hover:border-primary/50 group h-auto py-4"
              onClick={() => handleResumeClick(resume.file)}
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-base">{resume.name}</span>
              </div>
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-4">
          Click to open the resume in a new tab
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
