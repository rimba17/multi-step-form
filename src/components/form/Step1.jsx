import { Field, ErrorMessage } from "formik";

const Step1 = () => {
  const inputStye =
    "border-2 p-2 w-full rounded-md border-neutral-grey500 outline-0 cursor-pointer focus:border-2 focus:border-primary-blue950";
  return (
    <div className="space-y-4">
      <h1 className="font-semibold text-primary-blue950 text-xl md:text-3xl">
        Personal Info
      </h1>
      <p className="text-base text-neutral-grey500">
        Please provide your name,email address, and phone number
      </p>
      <div>
        <div className="flex justify-between">
          <label className="text-sm block mb-1">Name</label>
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <Field
          name="name"
          placeholder="e.g.Stephen King"
          className={inputStye}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <label className="text-sm block mb-1">Email Address</label>
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <Field
          name="email"
          placeholder="e.g.StephenKing@lorem.com"
          className={inputStye}
          type="email"
        />
      </div>
      <div>
        <div className="flex justify-between">
          <label className="text-sm block mb-1">Phone Number</label>
          <ErrorMessage
            name="phone_number"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <Field
          name="phone_number"
          placeholder="e.g. +1 234 567 890"
          className={inputStye}
        />
      </div>
    </div>
  );
};

export default Step1;
