import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md glass-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
            <Mail className="h-6 w-6" />
            Let's Connect
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="modal-name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input 
              id="modal-name"
              placeholder="Your name" 
              className="bg-background/50 border-primary/20 focus:border-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="modal-email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input 
              id="modal-email"
              type="email"
              placeholder="your.email@example.com" 
              className="bg-background/50 border-primary/20 focus:border-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="modal-message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea 
              id="modal-message"
              placeholder="Tell me about your project..." 
              rows={5}
              className="bg-background/50 border-primary/20 focus:border-primary resize-none"
              required
            />
          </div>

          <Button type="submit" className="w-full glow-primary group">
            Send Message
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
