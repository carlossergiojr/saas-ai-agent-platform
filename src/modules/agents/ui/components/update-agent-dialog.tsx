import { AgentForm } from "./agent-form";
import { AgentGetOne } from "../../types";
import { ResponsiveDialog } from "@/components/responsive-dialog";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
};

export const UpdateAgentDialog = ({
  open,
  initialValues,
  onOpenChange,
}: Props) => {
  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Edit Agent"
      description="Edit the agent details"
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};
