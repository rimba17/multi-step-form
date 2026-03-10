"use client";
import StepNumber from "@/components/StepNumber";
import StepForm from "@/components/StepForm";
import StepNavigation from "@/components/StepNavigation";
import * as Yup from "yup";
import { Formik, Form } from "formik";
export const validationSchema = Yup.object({
  current_step: Yup.number(),
  name: Yup.string().when("current_step", {
    is: 1,
    then: (schema) => schema.required("This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  email: Yup.string().when("current_step", {
    is: 1,
    then: (schema) =>
      schema.required("This field is required").email("Invalid email format"),
    otherwise: (schema) => schema.notRequired(),
  }),
  phone_number: Yup.string().when("current_step", {
    is: 1,
    then: (schema) =>
      schema.required("This field is required").min(12, "Minimum 12 digits"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export default function Home() {
  const initialValues = {
    current_step: 2,
    stepNumber: [1, 2, 3, 4],
    is_completed_step: false,
    name: "",
    email: "",
    phone_number: "",
    planId: 1,
    billing: "monthly",
    add_ons_id: [],
  };

  const handleSubmitForm = async (values, { setFieldValue }) => {
    if (values.current_step < values.stepNumber.length) {
      setFieldValue("current_step", values.current_step + 1);
    } else {
      setFieldValue("is_completed_step", true);

      //clearing data submit for backend
      const data = {
        name: values.name,
        email: values.email,
        phone: values.phone_number,
        planId: Number(values.planId),
        billing: values.billing,
        addOns: values.add_ons_id.map(Number),
      };
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmitForm}
    >
      {({ values }) => (
        <Form>
          <div className="min-h-[100dvh] flex flex-col md:flex-row md:justify-center md:items-center md:p-6">
            <div className="md:bg-white md:p-4 md:w-5xl md:rounded-xl md:grid md:grid-cols-12 md:gap-4">
              <div
                className={`relative bg-[url(/assets/images/bg-sidebar-mobile.svg)] bg-no-repeat bg-cover
                h-44  md:bg-[url(/assets/images/bg-sidebar-desktop.svg)]
              md:h-140 lg:h-150 md:rounded-lg md:col-span-4 lg:col-span-3`}
              >
                <div className="absolute top-1/5 left-1/2 -translate-x-1/2 md:translate-0 md:top-6 md:left-1/6">
                  <StepNumber />
                </div>
              </div>
              <div className="relative -mt-20 px-4 flex-1 md:mt-0 md:col-span-8 lg:col-span-9">
                <div className="flex flex-col justify-between h-full md:mt-4">
                  <StepForm />
                  {!values.is_completed_step && (
                    <div className="hidden md:block">
                      <StepNavigation />
                    </div>
                  )}
                </div>
              </div>
              <div className="md:hidden absolute w-full bottom-0">
                {!values.is_completed_step && <StepNavigation />}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
