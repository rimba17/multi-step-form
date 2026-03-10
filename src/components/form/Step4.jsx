import { useFormikContext } from "formik";
import { addOns } from "@/data/addOns";
import { plans } from "@/data/plans";
const Step4 = () => {
  const { values, setFieldValue } = useFormikContext();
  const { price } = plans.find((item) => item.id === Number(values.planId));

  // destruct name and save to variable planName and fallback = {}
  const { name: planName } = plans.find(
    (plan) => plan.id === Number(values.planId) || {},
  );
  const billing = values.billing;
  const billingType = billing === "monthly" ? "mo" : "yr";

  const selectedAddons = addOns
    .filter((add) => values.add_ons_id.includes(String(add.id)))
    .map((item) => ({ ...item, selectedPrice: item.price[values.billing] }));

  const changeSelectedAddons = () => {
    setFieldValue("current_step", 3);
  };

  const countSelectedAddons = selectedAddons.reduce(
    (acc, currentItem) => acc + currentItem.selectedPrice,
    0,
  );
  const total = price[billing] + countSelectedAddons;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-primary-blue950 text-xl md:text-3xl">
        Finishing up
      </h1>
      <p className="text-base text-neutral-grey500">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-neutral-blue100 px-4 rounded-md py-4">
        <div className="flex items-center justify-between border-b border-neutral-grey500 pb-2">
          <div>
            <p className="capitalize font-bold text-lg">{`${planName} (${billing})`}</p>
            <button
              type="button"
              className="text-neutral-grey500 border-b cursor-pointer hover:text-primary-purple600 focus:border-primary-purple600"
              onClick={changeSelectedAddons}
            >
              Change
            </button>
          </div>
          <p className="font-bold">
            ${price[billing]}/{billingType}
          </p>
        </div>
        {selectedAddons.map((item) => (
          <div key={item.id} className="flex justify-between space-y-1 py-2">
            <p className="text-neutral-grey500">{item.name}</p>
            <p className="font-light">
              +${item.selectedPrice}/{billingType}
            </p>
          </div>
        ))}
      </div>
      <div className="px-4 flex justify-between">
        <h1 className="text-neutral-grey500 text-lg">
          Total (per {billingType === "mo" ? "month" : "year"})
        </h1>
        <p className="text-primary-purple600 font-bold text-lg">
          +${total}/{billingType}
        </p>
      </div>
    </div>
  );
};

export default Step4;
