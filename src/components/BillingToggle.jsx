import { useFormikContext } from "formik";

const BillingToggle = () => {
  const { values, setFieldValue } = useFormikContext();
  const isYearly = values.billing === "yearly";

  return (
    <div className="flex items-center justify-center gap-4 bg-neutral-blue50">
      <span className={!isYearly ? "font-bold" : ""}>Monthly</span>

      <button
        type="button"
        className="w-12 h-6 bg-primary-blue950 rounded-full relative"
        onClick={() =>
          setFieldValue("billing", isYearly ? "monthly" : "yearly")
        }
      >
        <div
          className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
            isYearly ? "left-6" : "left-1"
          }`}
        />
      </button>
      <span className={isYearly ? "font-bold" : ""}>Yearly</span>
    </div>
  );
};

export default BillingToggle;
