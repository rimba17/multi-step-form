import { useFormikContext } from "formik";
import { stepNumberText } from "@/data/stepNumberText";
const StepNumber = () => {
  const { values } = useFormikContext();
  const stepNumber = values.stepNumber;
  const stepper = stepNumberText.filter((step) => stepNumber.includes(step.id));

  return (
    <div className="flex gap-2 md:flex-col md:gap-8">
      {stepper.map((step) => (
        <div key={step.id} className="md:flex md:items-center md:gap-4">
          <div
            className={`h-10 w-10 md:w-8 md:h-8 rounded-full border-2 border-neutral-purple500 flex items-center justify-center ${values.current_step === step.id && "bg-neutral-purple500 border-none"}`}
          >
            <p
              className={`font-semibold md:text-sm ${values.current_step === step.id ? "text-primary-blue950" : "text-white"}`}
            >
              {step.id}
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-neutral-grey500 lg:text-base capitalize">
              {step.name}
            </p>
            <p className="text-neutral-white font-medium text-sm uppercase">
              {step.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepNumber;
