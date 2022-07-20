export interface TemplateStep {
  id: number;
  templateId: number;
  name: string;
  description: string;
  position: number;
}

export interface OrderStep extends TemplateStep {
  updateDate: Date | null;
}

export interface Template {
  id: number;
  name: string;
  description: string;
  templateSteps: TemplateStep[];
}

export const defaultTemplate: () => Template = () => ({
  id: 0,
  description: '',
  name: '',
  templateSteps: [],
});

export const defaultStep: () => TemplateStep = () => ({
  id: 0,
  position: -1,
  description: '',
  name: '',
  templateId: -1,
});
