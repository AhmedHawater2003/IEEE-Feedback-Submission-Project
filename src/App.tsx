import FeedbackForm from "@/components/feedback-form";
import { FullFeedbackDialog } from "@/components/full-feedback-dialog";
import Header from "@/components/header";
import { Feedback } from "@/data/schemas";
import { useState } from "react";
import { FeedbackDataTableP } from "./components/feedback-data-table";

export default function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [id, setId] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(
    null
  );

  const handleViewFullFeedback = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
    setIsDialogOpen(true);
  };

  function handleRemoveFeedback(feedback: Feedback) {
    setFeedbacks((prevData) =>
      prevData.filter((item) => item.id !== feedback.id)
    );
  }

  function handleAddFeedback(feedback: Feedback) {
    setFeedbacks((prevData) => [...prevData, { ...feedback, id: id }]);
    setId((prevId) => prevId + 1);
  }
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center gap-8 p-8">
        <FeedbackForm onAddFeedback={handleAddFeedback} />
        <FeedbackDataTableP
          data={feedbacks}
          onRemoveFeedback={handleRemoveFeedback}
          onViewFullFeedback={handleViewFullFeedback}
        />
        {selectedFeedback && (
          <FullFeedbackDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            feedback={selectedFeedback}
          />
        )}
      </div>
    </>
  );
}
