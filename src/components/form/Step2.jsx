import { Field } from "formik";
import { plans } from "@/data/plans";
import { useFormikContext } from "formik";
import BillingToggle from "../BillingToggle";
const Step2 = () => {
  const { values } = useFormikContext();
  return (
    <div className="flex flex-col justify-center gap-4">
      <h1 className="font-semibold text-primary-blue950 text-xl md:text-3xl">
        Select your plan
      </h1>
      <p className="text-base text-neutral-grey500">
        You have the option of montly or yearly billing.
      </p>
      <div className="space-y-4 md:flex md:space-y-0 md:gap-x-4 md:mb-4 md:mt-4">
        {plans.map((plan) => {
          const price = plan.price[values.billing];
          const Icon = plan.icon;

          return (
            <label
              key={plan.id}
              className={`block border p-4 rounded-md cursor-pointer hover:border-blue-500 md:w-full ${
                Number(values.planId) === plan.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-neutral-grey500"
              }`}
            >
              <Field
                type="radio"
                name="planId"
                value={plan.id}
                className="hidden"
              />
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <Icon className="h-10 w-10" />
                <div className="flex flex-col">
                  <span className="text-lg">{plan.name}</span>
                  <span className="text-base text-neutral-grey500">
                    ${price}/{values.billing === "monthly" ? "mo" : "yr"}
                  </span>
                  {values.billing === "yearly" && (
                    <p className="text-sm">2 months free</p>
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>
      <BillingToggle />
    </div>
  );
};

export default Step2;
