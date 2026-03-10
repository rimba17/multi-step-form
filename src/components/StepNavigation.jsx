import { useFormikContext } from "formik";
const StepNavigation = () => {
  const { values, setFieldValue } = useFormikContext();
  const prevStep = () => {
    setFieldValue("current_step", values.current_step - 1);
  };
  const lastStep = values.stepNumber[values.stepNumber.length - 1];

  return (
    <div
      className={`shadow py-4 flex px-4 bg-white md:shadow-none ${values.current_step > 1 ? "justify-between" : "justify-end"}`}
    >
      {values.current_step > 1 && (
        <button
          className="text-neutral-grey500 cursor-pointer"
          type="button"
          onClick={prevStep}
        >
          Go Back
        </button>
      )}
      <button
        type="submit"
        className={`text-white rounded-md px-3 py-2 cursor-pointer ${values.current_step === lastStep ? "bg-primary-purple600" : "bg-primary-blue950"}`}
      >
        {values.current_step === lastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default StepNavigation;
