import { Metadata } from "next";

import { BlogHeading } from "@/components/blog-heading";
import { CodeOutputVizualizer } from "@/components/code-output-vizualizer";
import { CodeVisualizer } from "@/components/code-visualizer";
import { getBlog } from "@/lib/blogs";
import { getCodeSnippet } from "@/lib/get-code-snippet";

import { FormExample1 } from "./snippets/form-example-1";
import { FormExample2 } from "./snippets/form-example-2";
import { FormExample3 } from "./snippets/form-example-3";

const blog = getBlog("forms-in-nextjs");

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

export default async function Page() {
  const [
    basicForm,
    formExample2,
    formValidator,
    useIsHydrated,
    formExample3,
    serverAction,
  ] = await Promise.all([
    getCodeSnippet(blog.slug, "form-example-1.tsx"),
    getCodeSnippet(blog.slug, "form-example-2.tsx"),
    getCodeSnippet(blog.slug, "validator.ts"),
    getCodeSnippet(blog.slug, "use-is-hydrated.ts"),
    getCodeSnippet(blog.slug, "form-example-3.tsx"),
    getCodeSnippet(blog.slug, "form-example-3.action.ts"),
  ]);

  return (
    <>
      <BlogHeading blog={blog} />

      <p>
        {
          "Today, I will be walking through how I currently build forms in Nextjs. We'll start with a basic form and progressively add more features to it. Packages like react-hook-form and zod will help validate the form data while form submission will be handled with server actions. We'll also bring in some hooks from react-dom to track various form states which our inputs can react accordingly - providing a better user experience. "
        }
      </p>

      <section>
        <h2>Creating a Basic Form</h2>

        <CodeOutputVizualizer caption="Figure 1: Basic form.">
          <div className="max-w-sm px-2">
            <FormExample1 />
          </div>
        </CodeOutputVizualizer>

        {basicForm && (
          <CodeVisualizer
            files={[{ filename: "form.tsx", content: basicForm }]}
          />
        )}

        <p>
          {"Note: form components come from"}{" "}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            aria-label="Go to Shadcn's UI library home page"
          >
            {"shadcn"}
          </a>
          {"."}
        </p>

        <p>
          {
            "This basic form contains 2 fields (email and username) with some validation attributes set. The built-in form validations are nice and work as a backup if JavaScript is disabled. However, in the normal use case we'll be using react-hook-form and zod to handle the form validation."
          }
        </p>
      </section>

      <section>
        <h2>Adding Client-Side Validation</h2>

        <div>
          <span>Install dependencies:</span>
          <pre>
            <code>pnpm i react-hook-form zod @hookform/resolvers</code>
          </pre>
        </div>

        <CodeOutputVizualizer caption="Figure 2: Form with client-side validation.">
          <div className="max-w-sm px-2">
            <FormExample2 />
          </div>
        </CodeOutputVizualizer>

        {formExample2 && formValidator && useIsHydrated && (
          <CodeVisualizer
            files={[
              { filename: "form.tsx", content: formExample2 },
              { filename: "form.validator.ts", content: formValidator },
              { filename: "use-is-hydrated.ts", content: useIsHydrated },
            ]}
          />
        )}

        <p>
          {"First thing to note is that we are retrieving a value from the"}{" "}
          <code>useIsHydrated()</code>{" "}
          {
            "hook. Inside this hook we are setting a state inside a useEffect and returning it. This state indicates to us that the form component is running on the client and that Javascript is enabled. This lets us disable the browser's default validation by setting the"
          }{" "}
          <code>noValidate</code>{" "}
          {
            "attribute on the form element as we want react-hook-form to handle it instead."
          }
        </p>

        <p>
          {"Next, we bring in and call the"} <code>useForm()</code>{" "}
          {
            "hook from react-hook-form passing in our zod schema defined in form.action.ts to the resolver option. In addition to this, we also set the default values for the form fields. From the hook, we destructure the following:"
          }
        </p>
        <ol>
          <li>
            <code>register</code>{" "}
            {"- Function used to connect the form fields to react-hook-form."}
          </li>
          <li>
            <code>formState</code>{" "}
            {
              "- Object containing the current state of the form. We're interested in the errors property which contains any validation errors. These errors are conditionally displayed to alert the user of any issues and to add relevant aria attributes for accessibility."
            }
          </li>
          <li>
            <code>handleSubmit</code>{" "}
            {
              "- Runs the validation and calls the passed in function (onSubmit) with the form values if they are valid. At the moment, in the onSubmit function we are just logging the form values to the console. Once we introduce server actions, we'll be sending the client-side validated form data to the server."
            }
          </li>
        </ol>
      </section>

      <section>
        <h2>Sending Data to the Server</h2>

        <CodeOutputVizualizer caption="Figure 3: Form with server action">
          <div className="max-w-sm px-2">
            <FormExample3 />
          </div>
        </CodeOutputVizualizer>

        {formExample3 && formValidator && serverAction && useIsHydrated && (
          <CodeVisualizer
            files={[
              { filename: "form.tsx", content: formExample3 },
              { filename: "form.action.ts", content: serverAction },
              { filename: "form.validator.ts", content: formValidator },
              { filename: "use-is-hydrated.ts", content: useIsHydrated },
            ]}
          />
        )}

        <p>
          {
            "We've defined our server action in form.action.ts which takes in 2 arguments:"
          }
        </p>

        <ol>
          <li>
            {
              "The previous returned state from this function if it was called more than once. "
            }
          </li>
          <li>
            {
              "The submitted form data which we extract and re-validate again using the zod schema previously defined. If the data is invalid, we return the validation error messages to be displayed back to the user."
            }
          </li>
        </ol>

        <p>
          {"To use the action we bring in the"} <code>useFormState()</code>{" "}
          {
            "hook from react-dom. This takes in the action and an initial state, and returns the current state and a function used to call the action which we'll set on the form's action attribute."
          }{" "}
        </p>

        <p>
          {"We've moved the"} <code>handleSubmit()</code>{" "}
          {
            "call into the onSubmit function which - if the data is valid - triggers the form submission using a ref that's attached to the form. The reason we do this is so that the"
          }{" "}
          <code>useFormStatus()</code>{" "}
          {
            "hook (discussed below) can work as intended. If you find a better way, please let me know!"
          }
        </p>

        <p>
          {
            "Our form inputs have been extracted into another component which is required by"
          }{" "}
          <code>useFormStatus()</code>{" "}
          {
            "to properly track the form's state. In our case, we're interested in the pending state which gets set to true when the form is submitting. When pending is true, we can disable the inputs and stop the user from making changes or submitting the form multiple times. Please note that the button's type has been changed and is now responsible for triggering our onSubmit function."
          }
        </p>

        <p>
          {
            "One final point is that we are checking and displaying the server-side validation errors if they exist."
          }
        </p>
      </section>
    </>
  );
}
