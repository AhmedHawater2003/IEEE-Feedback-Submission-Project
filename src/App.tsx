import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./components/ui/textarea";
import { FeedbackDialog } from "./FullFeedbackDialog";
import { Feedback, TableData, formSchema } from "./lib/types";
import { DataTableDemo } from "./Table";

export default function App() {
  const [data, setData] = useState<TableData[]>([]);
  const [id, setId] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<TableData | null>(
    null
  );

  const handleViewFeedback = (feedback: TableData) => {
    setSelectedFeedback(feedback);
    setIsDialogOpen(true);
  };

  function handleDelete(id: number) {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  function handleAdd(feedback: Feedback) {
    setData((prevData) => [...prevData, { ...feedback, id: id }]);
    setId((prevId) => prevId + 1);
  }
  return (
    <>
      <div className="min-h-screen mx-auto flex flex-col md:flex-row items-center gap-4 p-4">
        <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Submit Your Feedback</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm addNewEntry={handleAdd} />
          </CardContent>
        </Card>
        <DataTableDemo
          data={data}
          viewFeedback={handleViewFeedback}
          deleteFeedback={handleDelete}
        />
        {selectedFeedback && (
          <FeedbackDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            feedback={selectedFeedback}
          />
        )}
      </div>
    </>
  );
}

function ProfileForm({
  addNewEntry,
}: {
  addNewEntry: (entry: Feedback) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: Feedback) {
    addNewEntry(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Leave your feedback here!"
                  rows={12}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
