Multi Step Form — Next.js Project

This project is a Multi Step Form built with Next.js, Tailwind CSS, Formik, and Yup.
The goal of this project is to provide a clean, reusable, and scalable form wizard with validation and state management using Formik.

🚀 Tech Stack

- Next.js – App Router architecture
- Tailwind CSS – Utility-first styling
- Formik – Form state management
- Yup – Schema-based form validation

📌 Features

- Multi-step form

- Step-by-step validation using Yup

- Centralized form state using Formik

- Responsive UI using Tailwind CSS

- Clean and modular folder structure

- Client-side validation with real-time error messages

📥 Installation

1. Clone the repository:
   git clone https://github.com/rimba17/multi-step-form.git

2. Navigate to the project directory:
   cd multi-step-form

3. Install dependencies:
   npm install

4. Run the development server:
   npm run dev

Then open:
http://localhost:3000

📘 How It Works

1. Formik Manages All Steps

All steps share the same Formik instance, so values persist when navigating between steps.

2. Yup Validation Per Step

Each step has its own validation schema, keeping validation clean and predictable.

3. State-Driven Navigation

Next/Previous buttons update the current step index.
