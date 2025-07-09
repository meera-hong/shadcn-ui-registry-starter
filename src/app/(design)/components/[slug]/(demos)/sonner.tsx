import {
  ActionSonner,
  ErrorSonner,
  Sonner,
  SuccessfulSonner,
  WarningSonner,
} from "@/app/(design)/components/[slug]/(demos)/sonner-toasts";

export const sonner = {
  name: "sonner",
  components: {
    Default: <Sonner />,
    Success: <SuccessfulSonner />,
    Warning: <WarningSonner />,
    Error: <ErrorSonner />,
    Action: <ActionSonner />,
  },
};
