import { addOns } from "@/data/addOns";
import { useFormikContext, Field } from "formik";
const Step3 = () => {
  const { values } = useFormikContext();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-primary-blue950 text-xl md:text-3xl">
        Pick add-ons
      </h1>
      <p className="text-base text-neutral-grey500">
        Add-ons help enhance your gaming experience.
      </p>
      {addOns.map((item) => {
        const price = item.price[values.billing];
        return (
          <div
            key={item.id}
            className={`border p-4 rounded-md cursor-pointer flex justify-between items-center gap-4
            hover:border-blue-500
            ${values.add_ons_id.includes(String(item.id)) ? "border-blue-500 bg-blue-50" : "border-neutral-grey500"}`}
          >
            <div className="flex items-center gap-4">
              <Field
                type="checkbox"
                name="add_ons_id"
                value={String(item.id)}
                className="w-5 h-5 cursor-pointer"
              />
              <div>
                <p className="text-base text-primary-blue950 font-bold">
                  {item.name}
                </p>
                <p className="text-sm text-neutral-grey500">{item.text}</p>
              </div>
            </div>

            <p className="text-xs text-primary-purple600 font-semibold md:text-sm">
              +${price}/{values.billing === "yearly" ? "yr" : "mo"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Step3;
