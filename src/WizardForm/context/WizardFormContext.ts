import { createContext } from "react";

type WizardFormContextType = {
  triggerNextForm: () => void;
};

export const WizardFormContext = createContext<WizardFormContextType>({
  triggerNextForm: () => {},
});
