import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Feedback } from "@/data/schemas";

interface FeedbackDialogProps {
  isOpen: boolean;
  onClose: () => void;
  feedback: Feedback;
}

export function FullFeedbackDialog({
  isOpen,
  onClose,
  feedback,
}: FeedbackDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full flex flex-col">
        <DialogHeader>
          <DialogTitle>Feedback Details</DialogTitle>
          <DialogDescription>
            Viewing feedback from {feedback.name}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-grow p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">User Information</h3>
              <p>
                <span className="font-medium">Name:</span> {feedback.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {feedback.email}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Feedback Message</h3>
              <p className="whitespace-pre-wrap">{feedback.message}</p>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end mt-6">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
