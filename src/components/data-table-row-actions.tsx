import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Feedback } from "@/data/schemas";

type DataTableRowsActionsProps = {
  rowData: Feedback;
  onRemoveFeedback: (feedback: Feedback) => void;
  onViewFullFeedback: (feedback: Feedback) => void;
};

function DataTableRowsActions({
  rowData,
  onRemoveFeedback,
  onViewFullFeedback,
}: DataTableRowsActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onViewFullFeedback(rowData)}>
          View Full Feedback
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-destructive data-[highlighted]:text-destructive"
          onClick={() => onRemoveFeedback(rowData)}
        >
          Remove Feedback
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DataTableRowsActions;
