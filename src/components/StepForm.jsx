import { useFormikContext } from "formik";
import Step1 from "./form/Step1";
import Step2 from "./form/Step2";
import Step3 from "./form/Step3";
import Step4 from "./form/Step4";
import ThankYouOrder from "./ThankYouOrder";
const StepForm = () => {
  const { values } = useFormikContext();
  const renderStep = () => {
    switch (values.current_step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  };
  return (
    <div className="bg-white rounded-md shadow p-4 md:shadow-none">
      {values.is_completed_step ? <ThankYouOrder /> : renderStep()}
    </div>
  );
};

export default StepForm;
